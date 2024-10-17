<script setup>
import { onMounted, ref } from 'vue'
import BHeader from './control/BHeader.vue' // Import the BHeader component
import ButtonBar from './control/ButtonBar.vue' // Import the ButtonBar component

import userData from '@/assets/userData.json'; // Adjust the path to where you place the file
const userList = ref(userData.userData); // Adjust if your JSON structure is different

// Example: Initialize localStorage with this data if necessary
onMounted(() => {
  let existingUserList = localStorage.getItem('userList');
  if (!existingUserList) {
    localStorage.setItem('userList', JSON.stringify(userList.value));
  }
});
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
      <!-- This will render the component based on the route -->
    </main>
    <footer>
      <ButtonBar />
      <!-- Footer that includes the ButtonBar component -->
    </footer>
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
  width: 100%; /* Ensures that the main box takes the full width */
}

header {
  line-height: 1.5; /* Adjusted line height for better readability */
  width: 100%; /* Ensures header takes the full width of the container */
  margin-bottom: 0;
  padding-bottom: 0;
}

footer {
  width: 100%; /* Ensures footer takes the full width of the container */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center; /* Aligns items vertically in the center */
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin-right: 10px; /* Right margin for the logo within the header */
  }

  header .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  footer {
    display: flex;
    justify-content: center; /* Center aligns the footer content */
  }
}
</style>
