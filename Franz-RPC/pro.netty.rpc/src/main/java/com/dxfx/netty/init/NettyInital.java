package com.dxfx.netty.init;

import java.net.InetAddress;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.curator.framework.CuratorFramework;
import org.apache.zookeeper.CreateMode;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.dxfx.netty.constant.Constants;
import com.dxfx.netty.factory.ZookeeperFactory;
import com.dxfx.netty.handler.ServerHandler;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.DelimiterBasedFrameDecoder;
import io.netty.handler.codec.Delimiters;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;
import io.netty.handler.timeout.IdleStateHandler;

@Component
public class NettyInital implements ApplicationListener<ContextRefreshedEvent> {

    public void start() {
        EventLoopGroup parentGroup = new NioEventLoopGroup();
        EventLoopGroup childGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(parentGroup, childGroup)
                    .option(ChannelOption.SO_BACKLOG, 128)
                    .childOption(ChannelOption.SO_KEEPALIVE, false)
                    .channel(NioServerSocketChannel.class)
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception {
                            ch.pipeline().addLast(new DelimiterBasedFrameDecoder(65535, Delimiters.lineDelimiter()));
                            ch.pipeline().addLast(new StringDecoder());
                            ch.pipeline().addLast(new IdleStateHandler(60, 45, 20, TimeUnit.SECONDS));
                            ch.pipeline().addLast(new ServerHandler());
                            ch.pipeline().addLast(new StringEncoder());
                        }
                    });
            
            int weight = 2;
            ChannelFuture f = bootstrap.bind("localhost", 8080).sync();
            System.out.println("Netty服务器启动成功，端口：8080");

            // 🔧 ZooKeeper注册修复
            try {
                CuratorFramework client = ZookeeperFactory.create();
                
                // 确保父路径存在
                String parentPath = Constants.Server_PATH;
                if (client.checkExists().forPath(parentPath) == null) {
                    client.create().creatingParentsIfNeeded().forPath(parentPath);
                    System.out.println("创建ZooKeeper父路径: " + parentPath);
                }
                
                // 🔧 关键修改：注册localhost而不是获取本机IP
                String serverInfo = "localhost:8080";
                String nodePath = parentPath + "/" + serverInfo + "#" + weight + "#";
                
                String actualPath = client.create()
                                         .withMode(CreateMode.EPHEMERAL_SEQUENTIAL)
                                         .forPath(nodePath);
                
                System.out.println("ZooKeeper节点注册成功: " + actualPath);
                
                List<String> children = client.getChildren().forPath(parentPath);
                System.out.println("当前注册的服务节点: " + children);
                
            } catch (Exception zkException) {
                System.err.println("ZooKeeper注册失败: " + zkException.getMessage());
                zkException.printStackTrace();
            }

            System.out.println("ZooKeeper连接建立成功");

            f.channel().closeFuture().sync();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            parentGroup.shutdownGracefully();
            childGroup.shutdownGracefully();
        }
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        new Thread(() -> {
            System.out.println("Spring容器启动完成，NettyInital正在启动Netty服务器...");
            this.start();
        }).start();
    }
}