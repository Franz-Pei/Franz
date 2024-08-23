<script setup>
// import JSON from './components/JSON.vue'
// import Form from './views/HomeView.vue'
import BHeader from './components/BHeader.vue';
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>
    <main class="main-box">
      <!-- <LibraryRegistrationForm> -->
          <!-- <JSON></JSON> -->
          <!-- <Form /> -->
        <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.main-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    padding-top: 0;
    margin-top: 0;
    width: 100%; /* Ensure the main-box takes the full width */
}

.main-box h1 {
    width: 50%; /* Ensure the heading takes the full width */
    text-align: center; /* Center the text horizontally */
    margin: 0;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    padding-top: 0;

}

header {
    margin-bottom: 0;
    padding-bottom: 0;
}
</style>
