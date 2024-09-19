import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '@/views/LoginView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import AddBookView from '@/views/AddBookView.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

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
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const auth = getAuth();
  let user = auth.currentUser;

  if (!user) {
    // 使用 onAuthStateChanged 确保用户登录状态被正确获取
    user = await new Promise(resolve => {
      onAuthStateChanged(auth, resolve);
    });
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (user) {
      const tokenResult = await user.getIdTokenResult();
      const role = tokenResult.claims.role || 'user';
      if (to.matched.some(record => record.meta.adminOnly) && role !== 'admin') {
        return next('/'); // 非 admin 用户跳转到首页
      }
      next();
    } else {
      next('/login'); // 如果没有登录，则跳转到登录页
    }
  } else {
    next(); // 如果不需要验证，直接跳转
  }
});

export default router;
