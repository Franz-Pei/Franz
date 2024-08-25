import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue';
// import store from '../store/store';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    // Per-router Guard
    // beforeEnter: (to, from) =>{
    //   return false
    // }
  },
  {
    path:'/login',
    name:'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token")
  if(!token && to.name !== 'Login'){
    next("/login")
    return;
  }else{
    next();
  }
});

export default router