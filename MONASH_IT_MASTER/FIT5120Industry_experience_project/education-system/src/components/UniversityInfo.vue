// components/UniversityInfo.vue 的修改版本

<template>
  <div class="university-info" :class="{ 'is-open': true }">
    <h2>{{ university.name }}</h2>
    <div class="uni-badge" :style="{ backgroundColor: getColorString(university.color) }">
      {{ university.shortName }}
    </div>
    
    <p class="description">{{ university.description }}</p>
    
    <button @click="$emit('watch-video')" class="video-btn">
      <span class="video-icon">▶</span> Watch University Introduction Video
    </button>
    
    <div class="courses-preview">
      <h3>Popular Courses</h3>
      <div v-for="course in coursesToDisplay" :key="course.id" class="course-item">
        <div class="course-name">{{ course.name }}</div>
        <div class="course-desc">{{ course.description }}</div>
      </div>
      <button @click="$emit('view-all-courses')" class="view-all-btn">
        View All {{ university.courses.length }} Courses
      </button>
    </div>
    
    <div class="university-actions">
      <button class="action-btn map-btn">
        <span class="icon">🗺️</span> Campus Map
      </button>
      <a :href="university.website" target="_blank" class="action-btn website-btn">
        <span class="icon">🌐</span> Visit Website
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniversityInfo',
  props: {
    university: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 限制显示前3个课程
    coursesToDisplay() {
      return this.university.courses.slice(0, 3);
    }
  },
  methods: {
    getColorString(colorValue) {
      // 检查颜色是否已经是字符串格式
      if (typeof colorValue === 'string') {
        return colorValue;
      }
      // 将数字格式的颜色值转换为十六进制字符串
      return '#' + colorValue.toString(16).padStart(6, '0');
    }
  }
};
</script>

<style scoped>
.university-info {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-height: 70vh;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.university-info.is-open {
  transform: translateX(0);
}

.university-info h2 {
  margin-top: 0;
  margin-bottom: 5px;
  color: #333;
  font-size: 22px;
}

.uni-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 15px;
}

.description {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
  font-size: 15px;
}

.video-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: all 0.3s ease;
  font-weight: bold;
}

.video-btn:hover {
  background-color: #e64a19;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.video-icon {
  margin-right: 10px;
  font-size: 20px;
}

.courses-preview {
  border-top: 1px solid #ddd;
  padding-top: 15px;
  margin-bottom: 20px;
}

.courses-preview h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
}

.course-item {
  background-color: #f5f5f5;
  padding: 12px 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.course-name {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.course-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

.view-all-btn {
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s ease;
  font-weight: bold;
}

.view-all-btn:hover {
  background-color: #1976d2;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.university-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.action-btn:hover {
  background-color: #e0e0e0;
}

.icon {
  margin-right: 8px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .university-info {
    width: 100%;
    max-height: 60vh;
  }
}
</style>