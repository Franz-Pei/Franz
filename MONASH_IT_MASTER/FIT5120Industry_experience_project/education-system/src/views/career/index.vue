<template>
  <div class="education-homepage">
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <span class="fw-bold">Education System</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Main</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/test">Test</router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link active" to="/career">Career</router-link></li> -->
            <li class="nav-item"><router-link class="nav-link" to="/career-stories">Career Stories</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/subject">High School</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/secondary-college">Subject</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/chatbot">Chat Bot</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/three">Our University</router-link></li>
            
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <h1 class="mb-4 text-center">Career and University Major Matching</h1>

      <div v-if="!hasCareersParam" class="card shadow-sm">
        <div class="card-body text-center py-5">
          <i class="bi bi-info-circle-fill text-primary fs-1 mb-3"></i>
          <h3 class="card-title">Please take the career test first</h3>
          <p class="card-text">No career parameter provided. Please complete the career test to view matching results.</p>
          <router-link to="/test" class="btn btn-primary btn-lg">
            <i class="bi bi-clipboard2-pulse me-2"></i>Start Career Test
          </router-link>
        </div>
      </div>

      <div v-else-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading data...</p>
      </div>

      <div v-else-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>

      <div v-else-if="careerData.length > 0">
        <!-- Navigation -->
        <div class="career-nav card p-3 mb-4 shadow-sm">
          <h5 class="mb-3 text-primary">Jump to Career</h5>
          <div class="d-flex flex-wrap gap-2">
            <a v-for="(item, index) in uniqueCareers"
               :key="'nav-' + index"
               class="btn btn-outline-primary btn-sm"
               @click.prevent="() => {
                 toggleCareer(item.career.career_name)
                 if (expandedCareer === item.career.career_name) {
                   document.getElementById('career-' + item.career.career_name.replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })
                 }
               }"
            >
              {{ item.career.career_name }}
            </a>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-1 g-4">
          <div
            v-for="(item, index) in careerData"
            :key="index"
            :id="'career-' + item.career.career_name.replace(/\s+/g, '-')"
            class="col"
            v-show="expandedCareer === item.career.career_name"
          >
            <div class="card h-100 shadow-sm">
              <div class="card-header bg-primary text-white">
                <h5 class="card-title mb-0">{{ item.career.career_name }}</h5>
              </div>
              <div class="card-body">
                <h6 class="card-subtitle mb-3 text-muted">
                  <i class="bi bi-building me-2"></i>{{ item.uni_major.uni_name }}
                </h6>
                <div class="mb-3">
                  <span class="badge bg-info text-dark me-2">
                    <i class="bi bi-book me-1"></i>{{ item.uni_major.major.major_name }}
                  </span>
                  <span class="badge bg-secondary">
                    <i class="bi bi-code me-1"></i>{{ item.uni_major.major.course_code }}
                  </span>
                </div>
                <ul class="list-group list-group-flush mb-3">
                  <li class="list-group-item">
                    <i class="bi bi-star-fill text-warning me-2"></i>
                    <strong>ATAR Requirement:</strong> {{ item.uni_major.atar }}
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-clock text-primary me-2"></i>
                    <strong>Duration:</strong> {{ item.uni_major.duration }}
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-bookmark-check text-success me-2"></i>
                    <strong>Entry Requirements:</strong> {{ item.uni_major.subjects }}
                  </li>
                </ul>
              </div>
              <div class="card-footer bg-light">
                <small class="text-muted">
                  Career ID: {{ item.career_id }} | Major ID: {{ item.uni_major_id }} 
                  <p> Note: All data used in this project was collected from Australian university official websites in 2024.</p>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="alert alert-info" role="alert">
        you can choose whatever you want
      </div>

      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-info btn-lg">
          <i class="bi bi-house-door-fill me-2"></i>Return to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const careerData = ref([])
const loading = ref(false)
const error = ref(null)

const expandedCareer = ref(null)

const toggleCareer = (careerName) => {
  expandedCareer.value = expandedCareer.value === careerName ? null : careerName
}

const hasCareersParam = computed(() => {
  return route.query.careers && route.query.careers.trim() !== ''
})

const uniqueCareers = computed(() => {
  const seen = new Set()
  return careerData.value.filter(item => {
    if (seen.has(item.career.career_name)) return false
    seen.add(item.career.career_name)
    return true
  })
})

const fetchCareerData = async (careerNames) => {
  try {
    loading.value = true
    error.value = null
    let query = ''
    if (route.query.type) query = `&type=${route.query.type}`
    const response = await axios.get(`/api/getUniInfo?career_names=${careerNames.join(',')}${query}`)
    await new Promise(resolve => setTimeout(resolve, 800))
    careerData.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch data: ' + (err.message || 'Unknown error')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (hasCareersParam.value) {
    const careerNames = route.query.careers.split(',')
    fetchCareerData(careerNames)
  }
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.card {
  transition: transform 0.2s;
  border-radius: 10px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 1rem 1.25rem;
}

.card-title {
  font-weight: 600;
}

.list-group-item {
  padding: 0.75rem 1.25rem;
}

.badge {
  padding: 0.5em 0.75em;
  font-weight: 500;
}

.career-nav {
  max-width: 100%;
  background-color: #f8f9fa;
  border-radius: 10px;
}

.career-nav a {
  text-decoration: none;
  font-weight: 500;
}

.card .bi-info-circle-fill {
  font-size: 3rem;
}

.btn-lg {
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
}
</style>
