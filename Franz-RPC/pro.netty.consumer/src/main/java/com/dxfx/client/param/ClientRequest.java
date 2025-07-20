package com.dxfx.client.param;

import java.util.concurrent.atomic.AtomicLong;

public class ClientRequest {

    private long id;  // 🔧 关键修复：移除final，允许设置
    private Object content;
    private String command;
    private static final AtomicLong aid = new AtomicLong(1);  // 改为static

    public ClientRequest() {
        this.id = aid.incrementAndGet();
    }

    public long getId() {
        return id;
    }

    // 🔧 关键添加：setId方法
    public void setId(long id) {
        this.id = id;
    }

    public Object getContent() {
        return content;
    }

    public void setContent(Object content) {
        this.content = content;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public String getCommand() {
        return command;
    }

    @Override
    public String toString() {
        return "ClientRequest{" +
                "id=" + id +
                ", content=" + content +
                ", command='" + command + '\'' +
                '}';
    }
}