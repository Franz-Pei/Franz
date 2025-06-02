<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <video autoplay muted loop class="video-bg">
        <source src="@/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div class="overlay">
        <h1 class="main-title">
          Not Sure About Your Future? <br />Let’s Explore It Together!
        </h1>
        <p class="subtitle">
          Interactive quizzes, real stories, and smart career advice — made just
          for you.
        </p>
        <router-link to="/test" class="btn">Start Quiz</router-link>
      </div>
    </section>

    <!-- Career Cluster -->
    <section class="career-cluster">
      <h2 class="section-title">🎯 Interactive Career Cluster</h2>
      <p class="subtitle">Choose a path to explore. Hover for a surprise!</p>
      <div class="cluster-grid">
        <div
          v-for="(item, index) in clusters"
          :key="index"
          class="cluster-box"
          @click="handleClick(item)"
        >
          <div :class="['icon', item.animationClass]">{{ item.icon }}</div>
          <span class="cluster-label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <!-- Featured Major  -->
    <div class="featured-container">
      <section class="featured-major">
        <div class="image">
          <img src="@/assets/student4.png" alt="Student" />
        </div>
        <!-- <div class="info">
          <h3>Found A Career You’re Interested In?</h3>
          <p>There’s More Than One Path to Get There.</p>
          <button class="btn">Learn More</button>
        </div> -->
      </section>
    </div>

    <!-- Footer -->
    <footer class="footer text-center p-4 bg-dark text-white">
      <p>&copy; 2025 CareerPath Finder. All rights reserved.</p>
      <p>
      <!--Add a subjects query entrance -->
        <router-link class="link" style="color: #fff" to="/subject"
          >Search Subjects</router-link
        >
      </p>
      <p>
      <!--Add a Secondary Colleges query entrance -->
        <router-link class="link" style="color: #fff" to="/secondary-college"
          >Search Secondary Colleges</router-link
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const clusters = [
  {
    label: "Agriculture, Environment & Natural Sciences",
    value: "Agriculture Environment And Natural Sciences",
    icon: "🌱",
    animationClass: "hover-draw",
  },
  {
    label: "Business & Management",
    value: "Business And Management",
    icon: "💼",
    animationClass: "hover-code",
  },
  {
    label: "Creative Arts, Media, Communication & Journalism",
    value: "Creative Arts Media Communication and Journalism",
    icon: "🎨",
    animationClass: "hover-draw",
  },
  {
    label: "Education & Social Sciences",
    value: "Education And Social Sciences",
    icon: "📚",
    animationClass: "hover-flipbook",
  },
  {
    label: "Engineering & Science",
    value: "Engineering And Science",
    icon: "🔬",
    animationClass: "hover-code",
  },
  {
    label: "Health & Human Services",
    value: "Health And Human Services",
    icon: "❤️",
    animationClass: "hover-heartbeat",
  },
  {
    label: "IT & Data",
    value: "IT And Data",
    icon: "💻",
    animationClass: "hover-code",
  },
  {
    label: "Law & Public Services",
    value: "Law And Public Services",
    icon: "⚖️",
    animationClass: "hover-flipbook",
  },
  {
    label: "Math & Theoretical Sciences",
    value: "Math And Theoretical Sciences",
    icon: "📐",
    animationClass: "hover-draw",
  },
];

function handleClick(item) {
  router.push({
    name: "career",
    query: { careers: item.value, type: "job" },
  });
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #111;
  line-height: 1.6;
}
.hero {
  position: relative;
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #000;
}
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.overlay {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}
.main-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.subtitle {
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
}
.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
}
.cluster-label {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
}
.btn {
  background-color: #6366f1;
  color: white;
  padding: 14px 32px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #4f46e5;
  transform: scale(1.05);
}

.career-cluster {
  text-align: center;
  padding: 60px 20px;
}
.cluster-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.cluster-box {
  background-color: #f9fafb;
  border-radius: 12px;
  width: 180px;
  height: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}
.cluster-box:hover {
  transform: translateY(-6px);
}
.icon {
  font-size: 3rem;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}
.hover-code:hover {
  transform: rotate(-5deg) scale(1.2);
}
.hover-draw:hover {
  animation: wiggle 0.6s ease-in-out;
}
.hover-heartbeat:hover {
  animation: heartbeat 1s infinite;
}
.hover-flipbook:hover {
  animation: flip 0.6s ease-in-out;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(3deg);
  }
}
@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

.featured-container {
  background: linear-gradient(135deg, #f8fcfe, #f7f7f905);
  color: #1e293b;
  padding: 80px 20px;
}

.featured-major {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.featured-major .image img {
  height: 280px;
  border-radius: 16px;
  object-fit: cover;
}

.featured-major .info {
  max-width: 400px;
  text-align: left;
}

.featured-major .info h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.featured-major .info p {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #334155;
}

.featured-major .btn {
  background-color: #6366f1;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.featured-major .btn:hover {
  background-color: #4f46e5;
  transform: scale(1.05);
}

.footer {
  background-color: #0f172a;
  color: white;
  padding: 60px 20px;
  font-size: 1rem;
  line-height: 1.8;
}

.footer p {
  margin: 0;
  font-weight: 400;
}
</style>
