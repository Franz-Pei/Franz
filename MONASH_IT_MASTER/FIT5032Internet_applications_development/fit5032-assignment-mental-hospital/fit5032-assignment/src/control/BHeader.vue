<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/images/icon.png" alt="Ziqi Pei's MENTAL Hospital Logo" class="logo" />
        Ziqi Pei's MENTAL Hospital
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/service" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resource-center" class="nav-link">Resource Center</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user-space" class="nav-link">User Space</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item" v-if="!token">
            <router-link to="/sign-in" class="nav-link">
              <img src="@/images/sign-in.png" alt="Sign In" class="nav-image" />
            </router-link>
          </li>
          <li class="nav-item" v-if="token">
            <div class="avatar">{{ userEmail }}</div>
            <button @click="performLogout" class="btn btn-primary nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase v9 modular SDK
import { mapActions } from 'vuex';

export default {
  name: 'SignInLink',
  data() {
    return {
      isAuthenticated: false,
      userEmail: '', // Store user email
      token: '',
      userInfo: {}
    };
  },
  methods: {
    ...mapActions(['logout']),
    async performLogout() {
      await this.logout();
      this.$router.push({ name: "SignIn" });
    },
    async fetchUserEmail() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userEmail = user.email; // Set the email from Firebase user
          this.$forceUpdate(); // Force a UI update if the reactivity isn't working
        } else {
          this.userEmail = "Guest"; // Fallback if no user is logged in
        }
      });
    }
  },
  watch: {
    $route() {
      this.token = sessionStorage.getItem('token');
      const userList = JSON.parse(localStorage.getItem('userList'));
      const id = sessionStorage.getItem('id');
      this.userData = userList.filter((item) => item.id == id);
      this.userInfo = this.userData.length > 0 ? this.userData[0] : {};
      this.fetchUserEmail(); // Fetch email when route changes
    },
    deep: true,
    immediate: true
  },
  mounted() {
    this.fetchUserEmail(); // Fetch email on component mount
  }
};
</script>

<style scoped>
.logo {
  height: 40px;
}

ul.navbar-nav {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul.navbar-nav li {
  padding: 0 10px; /* Spacing between items */
}

.nav-image {
  width: 80px; /* Set width */
  height: auto; /* Keep aspect ratio */
}

.nav-item {
  display: flex;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #999;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  color: white; /* Ensure email text is visible */
}

.btn-primary {
  background: #007bff;
  color: #fff;
  margin-left: 20px;
}
</style>
