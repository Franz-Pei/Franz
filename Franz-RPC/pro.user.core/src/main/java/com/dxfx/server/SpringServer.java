package com.dxfx.server;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.dxfx")
public class SpringServer {

    public static void main(String[] args) {
        try {
            // 启动Spring容器，NettyInital会自动监听启动事件并启动Netty
            ApplicationContext context = new AnnotationConfigApplicationContext(SpringServer.class);
            System.out.println("Spring容器启动成功！");
            
            // NettyInital的onApplicationEvent方法会自动执行
            // 无需任何手动调用
            
        } catch (Exception e) {
            System.err.println("服务器启动失败: " + e.getMessage());
            e.printStackTrace();
        }
    }
}