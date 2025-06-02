<template>
  <div class="education-homepage">
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
              <router-link class="nav-link active" to="/test" active-class="active">Career Quiz</router-link>
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
    <div class="career-quiz-container container">
      <h1 class="quiz-title">Career Interest Questionnaire</h1>

      <form @submit.prevent="submitQuiz">
        <!-- question 1 -->
        <div class="question-card">
          <h3>
            Q1. Which school subjects do you actually enjoy the most?
            <small>(Pick up to 3)</small>
          </h3>
          <div class="options-grid">
            <div v-for="(option, index) in questions[0].options" :key="index" class="option-item">
              <input type="checkbox" :id="'q1-option' + index" v-model="answers[0].selected" :value="option.value"
                @change="limitSelections(0, 3)" />
              <label :for="'q1-option' + index">
                {{ option.text
                }}<!--  <span class="career-tag">{{ option.tags.join(', ') }}</span> -->
              </label>
            </div>
          </div>
        </div>

        <!-- question 2-9 -->
        <div v-for="(question, qIndex) in questions.slice(1)" :key="qIndex + 1" class="question-card">
          <h3>Q{{ qIndex + 2 }}. {{ question.text }}</h3>
          <div class="options-grid">
            <div v-for="(option, oIndex) in question.options" :key="oIndex" class="option-item">
              <input type="checkbox" :id="'q' + (qIndex + 2) + '-option' + oIndex"
                v-model="answers[qIndex + 1].selected" :value="option.value" />
              <label :for="'q' + (qIndex + 2) + '-option' + oIndex">
                {{ option.text
                }}<!--  <span class="career-tag">{{ option.tags.join(', ') }}</span> -->
              </label>
            </div>
          </div>
        </div>

        <button type="submit" class="submit-btn">Submit Questionnaire</button>
      </form>

      <!-- modal -->
      <div v-if="showResults" class="modal fade show" tabindex="-1"
        style="display: block; background: rgba(0, 0, 0, 0.5)">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title">Your Career Clusters</h5>
              <button type="button" class="btn-close btn-close-white" @click="showResults = false"></button>
            </div>
            <div class="modal-body">
              <div v-if="topClusters.length > 0" class="top-recommendations">
                <h4 class="text-center mb-4">
                  <i class="bi bi-stars me-2"></i>
                  Your Top Career Matches
                </h4>

                <div class="row g-4">
                  <div v-for="(cluster, index) in topClusters" :key="index" class="col-md-12">
                    <div class="card h-100 border-primary shadow-sm">
                      <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">{{ cluster.name }}</h5>
                      </div>
                      <div class="card-body">
                        <div class="progress mb-3" style="height: 20px">
                          <div class="progress-bar" :class="getProgressBarClass(index)" role="progressbar"
                            :style="{ width: cluster.score + '%' }">
                            {{ cluster.score + "%" }}
                          </div>
                        </div>
                        <h6 class="text-primary">Recommended Careers:</h6>
                        <div class="d-flex flex-wrap gap-2 mb-3">
                          <span v-for="(job, jIndex) in cluster.jobs" :key="jIndex" class="badge bg-light text-dark">
                            {{ job }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showResults = false">
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="restartQuiz">
                Re-Test
              </button>
              <button
                 type="button"
                 class="btn btn-info"
                 @click="goHome"
               >
                 Return to Home
               </button>
              <button type="button" class="btn btn-success" @click="toCareerPage">
                Career
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
import { ref, computed } from "vue";
import { questions, careerClustersData } from "@/utils/index";
import { useRouter } from "vue-router";
const router = useRouter();
// The error message field.
const error_tips_show = ref(false);
// Initialize the answer array.
const answers = ref(
  questions.map((question) => ({
    selected: [],
  }))
);
const showResults = ref(false);
const careerClusters = ref([]);

// Initialize the answer.
const initAnswers = () => {
  answers.value = questions.map(() => ({
    selected: [],
  }));
};

// Limit the number of selections.
const limitSelections = (qIndex, max) => {
  if (answers.value[qIndex].selected.length > max) {
    answers.value[qIndex].selected = answers.value[qIndex].selected.slice(
      0,
      max
    );
  }
};

// Calculate the highest score.
const topScore = computed(() => {
  return careerClusters.value.length > 0
    ? Math.max(...careerClusters.value.map((c) => c.score))
    : 0;
});

// Get the highest score cluster.
const topClusters = computed(() => {
  return careerClusters.value.filter((c) => c.score === topScore.value);
});

// Get the progress bar color.
const getProgressBarClass = (index) => {
  const colors = [
    "bg-primary",
    "bg-success",
    "bg-info",
    "bg-warning",
    "bg-danger",
    "bg-secondary",
  ];
  return colors[index % colors.length];
};

// Calculate the result.
const calculateResults = () => {
  // Create a score mapping.
  const scoreMap = {};
  careerClustersData.forEach((cluster) => {
    cluster.tags.forEach((tag) => {
      scoreMap[tag] = 0;
    });
  });

  // Calculate the score for each label.
  answers.value.forEach((answer, qIndex) => {
    answer.selected.forEach((selectedValue) => {
      const question = questions[qIndex];
      const selectedOption = question.options.find(
        (opt) => opt.value === selectedValue
      );
      if (selectedOption) {
        selectedOption.tags.forEach((tag) => {
          if (scoreMap[tag] !== undefined) {
            scoreMap[tag] += 1;
          }
        });
      }
    });
  });

  // Convert to percentage.
  const totalPossible = answers.value.reduce(
    (sum, answer) => sum + answer.selected.length,
    0
  );

  // Prepare the results.
  careerClusters.value = careerClustersData
    .map((cluster) => {
      const clusterScore = cluster.tags.reduce(
        (sum, tag) => sum + (scoreMap[tag] || 0),
        0
      );
      const percentage =
        totalPossible > 0
          ? Math.round((clusterScore / totalPossible) * 100)
          : 0;

      return {
        name: cluster.name,
        score: percentage,
        jobs: [...cluster.jobs],
      };
    })
    .sort((a, b) => b.score - a.score);
};

// Submit the survey.
const submitQuiz = () => {
  if (
    answers.value.filter((item) => item.selected && item.selected.length)
      .length != answers.value.length
  ) {
    if (!error_tips_show.value) {
      error_tips_show.value = true;
      timeout = setTimeout(() => {
        error_tips_show.value = false;
      }, 3000);
    }
    return;
  }
  calculateResults();
  showResults.value = true;
};
const toCareerPage = () => {
  console.log(topClusters);
  if (topClusters.value.length) {
    let careerNames = "";
    topClusters.value.forEach((cluster) => {
      careerNames += cluster.jobs.join(",");
    });
    router.push({ name: "career", query: { careers: careerNames } });
  }
};
// Retest.
const restartQuiz = () => {
  initAnswers();
  showResults.value = false;
  careerClusters.value = [];
};
//Return to Home
const goHome = () => {
   router.push("/");
 };
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

.career-quiz-container {
  user-select: none;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  color: #6c757d;
  font-weight: normal;
}

.options-grid {
  display: grid;
  gap: 12px;
}

.option-item {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  background: white;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  transition: all 0.2s;
}

.option-item:hover {
  border-color: #adb5bd;
  background: #f8f9fa;
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

.career-tag {
  display: block;
  font-size: 0.75em;
  color: #6c757d;
  margin-top: 3px;
  font-style: italic;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 20px;
}

.submit-btn:hover {
  background: #0b5ed7;
}

.modal {
  z-index: 1050;
}

.modal-content {
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card {
  transition: transform 0.2s;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-weight: 600;
}

.progress {
  height: 0.5rem;
}

.badge {
  font-weight: 500;
  padding: 0.35em 0.65em;
}

#error_tips {
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  z-index: 99999;
}

@media (max-width: 768px) {
  .options-grid {
    grid-template-columns: 1fr;
  }

  .modal-dialog {
    margin: 1rem;
  }
}
</style>
