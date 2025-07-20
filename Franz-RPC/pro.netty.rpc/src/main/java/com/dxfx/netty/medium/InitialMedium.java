package com.dxfx.netty.medium;

import java.lang.reflect.Method;
import java.util.Map;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

import com.dxfx.netty.annotation.Remote;

@Component
public class InitialMedium implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("InitialMedium处理Bean: " + beanName + ", 类型: " + bean.getClass().getName());
        
        // 检查是否有@Remote注解
        if (bean.getClass().isAnnotationPresent(Remote.class)) {
            System.out.println("找到@Remote注解的Bean: " + beanName);
            
            Method[] methods = bean.getClass().getDeclaredMethods();
            for (Method m : methods) {
                String key = bean.getClass().getInterfaces()[0].getName() + "." + m.getName();
                System.out.println("注册方法: " + key);
                
                Map<String, BeanMethod> beanMap = Media.beanMap;
                BeanMethod beanMethod = new BeanMethod();
                beanMethod.setBean(bean);
                beanMethod.setMethod(m);
                beanMap.put(key, beanMethod);
            }
            
            System.out.println("当前beanMap大小: " + Media.beanMap.size());
            System.out.println("beanMap内容: " + Media.beanMap.keySet());
        }
        
        return bean;
    }
}