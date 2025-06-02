#!/bin/bash

# 配置变量
APP_DIR="/www/wwwroot/backend2"
VENV_PATH="$APP_DIR/venv"
APP_SCRIPT="$APP_DIR/main2.py"
LOG_FILE="/home/ubuntu/flask_monitor2.log"
PID_FILE="/home/ubuntu/flask_app2.pid"
CHECK_INTERVAL=60  # 检查间隔，单位秒

# 日志函数
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# 检查应用是否运行
is_app_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null; then
            # 进一步验证这确实是我们的Flask应用
            if ps -p "$PID" -o command= | grep -q "python.*main2.py"; then
                PORT_LISTENING=$(netstat -tlnp 2>/dev/null | grep -E "127.0.0.1:5002.*$PID/python" | wc -l)
                if [ "$PORT_LISTENING" -gt 0 ]; then
                    return 0  # 应用正在运行
                fi
            fi
        fi
    fi
    return 1  # 应用未运行
}

# 启动应用
start_app() {
    log "启动Flask应用..."
    cd "$APP_DIR" || { log "无法进入应用目录 $APP_DIR"; exit 1; }
    source "$VENV_PATH/bin/activate" || { log "无法激活虚拟环境"; exit 1; }
    
    # 确保没有其他实例在运行
    pkill -f "python.*main2.py" >/dev/null 2>&1
    
    # 启动应用并将输出重定向到日志文件
    nohup python "$APP_SCRIPT" > /home/ubuntu/flask_app2.log 2>&1 &
    
    # 保存PID
    echo $! > "$PID_FILE"
    
    # 等待几秒确保应用正常启动
    sleep 5
    
    if is_app_running; then
        log "应用已成功启动，PID: $(cat $PID_FILE)"
    else
        log "应用启动失败"
    fi
}

# 主循环
main2() {
    log "Flask应用监控服务启动"
    
    while true; do
        if ! is_app_running; then
            log "检测到Flask应用不在运行状态，准备重启..."
            start_app
        else
            log "Flask应用正常运行中，PID: $(cat $PID_FILE)"
        fi
        
        sleep "$CHECK_INTERVAL"
    done
}

# 处理脚本被终止的情况
cleanup() {
    log "监控脚本被终止，退出..."
    exit 0
}

trap cleanup SIGINT SIGTERM

# 启动主循环
main2
