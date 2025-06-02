<template>
  <div class="major">
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
              <router-link class="nav-link" to="/career-stories" active-class="active">Career Stories</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/subject" active-class="active">VCE Subject Check</router-link>
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

    <div class="school-search-container">
      <!-- Search box -->
      <div class="search-box card shadow-sm mb-4">
        <div class="card-body">
          <div class="input-group">
            <input type="text" class="form-control form-control-lg"
                   placeholder="Enter a high School name only in hume region to check VCE subject availability"
                   v-model="searchQuery" @keyup.enter="searchSchools">
            <button class="btn btn-primary btn-lg" @click="searchSchools" :disabled="isLoading">
              <span v-if="!isLoading">Search</span>
              <span v-else>
                <span class="spinner-border spinner-border-sm me-1"></span>
                Searching...
              </span>
            </button>
          </div>

          <!-- Hint buttons -->
          <div class="mt-3 school-hint-buttons">
            <span class="me-2 text-muted">Try:</span>
            <div class="btn-container">
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Wallan Secondary College')">Wallan</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Seymour College')">Seymour</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Rushworth P-12 College')">Rushworth</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Yea High School')">Yea</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Wangaratta High School')">Wangaratta</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Euroa Secondary College')">Euroa</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Yarrawonga College P-12')">Yarrawonga</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Mansfield Secondary College')">Mansfield</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Beechworth Secondary College')">Beechworth</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Greater Shepparton Secondary College')">Greater Shepparton</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Wodonga Senior Secondary College')">Wodonga Senior</button>
              <button class="btn btn-outline-secondary btn-sm" @click="setSuggestion('Myrtleford P-12 College')">Myrtleford</button>
            </div>
          </div>

          <!-- TIPS -->
          <p class="text-muted mt-3 small">
            <em>!tips:  Those high schools are only from the Hume region. Other high schools are not available.</em>
          </p>

          <div v-if="errorMessage" class="alert alert-warning mt-3 mb-0">
            {{ errorMessage }}
          </div>
        </div>
      </div>

      <!-- Search results -->
      <div v-if="searchResults.length > 0" class="search-results">
        <div class="result-count mb-3">
          Found <span class="badge bg-primary">{{ searchResults.length }}</span> matching schools
        </div>

        <!-- School list -->
        <div class="school-list">
          <div v-for="school in searchResults" :key="school.id" class="school-card card mb-4">
            <div class="card-header bg-light d-flex justify-content-between align-items-center">
              <h4 class="mb-0">
                {{ school.name }}
                <a :href="getLocationLink(school.name)" target="_blank" class="text-muted ms-3">Location</a>
              </h4>
              <button class="btn btn-outline-primary btn-sm" @click="toggleSubjects(school.id)">
                {{ expandedSchools[school.id] ? 'Hide Subjects' : 'Show Subjects' }}
              </button>
            </div>
            <div class="card-body" v-if="expandedSchools[school.id]">
              <h5 class="mb-3">Offered Subject ({{ school.subjects.length }})</h5>
              <div class="subjects-container">
                <div v-for="(major, index) in school.subjects" :key="index" class="major-item card mb-2">
                  <div class="card-body py-2">
                    <h6 class="mb-1">{{ major.name }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const expandedSchools = ref({})

const setSuggestion = (term) => {
  searchQuery.value = term
  searchSchools()
}

const searchSchools = async () => {
  if (!searchQuery.value.trim()) {
    errorMessage.value = 'Please enter a school name'
    searchResults.value = []
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(`/api/secondary_colleges?college_name=${encodeURIComponent(searchQuery.value.trim())}`)
    if (!response.ok) throw new Error('Search failed, please try again later')

    const data = await response.json()
    if (data.error) throw new Error(data.error)

    searchResults.value = data.data || []
    if (searchResults.value.length === 0) {
      errorMessage.value = `No schools found containing "${searchQuery.value}"`
    }

    expandedSchools.value = {}
    searchResults.value.forEach(school => {
      expandedSchools.value[school.id] = false
    })

  } catch (err) {
    errorMessage.value = err.message
    searchResults.value = []
    expandedSchools.value = {}
  } finally {
    isLoading.value = false
  }
}

const toggleSubjects = (schoolId) => {
  expandedSchools.value[schoolId] = !expandedSchools.value[schoolId]
}

const getLocationLink = (location) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
}
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

.school-search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
}

.search-box {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
  padding: 12px 20px;
  max-width: 900px;
  width: 100%;
}

.search-results {
  width: 100%;
  max-width: 900px;
  margin-top: 24px;
  padding: 0 16px;
}

.input-group {
  display: flex;
  align-items: stretch;
}

.input-group .form-control {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 16px;
  padding: 10px 16px;
  box-shadow: none;
}

.input-group .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
}

.result-count {
  font-size: 1.1rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 1rem;
}

.school-card {
  max-width: 900px;
  margin: 0 auto 1.5rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.school-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 1.25rem;
}

.major-item {
  transition: all 0.2s ease;
  border-left: 3px solid var(--bs-primary);
}

.major-item:hover {
  background-color: #f8f9fa;
}

.school-hint-buttons .btn-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-top: 6px;
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }

  .input-group .form-control,
  .input-group .btn {
    border-radius: 8px !important;
    width: 100%;
    margin-bottom: 10px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
