package com.dxfx.client.core;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import com.dxfx.client.param.ClientRequest;
import com.dxfx.client.param.Response;



public class DefaultFuture {
	
	public final static ConcurrentHashMap<Long,DefaultFuture>allDefaultFuture = new ConcurrentHashMap<Long,DefaultFuture>();
	
	final Lock lock = new ReentrantLock();
	public Condition condition = lock.newCondition();
	private Response response;
	private long timeout=2*60*10001;
	private long startTime=System.currentTimeMillis();
	
	
	public long getTimeout() {
		return timeout;
	}

	public void setTimeout(long timeout) {
		this.timeout = timeout;
	}

	public long getStartTime() {
		return startTime;
	}

	public void setStartTime(long startTime) {
		this.startTime = startTime;
	}

	public DefaultFuture(ClientRequest request) {
		// TODO Auto-generated constructor stub
		allDefaultFuture.put(request.getId(),this);
	}

	//主线程获取信息
	public Response get() {
	    lock.lock();
	    try {
	        while(!done()) {
	            condition.await();
	        }
	        // 移除这一行：condition.await(); // 重复的await()
	    } catch(Exception e) {
	        e.printStackTrace();
	    } finally {
	        lock.unlock();
	    }
	    return this.response;
	}
	

	//主线程获取信息
	public Response get(long time) {
	    lock.lock();
	    try {
	        while(!done()) {
	            condition.await(time,TimeUnit.SECONDS);
	            if((System.currentTimeMillis() - startTime)>time){
	            	System.out.println("请求超时!");
	            	break;
	            }
	        }
	        // 移除这一行：condition.await(); // 重复的await()
	    } catch(Exception e) {
	        e.printStackTrace();
	    } finally {
	        lock.unlock();
	    }
	    return this.response;
	}
	
	
	
	
	public static void recive(Response response) {
	    if (response == null || response.getId() == null) {
	        System.err.println("响应或响应ID为null");
	        return;
	    }
	    
	    System.out.println("收到响应，ID: " + response.getId());
	    DefaultFuture df = allDefaultFuture.get(response.getId());
	    
	    if(df != null) {
	        Lock lock = df.lock;
	        lock.lock();
	        try {
	            df.setResponse(response);
	            df.condition.signal();
	            // 🔧 关键修改：移除时使用response的ID
	            allDefaultFuture.remove(response.getId());  // 修改这行！
	            System.out.println("成功处理响应，ID: " + response.getId());
	        } catch(Exception e) {
	            e.printStackTrace();
	        } finally {
	            lock.unlock();
	        }
	    } else {
	        System.err.println("找不到对应的DefaultFuture，ID: " + response.getId());
	    }
	}
	
	

	public Response getResponse() {
		return response;
	}

	public void setResponse(Response response) {
		this.response = response;
	}

	private boolean done() {
		// TODO Auto-generated method stub
		if(this.response!=null) {
			return true;
		}
		return false;
	}
	static class FutureThread extends Thread
	{
		@Override
		public void run() 
		{
			Set<Long>ids = allDefaultFuture.keySet();
			for(Long id : ids) 
			{
				DefaultFuture df = allDefaultFuture.get(id);
				if(df== null) 
				{
					allDefaultFuture.remove(df);
				}else 
				{
					//假如超时链接
					if(df.getTimeout() < (System.currentTimeMillis()-df.getStartTime()))
					{
						Response resp = new Response();
						resp.setId(id);
						resp.setCode("3333");
						resp.setMeg("链路请求超时");
						recive(resp);
					}
				}
			}
		}
		
	}
	
	static {
		{
			FutureThread futureThread = new FutureThread();
			futureThread.setDaemon(true);
			futureThread.start();
		}
	}
}
