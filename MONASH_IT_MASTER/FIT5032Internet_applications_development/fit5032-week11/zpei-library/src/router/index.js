import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '@/views/LoginView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import AddBookView from '@/views/AddBookView.vue';
import GetBookCountView from '../views/GetBookCountView.vue';
import AddBookCloudFunctionView from '../views/AddBookCloudFunctionView.vue';
import WeatherView from '../views/WeatherView.vue';
import CountBookAPI from '../views/CountBookAPI.vue';
import GetAllBookAPI from '../views/GetAllBookAPI.vue';

// Define routes array outside of the createRouter function
const routes = [
  {
    path: "/GetBookCount",
    name: "GetBookCount",
    component: GetBookCountView
  },
  {
    path: "/AddBookCloundFunction",
    name: "AddBookCloundFunction",
    component: AddBookCloudFunctionView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView,
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI,
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI,
  }
];

// Correct usage of the environment variable in Vite (using import.meta.env.VITE_BASE_URL)
const router = createRouter({
  history: createWebHistory(),
  routes
});

import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Set up route guards with Firebase authentication
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next();
    } else {
      // Redirect to login if the user is not authenticated and trying to access a protected route
      if (to.name !== 'Login' && to.name !== 'FireLogin' && to.name !== 'FireRegister') {
        next('/login');
      } else {
        next();
      }
    }
  });
});

export default router;
