<template>
  <div class="about-section">
    <!-- Video and Text Section -->
    <div class="hero-section">
      <div class="video-container">
        <!-- Replace the video element with an iframe for YouTube -->
        <iframe
          width="350"
          height="250"
          src="https://www.youtube.com/embed/C0lDJ7MLD30?si=wv64vLCWit02SOis"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <!-- <div class="video-overlay">
          <button class="video-button">Therapy Session</button>
          <button class="video-button">Mindfulness</button>
          <button class="video-button">Book Now</button>
          <button class="video-button">Check Availability</button>
        </div> -->
      </div>
      <div class="text-container">
        <h2>You Deserve to be Mentally Healthy</h2>
        <p>
          Discover the heart behind our mental health platform. At our core, we are a compassionate
          community of experts dedicated to guiding you on your journey to emotional well-being and
          resilience.
        </p>
        <button class="primary-button">Get Started</button>
        <div class="features-summary">
          <div class="feature-summary">
            <h4>Confidentiality</h4>
            <p>Your privacy is sacred; we maintain the highest level of confidentiality.</p>
          </div>
          <div class="feature-summary">
            <h4>Accessibility</h4>
            <p>Accessible mental health support to all backgrounds and areas.</p>
          </div>
          <div class="feature-summary">
            <h4>Community</h4>
            <p>We foster a supportive community where you can connect and share.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Existing Content Below -->
    <h1>Who We Are</h1>
    <p>
      Welcome to Ziqi Pei, a dedicated team committed to fostering mental wellness and emotional
      resilience across diverse communities. Our mission is to empower individuals to achieve better
      mental health and improved well-being through accessible, scientifically-backed resources and
      supportive interventions.
    </p>
    <div class="image-container">
      <img src="@/images/family-1.png" alt="Family" class="rounded-image" />
      <img src="@/images/family-2.png" alt="Family" class="rounded-image" />
    </div>

    <!-- Updated Statistics Section -->
    <div class="statistics-section">
      <div class="stat-item">
        <p>Experienced</p>
        <h2>8<span>+</span></h2>
      </div>
      <div class="stat-item">
        <p>Teams</p>
        <h2>122<span>+</span></h2>
      </div>
      <div class="stat-item">
        <p>Clients</p>
        <h2>563<span>+</span></h2>
      </div>
      <div class="stat-item">
        <p>Project Done</p>
        <h2>232<span>+</span></h2>
      </div>
    </div>

    <!-- Why Our Mental Health Consultants Section -->
    <div class="consultants-section">
      <p class="section-subtitle">Why?</p>
      <h2 class="section-title">Why Our Mental Health Consultants are the Best Choice</h2>
      <div class="consultants-features">
        <div class="feature-item">
          <img src="@/images/holistic-icon.png" alt="Holistic Approach" />
          <h3>Holistic approach</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convivialis est urna adipiscing fringilla nulla
            diam lorem non mauris.
          </p>
        </div>
        <div class="feature-item feature-highlight">
          <img src="@/images/expertise-icon.png" alt="Expertise Team" />
          <h3>Expertise Team</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convivialis est urna adipiscing fringilla nulla
            diam lorem non mauris.
          </p>
        </div>
        <div class="feature-item">
          <img src="@/images/accessibility-icon.png" alt="Accessibility" />
          <h3>Accessibility</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convivialis est urna adipiscing fringilla nulla
            diam lorem non mauris.
          </p>
        </div>
      </div>
    </div>
  </div>

  <MapView/>

</template>

<script>
import 'leaflet/dist/leaflet.css'
import MapView from '../entity/MapView.vue'; 


export default {
  components: {
    MapView
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px; /* Set a fixed height */
}
.about-section {
  text-align: center;
  padding: 20px;
}

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.video-container {
  position: relative;
  width: 50%;
}

.video-element {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.video-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.video-button {
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.text-container {
  width: 45%;
  text-align: left;
}

.text-container h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.text-container p {
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
}

.primary-button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.features-summary {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
}

.feature-summary {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  flex: 1;
  text-align: left;
}

.feature-summary h4 {
  margin: 0 0 10px;
}

.feature-summary p {
  font-size: 14px;
  color: #555;
}

/* Existing styles... */
/* Updated Statistics Section */
.statistics-section {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #4caf50, #2e7d32);
  padding: 20px;
  border-radius: 8px;
  color: white;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-item h2 {
  font-size: 48px;
  margin: 0;
}

.stat-item h2 span {
  font-size: 24px;
}

.stat-item p {
  font-size: 18px;
  margin: 0;
  font-weight: normal;
}

/* Consultants Section */
.consultants-section {
  padding: 40px 0;
  margin-top: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.section-subtitle {
  font-size: 16px;
  color: #888;
}

.section-title {
  font-size: 24px;
  margin: 10px 0 30px;
  color: #333;
}

.consultants-features {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.feature-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  text-align: center;
}

.feature-highlight {
  background: linear-gradient(90deg, #4caf50, #2e7d32);
  color: white;
}

.feature-item img {
  max-width: 50px;
  margin-bottom: 15px;
}

.feature-item h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.feature-item p {
  font-size: 14px;
  color: #555;
}
</style>
