<template>
  <div class="video-modal" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>{{ university.name }} Introduction Video</h2>
      <button class="close-btn" @click="$emit('close')">×</button>
      
      <div class="video-container">
        <iframe 
          v-if="university.videoUrl"
          :src="university.videoUrl" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <div v-else class="video-placeholder">
          <div class="play-icon">▶</div>
          <p>Video Preview</p>
          <p>/videos/{{ university.shortName.toLowerCase() }}-university.mp4</p>
        </div>
      </div>
      
      <div class="video-info">
        <h3>About this video</h3>
        <p>This video introduces the campus environment, academic features, student life and employment prospects at {{ university.name }}. By watching this video, you can better understand the characteristics of this university and the fields suitable for you.</p>
        
        <div class="video-tags">
          <span class="tag">Campus Tour</span>
          <span class="tag">Student Life</span>
          <span class="tag">Programs</span>
          <span class="tag">Facilities</span>
        </div>
        
        <div class="action-buttons">
          <a :href="university.website" target="_blank" class="action-btn website-btn">
            <span class="icon">🌐</span>
            Visit University Website
          </a>
          <a :href="`mailto:admissions@${university.shortName.toLowerCase()}.edu.au`" class="action-btn apply-btn">
            <span class="icon">📝</span>
            Admission Information
          </a>
          <!-- Modified: Chat with Bot button (now directly toggles chatbot) -->
          <button
            class="action-btn chat-btn"
            @click="chatWithBot"
          >
            <span class="icon">🤖</span>
            Chat with Bot
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoModal',
  props: {
    university: {
      type: Object,
      required: true
    }
  },
  methods: {
    chatWithBot() {
      // Close the current modal
      this.$emit('close');
      
      // Directly find and click the chatbot toggle button
      const chatbotButton = document.querySelector('.chatbot-button');
      if (chatbotButton) {
        chatbotButton.click();
        
        // Optional: Wait a moment and then send a message about the university
        setTimeout(() => {
          // Find the input field
          const chatInput = document.querySelector('.chatbot-input input');
          const sendButton = document.querySelector('.send-button');
          
          if (chatInput && sendButton) {
            // Set the input value
            chatInput.value = `Tell me about programs at ${this.university.name}`;
            
            // Dispatch an input event to make Vue recognize the change
            chatInput.dispatchEvent(new Event('input', { bubbles: true }));
            
            // Click the send button
            sendButton.click();
          }
        }, 500);
      }
    }
  }
};
</script>

<style scoped>
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
}

.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.video-container iframe {
  width: 100%;
  height: 100%;
}

.video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 100%;
}

.play-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.video-info {
  color: #333;
}

.video-info h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.video-info p {
  margin-bottom: 15px;
  line-height: 1.5;
}

.video-tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tag {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  flex: 1;
  min-width: 180px;
  cursor: pointer;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none; /* Added for button consistency */
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.website-btn {
  background-color: #2196f3;
}

.apply-btn {
  background-color: #ff9800;
}

.chat-btn {
  background-color: #4caf50;
}

.icon {
  margin-right: 8px;
  font-size: 18px;
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 15px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .action-btn {
    min-width: 100%;
  }
}
</style>