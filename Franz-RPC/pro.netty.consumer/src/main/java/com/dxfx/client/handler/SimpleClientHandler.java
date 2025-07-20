package com.dxfx.client.handler;

import com.alibaba.fastjson.JSONObject;
import com.dxfx.client.core.DefaultFuture;
import com.dxfx.client.param.Response;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;


public class SimpleClientHandler extends ChannelInboundHandlerAdapter {

	@Override
	public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
	    try {
	        System.out.println("客户端收到原始消息: " + msg.toString());
	        
	        if("ping".equals(msg.toString())) {
	            ctx.channel().writeAndFlush("ping\r\n");
	            return;
	        }

	        Response response = JSONObject.parseObject(msg.toString(), Response.class);
	        
	        System.out.println("接收服务器返回数据: " + JSONObject.toJSONString(response));
	        
	        DefaultFuture.recive(response);
	        
	    } catch (Exception e) {
	        System.err.println("客户端处理响应异常: " + e.getMessage());
	        e.printStackTrace();
	    }
	}

	@Override
	public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {

	}




}
