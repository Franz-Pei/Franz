<template>
  <div class="home">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
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
              <router-link class="nav-link active" to="/" exact-active-class="active">Home</router-link>
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
              <router-link class="nav-link" to="/chatbot" active-class="active">AI ChatBot</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/three" active-class="active">Uni Virtual Explore</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="video-carousel">
        <!-- Video slides -->
        <div 
          v-for="(video, index) in videos" 
          :key="index"
          :class="['video-slide', { active: currentVideoIndex === index }]"
        >
          <video 
            v-if="video.src"
            :ref="el => setVideoRef(el, index)"
            autoplay 
            muted 
            loop 
            playsinline
            class="video-bg"
            @loadeddata="onVideoLoaded(index)"
            @error="onVideoError(index)"
          >
            <source :src="video.src" type="video/mp4">
          </video>
          
          <div 
            v-if="!videoLoaded[index]" 
            class="fallback-bg"
            :style="{ background: video.fallback }"
          ></div>
        </div>

        <!-- Navigation arrows -->
        <button 
          class="carousel-btn prev-btn" 
          @click="previousVideo" 
          :disabled="isTransitioning"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        
        <button 
          class="carousel-btn next-btn" 
          @click="nextVideo" 
          :disabled="isTransitioning"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>

        <!-- Indicators -->
        <div class="carousel-indicators">
          <button 
            v-for="(video, index) in videos" 
            :key="index"
            :class="['indicator', { active: currentVideoIndex === index }]"
            @click="goToVideo(index)"
            :disabled="isTransitioning"
          ></button>
        </div>
      </div>

      <!-- Content Overlay -->
      <div class="overlay">
        <div 
          v-for="(video, index) in videos" 
          :key="`content-${index}`" 
          class="content-slide"
          :class="{ active: currentVideoIndex === index }"
        >
          <h1 class="main-title">{{ video.title }}</h1>
          <h2 class="sub-title">{{ video.subtitle }}</h2>
          <p class="description">{{ video.description }}</p>
          
          <div class="features-grid">
            <div 
              v-for="(feature, featureIndex) in video.features" 
              :key="featureIndex" 
              class="feature-item"
            >
              {{ feature }}
            </div>
          </div>
          
          <div class="cta-buttons">
            <router-link to="/test" class="cta-btn primary">Take Career Quiz</router-link>
            <router-link to="/subject" class="cta-btn secondary">Check Subjects</router-link>
            <router-link to="/it-journey" class="cta-btn tertiary"> IT Journey Map</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- IT Journey Map Preview Section -->
    <section class="it-journey-preview">
      <div class="container">
        <div class="journey-preview-content">
          <div class="journey-text">
            <h2 class="journey-title">IT Career Journey Map</h2>
            <p class="journey-subtitle">Your Complete Roadmap to Tech Success</p>
            <p class="journey-description">
              Discover step-by-step career paths for 6 major IT fields. From beginner to expert, 
              see exactly what skills to learn, projects to build, and certifications to earn.
            </p>
            
            <div class="journey-stats">
              <div class="stat">
                <div class="stat-number">6</div>
                <div class="stat-label">Career Paths</div>
              </div>
              <div class="stat">
                <div class="stat-number">4</div>
                <div class="stat-label">Learning Phases</div>
              </div>
              <div class="stat">
                <div class="stat-number">50+</div>
                <div class="stat-label">Skills Covered</div>
              </div>
              <div class="stat">
                <div class="stat-number">∞</div>
                <div class="stat-label">Career Growth</div>
              </div>
            </div>

            <div class="journey-paths">
              <div class="path-tag">Software Development</div>
              <div class="path-tag">Data Science & AI</div>
              <div class="path-tag"> Cybersecurity</div>
              <div class="path-tag">☁️ Cloud Computing</div>
              <div class="path-tag">Mobile Development</div>
              <div class="path-tag">⚡ DevOps Engineering</div>
            </div>
            
            <router-link to="/it-journey" class="journey-cta-btn">
              Explore Your IT Journey
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
          
          <div class="journey-visual">
            <div class="journey-map-container">
              <div class="journey-path">
              </div>
              
              <!-- Floating skill bubbles -->
              <div class="skill-bubble bubble-1">HTML/CSS</div>
              <div class="skill-bubble bubble-2">Python</div>
              <div class="skill-bubble bubble-3">React</div>
              <div class="skill-bubble bubble-4">AWS</div>
              <div class="skill-bubble bubble-5">DevOps</div>
              <div class="skill-bubble bubble-6">AI/ML</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Cluster -->
    <section class="career-cluster">
      <h2 class="section-title">Interactive Career Cluster</h2>
      <p class="subtitle">Choose a path to explore. Hover for a surprise!</p>
      <div class="cluster-grid">
        <div 
          v-for="(item, index) in clusters" 
          :key="index" 
          class="cluster-box" 
          @click="handleClick(item)"
        >
          <img 
            :src="item.icon" 
            :alt="item.label"
            class="cluster-icon"
            @error="handleIconError($event, index)"
          />
          <span class="cluster-label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features" id="start">
      <div class="feature-hero">
        <div class="feature-content">
          <h2 class="feature-title">
            <span class="title-line">Subject Checker</span>
            <span class="title-line">Availability</span>
            <span class="title-line highlight">Checker</span>
          </h2>
          <p class="feature-description">
            See if your school offers the VCE subjects you need, and get suggestions.
          </p>
          <router-link to="/subject" class="feature-btn">Check Now</router-link>
        </div>
        <div class="feature-images">
          <img src="@/assets/subject-availability.png" alt="Subject checker" class="main-image">
          <img src="@/assets/career-stories.png" alt="Career stories" class="secondary-image">
        </div>
      </div>
      
      <!-- Career Stories Section -->
      <div class="career-stories-section">
        <img src="@/assets/career-stories-design.png" alt="Career Stories" class="career-stories-image">
        <div class="stories-cta">
          <router-link to="/career-stories" class="story-btn">Explore Stories</router-link>
        </div>
      </div>
      
      <!-- Uni Virtual Explorer Section -->
      <div class="uni-explorer-section">
        <img src="@/assets/uni-virtual-explorer.png" alt="Uni Virtual Explorer" class="uni-explorer-image">
        <div class="explorer-cta">
          <router-link to="/three" class="explorer-btn">See how it Works</router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 CareerPath Finder. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Video carousel data
const videos = ref([
  { 
    src: '/src/assets/hero-bg.mp4', 
    title: 'VCE Subject Selection',
    subtitle: 'Your Pathway to Success',
    description: 'Choose the right VCE subjects that align with your career goals. Our platform helps you understand prerequisite requirements and make informed decisions for your future university studies.',
    features: ['Subject Prerequisites', 'Career Alignment', ' ATAR Calculations', 'School Availability'],
    fallback: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    src: '/src/assets/hero-bg2.mp4', 
    title: 'Career Exploration',
    subtitle: 'Discover Your Dream Job',
    description: 'Explore diverse career paths across nine industry clusters. From healthcare to technology, find careers that match your interests and learn about the subjects you need to get there.',
    features: ['9 Career Clusters', '❤️ Interest Matching', 'Job Market Insights', 'Salary Information'],
    fallback: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  { 
    src: '/src/assets/hero-bg3.mp4', 
    title: 'University Pathways',
    subtitle: 'Plan Your Higher Education',
    description: 'Navigate university entrance requirements and explore study options. Connect your VCE subject choices to specific university courses and understand alternative pathways to your chosen career.',
    features: ['University Requirements', ' Alternative Pathways', 'Regional Opportunities', 'Course Recommendations'],
    fallback: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
])

// State
const currentVideoIndex = ref(0)
const isTransitioning = ref(false)
const videoRefs = ref([])
const autoPlayTimer = ref(null)
const videoLoaded = ref([])

// Career clusters with image icons
const clusters = [
  { 
    label: 'Agriculture, Environment & Natural Sciences', 
    value: "Agriculture Environment And Natural Sciences", 
    icon: '/src/assets/icons/agriculture.png',
    animationClass: 'hover-draw' 
  },
  { 
    label: 'Business & Management', 
    value: "Business And Management", 
    icon: '/src/assets/icons/business.png',
    animationClass: 'hover-code' 
  },
  { 
    label: 'Creative Arts, Media, Communication & Journalism', 
    value: "Creative Arts Media Communication and Journalism", 
    icon: '/src/assets/icons/creative-arts.png',
    animationClass: 'hover-draw' 
  },
  { 
    label: 'Education & Social Sciences', 
    value: "Education And Social Sciences", 
    icon: '/src/assets/icons/education.png',
    animationClass: 'hover-flipbook' 
  },
  { 
    label: 'Engineering & Science', 
    value: "Engineering And Science", 
    icon: '/src/assets/icons/engineering.png',
    animationClass: 'hover-code' 
  },
  { 
    label: 'Health & Human Services', 
    value: "Health And Human Services", 
    icon: '/src/assets/icons/health.png',
    animationClass: 'hover-heartbeat' 
  },
  { 
    label: 'IT & Data', 
    value: "IT And Data", 
    icon: '/src/assets/icons/it-data.png',
    animationClass: 'hover-code' 
  },
  { 
    label: 'Law & Public Services', 
    value: "Law And Public Services", 
    icon: '/src/assets/icons/law.png',
    animationClass: 'hover-flipbook' 
  },
  { 
    label: 'Math & Theoretical Sciences', 
    value: "Math And Theoretical Sciences", 
    icon: '/src/assets/icons/math.png',
    animationClass: 'hover-draw' 
  }
]

// Methods
function setVideoRef(el, index) {
  if (el) {
    videoRefs.value[index] = el
  }
}

function nextVideo() {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.value.length
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
  
  resetAutoPlay()
}

function previousVideo() {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  currentVideoIndex.value = currentVideoIndex.value === 0 
    ? videos.value.length - 1 
    : currentVideoIndex.value - 1
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
  
  resetAutoPlay()
}

function goToVideo(index) {
  if (isTransitioning.value || index === currentVideoIndex.value) return
  
  isTransitioning.value = true
  currentVideoIndex.value = index
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
  
  resetAutoPlay()
}

function startAutoPlay() {
  if (videos.value.length > 1) {
    autoPlayTimer.value = setInterval(() => {
      nextVideo()
    }, 3000)
  }
}

function stopAutoPlay() {
  if (autoPlayTimer.value) {
    clearInterval(autoPlayTimer.value)
    autoPlayTimer.value = null
  }
}

function resetAutoPlay() {
  stopAutoPlay()
  startAutoPlay()
}

function onVideoLoaded(index) {
  console.log(`Video ${index + 1} loaded successfully`)
  videoLoaded.value[index] = true
  if (index === currentVideoIndex.value && videoRefs.value[index]) {
    videoRefs.value[index].play().catch(e => {
      console.error(`Error playing video ${index + 1}:`, e)
    })
  }
}

function onVideoError(index) {
  console.error(`Error loading video ${index + 1}:`, videos.value[index].src)
  videoLoaded.value[index] = false
}

function handleIconError(event, index) {
  console.error(`Icon failed to load for ${clusters[index].label}`)
  event.target.style.display = 'none'
}

function handleClick(item) {
  router.push({
    name: 'career',
    query: { careers: item.value, type: "job" }
  })
}

// Lifecycle
onMounted(() => {
  videoLoaded.value = new Array(videos.value.length).fill(false)
  startAutoPlay()
  
  const handleKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
      previousVideo()
    } else if (event.key === 'ArrowRight') {
      nextVideo()
    }
  }
  
  window.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    stopAutoPlay()
  })
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.home {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #111;
  line-height: 1.6;
  background-color: #f0f2f5;
}

.hero {
  position: relative;
  height: 85vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.video-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.video-slide.active {
  opacity: 1;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
}

.fallback-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.carousel-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.prev-btn {
  left: 2rem;
}

.next-btn {
  right: 2rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 0.8rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.indicator.active {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

.indicator:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
}

.indicator:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.overlay {
  position: relative;
  z-index: 4;
  text-align: center;
  max-width: 900px;
  padding: 2.5rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: white;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.content-slide {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.content-slide.active {
  opacity: 1;
  transform: translateY(0);
  position: relative;
}

.main-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.sub-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #e0e6ed;
  opacity: 0.9;
}

.description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #f1f5f9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feature-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.cta-btn.tertiary {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.cta-btn.tertiary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
}

/* IT Journey Preview Section */
.it-journey-preview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 6rem 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.it-journey-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.journey-preview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.journey-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.journey-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.journey-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.journey-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem 1rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.8;
}

.journey-paths {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 3rem;
}

.path-tag {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.path-tag:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.journey-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #1f2937;
  padding: 1.2rem 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
  transition: all 0.3s ease;
}

.journey-cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(251, 191, 36, 0.6);
  color: #1f2937;
}

.btn-arrow {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
}

.journey-cta-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.journey-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.journey-map-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
}

.journey-path {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.path-node {
  position: relative;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.path-node:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
}

.path-node::before {
  content: attr(data-label);
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.path-node:hover::before {
  opacity: 1;
}

.path-node.start {
  background: linear-gradient(135deg, #10b981, #059669);
  border-color: #10b981;
  animation: nodeGlow 2s ease-in-out infinite;
}

.path-node.foundation {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-color: #3b82f6;
  animation: nodeGlow 2s ease-in-out infinite 0.4s;
}

.path-node.intermediate {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border-color: #8b5cf6;
  animation: nodeGlow 2s ease-in-out infinite 0.8s;
}

.path-node.advanced {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-color: #f59e0b;
  animation: nodeGlow 2s ease-in-out infinite 1.2s;
}

.path-node.expert {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border-color: #ef4444;
  animation: nodeGlow 2s ease-in-out infinite 1.6s;
}

@keyframes nodeGlow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
  }
}

.node-icon {
  font-size: 1.8rem;
}

.path-connector {
  width: 4px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
  border-radius: 2px;
  position: relative;
}

.path-connector::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: dotMove 2s ease-in-out infinite;
}

@keyframes dotMove {
  0% { top: 0; opacity: 1; }
  100% { top: 32px; opacity: 0; }
}

.skill-bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: float 3s ease-in-out infinite;
}

.bubble-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.bubble-2 {
  top: 20%;
  right: 15%;
  animation-delay: 0.5s;
}

.bubble-3 {
  top: 40%;
  left: 5%;
  animation-delay: 1s;
}

.bubble-4 {
  top: 60%;
  right: 10%;
  animation-delay: 1.5s;
}

.bubble-5 {
  bottom: 20%;
  left: 15%;
  animation-delay: 2s;
}

.bubble-6 {
  bottom: 10%;
  right: 20%;
  animation-delay: 2.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

.career-cluster {
  text-align: center;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 20px;
  margin: 2rem 0;
  width: 100%;
}

.cluster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
}

.cluster-box {
  width: 100%;
  max-width: 320px;
  background: #ffffff;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.4s ease;
  text-align: center;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.cluster-box:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(102, 126, 234, 0.2);
}

.cluster-icon {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0;
  margin-bottom: 0;
  transition: all 0.4s ease;
}

.cluster-box:hover .cluster-icon {
  transform: scale(1.08);
}

.cluster-label {
  font-size: 1.1rem;
  line-height: 1.4;
  color: #1f2937;
  font-weight: 600;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  margin: 0;
  border-radius: 0 0 20px 20px;
}

.features {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  margin-top: 0;
}

.feature-hero {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 500px;
}

.feature-content {
  flex: 1;
  max-width: 500px;
}

.feature-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #1f2937;
}

.title-line {
  display: block;
}

.title-line.highlight {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-description {
  font-size: 1.4rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.feature-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.feature-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.feature-images {
  flex: 1;
  position: relative;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.main-image {
  width: 280px;
  height: 380px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.secondary-image {
  width: 240px;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  transition: all 0.3s ease;
}

.main-image:hover,
.secondary-image:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.career-stories-section {
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  text-align: center;
  padding: 2rem;
}

.career-stories-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.stories-cta {
  margin-top: 2rem;
}

.story-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.uni-explorer-section {
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  text-align: center;
  padding: 2rem;
}

.uni-explorer-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.explorer-cta {
  margin-top: 2rem;
}

.explorer-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.explorer-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
}

.footer {
  background-color: #0f172a;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  font-size: 1rem;
  margin-top: 4rem;
  border-top: 3px solid #6366f1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .journey-preview-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .journey-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .journey-map-container {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
  
  .prev-btn {
    left: 1rem;
  }
  
  .next-btn {
    right: 1rem;
  }
  
  .carousel-indicators {
    bottom: 1rem;
  }
  
  .cluster-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .cluster-box {
    max-width: 100%;
  }
  
  .cluster-icon {
    height: 160px;
  }
  
  .overlay {
    max-width: 95%;
    padding: 1.5rem;
  }
  
  .main-title {
    font-size: 2.2rem;
  }
  
  .sub-title {
    font-size: 1.3rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn {
    width: 200px;
  }
  
  .feature-hero {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  .feature-title {
    font-size: 2.8rem;
  }
  
  .journey-title {
    font-size: 2.5rem;
  }
  
  .journey-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .journey-paths {
    justify-content: center;
  }
  
  .skill-bubble {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
  
  .career-stories-image {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .overlay {
    padding: 1rem;
    margin: 0 10px;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .sub-title {
    font-size: 1.1rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .carousel-indicators {
    gap: 0.5rem;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
  }
  
  .cluster-icon {
    height: 140px;
  }
  
  .cluster-label {
    font-size: 1rem;
    padding: 1rem;
  }
  
  .feature-title {
    font-size: 2.2rem;
  }
  
  .feature-description {
    font-size: 1.1rem;
  }
  
  .feature-images {
    flex-direction: column;
    align-items: center;
  }
  
  .main-image {
    width: 280px;
    height: 300px;
  }
  
  .secondary-image {
    width: 240px;
    height: 260px;
    margin-top: 1rem;
  }
  
  .it-journey-preview {
    padding: 3rem 0;
  }
  
  .journey-title {
    font-size: 2rem;
  }
  
  .journey-subtitle {
    font-size: 1.2rem;
  }
  
  .journey-description {
    font-size: 1rem;
  }
  
  .journey-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .journey-map-container {
    height: 250px;
  }
  
  .path-node {
    width: 60px;
    height: 60px;
  }
  
  .node-icon {
    font-size: 1.4rem;
  }
  
  .career-stories-section {
    padding: 1rem;
  }
  
  .uni-explorer-section {
    padding: 1rem;
  }
}

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
</style>