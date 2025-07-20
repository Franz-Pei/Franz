package com.dxfx.netty.util;

public class ResponseUtil {
	
	public static Response createSuccessResult() {
		return new Response();
	}
	public static Response createFailResult(String code,String msg) {
		Response response = new Response();
		response.setCode(code);
		response.setMeg(msg);
		return response;
	}
	
	public static Response createSuccessResult(Object content) {
		Response response = new Response();
		response.setResult(content);
		return response;
	}
}
