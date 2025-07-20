# Introduction 
**本人学习Netty后决定自己写1个基于Netty、Zookeeper、Spring的轻量级RPC框架，收获颇丰，不过本人才疏学浅，难免有所疏漏，若有批评和建议请发到邮箱pzqfranz@163.com**


Features

✅ 支持长连接 - 基于Netty的持久连接，减少连接开销
✅ 支持异步调用 - 非阻塞异步调用机制，提升系统吞吐量
✅ 支持心跳检测 - 智能心跳机制，确保连接健康
✅ 支持JSON序列化 - 基于FastJSON的高性能序列化
✅ 接近零配置，基于注解实现调用 - 简单的注解驱动开发
✅ 基于Zookeeper实现服务注册中心 - 自动服务注册与发现
✅ 支持客户端连接动态管理 - 智能连接池管理
✅ 支持客户端服务监听、发现功能 - 实时服务状态感知
✅ 支持服务端服务注册功能 - 自动服务注册
✅ 支持负载均衡 - 基于权重的负载均衡策略
✅ 基于Netty4.X版本实现 - 高性能异步网络框架
Framework: Spring Framework 5.3.31
Network: Netty 4.1.6
Service Discovery: Apache ZooKeeper 3.4.6
Serialization: FastJSON 2.0.31
Proxy: CGLIB
Build Tool: Maven

Quick Start
Prerequisites

JDK 1.8+
Maven 3.6+
ZooKeeper 3.4.6+
1. 启动ZooKeeper
bash# Windows
scripts\start-zookeeper.bat

# Linux/Mac  
bin/zkServer.sh start

# Quick Start
### 服务端开发
- **在服务端的Service下添加你自己的Service,并加上@Service注解**
	<pre>
	@Service
	public class TestService {
		public void test(User user){
			System.out.println("调用了TestService.test");
		}
	}
	</pre>

- **生成1个服务接口并生成1个实现该接口的类**
	###### 接口如下
	<pre>
	public interface TestRemote {
		public Response testUser(User user);  
	}
	</pre>
	###### 实现类如下，为你的实现类添加@Remote注解，该类是你真正调用服务的地方，你可以生成自己想返回给客户端的任何形式的Response

	<pre> 
	@Remote
	public class TestRemoteImpl implements TestRemote{
		@Resource
		private TestService service;
		public Response testUser(User user){
			service.test(user);
			Response response = ResponseUtil.createSuccessResponse(user);
			return response;
		}
	}	
	</pre>


### 客户端开发
- **在客户端生成一个接口，该接口为你要调用的接口**
	<pre>
	public interface TestRemote {
		public Response testUser(User user);
	}
	</pre>

### 使用
- **在你要调用的地方生成接口形式的属性，为该属性添加@RemoteInvoke注解**
	<pre>
	@RunWith(SpringJUnit4ClassRunner.class)
	@ContextConfiguration(classes=RemoteInvokeTest.class)
	@ComponentScan("\\")
	public class RemoteInvokeTest {
		@RemoteInvoke
		public static TestRemote userremote;
		public static User user;
		@Test
		public void testSaveUser(){
			User user = new User();
			user.setId(1000);
			user.setName("张三");
			userremote.testUser(user);
		}
	}	
	</pre>

### 结果
- **一万次调用结果**
![Markdown](https://s1.ax1x.com/2018/07/06/PZMMBF.png)

- **十万次调用结果**
![Markdown](https://s1.ax1x.com/2018/07/06/PZM3N9.png)

- **一百万次调用结果**
![Markdown](https://s1.ax1x.com/2018/07/06/PZMY1x.png)



Configuration
服务器配置
properties# 服务器端口
server.port=8080

# ZooKeeper地址
zookeeper.address=localhost:2181

# 服务权重
server.weight=2

# 心跳间隔（秒）
heartbeat.interval=60
客户端配置
properties# ZooKeeper地址
zookeeper.address=localhost:2181

# 连接超时（毫秒）
connection.timeout=3000

# 请求超时（毫秒）  
request.timeout=30000
# Overview
Architecture Overview
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client App    │    │   ZooKeeper     │    │   Server App    │
│                 │    │                 │    │                 │
│ @RemoteInvoke   │    │  Service        │    │   @Remote       │
│ UserRemote      │◄──►│  Registry       │◄──►│ UserRemoteImpl  │
│                 │    │                 │    │                 │
│ Dynamic Proxy   │    │ /netty/         │    │ Service Export  │
│ Load Balancer   │    │ localhost:8080  │    │ Netty Server    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                                              │
         │              Netty Channel                   │
         └──────────────────────────────────────────────┘
                    JSON Serialization
Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
Contact

Author: Franz
GitHub: Franz-RPC

Acknowledgments

Thanks to Netty team for the excellent network framework
Thanks to Apache ZooKeeper for service discovery
Thanks to Spring Framework for dependency injection
Thanks to FastJSON for high-performance serialization