<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li v-if="loginStatus" class="nav-item">
          <button @click="performLogout" class="btn btn-link nav-link">Logout</button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data(){
    return {
      loginStatus: false
    }
  },
  computed: {
    ...mapState(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout']),
    performLogout() {
      this.logout(); // Call Vuex action to log out
      this.$router.push({ name: 'Login' }); // Then redirect to login page
    }
  },
  mounted () {
    const token = sessionStorage.getItem("token");
    if(token) {
      this.loginStatus = true
    } else {
      this.loginStatus = false
    }
  }
};
</script>
