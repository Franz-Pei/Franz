<template>
  <div class="container mt-5">
    <h2 class="mb-4">Register</h2>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required />
      </div>
      <div class="d-flex flex-column gap-1 my-1">
        <button type="submit" class="btn btn-primary w-full">Register</button>
        <button @click="view('FirebaseLogin')" class="btn btn-secondary w-full">To Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('Firebase Register Successful!', userCredential.user)
    sessionStorage.setItem('token', userCredential.user.accessToken) // Store token
    router.push('/') // Redirect to home page after successful login
  } catch (err) {
    error.value = err.message // Display the error message
  }
}

const view = (name) => {
  router.push({ name: name })
}

</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
