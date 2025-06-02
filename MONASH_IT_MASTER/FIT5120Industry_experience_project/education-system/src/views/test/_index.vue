<template>
    <div class="education-homepage">
        <!--header-->
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
                            <router-link class="nav-link" to="/">Main</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/test">Test</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div class="career-quiz-container container">
            <h1 class="quiz-title">Career Interest Questionnaire</h1>
            <!---quiz content--->
            <form @submit.prevent="submitQuiz">
                <!-- Question 1 -->
                <div class="question-card">
                    <h3>Q1.  Which school subjects do you actually enjoy the most?</h3>
                    <div class="options-grid">
                        <div v-for="(option, index) in questions[0].options" :key="index" class="option-item">
                            <input type="checkbox" :id="'q1-option' + index" v-model="answers[0].selected"
                                :value="option.value" @change="limitSelections(0, 3)">
                            <label :for="'q1-option' + index">
                                {{ option.text }}
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Questions 2-7 -->
                <div v-for="(question, qIndex) in questions.slice(1)" :key="qIndex + 1" class="question-card">
                    <h3>Q{{ qIndex + 2 }}. {{ question.text }}</h3>
                    <div class="options-grid">
                        <div v-for="(option, oIndex) in question.options" :key="oIndex" class="option-item">
                            <input type="checkbox" :id="'q' + (qIndex + 2) + '-option' + oIndex"
                                v-model="answers[qIndex + 1].selected" :value="option.value">
                            <label :for="'q' + (qIndex + 2) + '-option' + oIndex">
                                {{ option.text }}
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="submit-btn">Submit Questionnaire</button>
            </form>
            <!-- Results modal -->
            <div v-if="showResults" class="modal fade show" tabindex="-1"
                style="display: block; background: rgba(0,0,0,0.5)">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">Your Best Career Matches</h5>
                            <button type="button" class="btn-close btn-close-white" @click="restartQuiz"></button>
                        </div>
                        <div class="modal-body">
                            <!-- Top Recommendations Only -->
                            <div v-if="topClusters.length > 0">
                                <h4 class="text-center mb-4">
                                    <i class="bi bi-stars me-2"></i>
                                    Your top career matches:
                                </h4>
                                <div class="row g-4 justify-content-center">
                                    <div v-for="(cluster, index) in topClusters" :key="'top-' + index"
                                        class="col-md-12">
                                        <div class="card h-100 border-primary shadow">
                                            <div
                                                class="card-header bg-primary text-white d-flex justify-content-between">
                                                <h5 class="mb-0">{{ cluster.name }}</h5>
                                                <span class="badge bg-white text-primary fs-6">
                                                    {{ cluster.score }}% Match
                                                </span>
                                            </div>
                                            <div class="card-body">
                                                <h6 class="text-primary mb-3">Recommended Majors:</h6>
                                                <ul class="list-group list-group-flush mb-3">
                                                    <li v-for="(major, mIndex) in getRecommendedMajors(cluster.name)"
                                                        :key="'major-' + mIndex"
                                                        class="list-group-item d-flex align-items-center">
                                                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                                                        {{ major }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center py-4">
                                <p>No strong matches found. Please try adjusting your answers.</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="restartQuiz">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-warning" v-show="error_tips_show" id="error_tips" role="alert">
            Please complete the questionnaire before submitting!
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { questions, careerClustersData, majorRecommendations } from '@/utils/index'

// The error message field.
const error_tips_show = ref(false)
// Display survey results popup for the button.
const showResults = ref(false)
// Get recommended majors.
const getRecommendedMajors = (clusterName) => {
    return majorRecommendations[clusterName] || []
}
// Get the selected answer.
const answers = ref(
    questions.map(question => ({
        selected: []
    }))
)
// All selected type data.
const careerClusters = ref([])
// The first question allows a maximum of three options to be selected.
const limitSelections = (qIndex, max) => {
    if (answers.value[qIndex].selected.length > max) {
        answers.value[qIndex].selected = answers.value[qIndex].selected.slice(0, max)
    }
}
// Calculate the survey results.
const calculateResults = () => {
    const scoreMap = {}
    careerClustersData.forEach(cluster => {
        scoreMap[cluster.name] = 0
    })
    answers.value.forEach((answer, qIndex) => {
        answer.selected.forEach(selectedValue => {
            const question = questions[qIndex]
            const selectedOption = question.options.find(opt => opt.value === selectedValue)
            if (selectedOption) {
                selectedOption.tag.split(', ').forEach(tag => {
                    if (scoreMap[tag] !== undefined) {
                        scoreMap[tag] += 1
                    }
                })
            }
        })
    })
    const totalPossible = answers.value.reduce((sum, answer) => sum + answer.selected.length, 0)
    careerClusters.value = careerClustersData.map(cluster => {
        const clusterScore = cluster.tags.reduce((sum, tag) => sum + scoreMap[tag], 0)
        const percentage = totalPossible > 0 ? Math.round((clusterScore / totalPossible) * 100) : 0
        return {
            name: cluster.name,
            score: percentage,
            jobs: [...cluster.jobs]
        }
    }).sort((a, b) => b.score - a.score) // Sort by highest score
}
// Control fields to prevent repeated clicks.
const timeout = null;
// submit quez function
const submitQuiz = () => {
    if (answers.value.filter(item => item.selected && item.selected.length).length != answers.value.length) {
        if(!error_tips_show.value){
            error_tips_show.value = true;
            timeout = setTimeout(() => {
                error_tips_show.value = false;
            }, 3000);
        }
        return;
    }
    calculateResults()
    showResults.value = true
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
// Get the type of the highest Score.
const topScore = computed(() => {
    return careerClusters.value.length > 0
        ? Math.max(...careerClusters.value.map(c => c.score))
        : 0
})
// Get the data with the highest score.
const topClusters = computed(() => {
    return careerClusters.value.filter(c => c.score === topScore.value)
})
// reset quiz function
const restartQuiz = () => {
    answers.value.forEach(answer => answer.selected = [])
    showResults.value = false
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.career-quiz-container {
    user-select: none;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.quiz-title {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
}

.question-card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.question-card h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.question-card h3 small {
    font-size: 0.8em;
    color: #7f8c8d;
    font-weight: normal;
}

.options-grid {
    display: grid;

    gap: 12px;
}

.option-item {
    display: flex;
    align-items: flex-start;
    padding: 10px;
    background: white;
    border-radius: 5px;
    transition: background 0.2s;
}

.option-item:hover {
    background: #f1f1f1;
}

.option-item input[type="checkbox"] {
    margin-right: 10px;
    margin-top: 3px;
}

.option-item label {
    flex-grow: 1;
    cursor: pointer;
    line-height: 1.4;
}


.submit-btn {
    display: block;
    width: 100%;
    padding: 12px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 20px;
}

.submit-btn:hover {
    background: #2980b9;
}

.career-clusters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 20px;
}


.modal {
    z-index: 1050;
}

.modal-content {
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.cluster-card {
    padding: 1rem;
    margin-bottom: 1rem;
    border-left: 4px solid var(--bs-primary);
    background-color: #f8f9fa;
    border-radius: 0.25rem;
}

.cluster-card h4 {
    color: #2c3e50;
    margin-bottom: 0.75rem;
}

.career-clusters {
    display: grid;
    gap: 1rem;
}

@media (min-width: 768px) {
    .career-clusters {
        grid-template-columns: repeat(2, 1fr);
    }
}


.cluster-card {
    transition: all 0.3s ease;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
}

.cluster-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card {
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.list-group-item {
    padding: 0.5rem 1rem;
    border-left: none;
    border-right: none;
}

.list-group-item:first-child {
    border-top: none;
}

.card {
    transition: transform 0.2s;
    border-radius: 0.5rem;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-5px);
}

.list-group-item {
    border-left: none;
    border-right: none;
    padding-left: 0;
}

.badge {
    font-weight: normal;
    padding: 0.35em 0.65em;
}
#error_tips{
    position: fixed;
    left: 50%;
    top:30px;
    transform: translateX(-50%);
    z-index: 99999;
}
</style>