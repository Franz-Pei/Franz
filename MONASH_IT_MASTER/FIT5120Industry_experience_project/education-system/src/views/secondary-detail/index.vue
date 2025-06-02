<template>
  <div class="secondary-detail-page">
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

    <div class="container">
      <!-- Back button -->
      <div class="back-button-container">
        <button class="btn btn-outline-primary back-btn" @click="goBack">
          <i class="fas fa-arrow-left me-2"></i>
          Back
        </button>
      </div>
      
      <div class="secondary-title">
        <h2>{{ schoolName }}</h2>
      </div>
      <div class="secondary-detail">
        <div class="detail-left">
          <div class="school-card-container">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h2 class="card-title text-primary mb-4">
                  {{ schoolName }}
                </h2>

                <div class="ranking-section mb-4 p-3 bg-light rounded">
                  <span class="fw-bold">Victoria State Ranking:</span>
                  <span class="badge bg-primary ms-2">#{{ getSchoolRanking() }} / 550</span>
                </div>

                <div class="score-table">
                  <h5 class="mb-3 text-muted">Median VCE Score:</h5>
                  <table class="table table-hover">
                    <tbody>
                      <tr v-for="item in schoolData" :key="item.Year">
                        <td class="year-cell">{{ item.Year }}:</td>
                        <td class="score-cell fw-bold">{{ item.MedianVCEScore }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-muted mt-4 small">
                  <em>Data based on publicly available school performance statistics.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-container">
          <div ref="chart" style="width: 600px; height: 500px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();

import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

import { secondaryCollegeData, getSchoolData } from "./utils"
const schoolName = ref();
schoolName.value = route.query.name
const chart = ref(null);
let myChart = null;

const schoolData = ref();
schoolData.value = getSchoolData(schoolName.value)
const chartData = {
  years: schoolData.value.map(item=>item.Year),
  MedianVCEScore: schoolData.value.map(item=>item.MedianVCEScore),
};

// Handle back button click
const goBack = () => {
  // Use browser history if available
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    // Otherwise return to home page
    router.push('/');
  }
};

const getSchoolRanking = () => {
  const creentSchoolData = schoolData.value.find(item=>item.Year == "2024");
  if(creentSchoolData["SchoolRanking"]){
    return creentSchoolData["SchoolRanking"]
  }else{
    return "N/A"
  }
}
const initChart = () => {
  if (!chart.value) return;

  myChart = echarts.init(chart.value);

  const option = {
    title: {
      text: 'Median ATAR Scores Over Time',
      left: 'left'
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        console.log(params)
        return `Median ATAR <b>ATAR:${params[0].value}</b> `;
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: chartData.years,
      axisLabel: {
        color: '#666'
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      }
    },
    yAxis: {
      type: 'value',
      min: 20,
      max: 34,
      axisLabel: {
        color: '#666'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ddd'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#f5f5f5'
        }
      }
    },
    series: [{
      name: 'VCE Score',
      type: 'line',
      data: chartData.MedianVCEScore,
      symbol: 'circle', 
      symbolSize: 8,
      itemStyle: {
        color: '#1890ff'
      },
      lineStyle: {
        width: 3,
        color: '#1890ff'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
          { offset: 1, color: 'rgba(24, 144, 255, 0.1)' }
        ])
      },
      label: {
        show: true,
        formatter: '{c}',
        color: '#1890ff',
        fontWeight: 'bold'
      }
    }],
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true
    }
  };

  myChart.setOption(option);
};

const handleResize = () => {
  myChart?.resize();
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  myChart?.dispose();
});
</script>

<style scoped>
.secondary-detail-page {
  background-color: #f8f9fa;
  min-height: 100vh;
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

/* Existing styles */
.back-button-container {
  padding: 20px 0 10px 0;
}

.back-btn {
  border-radius: 25px;
  padding: 8px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #0d6efd;
}

.back-btn:hover {
  background-color: #0d6efd;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(13, 110, 253, 0.3);
}

.secondary-detail {
  display: flex;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  > div {
    flex: 1;
  }
}

.secondary-title {
  font-size: 28px;
  text-align: center;
  padding: 60px 0px;
}

.school-card-container {
  max-width: 500px;
  margin: 2rem auto;
}

.card-title {
  font-size: 1.8rem;
  border-bottom: 2px solid #0d6efd;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.ranking-section {
  font-size: 1.1rem;
}

.year-cell {
  width: 30%;
  color: #6c757d;
}

.score-cell {
  color: #0d6efd;
  font-size: 1.1rem;
}

.table-hover tbody tr:hover {
  background-color: rgba(13, 110, 253, 0.05);
}

.chart-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>