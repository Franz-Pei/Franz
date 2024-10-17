<template>
  <div class="container mt-5">
    <h2 class="mb-4">Login</h2>
    <div v-if="loginStatus" class="alert alert-danger">
      Login Failed, Wrong Username or Password
    </div>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required />
      </div>
      <div class="d-flex flex-column gap-1 justify-content-between mt-3">
        <button type="submit" class="btn btn-primary">Login</button>
        <button type="button" @click="goToRegister" class="btn btn-secondary">Register</button>
        <!-- Firebase Authentication Buttons -->
        <button type="button" @click="goToFirebaseLogin" class="btn btn-info">Use Firebase</button>
<!--        <button type="button" @click="goToFirebaseRegister" class="btn btn-warning">Register with Firebase</button>-->
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      loginStatus: false
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const user = { username: this.username, password: this.password }
      const res = await this.login(user)
      console.log(res, 'res')
      if (res.code == 200) {
        this.loginStatus = false
        sessionStorage.setItem('token', res.data.token)
        this.$router.push({ name: 'Home' })
      } else {
        this.loginStatus = true
      }
    },
    goToRegister() {
      this.$router.push({ name: 'Register' }) // Navigate to RegisterView
    },
    goToFirebaseLogin() {
      this.$router.push({ name: 'FirebaseLogin' }); // Route to Firebase login
    },
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
