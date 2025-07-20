package com.dxfx.client.proxy;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;
import org.springframework.stereotype.Component;

import com.dxfx.client.annotation.RemoteInvoke;
import com.dxfx.client.core.TcpClient;
import com.dxfx.client.param.ClientRequest;
import com.dxfx.client.param.Response;

@Component
public class InvokeProxy implements BeanPostProcessor {

    public InvokeProxy() {
        System.out.println("🚀 InvokeProxy构造函数被调用 - Spring已经扫描到这个类！");
        
        // 🔧 强制初始化TcpClient
        try {
            System.out.println("🔧 强制加载TcpClient类...");
            Class.forName("com.dxfx.client.core.TcpClient");
            
            // 访问TcpClient的静态字段，确保static代码块执行
            System.out.println("🔧 TcpClient.host = " + TcpClient.host);
            System.out.println("🔧 TcpClient.port = " + TcpClient.port);
            
            System.out.println("✅ TcpClient类加载成功");
        } catch (ClassNotFoundException e) {
            System.err.println("❌ TcpClient类加载失败: " + e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println("❌ TcpClient初始化异常: " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("🔍 InvokeProxy检查Bean: " + beanName + ", 类型: " + bean.getClass().getName());
        
        Field[] fields = bean.getClass().getDeclaredFields();
        System.out.println("Bean " + beanName + " 有 " + fields.length + " 个字段");
        
        for (Field field : fields) {
            System.out.println("检查字段: " + field.getName() + ", 类型: " + field.getType() + ", 注解: " + java.util.Arrays.toString(field.getAnnotations()));
            
            if (field.isAnnotationPresent(RemoteInvoke.class)) {
                System.out.println("⭐ InvokeProxy发现@RemoteInvoke字段: " + field.getName() + ", 类型: " + field.getType());
                
                field.setAccessible(true);
                final Map<Method, Class> methodClassMap = new HashMap<Method, Class>();
                putMethodClass(methodClassMap, field);
                
                Enhancer enhancer = new Enhancer();
                enhancer.setInterfaces(new Class[]{field.getType()});
                enhancer.setCallback(new MethodInterceptor() {
                    @Override
                    public Object intercept(Object instance, Method method, Object[] args, MethodProxy proxy) throws Throwable {
                        System.out.println("🎯 InvokeProxy拦截方法调用: " + method.getName());
                        
                        // 构建请求
                        ClientRequest request = new ClientRequest();
                        
                        // 正确设置command
                        String command = methodClassMap.get(method).getName() + "." + method.getName();
                        request.setCommand(command);
                        request.setId(System.currentTimeMillis());
                        
                        // 正确处理参数
                        if (args != null && args.length > 0) {
                            request.setContent(args[0]);
                        }
                        
                        System.out.println("📤 发送请求 - Command: " + command + ", Content: " + request.getContent());
                        
                        // 发送请求
                        Response resp = TcpClient.send(request);
                        
                        System.out.println("📥 收到响应: " + resp.getResult());
                        
                        // 返回正确的结果
                        return resp.getResult();
                    }
                });

                try {
                    Object proxy = enhancer.create();
                    field.set(bean, proxy);
                    System.out.println("✅ InvokeProxy成功创建代理并注入到字段: " + field.getName());
                } catch (IllegalArgumentException | IllegalAccessException e) {
                    System.err.println("❌ InvokeProxy注入失败: " + e.getMessage());
                    e.printStackTrace();
                }
            } else {
                System.out.println("字段 " + field.getName() + " 没有@RemoteInvoke注解");
            }
        }
        return bean;
    }

    /**
     * 对所有属性的所有方法和属性接口类型放入到map中
     * @param methodClassMap
     * @param field
     */
    private void putMethodClass(Map<Method, Class> methodClassMap, Field field) {
        Method[] methods = field.getType().getDeclaredMethods();
        for (Method m : methods) {
            methodClassMap.put(m, field.getType());
            System.out.println("📋 注册方法映射: " + m.getName() + " -> " + field.getType().getName());
        }
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }
}