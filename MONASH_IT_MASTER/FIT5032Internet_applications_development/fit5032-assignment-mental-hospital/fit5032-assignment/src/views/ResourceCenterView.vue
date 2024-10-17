<template>
  <div class="resource-center">
    <h2>Resource Center</h2>
    <!-- Meditation Section with Flexbox -->
    <div class="meditation-section">
      <img src="@/images/your-meditation-image.png" alt="Let's Meditate" />
      <button @click="goToMeditationMusic" class="meditate-button">Let's Meditate</button>
    </div>
  </div>

  <!-- container mx-auto -->
  <div class="resource-center">
    <!-- Container for the content and image -->
    <div class="container mx-auto py-10 flex flex-col lg:flex-row items-center">
      <!-- Content Section -->
      <div class="lg:w-1/2 order-2 lg:order-1">
        <h3 class="text-xl font-semibold mb-4">Success Story</h3>
        <h1 class="text-4xl font-bold mb-6">Our Holistic Approach toMental Weliness</h1>
        <ul class="text-lg list-none pl-0 space-y-4">
          <li>
            <i class="fas fa-play-circle mr-2"></i>
            Personalized Therapy Sessions
          </li>
          <li>
            <i class="fas fa-play-circle mr-2"></i>
            innovative Group Programs
          </li>
          <li>
            <i class="fas fa-play-circle mr-2"></i>
            Digital Welness Resources
          </li>
          <li>
            <i class="fas fa-play-circle mr-2"></i>
            Community Outreach Initiatives
          </li>
        </ul>
      </div>
      <!-- Image Section -->
      <div class="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
        <img
          src="@/images/resource-center.png"
          alt="Resource Center"
          class="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>

  <!-- Mindfulness Video Section -->
  <div class="mindfulness-video-section mt-10">
    <MindfulnessVideo />
  </div>

  <!-- Contact Us Section
  <div class="contact-us-section mt-10">
    <ContactUS />
  </div> -->
</template>

<script>
import MindfulnessVideo from '../entity/MindfulnessVideo.vue'
export default {
  name: 'ResourceCenterView',
  components: {
    MindfulnessVideo
  },
  mounted() {
    console.log('ResourceCenterView mounted')
  },
  methods: {
    goToMeditationMusic() {
      this.$router.push({ name: 'MeditationMusic' })
    }
  }
}
</script>

<style scoped>
.resource-center {
  text-align: center;
  padding: 20px;
}

.meditation-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.meditation-section img {
  width: 100%; /* Adjust width as necessary */
  max-width: 600px; /* This limits the size of the image */
}

.meditate-button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: -20px; /* Adjust this value to move closer to the image */
}

/* .resource-center */
.resource-center {
  padding: 40px 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

ul {
  padding-left: 1.5rem; /* Adjust padding for bullets */
}

ul li {
  margin-bottom: 1rem;
}

ul li strong {
  display: block;
  margin-bottom: 0.5rem;
}

h1 {
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1.5rem;
}
</style>
