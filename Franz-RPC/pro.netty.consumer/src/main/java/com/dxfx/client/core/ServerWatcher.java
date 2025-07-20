package com.dxfx.client.core;

import java.util.List;

import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.api.CuratorWatcher;
import org.apache.zookeeper.WatchedEvent;

import com.dxfx.client.constant.Constants;
import com.dxfx.client.zk.ZookeeperFactory;

import io.netty.channel.ChannelFuture;

public class ServerWatcher implements CuratorWatcher {

    @Override
    public void process(WatchedEvent event) throws Exception {
        
        CuratorFramework client = ZookeeperFactory.create();
        String path = event.getPath();
        
        client.getChildren().usingWatcher(this).forPath(path);
        
        List<String> serverPaths = client.getChildren().forPath(path);
        
        ChannelManager.realServerPath.clear();
        
        for(String serverPath : serverPaths) {
            String[] str = serverPath.split("#");
            
            // 🔧 最小修改：只添加数组长度检查
            if (str.length >= 2) {
                int weight = Integer.valueOf(str[1]);  // 权重在第二个位置
                if(weight > 0) {
                    for(int w=0; w<weight; w++) {  // 🔧 修改：w<weight 而不是 w<=weight
                        ChannelManager.realServerPath.add(str[0]);  // str[0]是host:port
                    }
                }
            }
        }
        
        ChannelManager.clear();
        
        for(String realServer : ChannelManager.realServerPath) {
            String[] str = realServer.split(":");  // 🔧 修改：用:分割host:port
            if (str.length == 2) {
                try {
                    ChannelFuture channelFuture = TcpClient.b.connect(str[0], Integer.valueOf(str[1]));
                    ChannelManager.add(channelFuture);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        
        System.out.println("🔄 ServerWatcher更新服务器列表: " + ChannelManager.realServerPath);
    }
}