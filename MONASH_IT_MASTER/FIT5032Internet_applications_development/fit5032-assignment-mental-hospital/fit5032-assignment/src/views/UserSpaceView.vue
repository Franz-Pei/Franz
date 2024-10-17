<template>
  <div class="user-space-container tw-w-full">
    <aside class="sidebar">
      <img src="@/images/icon.png" alt="Logo" class="logo" />
      <nav class="nav">
        <button
          @click="currentView = 'profile'"
          class="nav-item"
          :class="{ active: currentView === 'profile' }"
        >
          Profile
        </button>
        <button
          v-if="role == 1"
          @click="currentView = 'UserInformations'"
          class="nav-item"
          :class="{ active: currentView === 'UserInformations' }"
        >
        userInfomations
        </button>
        <button
          @click="currentView = 'consultation-detail'"
          class="nav-item"
          :class="{ active: currentView === 'consultation-detail' }"
        >
          ConsultationDetail
        </button>
        <button
          @click="currentView = 'similar-recipes'"
          class="nav-item"
          :class="{ active: currentView === 'similar-recipes' }"
        >
          Similar Recipes
        </button>
        <button
          @click="currentView = 'my-schedule'"
          class="nav-item"
          :class="{ active: currentView === 'my-schedule' }"
        >
          My Schedule
        </button>
        <button
          @click="currentView = 'massMailing'"
          class="nav-item"
          :class="{ active: currentView === 'massMailing' }"
        >
          Mass Mailing
        </button>
        <button
          class="nav-item"
          :class="{ active: currentView === 'dashboard' }"
          @click="navigateToDashboard"
        >
          API Dashboard
        </button> 
        <!-- <router-link to="/dashboard" class="nav-link">API Dashboard</router-link> -->
        <button
          @click="logoutBtn"
          class="nav-item"
          :class="{ active: currentView === 'logout' }"
        >
          Logout
        </button>
      </nav>
    </aside>
    <section class="content-section">
      <Profile v-if="currentView === 'profile'" />
      <UserInfomations v-if="currentView === 'UserInformations'" />
      <ConsultationDetail v-if="currentView === 'consultation-detail'" />
      <SimilarRecipes v-if="currentView === 'similar-recipes'" />
      <MySchedule v-if="currentView === 'my-schedule'" />
      <MassMailing v-if="currentView === 'massMailing'" />
      <DashboardView v-if="currentView === 'dashboard'" />
      <!-- Handle logout differently if it's an action -->
    </section>
  </div>
</template>

<script>
import Profile from '../entity/Profile.vue'
import UserInfomations from '../entity/UserInformations.vue'
import ConsultationDetail from '../entity/ConsultationDetail.vue'
import SimilarRecipes from '../entity/SimilarRecipes.vue'
import MassMailing from '../entity/MassMailing.vue'
import MySchedule from '../entity/MySchedule.vue'
import DashboardView from '../entity/DashboardView.vue'
import { mapActions } from 'vuex'
export default {
  name: 'UserSpaceView',
  components: {
    Profile,
    UserInfomations,
    ConsultationDetail,
    SimilarRecipes,
    MassMailing,
    MySchedule,
    DashboardView

  },
  data() {
    return {
      currentView: 'profile',
      userData:[],
      role: 0
    }
  },
  methods:{
    ...mapActions(['logout']),
    async logoutBtn(){
      await this.logout()
      this.$router.push({name:"SignIn"})
    },
    navigateToDashboard() {
      this.currentView = 'dashboard';
      this.$router.push('/dashboard');
    }
  },
  mounted(){
    this.token = sessionStorage.getItem('token')
    const userList = JSON.parse(localStorage.getItem('userList'))
    const id = sessionStorage.getItem('id')
    this.userData =  userList.filter((item) => item.id == id)
    this.role = this.userData.length > 0 ? this.userData[0].role : 0
  }
}
</script>
<style scoped>
.user-space-container {
  display: flex;
  height: 100vh;
  overflow: hidden; 
}

.sidebar {
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.1); /* 右侧阴影效果 */
  z-index: 1000; /* 确保在内容上层 */
}

.nav {
  width: 100%;
  margin-top: 20px;
}

.nav-item {
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s; /* 平滑过渡效果 */
}

.nav-item:hover,
.nav-item.active {
  background-color: #007bff;
  color: #fff;
}

.logo {
  width: 80px;
  margin-bottom: 20px;
}

.content-section {
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto; /* 确保这个不会隐藏内容 */
  min-height: 0; /* 对flex子项很重要，确保内容区可以伸缩 */
}
</style>
