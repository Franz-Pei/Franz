<template>
  <div>
    <h1>Create an Account</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <select v-model="role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <button @click="register">Register</button>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Firestore imports
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const role = ref('user'); // Add role ref with default 'user'
const router = useRouter();
const auth = getAuth();
const db = getFirestore(); // Firestore instance

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("Firebase Register Successful!", userCredential);

    // Save the role and other details in Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: email.value,
      role: role.value
    });

    router.push('/FireLogin'); // Redirect after successful registration
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
};
</script>
  