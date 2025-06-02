<template>
  <div class="major">
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
              <router-link class="nav-link" to="/subject" active-class="active">VCE Subject Check</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/secondary-college" active-class="active">Alternative Schools</router-link>
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
      <div class="search-box card shadow-sm mb-4">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center">
            <!-- Search Input -->
            <div class="input-group w-100 search-bar-wrapper">
              <input type="text" class="form-control form-control-lg"
                     placeholder="Enter a VCE Subject to search for schools"
                     v-model="searchQuery"
                     @keyup.enter="searchSubjects">
              <button class="btn btn-primary btn-lg" @click="searchSubjects" :disabled="isLoading">
                <span v-if="!isLoading">Search</span>
                <span v-else>
                  <span class="spinner-border spinner-border-sm me-1"></span>
                  Searching...
                </span>
              </button>
            </div>

            <!-- Informative Tip -->
            <p class="text-muted mt-3 small search-bar-wrapper text-start">
              <em><i class="bi bi-book"></i> Browse all VCE subjects by alphabetical order. Click a letter to expand the list of subjects starting with that letter.</em>
            </p>

            <!-- Subject Suggestions -->
            <div v-if="groupedSubjects && Object.keys(groupedSubjects || {}).length > 0" class="subject-suggestions mt-2 w-100 subject-box">
              <div v-for="(group, letter) in groupedSubjects" :key="letter" class="mb-2">
                <details>
                  <summary class="fw-bold">{{ letter }} ({{ group.length }})</summary>
                  <div class="d-flex flex-wrap mt-2">
                    <button
                      v-for="subject in group"
                      :key="subject"
                      class="btn btn-outline-secondary btn-sm me-2 mb-2"
                      @click="selectSuggestion(subject)"
                    >
                      {{ subject }}
                    </button>
                  </div>
                </details>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-warning mt-3 mb-0 w-100 search-bar-wrapper">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>

      <!-- Search Result Cards -->
      <div v-if="searchResults.length > 0" class="search-results">
        <div class="result-count mb-3">
          Found <span class="badge bg-primary">{{ searchResults.length }}</span> matching subjects with colleges
        </div>

        <!-- Subject Result List -->
        <div class="school-list">
          <div v-for="subject in searchResults" :key="subject.subject_id" class="school-card card mb-4">
            <div class="card-header bg-light d-flex justify-content-between align-items-center">
              <h4 class="mb-0" style="cursor: pointer;" @click="toggleSubject(subject.subject_id)">
                {{ subject.subject_name }}
                <span class="map-link" @click="showMapModal(subject)">View Map</span>
              </h4>
              <button class="btn btn-outline-primary btn-sm" @click="toggleSubject(subject.subject_id)">
                {{ expandedSubjects[subject.subject_id] ? 'Hide Colleges' : 'Show Colleges' }}
              </button>
            </div>
            <div class="card-body" v-if="expandedSubjects[subject.subject_id]">
              <h5 class="mb-3">Offered By Colleges ({{ subject.secondaryColleges.length }})</h5>
              <div class="subjects-container">
                <div v-for="college in subject.secondaryColleges" :key="college.college_id" class="major-item card mb-2">
                  <div class="card-body py-2 d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">{{ college.college_name }}</h6>
                    <div>
                      <span class="map-link" style="margin-right: 12px;" @click="handleMarkerClick(college)">Learn More</span>
                      <a 
                        :href="getLocationLink(college.college_name)" 
                        target="_blank" 
                        class="text-muted"
                      >
                        Location
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Map Modal Component -->
  <MapModal 
    v-model:visible="showModal" 
    :college-ids="selectIds" 
    @close="onMapModalClose"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from "vue-router"
import MapModal from './modal/index.vue'

const router = useRouter()
const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const expandedSubjects = ref({})
const groupedSubjects = ref({})
const selectIds = ref('')
const showModal = ref(false)

// Search subjects based on input
const searchSubjects = async () => {
  if (!searchQuery.value.trim()) {
    errorMessage.value = 'Please enter a subject name'
    searchResults.value = []
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(`/api/subject?subject_name=${encodeURIComponent(searchQuery.value.trim())}`)
    if (!response.ok) throw new Error('Search failed, please try again later')

    const data = await response.json()
    if (data.error) throw new Error(data.error)

    searchResults.value = data.results || []
    if (searchResults.value.length === 0) {
      errorMessage.value = data.message || `No subjects with colleges found matching "${searchQuery.value}"`
    }

    expandedSubjects.value = {}
    searchResults.value.forEach(subject => {
      expandedSubjects.value[subject.subject_id] = false
    })

  } catch (err) {
    errorMessage.value = err.message
    searchResults.value = []
    expandedSubjects.value = {}
  } finally {
    isLoading.value = false
  }
}

// Navigate to school detail page
const handleMarkerClick = (college) => {
  router.push({
    name: "secondaryDetail",
    query: { name: college.college_name },
  })
}

// Toggle college list for each subject
const toggleSubject = (subjectId) => {
  expandedSubjects.value[subjectId] = !expandedSubjects.value[subjectId]
}

// Get Google Map search URL for a location
const getLocationLink = (location) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
}

// When clicking a suggestion
const selectSuggestion = (subject) => {
  searchQuery.value = subject
  searchSubjects()
}

// Load all subjects grouped alphabetically
const loadSubjectSuggestions = async () => {
  try {
    const response = await fetch('/api/all_subjects')
    const data = await response.json()
    groupedSubjects.value = data || {}
  } catch (err) {
    console.error('Failed to load subject suggestions', err)
    groupedSubjects.value = {}
  }
}

// Show map modal for a subject
const showMapModal = (subject) => {
  selectIds.value = subject.secondaryColleges.map(item => item.college_id).join(',')
  showModal.value = true
}

// Reset selected IDs on modal close
const onMapModalClose = () => {
  selectIds.value = ""
}

onMounted(() => {
  loadSubjectSuggestions()
})
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
  margin-bottom: 24px;
}

.search-bar-wrapper {
  max-width: 600px;
  width: 100%;
}

.subject-box {
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.subject-suggestions button {
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 0.95rem;
  transition: background-color 0.2s;
}

.subject-suggestions button:hover {
  background-color: #e9ecef;
}

.search-results {
  width: 100%;
  max-width: 900px;
  padding: 0 16px;
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

.map-link {
  color: #1890ff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
}

.map-link:hover {
  color: #40a9ff;
}
</style>
