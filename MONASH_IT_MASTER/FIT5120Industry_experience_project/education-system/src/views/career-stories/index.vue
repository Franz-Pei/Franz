<template>
  <div class="career-stories bg-light min-vh-100">
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
              <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/test" active-class="active">Career Quiz</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/career-stories" active-class="active">Career Stories</router-link>
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

    <!-- Page Header -->
    <div class="container py-5 text-center">
      <h1 class="fw-bold mb-3">Career Stories</h1>
      <p class="text-muted fs-5">Explore experiences and real stories shared by professionals</p>
    </div>

    <!-- Category Buttons -->
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow border-0 rounded-4">
            <div class="card-body p-4">
              <h5 class="text-center fw-semibold mb-3">Browse Career Categories</h5>
              <div class="d-flex flex-wrap gap-2 justify-content-center">
                <button
                  v-for="category in filteredCategories"
                  :key="category"
                  class="btn btn-outline-primary category-btn"
                  @click="filterByCategory(category)"
                >
                  {{ category }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Story List -->
    <div v-if="stories.length > 0" class="container pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="story-feed-no-card">
            <h4 class="mb-0">Stories from Reddit</h4>
            <div class="story-feed-divider"></div>
            <div v-for="(story, index) in stories" :key="index" class="story-feed-item">
              <a :href="story.url" target="_blank" rel="noopener noreferrer" class="story-title-link">
                {{ story.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container pb-5 text-center">
      <p class="text-muted">No stories found. Please select a different category.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import storyData from '@/assets/data/career_stories.json';

const categories = [
  'Agriculture', 'Business', 'Creative Arts', 'Education',
  'Engineering', 'Health', 'IT & Data', 'Law', 'Math'
];

const stories = ref([]);
const careerStories = ref(storyData);
const filteredCategories = computed(() => categories);

const filterByCategory = (category) => {
  // Get stories from the selected category
  stories.value = careerStories.value[category] || [];
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
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

/* Category button styles */
.category-btn {
  border-width: 2px;
  border-radius: 999px;
  padding: 8px 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}
.category-btn:hover {
  background-color: #0d6efd;
  color: white;
}

/* Main container for stories */
.story-feed-no-card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

/* Divider under 'Stories from Reddit' */
.story-feed-divider {
  border-bottom: 1px solid #e6e6e6;
  margin: 12px 0;
}

/* Each story row */
.story-feed-item {
  padding: 12px 0;
  border-bottom: 1px solid #e6e6e6;
}
.story-feed-item:last-child {
  border-bottom: none;
}

/* Link styling */
.story-title-link {
  font-size: 1.05rem;
  color: #0d6efd;
  font-weight: 600;
  text-decoration: none;
}
.story-title-link:hover {
  text-decoration: underline;
}

/* Background */
.bg-light {
  background-color: #f8f9fa;
}
</style>
