import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue';
import store from '../store/store';


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
  if(!store.state.isAuthenticated && to.name !== 'Login'){
    return({name:'Login'});
  }else{
    next();
  }
});

export default router