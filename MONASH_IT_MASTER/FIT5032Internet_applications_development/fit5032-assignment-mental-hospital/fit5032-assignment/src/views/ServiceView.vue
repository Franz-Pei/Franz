<template>
  <div class="services-section">
    <h2>Common Mental Health Issues We Address</h2>
    <div class="issue-cards">
      <div class="card">
        <img src="@/images/depression.png" alt="Depression" />
        <h3>Depression</h3>
      </div>
      <div class="card">
        <img src="@/images/anger.png" alt="Anger Issues" />
        <h3>Anger Issues</h3>
      </div>
      <div class="card">
        <img src="@/images/anxiety.png" alt="Anxiety" />
        <h3>Anxiety</h3>
      </div>
    </div>
    <div class="path-to-wellness">
      <h2>Path to Wellness</h2>
      <div class="steps">
        <div class="step">
          <span class="number">1</span>
          <h4>Assessment</h4>
          <p>
            Our experienced therapist will assess and understand your mental health needs during
            counseling through some tests.
          </p>
        </div>
        <div class="step">
          <span class="number">2</span>
          <h4>Sessions</h4>
          <p>
            We will decide on regular counseling or group support and execute therapy sessions based
            on the mental health test curated by our expert therapist.
          </p>
        </div>
        <div class="step">
          <span class="number">3</span>
          <h4>Tracking</h4>
          <p>
            The therapist assigned to your case will monitor and adjust your therapy session
            progress to make sure you get the best experience.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Survey Section -->
  <div class="survey-container">
    <div class="survey-image">
      <img src="@/images/fitness-image.png" alt="Fitness Level" />
    </div>
    <div class="survey-content">
      <h2>How would you describe your current fitness level?</h2>
      <div class="level-buttons">
        <button
          v-for="level in fitnessLevels"
          :key="level"
          @click="selectLevel(level)"
          :class="{ active: level === selectedLevel }"
          class="level-button"
        >
          {{ level }}
        </button>
      </div>
      <button @click="goToNextQuestion" class="next-button">Next</button>
    </div>
  </div>

  <!-- chat-box-container -->
  <div class="chat-box-container">
    <div class="chat-box-header">
      <h1>Chat with Gemini</h1>
    </div>
    <div class="chat-box-content">
      <h2>Ask your question</h2>
      <input
        v-model="userMessage"
        type="text"
        placeholder="Message here"
        class="chat-input"
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage" class="next-button">Send</button>

      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="chat-message">
          <div :class="message.type === 'user' ? 'user-message' : 'bot-message'">
            {{ message.text }}
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <!-- Services Section -->
  <div class="services-overview">
    <div class="service-card" v-for="service in services" :key="service.title">
      <img :src="service.image" :alt="service.title" class="service-image" />
      <div class="service-content">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <div class="service-rate">{{ service.rate }} / hr</div>
        <button @click="contactUs(service.title)" class="contact-button">Contact Us</button>
      </div>
    </div>
  </div>

    <!-- Contact Us Section -->
  <div class="contact-us-section mt-10">
    <ContactUS />
  </div>
</template>

<script>
// Import images using ES6 import syntax
import relationshipIssuesImage from '../images/relationship-issues.png'
import griefLossImage from '../images/grief-loss.png'
import selfConfidenceImage from '../images/self-confidence.png'
import stressManagementImage from '../images/stress-management.png'
import ContactUS from '../entity/ContactUs.vue'
import { model } from '@/firebase'
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { app } from '@/firebase' // Assuming Firebase is initialized in a separate file

export default {
  name: 'CombinedView',
  components: {
    ContactUS
  },
  data() {
    return {
      // Data for FullPageViewConfig
      fitnessLevels: ['Awful', 'Bad', 'Okay', 'Good', 'Excellent'],
      selectedLevel: 'Good',
      userMessage: '',
      messages: [],

      // Data for ServicesOverview
      services: [
        {
          title: 'Relationship Issues',
          description:
            'We guide individuals and couples to foster love in healthier connections and resolve conflicts, promoting harmony and understanding.',
          rate: '100$',
          image: relationshipIssuesImage
        },
        {
          title: 'Grief & Loss',
          description:
            'Our therapists provide compassionate care to help you navigate the challenging journey of grief and loss of loved ones in your life.',
          rate: '100$',
          image: griefLossImage
        },
        {
          title: 'Self-Confidence',
          description:
            'Discover tools to boost your self-esteem and confidence, enabling you to embrace your full potential and worth in your own self.',
          rate: '100$',
          image: selfConfidenceImage
        },
        {
          title: 'Stress Management',
          description:
            'Learn effective techniques to manage daily work stressors, enhancing your overall well-being, work productivity, and mental resilience.',
          rate: '50$',
          image: stressManagementImage
        }
      ]
    }
  },
  methods: {
  // Methods for FullPageViewConfig
  selectLevel(level) {
    this.selectedLevel = level
  },
  goToNextQuestion() {
    console.log('Next question logic here...')
  },

  // 修改后的 sendMessage 方法
  async sendMessage() {
    if (this.userMessage.trim() === '') return

    // Add user's message to chat
    this.messages.push({ text: this.userMessage, type: 'user' })

    // Store user's message for Firestore and Gemini API call
    const userInput = this.userMessage

    // Store the question in Firestore
    await this.storeQuestion(userInput)

    // Clear input field
    this.userMessage = ''

    // Get the previous question from Firestore
    const previousQuestion = await this.getPreviousQuestion()

    // Generate response using Gemini with the previous question as reference
    let geminiResponse = ''
    const prompt = `${previousQuestion || ''} ${userInput}`
    const result = await model.generateContent(prompt)
    const response = result.response

    geminiResponse = response.text()

    // Add Gemini's response to chat
    this.messages.push({ text: geminiResponse, type: 'bot' })
  },

  // Store the user's question to Firestore
  async storeQuestion(question) {
    const db = getFirestore(app)
    const questionsCollection = collection(db, 'questions')
    await addDoc(questionsCollection, {
      text: question,
      timestamp: new Date()
    })
  },

  // Get the previous question from Firestore
  async getPreviousQuestion() {
    const db = getFirestore(app)
    const questionsCollection = collection(db, 'questions')

    // Query Firestore for the most recent question
    const q = query(questionsCollection, orderBy('timestamp', 'desc'), limit(1))
    const querySnapshot = await getDocs(q)

    // If there is a previous question, return its text
    if (!querySnapshot.empty) {
      const lastQuestion = querySnapshot.docs[0].data()
      return lastQuestion.text
    }

    // If no previous question exists, return null
    return null
  },

    // Methods for ServicesOverview
    contactUs(serviceTitle) {
      console.log(`Contact us about ${serviceTitle}`)
      this.$router.push({ name: 'Doctors' }) // 导航到 Doctors 页面
    }
  }
}
</script>

<style scoped>
.services-section {
  text-align: center;
}

.issue-cards {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.card {
  width: 200px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card img {
  width: 100%;
  height: auto;
}

.path-to-wellness {
  margin-top: 40px;
}

.steps {
  display: flex;
  justify-content: space-around;
}

.step {
  width: 30%;
  text-align: center;
}

.number {
  background-color: #0056b3;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
}

/* Survey Section Styles */
.survey-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.survey-image {
  flex: 1;
  max-width: 50%; /* 限制图片宽度 */
}

.survey-image img {
  width: 100%;
  height: auto;
}

.survey-content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 使内容垂直居中 */
  align-items: flex-start; /* 左对齐 */
}

.level-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.level-button {
  background-color: #f8e6b1;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-align: left; /* 使文字左对齐 */
  width: 100%; /* 使按钮占满父容器宽度 */
  transition: background-color 0.3s;
}

.level-button:hover {
  background-color: #ffa500;
}

.level-button.active {
  background-color: #007bff;
  color: white;
}

.next-button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  margin-top: 20px;
  width: 100%; /* 使按钮占满父容器宽度 */
  cursor: pointer;
  text-align: center;
}

.next-button:hover {
  background-color: #555;
}
@media (max-width: 768px) {
  .survey-container {
    flex-direction: column;
    align-items: center;
  }

  .survey-image,
  .survey-content {
    max-width: 100%;
  }
}

/* .chat-box-container */
.chat-box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.chat-box-header {
  margin-bottom: 20px;
}

.chat-box-header h1 {
  color: #ff0080;
  text-align: center;
}

.chat-box-content {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.chat-box-content h2 {
  margin-bottom: 10px;
}

.chat-input {
  width: 100%;
  padding: 10px;
  border: solid 1px #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.next-button {
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.next-button:hover {
  background-color: #333;
}

/* services-section */
.services-overview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.service-content h3 {
  color: #333;
  margin-top: 10px;
}

.service-content p {
  color: #666;
  font-size: 14px;
  text-align: center;
}

.service-rate {
  font-weight: bold;
  margin: 10px 0;
}

.contact-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #0056b3;
}

/* Styles for chat messages */
.chat-messages {
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.chat-message {
  margin-bottom: 10px;
  display: flex;
}

.user-message {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 8px;
  align-self: flex-end;
  max-width: 70%;
}

.bot-message {
  background-color: #f0f0f0;
  color: black;
  padding: 10px;
  border-radius: 8px;
  align-self: flex-start;
  max-width: 70%;
}
</style>
