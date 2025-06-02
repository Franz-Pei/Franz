import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/dashboard/index.vue'
import test from '@/views/test/index.vue'
import career from '@/views/career/index.vue'
import subject from '@/views/subject/index.vue'
import secondaryCollege from '@/views/secondaryCollege/index.vue'
import CareerStories from '@/views/career-stories/index.vue'
import ChatBot from '@/views/chat-bot/ChatBot.vue'
import ThreeView from '@/views/three/index.vue' 
import secondaryDetail from '@/views/secondary-detail/index.vue'
import detail from '@/views/detail/index.vue'
import ITJourneyMap from '@/views/it-journey/index.vue'  // 新增

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/career',
      name: 'career',
      component: career,
    },
    {
      path: '/career-stories',
      name: 'CareerStories',
      component: CareerStories,
    },
    {
      path: '/subject',
      name: 'subject',
      component: subject,
    },
    {
      path: '/secondary-college',
      name: 'secondaryCollege',
      component: secondaryCollege,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
    },
    {
      path: '/secondary-detail',
      name: 'secondaryDetail',
      component: secondaryDetail,
    },
    {
      path: '/three',
      name: 'three',
      component: ThreeView
    },
    {
      path: '/college-detail/:id',
      name: 'CollegeDetail',
      component: () => import('@/views/secondary-detail/index.vue'),
      props: true
    },
    // 新增IT Journey Map路由
    {
      path: '/it-journey',
      name: 'ITJourneyMap',
      component: ITJourneyMap,
      meta: {
        title: 'IT Journey Map - CoursePathFinder',
        description: 'Explore detailed roadmaps for IT career paths with step-by-step guidance'
      }
    }
  ],
})

// 添加页面标题处理
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router