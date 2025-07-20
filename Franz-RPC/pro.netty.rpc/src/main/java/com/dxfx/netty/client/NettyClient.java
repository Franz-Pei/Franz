package com.dxfx.netty.client;



import com.dxfx.netty.handler.SimpleClientHandler;

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
import io.netty.util.AttributeKey;

public class NettyClient {
	
	public static void main(String[] args) throws InterruptedException {
		String host = "localhost";
        int port = 8080;
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        
        try {
            Bootstrap b = new Bootstrap(); // (1)
            b.group(workerGroup); // (2)
            b.channel(NioSocketChannel.class); // (3)
            b.option(ChannelOption.SO_KEEPALIVE, true); // (4)
            b.handler(new ChannelInitializer<SocketChannel>() {
                @Override
                public void initChannel(SocketChannel ch) throws Exception {
                	ch.pipeline().addLast(new DelimiterBasedFrameDecoder(Integer.MAX_VALUE, Delimiters.lineDelimiter()[0]));
                    ch.pipeline().addLast(new StringDecoder());
                	ch.pipeline().addLast(new SimpleClientHandler());
                	ch.pipeline().addLast(new StringEncoder());
                }
            });
            
            // Start the client.
            ChannelFuture f = b.connect(host, port).sync(); // (5)
            f.channel().writeAndFlush("hello server");
            f.channel().writeAndFlush("\r\n");
            f.channel().closeFuture().sync();
            Object result = f.channel().attr(AttributeKey.valueOf("sssss")).get();
            System.out.println("获取到服务器返回数据===" + result.toString());
        } finally {
            workerGroup.shutdownGracefully();
        }
	}

}
