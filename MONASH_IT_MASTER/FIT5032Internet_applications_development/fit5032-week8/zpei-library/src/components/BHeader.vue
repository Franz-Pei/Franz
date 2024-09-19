<template>
  <div class="container">
    <header class="d-flex justify-content-between py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <!-- Add Book option visible to admin only -->
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <!-- User-specific options -->
        <li v-if="role === 'user'" class="nav-item">
          <router-link to="/user-dashboard" class="nav-link" active-class="active">User Dashboard</router-link>
        </li>
        <!-- Login and Logout handling -->
        <li v-if="loginStatus" class="nav-item">
          <button @click="performLogout" class="btn btn-link nav-link">Logout</button>
        </li>
        <li v-else class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li v-if="!loginStatus" class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li v-if="!loginStatus" class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
      </ul>

      <!-- Conditionally render the role (Admin/User) in the header -->
      <div v-if="loginStatus" class="role-display">
        <span class="badge bg-info text-dark">{{ role === 'admin' ? 'Admin' : 'User' }}</span>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      loginStatus: false, // Tracks if user is logged in
      role: null, // Tracks user role (admin/user)
    };
  },
  computed: {
    ...mapState(['isAuthenticated', 'role']) // 绑定Vuex中的状态
  },
  methods: {
    ...mapActions(['logout']),
    performLogout() {
      this.logout(); // 调用 Vuex action 进行登出
      sessionStorage.removeItem('role'); // 清除 role
      sessionStorage.removeItem('token'); // 清除 token
      this.$router.push({ name: 'Login' }); // 重定向到登录页面
    }
  },
  mounted() 
  {
    const token = sessionStorage.getItem("token");

    if (token) 
    {
      this.$store.dispatch('fetchUserRole').then(role => 
      {
        this.loginStatus = true;
        this.role = role;
        console.log('Role:', role); // 输出 role
        console.log('LoginStatus:', this.loginStatus); // 输出 loginStatus
      }).catch(() => 
      {
        this.loginStatus = false;
        this.role = null;
      });
    }
  }
};
</script>
