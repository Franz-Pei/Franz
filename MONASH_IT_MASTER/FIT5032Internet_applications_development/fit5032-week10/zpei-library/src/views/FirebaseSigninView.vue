<template>
  <div>
    <h1>Sign In</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signin">Sign In</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth(); // Get the authentication instance

const signin = async () => {
try {
  const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
  console.log('Firebase Sign-in Successful!', userCredential.user);
  sessionStorage.setItem("token", userCredential.user.accessToken); // Store the token
  router.push("/"); // Redirect to home or other secure page
} catch (error) {
  console.error('Error during sign-in:', error.message);
}
};
</script>
