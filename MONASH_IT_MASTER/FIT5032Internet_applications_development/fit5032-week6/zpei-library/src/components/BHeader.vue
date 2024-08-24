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
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item">
          <button @click="logout" class="btn btn-link nav-link">Logout</button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      isAuthenticated: state => state.isAuthenticated // Ensure this matches Vuex state
    })
  },
  methods: {
    ...mapActions(['logout']),
    logout() {
      this.logout(); // Redirect is handled here if not using .then()
    }
  }
};
</script>
