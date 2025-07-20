package com.dxfx.netty.handler;

import com.alibaba.fastjson.JSONObject;
import com.dxfx.netty.handler.param.ServerRequest;
import com.dxfx.netty.medium.Media;
import com.dxfx.netty.util.Response;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.timeout.IdleState;
import io.netty.handler.timeout.IdleStateEvent;

public class ServerHandler extends ChannelInboundHandlerAdapter {

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        try {
            String message = msg.toString();
            System.out.println("ServerHandler收到消息: " + message);
            
            // 🔧 关键修改：先处理ping消息
            if ("ping".equals(message.trim())) {
                System.out.println("收到ping消息，忽略处理");
                return; // 直接返回，不进行JSON解析
            }
            
            // 正常的JSON消息处理
            ServerRequest request = JSONObject.parseObject(message, ServerRequest.class);
            System.out.println("解析的请求: " + request.getCommand());
            
            Media media = Media.newInstance();
            System.out.println("Media.beanMap大小: " + Media.beanMap.size());
            
            Response result = media.process(request);
            System.out.println("Media处理结果: " + result);
            
            if (result != null) {
                ctx.channel().writeAndFlush(JSONObject.toJSONString(result));
                ctx.channel().writeAndFlush("\r\n");
            } else {
                System.out.println("警告：Media返回了null结果");
                // 发送错误响应
                Response errorResp = new Response();
                errorResp.setResult("处理失败");
                errorResp.setStatus("500");
                ctx.channel().writeAndFlush(JSONObject.toJSONString(errorResp));
                ctx.channel().writeAndFlush("\r\n");
            }
            
        } catch (Exception e) {
            System.err.println("ServerHandler处理异常: " + e.getMessage());
            e.printStackTrace();
            
            Response errorResp = new Response();
            errorResp.setResult("处理失败: " + e.getMessage());
            errorResp.setStatus("500");
            ctx.channel().writeAndFlush(JSONObject.toJSONString(errorResp) + "\r\n");
        }
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (evt instanceof IdleStateEvent) {
            IdleStateEvent event = (IdleStateEvent) evt;
            if (event.state().equals(IdleState.READER_IDLE)) {
                System.out.println("读空闲====");
                ctx.channel().close();
            } else if (event.state().equals(IdleState.WRITER_IDLE)) {
                System.out.println("写空闲====");
            } else if (event.state().equals(IdleState.ALL_IDLE)) {
                System.out.println("读写空闲");
                ctx.channel().writeAndFlush("ping\r\n");
            }
        }
    }
}