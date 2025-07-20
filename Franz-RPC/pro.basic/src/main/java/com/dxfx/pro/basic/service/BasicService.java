package com.dxfx.pro.basic.service;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson2.JSONObject;
import com.dxfx.client.annotation.RemoteInvoke;
import com.dxfx.user.model.User;
import com.dxfx.user.remote.UserRemote;

@Service
public class BasicService {

    @RemoteInvoke
    private UserRemote userRemote;

    public void testSaveUser() {
        System.out.println("BasicService.testSaveUser() 开始执行");
        System.out.println("userRemote是否为null: " + (userRemote == null));
        
        if (userRemote != null) {
            System.out.println("userRemote类型: " + userRemote.getClass().getName());
        }
        
        User u = new User();
        u.setId(1);
        u.setName("张三");
        System.out.println("创建用户: " + JSONObject.toJSONString(u));

        // 如果userRemote为null，说明注入还没完成，这是正常的
        if (userRemote != null) {
            System.out.println("开始调用远程方法 userRemote.saveUser()");
            Object response = userRemote.saveUser(u);
            System.out.println("远程调用响应: " + JSONObject.toJSONString(response));
        } else {
            System.out.println("UserRemote注入为null，代理可能创建失败");
        }
    }
}