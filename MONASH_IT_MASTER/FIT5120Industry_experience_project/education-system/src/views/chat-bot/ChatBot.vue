<template>
  <!-- Navigation -->
  <nav v-if="$route.path === '/chatbot'" class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <div class="logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            <path d="M12 6v8"></path>
            <path d="M8 10h8"></path>
          </svg>
        </div>
        <span class="logo-text">CoursePathFinder</span>
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/test" active-class="active">Career Quiz</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/career-stories" active-class="active">Career Stories</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/subject" active-class="active">VCE Subject Check</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/secondary-college" active-class="active">Alternative Schools</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/chatbot" active-class="active">AI ChatBot</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/three" active-class="active">Uni Virtual Explore</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- New content for the chatbot page -->
  <div class="container my-5 chatbot-page-content" v-if="$route.path === '/chatbot'">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card shadow-lg border-0">
          <div class="card-body p-4">
            <div class="text-center mb-4">
              <div class="robot-icon-large mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#396aae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <rect x="8" y="24" width="8" height="3" rx="1" ry="1" />
                  <rect x="8" y="2" width="8" height="5" rx="1" ry="1" />
                  <path d="M12 7v4" />
                  <circle cx="8" cy="16" r="1" />
                  <circle cx="16" cy="16" r="1" />
                  <path d="M9 11v-1.5a3 3 0 0 1 6 0V11" />
                </svg>
              </div>
              <h2 class="fw-bold text-primary">Career Guidance Assistant</h2>
              <p class="lead text-muted">Your personalized AI helper for education and career planning</p>
            </div>

            <div class="row g-4 mb-4">
              <div class="col-md-6">
                <div class="feature-card h-100 p-4 rounded shadow-sm border">
                  <h4 class="fw-bold mb-3">How Can I Help You?</h4>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Find university courses by career path</li>
                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Search for secondary colleges by name</li>
                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Discover subjects offered at colleges</li>
                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Find colleges offering specific subjects</li>
                    <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> Explore career pathways from job interests</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="feature-card h-100 p-4 rounded shadow-sm border">
                  <h4 class="fw-bold mb-3">Getting Started</h4>
                  <p>Click the chat button in the bottom right corner to start a conversation. Ask questions related to education pathways and careers.</p>
                  <p class="mb-0">For the best experience, try asking about:</p>
                  <ul class="mb-0">
                    <li>University courses for specific careers</li>
                    <li>Subjects offered by a college</li>
                    <li>Colleges that teach your subject of interest</li>
                    <li>Career options related to job types</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card bg-light mb-4">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-3">Sample Questions</h4>
                <div class="sample-questions">
                  <span class="sample-question" @click="handleSampleQuestion('What university courses are available for Nursing?')">What university courses are available for Nursing?</span>
                  <span class="sample-question" @click="handleSampleQuestion('Show me careers related to Software Developer')">Show me careers related to Software Developer</span>
                  <span class="sample-question" @click="handleSampleQuestion('What university degrees match with Mental Health Counselor?')">What university degrees match with Mental Health Counselor?</span>
                </div>
              </div>
            </div>

            <div class="text-center">
              <p class="text-muted">Our AI assistant uses your information only to provide personalized guidance and doesn't store personal data.</p>
              <button class="btn btn-primary btn-lg" @click="toggleChatbot">
                <i class="bi bi-chat-dots-fill me-2"></i>Start Chatting Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Chatbot functionality -->
  <div class="chatbot-container" :class="{ 'chatbot-open': isOpen }">
    <!-- Chatbot Button - Only shown when appropriate -->
    <div class="chatbot-button" @click="toggleChatbot" v-if="!isOpen">
      <div class="chatbot-icon">
        <!-- Robot Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <rect x="8" y="24" width="8" height="3" rx="1" ry="1" />
          <rect x="8" y="2" width="8" height="5" rx="1" ry="1" />
          <path d="M12 7v4" />
          <circle cx="8" cy="16" r="1" />
          <circle cx="16" cy="16" r="1" />
          <path d="M9 11v-1.5a3 3 0 0 1 6 0V11" />
        </svg>
      </div>
    </div>

    <!-- Chatbot Dialog -->
    <div class="chatbot-dialog" v-if="isOpen">
      <div class="chatbot-header">
        <div class="header-content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="me-2">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <rect x="8" y="24" width="8" height="3" rx="1" ry="1" />
            <rect x="8" y="2" width="8" height="5" rx="1" ry="1" />
            <path d="M12 7v4" />
            <circle cx="8" cy="16" r="1" />
            <circle cx="16" cy="16" r="1" />
            <path d="M9 11v-1.5a3 3 0 0 1 6 0V11" />
          </svg>
          <span>Career Guidance Assistant</span>
        </div>
        <button class="close-button" @click="toggleChatbot">
          <span>&times;</span>
        </button>
      </div>

      <div class="chatbot-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          <div class="message-content">{{ message.text }}</div>
        </div>
        <!-- Loading indicator -->
        <div v-if="isLoading" class="message bot loading-message">
          <div class="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class="suggested-responses" v-if="suggestedResponses.length > 0 && !isLoading">
        <button 
          v-for="(response, index) in suggestedResponses" 
          :key="index" 
          class="suggested-response-btn"
          @click="sendMessage(response.text)"
        >
          {{ response.text }}
        </button>
      </div>

      <div class="chatbot-input">
        <input 
          type="text" 
          v-model="userInput" 
          placeholder="Type your question here..." 
          @keyup.enter="sendMessage(userInput)"
          :disabled="isLoading"
        />
        <button class="send-button" @click="sendMessage(userInput)" :disabled="isLoading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WorkflowApiService from '../../utils/WorkflowApiService';

export default {
  name: 'ChatBot',
  data() {
    return {
      isOpen: false,
      userInput: '',
      messages: [
        {
          sender: 'bot',
          text: "Hi there! I'm your Career Guidance Assistant. I can help you explore university courses, careers, subjects, and colleges. You can ask me about specific careers, search for subjects offered by colleges, or find colleges that offer certain subjects."
        }
      ],
      suggestedResponses: [
        { text: "Show me careers in healthcare" },
        { text: "What university courses are available for Nursing?" },
        { text: "Show me careers related to Software Developer?" }
      ],
      userContext: {
        yearLevel: null,
        interests: [],
        location: null
      },
      isLoading: false,
    };
  },
  created() {
    // Handle navigation directly
    if (this.$route.path === '/chatbot') {
      // Ensure DOM is ready before opening chat
      this.$nextTick(() => {
        this.isOpen = true;

        // Check query parameters to start conversation
        if (this.$route.query.university) {
          const universityName = this.$route.query.university;
          
          // Create custom message based on university parameter
          const message = `Tell me about programs at ${universityName} University`;
          
          // Add slight delay for better UX
          setTimeout(() => {
            this.sendMessage(message);
          }, 1000);
        }
      });
    }
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    handleSampleQuestion(question) {
      // 如果聊天框未打开，则打开
      if (!this.isOpen) {
        this.isOpen = true;
      }
      // 发送示例问题
      this.sendMessage(question);
    },
    async sendMessage(text) {
      if (!text.trim() || this.isLoading) return;
      
      // 添加用户消息
      this.messages.push({
        sender: 'user',
        text: text
      });
      
      // 发送后清除输入
      this.userInput = '';
      this.isLoading = true;
      
      // 根据消息更新上下文
      this.updateContext(text);
      
      // 等待 DOM 更新
      this.$nextTick(() => {
        this.scrollToBottom();
        
        // 调用工作流 API
        this.callWorkflowApi(text);
      });
    },
    updateContext(message) {
      // 根据消息内容更新用户上下文
      const lowerMessage = message.toLowerCase();
      
      // 检测正在搜索的数据类型
      if (lowerMessage.includes('university') || lowerMessage.includes('course') || 
          lowerMessage.includes('major') || lowerMessage.includes('degree')) {
        this.userContext.searchType = 'university';
      } else if (lowerMessage.includes('college') || lowerMessage.includes('secondary')) {
        this.userContext.searchType = 'college';
      } else if (lowerMessage.includes('subject') || lowerMessage.includes('class')) {
        this.userContext.searchType = 'subject';
      } else if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
        this.userContext.searchType = 'career';
      }
      
      // 检测特定职业或工作兴趣
      const careerKeywords = {
        'healthcare': ['doctor', 'nurse', 'medical', 'health', 'medicine', 'counselor', 'nutritionist'],
        'technology': ['software', 'it', 'computer', 'programming', 'developer', 'engineering'],
        'business': ['business', 'management', 'marketing', 'finance', 'economics'],
        'education': ['teacher', 'education', 'teaching', 'professor', 'instructor']
      };
      
      Object.entries(careerKeywords).forEach(([career, keywords]) => {
        if (keywords.some(keyword => lowerMessage.includes(keyword)) && 
            !this.userContext.interests.includes(career)) {
          this.userContext.interests.push(career);
        }
      });
    },
    async callWorkflowApi(userMessage) {
      try {
        // 调用工作流 API
        const response = await WorkflowApiService.runWorkflow(
          userMessage
        );
        
        // 处理响应
        console.log('Workflow API response:', response);
        
        // 从响应中提取机器人消息和建议
        // 这将取决于您的特定工作流 API 响应结构
        // 以下是假设特定响应格式的示例
        let botMessage = "I received your message.";
        let suggestions = [];
        
        if (response && response.data) {
          // 假设响应有一个包含 bot_response 字段的 outputs 对象
          botMessage = response.data.outputs.text || botMessage;
          
          // 假设响应包含建议的回复
          suggestions = response.data.outputs.suggestions || [];
        }
        
        // 添加机器人响应
        this.messages.push({
          sender: 'bot',
          text: botMessage
        });
        
        // 更新建议的回复
        this.suggestedResponses = suggestions.map(text => ({ text }));
      } catch (error) {
        console.error('Error calling workflow API:', error);
        
        // 添加错误消息
        this.messages.push({
          sender: 'bot',
          text: "Sorry, I'm having trouble processing your request right now. Please try again later."
        });
        
        this.suggestedResponses = [
          { text: "Try again" },
          { text: "Help" }
        ];
      } finally {
        this.isLoading = false;
        
        // 机器人响应后滚动到底部
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    scrollToBottom() {
      if (this.$refs.messagesContainer) {
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
      }
    }
  },
  // 监视路由变化以处理直接导航到带参数的聊天机器人
  watch: {
    '$route.query': {
      immediate: true,
      handler(newQuery) {
        // Open chat and start conversation if university parameter is present
        if (this.$route.path === '/chatbot' && newQuery.university && !this.isOpen) {
          this.isOpen = true;
          
          // Create university-specific message
          const message = `Tell me about programs at ${newQuery.university} University`;
          
          // Add delay for better UX
          setTimeout(() => {
            this.sendMessage(message);
          }, 1000);
        }
      }
    }
  }
};
</script>

<style scoped>
/* Navigation styles */
.navbar {
  padding: 0.8rem 0;
  background: linear-gradient(135deg, #4171e8 0%, #3451B2 100%) !important;
  box-shadow: 0 4px 20px rgba(65, 113, 232, 0.15);
}

.navbar > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-collapse {
  flex-grow: 0;
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
}

.nav-item {
  position: relative;
  margin: 0 0.2rem;
}

.nav-link {
  padding: 0.6rem 0.8rem;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.85) !important;
  border-radius: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.nav-link.active {
  color: white !important;
  background: rgba(255, 255, 255, 0.15);
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: white;
  transform: translateX(-50%);
  transition: width 0.3s ease;
  opacity: 0;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 70%;
  opacity: 1;
}

.navbar-brand {
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.3rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  background: rgba(255, 255, 255, 0.1);
}

.navbar-brand .logo-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  border-radius: 10px;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.navbar-brand:hover .logo-icon {
  transform: rotate(10deg) scale(1.05);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.navbar-brand .logo-text {
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
}

.navbar-toggler {
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (max-width: 991px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(65, 113, 232, 0.98);
    padding: 1rem;
    border-radius: 0 0 12px 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .navbar-nav {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.8rem 1.2rem;
    text-align: center;
  }
}

/* 现有聊天机器人样式 */
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: Arial, sans-serif;
}

.chatbot-button {
  width: 70px; /* 增加大小 */
  height: 70px; /* 增加大小 */
  border-radius: 50%;
  background-color: #396aae;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); /* 增强阴影 */
  position: absolute;
  bottom: 0;
  right: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.chatbot-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
}

.chatbot-icon {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px; /* 增加图标大小 */
}

.chatbot-dialog {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px; /* 增加宽度 */
  height: 500px; /* 增加高度 */
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
}

.chatbot-header {
  padding: 16px;
  background-color: #396aae;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.header-content {
  display: flex;
  align-items: center;
}

.close-button {
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 30px;
  height: 30px;
}

.chatbot-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}

.message {
  margin-bottom: 12px;
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 18px;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 1.4;
}

.message.bot {
  align-self: flex-start;
  background-color: #f1f1f1;
  border-bottom-left-radius: 4px;
}

.message.user {
  align-self: flex-end;
  background-color: #e3f2fd;
  border-bottom-right-radius: 4px;
}

.suggested-responses {
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  border-top: 1px solid #eee;
  background-color: white;
}

.suggested-response-btn {
  background-color: #f1f1f1;
  border: none;
  border-radius: 18px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333;
}

.suggested-response-btn:hover {
  background-color: #e0e0e0;
  transform: translateY(-1px);
}

.suggested-response-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.chatbot-input {
  padding: 12px 16px;
  display: flex;
  border-top: 1px solid #eee;
  background-color: white;
}

.chatbot-input input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  outline: none;
  margin-right: 10px;
  font-size: 15px;
}

.chatbot-input input:focus {
  border-color: #396aae;
  box-shadow: 0 0 0 2px rgba(57, 106, 174, 0.1);
}

.chatbot-input input:disabled {
  background-color: #f9f9f9;
  cursor: not-allowed;
}

.send-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #396aae;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.send-button:hover {
  background-color: #2a5595;
  transform: scale(1.05);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-button svg {
  width: 20px;
  height: 20px;
}

/* 加载指示器样式 */
.loading-message {
  padding: 12px;
}

.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
}

.loading-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #396aae;
  margin: 0 3px;
  animation: dot-pulse 1.5s infinite ease-in-out;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dot-pulse {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}

/* 聊天机器人打开时添加更突出的外观 */
.chatbot-open .chatbot-button {
  transform: scale(0.85);
  opacity: 0.8;
}

/* 聊天机器人页面内容的新样式 */
.chatbot-page-content {
  margin-bottom: 100px; /* 为聊天机器人按钮留出空间 */
  position: relative;
  z-index: 1;
}

.robot-icon-large {
  display: inline-block;
}

.feature-card {
  transition: all 0.3s ease;
  border-left: 5px solid #396aae !important;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.sample-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.sample-question {
  background-color: #e3f2fd;
  color: #396aae;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sample-question:hover {
  background-color: #bbdefb;
  transform: translateY(-2px);
}

/* Bootstrap Icons 占位符 */
.bi {
  display: inline-block;
  vertical-align: -0.125em;
  width: 1em;
  height: 1em;
}

.bi-check-circle-fill::before {
  content: "✓";
  color: #28a745;
}

.bi-chat-dots-fill::before {
  content: "💬";
}
</style>