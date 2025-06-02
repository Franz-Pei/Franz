<template>
    <div class="secondary-college-view">
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
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/test">Test</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/career">Career</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/subject">Subject</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/secondary-college">College</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/chatbot">Chat Bot</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="search-container">
                <h2>Find Colleges by Subject</h2>
                <div class="search-box">
                    <input type="text" v-model="subjectQuery" placeholder="Enter subject name (e.g. Computer)"
                        @keyup.enter="searchColleges">
                    <button @click="searchColleges" :disabled="isLoading">
                        {{ isLoading ? 'Searching...' : 'Search' }}
                    </button>
                </div>
            </div>

            <div v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </div>

            <div v-if="searchResults.length > 0" class="results-container">
                <div v-for="result in searchResults" :key="result.subject_id" class="subject-result">
                    <h3>{{ result.subject_name }}</h3>
                    <p class="college-count">{{ result.secondaryColleges.length }} Secondary Colleges offer this subject</p>

                    <div class="college-list">
                        <div v-for="college in result.secondaryColleges" :key="college.college_id" class="college-card">
                            <h4>{{ college.college_name }}</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="initialLoad" class="no-results">
                No results found. Try searching for a subject.
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const subjectQuery = ref(route.query.subject || '')
const searchResults = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const initialLoad = ref(true)

const searchColleges = async () => {
    if (!subjectQuery.value.trim()) {
        errorMessage.value = 'Please enter a subject name'
        return
    }
    isLoading.value = true
    errorMessage.value = ''

    try {
        const response = await axios.get('api/subject?subject_name='+subjectQuery.value.trim())
        console.log(response)
        searchResults.value = response.data.results || []
        initialLoad.value = true

        if (searchResults.value.length === 0) {
            errorMessage.value = `No colleges found offering "${subjectQuery.value}"`
        }
    } catch (error) {
        errorMessage.value = error.response?.data?.error || 'Failed to search colleges'
        searchResults.value = []
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
.search-container {
    margin-bottom: 30px;
}

.search-box {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.search-box input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.error-message {
    color: #ff4444;
    margin: 15px 0;
}

.results-container {
    margin-top: 20px;
}

.subject-result {
    margin-bottom: 30px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
}

.college-count {
    color: #666;
    margin-bottom: 15px;
}

.college-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
}

.college-card {
    padding: 15px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.no-results {
    text-align: center;
    margin-top: 30px;
    color: #666;
}
</style>