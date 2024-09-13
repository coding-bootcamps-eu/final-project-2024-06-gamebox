import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HighScoreView from '@/views/HighScoreView.vue'
import TestView from '@/views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/highscore',
      name: 'highScore',
      component: HighScoreView
    },
    {
      path: '/Test',
      name: 'Test',
      component: TestView
    }
  ]
})

export default router
