package com.dxfx.netty.factory;

import org.apache.curator.RetryPolicy;
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.retry.ExponentialBackoffRetry;

public class ZookeeperFactory {

public static CuratorFramework client;

public static CuratorFramework create(){
    if(client == null) {
        RetryPolicy retryPolicy = new ExponentialBackoffRetry(1000, 3);
        client = CuratorFrameworkFactory.newClient("10.197.73.12:2181", retryPolicy);
        client.start();
        
        // 使用旧版本兼容的等待方法
        try {
            // 等待连接建立，最多等待10秒
            client.getZookeeperClient().blockUntilConnectedOrTimedOut();
            System.out.println("ZooKeeper连接建立成功");
        } catch (InterruptedException e) {
            System.err.println("ZooKeeper连接等待被中断");
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println("ZooKeeper连接失败: " + e.getMessage());
            e.printStackTrace();
        }
    }
    return client;
}

public static void main(String[] args) throws Exception {
    CuratorFramework client = create();
    client.create().creatingParentsIfNeeded().forPath("/netty");
}
}