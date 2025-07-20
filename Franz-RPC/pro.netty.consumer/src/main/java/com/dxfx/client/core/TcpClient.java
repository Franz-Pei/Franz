package com.dxfx.client.core;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.api.CuratorWatcher;

import com.alibaba.fastjson.JSONObject;
import com.dxfx.client.constant.Constants;
import com.dxfx.client.handler.SimpleClientHandler;
import com.dxfx.client.param.ClientRequest;
import com.dxfx.client.param.Response;
import com.dxfx.client.zk.ZookeeperFactory;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.DelimiterBasedFrameDecoder;
import io.netty.handler.codec.Delimiters;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

public class TcpClient {

    public static String host = "localhost";
    public static int port = 8080;
    static AtomicInteger i = new AtomicInteger(0);
    
    static final Bootstrap b = new Bootstrap();
    static ChannelFuture f = null;  // 这个变量在static块中从未被正确设置！
    
    static {
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        b.group(workerGroup);
        b.channel(NioSocketChannel.class);
        b.option(ChannelOption.SO_KEEPALIVE, true);
        b.handler(new ChannelInitializer<SocketChannel>() {
            @Override
            public void initChannel(SocketChannel ch) throws Exception {
                ch.pipeline().addLast(new DelimiterBasedFrameDecoder(Integer.MAX_VALUE, Delimiters.lineDelimiter()[0]));
                ch.pipeline().addLast(new StringDecoder());
                ch.pipeline().addLast(new SimpleClientHandler());
                ch.pipeline().addLast(new StringEncoder());
            }
        });
        
        try {
            System.out.println("🔄 初始化服务器列表");
            CuratorFramework client = ZookeeperFactory.create();
            CuratorWatcher watcher = new ServerWatcher();
            client.getChildren().usingWatcher(watcher).forPath(Constants.SERVER_PATH);
            List<String> serverPaths = client.getChildren().forPath(Constants.SERVER_PATH);
            
            // 🔧 添加详细调试日志
            System.out.println("🔍 发现服务器节点: " + serverPaths);
            
            for(String serverPath : serverPaths) {
                System.out.println("🔍 处理节点: " + serverPath);
                
                String[] str = serverPath.split("#");
                if(str.length >= 2) {
                    int weight = Integer.valueOf(str[1]);
                    System.out.println("🔍 解析权重: " + weight + ", 服务器: " + str[0]);
                    
                    if(weight > 0) {
                        for(int w = 0; w < weight; w++) {
                            ChannelManager.realServerPath.add(str[0]);
                            String[] hostPort = str[0].split(":");
                            if (hostPort.length == 2) {
                                try {
                                    ChannelFuture channelFuture = TcpClient.b.connect(hostPort[0], Integer.valueOf(hostPort[1]));
                                    ChannelManager.add(channelFuture);
                                    System.out.println("✅ 添加连接: " + hostPort[0] + ":" + hostPort[1] + " (权重: " + (w+1) + "/" + weight + ")");
                                } catch (Exception e) {
                                    System.err.println("❌ 连接失败: " + hostPort[0] + ":" + hostPort[1] + " - " + e.getMessage());
                                }
                            }
                        }
                    }
                } else {
                    System.err.println("⚠️ 节点格式不正确: " + serverPath);
                }
            }

            // 🔧 添加连接状态检查
            System.out.println("🔍 总服务器列表: " + ChannelManager.realServerPath);
            System.out.println("🔍 总连接数: " + ChannelManager.channelFutures.size());

            if(ChannelManager.realServerPath.size() > 0) {
                String[] hostAndPort = ChannelManager.realServerPath.get(0).split(":");  // 🔧 修复：用get(0)而不是toArray()[0]
                host = hostAndPort[0];
                port = Integer.valueOf(hostAndPort[1]);
                System.out.println("🎯 设置默认服务器: " + host + ":" + port);
            } else {
                System.err.println("⚠️ 没有可用的服务器");
            }
        } catch (Exception e) {
            System.err.println("❌ 初始化服务器列表失败: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    public static Response send(ClientRequest request) {
        try {
            System.out.println("📤 TcpClient.send() 被调用，请求: " + request);
            
            // 🔧 修复：不再依赖静态的f变量，而是从ChannelManager获取连接
            if (ChannelManager.channelFutures.size() == 0) {
                System.err.println("❌ 没有可用的连接");
                Response errorResp = new Response();
                errorResp.setResult("没有可用的连接");
                errorResp.setStatus("500");
                return errorResp;
            }
            
            // 🔧 修复：从ChannelManager获取连接
            ChannelFuture currentConnection = ChannelManager.get(i);
            
            if (currentConnection == null || !currentConnection.channel().isActive()) {
                System.err.println("❌ 连接未建立或已断开");
                Response errorResp = new Response();
                errorResp.setResult("连接失败");
                errorResp.setStatus("500");
                return errorResp;
            }
            
            String requestJson = JSONObject.toJSONString(request);
            System.out.println("📤 TcpClient发送JSON: " + requestJson);
            
            currentConnection.channel().writeAndFlush(requestJson);
            currentConnection.channel().writeAndFlush("\r\n");
            
            DefaultFuture df = new DefaultFuture(request);
            return df.get();
            
        } catch (Exception e) {
            System.err.println("❌ 发送ClientRequest异常: " + e.getMessage());
            e.printStackTrace();
            
            Response errorResp = new Response();
            errorResp.setResult("发送失败: " + e.getMessage());
            errorResp.setStatus("500");
            return errorResp;
        }
    }
}