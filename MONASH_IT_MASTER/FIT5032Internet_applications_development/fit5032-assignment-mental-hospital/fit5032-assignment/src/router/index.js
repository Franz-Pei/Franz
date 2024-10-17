import { createRouter, createWebHistory } from 'vue-router'

// Import all views
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'

import ResourceCenterView from '../views/ResourceCenterView.vue'
import UserSpaceView from '../views/UserSpaceView.vue'
import AboutUsView from '../views/AboutView.vue'
import SignInView from '../views/SigninView.vue'
import RegisterView from '../entity/RegisterView.vue'
import DoctorsPage from '../entity/DoctorsPage.vue'
import MeditationMusic from '../entity/MeditationMusic.vue'
import ContactUs from '../entity/ContactUs.vue'
import FirebaseRegisterView from '../entity/FirebaseRegister.vue'
import FirebaseSigninView from '../entity/FirebaseSigninView.vue'
import DashboardView from '@/entity/DashboardView.vue'
import MapView from '../entity/MapView.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: false }
  },
  {
    path: '/service',
    name: 'Service',
    component: ServiceView,
    meta: { requiresAuth: false }
  },
  {
    path: '/resource-center',
    name: 'ResourceCenter',
    component: ResourceCenterView,
    meta: { requiresAuth: false }
  },
  {
    path: '/user-space',
    name: 'UserSpace',
    component: UserSpaceView,
    meta: { requiresAuth: false }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsView,
    meta: { requiresAuth: false }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignInView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/firebase_login', // Firebase login route
    name: 'FirebaseLogin',
    component: FirebaseSigninView,
  },
  {
    path: '/firebase_register', // Firebase register route
    name: 'FirebaseRegister',
    component: FirebaseRegisterView,
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: DoctorsPage
  },
  {
    path: '/meditation-music',
    name: 'MeditationMusic',
    component: MeditationMusic
  },
  {
    path:'/contact-us',
    name:'ContactUs',
    component: ContactUs
  },
  {
    path: '/FireRegister', // Firebase register route
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/map-view',
    name: 'MapView',
    component: MapView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  
  if (!token && to.name !== 'SignIn' && to.name !== 'Register' && to.name !== 'Home' && to.name !== 'FirebaseLogin' && to.name != 'FirebaseRegister') {
    next({ name: 'SignIn' }) // Redirect to login if not authenticated
  } else {
    next() // Allow the user to navigate
  }
})

export default router
