<template>
  <div class="it-journey-map">
    <!-- Header -->
    <div class="header-section">
      <div class="container">
        <h1 class="page-title"> IT Career Journey Map</h1>
        <p class="page-subtitle">
          Explore different IT career paths and discover the step-by-step journey to your dream job. 
          Each path shows skills, projects, and certifications needed at every stage.
        </p>
      </div>
    </div>

    <div class="container">
      <!-- Career Paths Grid -->
      <div v-if="!showDetails" class="paths-section">
        <div class="section-header">
          <h2 class="section-title">Choose Your IT Career Path</h2>
          <p class="section-subtitle">Click on any career path to see the detailed journey map</p>
        </div>
        
        <div class="paths-grid">
          <div 
            v-for="(path, key) in itPaths" 
            :key="key"
            class="path-card"
            :class="{ 'animated': animatedElements.has(key) }"
            @click="handlePathSelect(key)"
          >
            <div class="card-gradient" :class="path.colorClass">
              <div class="card-decoration"></div>
              <div class="card-content">
                <div class="card-header">
                  <div class="icon-container">
                    <component :is="getIconComponent(path.icon)" class="path-icon" />
                  </div>
                  <div class="demand-badge">
                    <TrendingUpIcon class="demand-icon" />
                    {{ path.demand }}
                  </div>
                </div>
                
                <h3 class="path-title">{{ path.title }}</h3>
                <p class="path-description">{{ path.description }}</p>
                
                <div class="path-stats">
                  <div class="stat-item">
                    <DollarSignIcon class="stat-icon" />
                    {{ path.salary }}
                  </div>
                  <div class="stat-item">
                    <ClockIcon class="stat-icon" />
                    {{ path.timeline }}
                  </div>
                </div>
                
                <div class="card-action">
                  <span class="action-text">Click to explore journey</span>
                  <ChevronRightIcon class="arrow-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Stats -->
        <div class="stats-section">
          <h3 class="stats-title">Why Choose IT?</h3>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number blue">$95k</div>
              <div class="stat-label">Average IT Salary</div>
            </div>
            <div class="stat-card">
              <div class="stat-number green">22%</div>
              <div class="stat-label">Job Growth Rate</div>
            </div>
            <div class="stat-card">
              <div class="stat-number purple">3.5M</div>
              <div class="stat-label">Open IT Jobs</div>
            </div>
            <div class="stat-card">
              <div class="stat-number orange">Remote</div>
              <div class="stat-label">Work Flexibility</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Journey View -->
      <div v-else class="journey-section">
        <div class="journey-header">
          <button @click="showDetails = false" class="back-button">
            ← Back to Career Paths
          </button>
          
          <div class="journey-title-section">
            <h2 class="journey-main-title">
              <component :is="getIconComponent(itPaths[selectedPath].icon)" class="title-icon" />
              {{ itPaths[selectedPath].title }} Journey
            </h2>
            <p class="journey-description">{{ itPaths[selectedPath].description }}</p>
          </div>
          
          <div class="timeline-info">
            Timeline: {{ itPaths[selectedPath].timeline }}
          </div>
        </div>

        <!-- Journey Timeline -->
        <div class="timeline-section">
          <div class="timeline-container">
            <div 
              v-for="(step, index) in itPaths[selectedPath].steps" 
              :key="index"
              class="timeline-item"
              :class="{ 'active': index === currentStep, 'completed': index < currentStep }"
            >
              <button @click="handleStepClick(index)" class="timeline-button">
                <AwardIcon v-if="index < currentStep" class="check-icon" />
                <span v-else class="step-number">{{ index + 1 }}</span>
              </button>
              <div class="timeline-label">{{ step.phase }}</div>
              <div v-if="index < itPaths[selectedPath].steps.length - 1" class="timeline-connector"></div>
            </div>
          </div>
        </div>

        <!-- Current Step Details -->
        <div class="step-details">
          <div class="steps-navigation">
            <div 
              v-for="(step, index) in itPaths[selectedPath].steps" 
              :key="index"
              class="step-card"
              :class="{ 'active': index === currentStep }"
              @click="handleStepClick(index)"
            >
              <div class="step-header">
                <h4 class="step-title">Phase {{ index + 1 }}: {{ step.phase }}</h4>
                <div class="step-duration">{{ step.duration }}</div>
              </div>
              
              <div class="step-preview">
                <div class="preview-section">
                  <h5>Key Skills:</h5>
                  <div class="skill-tags">
                    <span v-for="(skill, idx) in step.skills.slice(0, 3)" :key="idx" class="skill-tag">
                      {{ skill }}
                    </span>
                  </div>
                </div>
                
                <div class="preview-section">
                  <h5>Sample Projects:</h5>
                  <ul class="project-list">
                    <li v-for="(project, idx) in step.projects.slice(0, 2)" :key="idx">
                      {{ project }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Detailed Information -->
          <div class="step-content">
            <div class="content-header">
              <h3 class="content-title">
                Phase {{ currentStep + 1 }}: {{ itPaths[selectedPath].steps[currentStep].phase }}
              </h3>
              <div class="content-meta">
                <ClockIcon class="meta-icon" />
                Duration: {{ itPaths[selectedPath].steps[currentStep].duration }}
              </div>
            </div>

            <div class="content-grid">
              <!-- Skills -->
              <div class="content-section">
                <h4 class="section-header">
                  <StarIcon class="section-icon star" />
                  Key Skills to Develop
                </h4>
                <div class="skills-list">
                  <div 
                    v-for="(skill, idx) in itPaths[selectedPath].steps[currentStep].skills" 
                    :key="idx" 
                    class="skill-item"
                  >
                    <div class="skill-dot"></div>
                    <span>{{ skill }}</span>
                  </div>
                </div>
              </div>

              <!-- Projects -->
              <div class="content-section">
                <h4 class="section-header">
                  <CodeIcon class="section-icon code" />
                  Recommended Projects
                </h4>
                <div class="projects-list">
                  <div 
                    v-for="(project, idx) in itPaths[selectedPath].steps[currentStep].projects" 
                    :key="idx" 
                    class="project-item"
                  >
                    <div class="project-dot"></div>
                    <span>{{ project }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div class="certifications-section">
              <h4 class="section-header">
                <AwardIcon class="section-icon award" />
                Relevant Certifications
              </h4>
              <div class="certifications-grid">
                <div 
                  v-for="(cert, idx) in itPaths[selectedPath].steps[currentStep].certifications" 
                  :key="idx" 
                  class="certification-item"
                >
                  <AwardIcon class="cert-icon" />
                  <span>{{ cert }}</span>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="step-navigation">
              <button
                @click="handleStepClick(Math.max(0, currentStep - 1))"
                :disabled="currentStep === 0"
                class="nav-button prev"
              >
                ← Previous Phase
              </button>
              
              <button
                @click="handleStepClick(Math.min(itPaths[selectedPath].steps.length - 1, currentStep + 1))"
                :disabled="currentStep === itPaths[selectedPath].steps.length - 1"
                class="nav-button next"
              >
                Next Phase →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 图标组件导入
const CodeIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline></svg>' }
const BrainIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3c0 1.5-1.5 3-3 3s-3 1.5-3 3 1.5 3 3 3c1.5 0 3 1.5 3 3a3 3 0 0 0 6 0c0-1.5 1.5-3 3-3s3-1.5 3-3-1.5-3-3-3c-1.5 0-3-1.5-3-3a3 3 0 0 0-3-3z"></path></svg>' }
const ShieldIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>' }
const CloudIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>' }
const SmartphoneIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>' }
const ZapIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon></svg>' }
const TrendingUpIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline><polyline points="17,6 23,6 23,12"></polyline></svg>' }
const DollarSignIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>' }
const ClockIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>' }
const ChevronRightIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>' }
const AwardIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline></svg>' }
const StarIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>' }

// State
const selectedPath = ref(null)
const currentStep = ref(0)
const showDetails = ref(false)
const animatedElements = ref(new Set())

// Icon mapping
const getIconComponent = (iconName) => {
  const iconMap = {
    'code': CodeIcon,
    'brain': BrainIcon,
    'shield': ShieldIcon,
    'cloud': CloudIcon,
    'smartphone': SmartphoneIcon,
    'zap': ZapIcon
  }
  return iconMap[iconName] || CodeIcon
}

// IT Career Paths Data
const itPaths = ref({
  'software-development': {
    title: 'Software Development',
    icon: 'code',
    colorClass: 'blue-purple',
    description: 'Build applications, websites, and software systems',
    salary: '$70k - $150k+',
    demand: 'Very High',
    timeline: '2-4 years',
    steps: [
      {
        phase: 'Foundation',
        duration: '6-12 months',
        skills: ['HTML/CSS', 'JavaScript', 'Git', 'Problem Solving'],
        projects: ['Personal Portfolio', 'Simple Calculator', 'To-Do App'],
        certifications: ['FreeCodeCamp Certificates', 'Codecademy Pro']
      },
      {
        phase: 'Intermediate',
        duration: '12-18 months',
        skills: ['React/Vue', 'Node.js', 'Databases', 'APIs'],
        projects: ['E-commerce Site', 'Social Media App', 'Weather Dashboard'],
        certifications: ['AWS Cloud Practitioner', 'Google Developer Certification']
      },
      {
        phase: 'Advanced',
        duration: '18-24 months',
        skills: ['System Design', 'DevOps', 'Testing', 'Security'],
        projects: ['Full-Stack Applications', 'Open Source Contributions', 'Microservices'],
        certifications: ['AWS Solutions Architect', 'Professional Scrum Master']
      },
      {
        phase: 'Expert',
        duration: 'Ongoing',
        skills: ['Architecture', 'Leadership', 'Mentoring', 'Innovation'],
        projects: ['Enterprise Applications', 'Tech Leadership', 'Product Strategy'],
        certifications: ['Senior Developer Certifications', 'Technical Leadership']
      }
    ]
  },
  'data-science': {
    title: 'Data Science & AI',
    icon: 'brain',
    colorClass: 'green-teal',
    description: 'Analyze data and build AI/ML models',
    salary: '$80k - $180k+',
    demand: 'Extremely High',
    timeline: '3-5 years',
    steps: [
      {
        phase: 'Foundation',
        duration: '6-12 months',
        skills: ['Python/R', 'Statistics', 'Excel', 'SQL'],
        projects: ['Data Visualization', 'Basic Analysis', 'Kaggle Competitions'],
        certifications: ['Google Data Analytics', 'IBM Data Science']
      },
      {
        phase: 'Intermediate',
        duration: '12-18 months',
        skills: ['Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
        projects: ['Prediction Models', 'Customer Segmentation', 'Recommendation Systems'],
        certifications: ['AWS Machine Learning', 'Google Cloud ML']
      },
      {
        phase: 'Advanced',
        duration: '18-30 months',
        skills: ['Deep Learning', 'TensorFlow', 'Cloud Platforms', 'Big Data'],
        projects: ['Neural Networks', 'Computer Vision', 'NLP Applications'],
        certifications: ['TensorFlow Developer', 'Azure Data Scientist']
      },
      {
        phase: 'Expert',
        duration: 'Ongoing',
        skills: ['Research', 'Model Deployment', 'Team Leadership', 'Strategy'],
        projects: ['Research Papers', 'Production ML Systems', 'AI Strategy'],
        certifications: ['Google Cloud Professional ML Engineer', 'Certified Analytics Professional']
      }
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    icon: 'shield',
    colorClass: 'red-orange',
    description: 'Protect systems and data from cyber threats',
    salary: '$75k - $160k+',
    demand: 'Critical',
    timeline: '2-4 years',
    steps: [
      {
        phase: 'Foundation',
        duration: '6-12 months',
        skills: ['Network Basics', 'Operating Systems', 'Security Fundamentals', 'Risk Assessment'],
        projects: ['Home Lab Setup', 'Vulnerability Scanning', 'Security Audits'],
        certifications: ['CompTIA Security+', 'SANS GIAC Security Essentials']
      },
      {
        phase: 'Intermediate',
        duration: '12-18 months',
        skills: ['Penetration Testing', 'Incident Response', 'Forensics', 'Compliance'],
        projects: ['Ethical Hacking', 'Security Monitoring', 'Incident Simulations'],
        certifications: ['CEH (Certified Ethical Hacker)', 'GCIH']
      },
      {
        phase: 'Advanced',
        duration: '18-24 months',
        skills: ['Advanced Threats', 'Malware Analysis', 'Security Architecture', 'Leadership'],
        projects: ['Threat Hunting', 'Security Framework Design', 'Team Management'],
        certifications: ['CISSP', 'CISM', 'OSCP']
      },
      {
        phase: 'Expert',
        duration: 'Ongoing',
        skills: ['Strategic Planning', 'Governance', 'Emerging Threats', 'Innovation'],
        projects: ['Security Strategy', 'Zero Trust Architecture', 'Industry Leadership'],
        certifications: ['CISSP Concentrations', 'SABSA', 'Executive Certifications']
      }
    ]
  },
  'cloud-computing': {
    title: 'Cloud Computing',
    icon: 'cloud',
    colorClass: 'cyan-blue',
    description: 'Design and manage cloud infrastructure',
    salary: '$85k - $170k+',
    demand: 'Very High',
    timeline: '2-3 years',
    steps: [
      {
        phase: 'Foundation',
        duration: '6-9 months',
        skills: ['Cloud Basics', 'Networking', 'Linux', 'Virtualization'],
        projects: ['Personal Cloud Setup', 'Static Website Hosting', 'Basic Automation'],
        certifications: ['AWS Cloud Practitioner', 'Azure Fundamentals', 'Google Cloud Digital Leader']
      },
      {
        phase: 'Intermediate',
        duration: '9-15 months',
        skills: ['Infrastructure as Code', 'Containers', 'Monitoring', 'Security'],
        projects: ['Multi-tier Applications', 'Container Orchestration', 'CI/CD Pipelines'],
        certifications: ['AWS Solutions Architect Associate', 'Azure Administrator', 'GCP Associate Engineer']
      },
      {
        phase: 'Advanced',
        duration: '15-24 months',
        skills: ['Advanced Architecture', 'Cost Optimization', 'Disaster Recovery', 'Compliance'],
        projects: ['Enterprise Migration', 'Multi-Cloud Strategy', 'Performance Optimization'],
        certifications: ['AWS Solutions Architect Professional', 'Azure Solutions Architect Expert']
      },
      {
        phase: 'Expert',
        duration: 'Ongoing',
        skills: ['Cloud Strategy', 'Innovation', 'Leadership', 'Emerging Technologies'],
        projects: ['Digital Transformation', 'Cloud Center of Excellence', 'Technology Leadership'],
        certifications: ['AWS Specialty Certifications', 'Cloud Security Certifications']
      }
    ]
  },
  'mobile-development': {
    title: 'Mobile Development',
    icon: 'smartphone',
    colorClass: 'purple-pink',
    description: 'Create mobile apps for iOS and Android',
    salary: '$70k - $140k+',
    demand: 'High',
    timeline: '2-3 years',
    steps: [
      {
        phase: 'Foundation',
        duration: '6-12 months',
        skills: ['Programming Basics', 'UI/UX Principles', 'Mobile Design', 'App Store Guidelines'],
        projects: ['Simple Apps', 'UI Prototypes', 'Calculator App', 'Personal Portfolio App'],
        certifications: ['Google Associate Android Developer', 'Apple Developer Program']
      },
      {
        phase: 'Intermediate',
        duration: '12-18 months',
        skills: ['Native Development', 'Cross-platform Frameworks', 'APIs', 'Database Integration'],
        projects: ['Social Media App', 'E-commerce App', 'Location-based App'],
        certifications: ['React Native Certification', 'Flutter Development']
      },
      {
        phase: 'Advanced',
        duration: '18-24 months',
        skills: ['Performance Optimization', 'Security', 'Publishing', 'Analytics'],
        projects: ['Published Apps', 'Enterprise Solutions', 'Advanced Features'],
        certifications: ['Google Professional Android Developer', 'iOS App Development with Swift']
      },
      {
        phase: 'Expert',
        duration: 'Ongoing',
        skills: ['Architecture', 'Team Leadership', 'Product Strategy', 'Innovation'],
        projects: ['Scalable Apps', 'Team Management', 'Technical Architecture'],
        certifications: ['Senior Mobile Developer Certifications', 'Technical Leadership']
      }
    ]
  },
  'devops': {
    title: 'DevOps Engineering',
    icon: 'zap',
    colorClass: 'yellow-red',
    description: 'Automate development and deployment processes',
    salary: '$80k - $160k+',
    demand: 'Very High',
    timeline: '2-4 years',
    steps: [
      {
        phase: 'Foundation',
        duration: '6-12 months',
        skills: ['Linux/Unix', 'Scripting', 'Version Control', 'Basic Networking'],
        projects: ['Automation Scripts', 'Personal CI/CD', 'Infrastructure Setup'],
        certifications: ['Linux Professional Institute', 'Git Certification']
      },
      {
        phase: 'Intermediate',
        duration: '12-18 months',
        skills: ['Containerization', 'CI/CD Tools', 'Configuration Management', 'Monitoring'],
        projects: ['Docker Applications', 'Jenkins Pipelines', 'Monitoring Dashboards'],
        certifications: ['Docker Certified Associate', 'Jenkins Certification']
      },
      {
        phase: 'Advanced',
        duration: '18-24 months',
        skills: ['Kubernetes', 'Infrastructure as Code', 'Site Reliability', 'Security'],
        projects: ['Kubernetes Clusters', 'Terraform Modules', 'SRE Practices'],
        certifications: ['Certified Kubernetes Administrator', 'Terraform Associate']
      },
      {
        phase: 'Expert',
        duration: 'Ongoing',
        skills: ['Platform Engineering', 'Strategy', 'Leadership', 'Innovation'],
        projects: ['Platform Architecture', 'DevOps Transformation', 'Technical Leadership'],
        certifications: ['Kubernetes Expert Certifications', 'Cloud Native Certifications']
      }
    ]
  }
})

// Methods
const handlePathSelect = (pathKey) => {
  selectedPath.value = pathKey
  currentStep.value = 0
  showDetails.value = true
}

const handleStepClick = (stepIndex) => {
  currentStep.value = stepIndex
}

// Animation for path cards
onMounted(() => {
  const timer = setInterval(() => {
    const pathKeys = Object.keys(itPaths.value)
    const randomPath = pathKeys[Math.floor(Math.random() * pathKeys.length)]
    
    animatedElements.value.add(randomPath)
    
    setTimeout(() => {
      animatedElements.value.delete(randomPath)
    }, 2000)
  }, 3000)

  onUnmounted(() => {
    clearInterval(timer)
  })
})
</script>

<style scoped>
.it-journey-map {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 4rem 0;
  text-align: center;
  color: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

.paths-section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.path-card {
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.path-card:hover {
  transform: translateY(-12px) scale(1.02);
}

.path-card.animated {
  animation: pulse 2s ease-in-out;
  box-shadow: 0 0 40px rgba(251, 191, 36, 0.6);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.card-gradient {
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  overflow: hidden;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-gradient.blue-purple {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-gradient.green-teal {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.card-gradient.red-orange {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
}

.card-gradient.cyan-blue {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
}

.card-gradient.purple-pink {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
}

.card-gradient.yellow-red {
  background: linear-gradient(135deg, #eab308 0%, #ef4444 100%);
}

.card-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.icon-container {
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.path-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.demand-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.9;
}

.demand-icon {
  width: 1rem;
  height: 1rem;
}

.path-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.path-description {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.path-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.stat-icon {
  width: 1rem;
  height: 1rem;
}

.card-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.action-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

.arrow-icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
}

.path-card:hover .arrow-icon {
  transform: translateX(4px);
}

.stats-section {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stats-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-number.blue { color: #60a5fa; }
.stat-number.green { color: #34d399; }
.stat-number.purple { color: #a78bfa; }
.stat-number.orange { color: #fb923c; }

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

.journey-section {
  padding: 2rem 0 4rem;
  color: white;
}

.journey-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.journey-title-section {
  text-align: center;
  flex: 1;
  margin: 0 2rem;
}

.journey-main-title {
  font-size: 2.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.title-icon {
  width: 2rem;
  height: 2rem;
}

.journey-description {
  font-size: 1.1rem;
  opacity: 0.8;
}

.timeline-info {
  font-size: 0.9rem;
  opacity: 0.7;
  text-align: right;
}

.timeline-section {
  margin-bottom: 3rem;
}

.timeline-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  backdrop-filter: blur(10px);
}

.timeline-item.active .timeline-button {
  background: #fbbf24;
  border-color: #fbbf24;
  transform: scale(1.2);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
}

.timeline-item.completed .timeline-button {
  background: #10b981;
  border-color: #10b981;
}

.check-icon {
  width: 1.2rem;
  height: 1.2rem;
}

.step-number {
  font-size: 1rem;
}

.timeline-label {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.timeline-connector {
  position: absolute;
  top: 1.5rem;
  left: 3rem;
  width: 2rem;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.timeline-item.completed .timeline-connector {
  background: #10b981;
}

.step-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.steps-navigation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-card {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.step-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.step-card.active {
  background: rgba(251, 191, 36, 0.2);
  border-color: #fbbf24;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
}

.step-duration {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.step-preview {
  space-y: 1rem;
}

.preview-section {
  margin-bottom: 1rem;
}

.preview-section h5 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-list li {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.3rem;
  position: relative;
  padding-left: 1rem;
}

.project-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #fbbf24;
}

.step-content {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.content-header {
  margin-bottom: 2rem;
}

.content-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.content-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.meta-icon {
  width: 1rem;
  height: 1rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.content-section h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.section-icon {
  width: 1.2rem;
  height: 1.2rem;
}

.section-icon.star { color: #fbbf24; }
.section-icon.code { color: #10b981; }
.section-icon.award { color: #a78bfa; }

.skills-list, .projects-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skill-item, .project-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  color: white;
  font-weight: 500;
}

.project-item {
  background: rgba(16, 185, 129, 0.1);
}

.skill-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #3b82f6;
  border-radius: 50%;
}

.project-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #10b981;
  border-radius: 50%;
}

.certifications-section {
  margin-bottom: 2rem;
}

.certifications-section h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.certification-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 12px;
  color: white;
  font-weight: 500;
}

.cert-icon {
  width: 1.2rem;
  height: 1.2rem;
  color: #a78bfa;
}

.step-navigation {
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-button {
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .step-details {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .steps-navigation {
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
  }
  
  .step-card {
    min-width: 300px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .paths-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .journey-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .journey-main-title {
    font-size: 2rem;
  }
  
  .timeline-container {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .timeline-item {
    flex: 1;
    min-width: 80px;
  }
  
  .timeline-connector {
    display: none;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .paths-section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .card-gradient {
    padding: 1.5rem;
  }
  
  .path-title {
    font-size: 1.3rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .step-content {
    padding: 1.5rem;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>