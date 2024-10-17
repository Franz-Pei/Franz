<template>
  <div class="container mt-5">
    <h2 class="mb-4">Sign In</h2>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <form @submit.prevent="signin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required />
      </div>
      <div class="d-flex flex-column gap-1 my-1">
        <button type="submit" class="btn btn-primary w-full">Sign In</button>
        <button @click="view('FirebaseRegister')" class="btn btn-secondary w-full">To Register</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('Firebase Sign-in Successful!', userCredential.user)
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

