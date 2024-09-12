import { createRouter, createWebHistory } from 'vue-router'
import { usersStore } from '@/stores/users.js'
import HomeView from '../views/HomeView.vue'
import HighScoreView from '@/views/HighScoreView.vue'

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
      component: HighScoreView,
      meta: {
        isLoggedIn: true
      }
    }
  ]
})

router.beforeEach(function (to, from) {
  if (to.meta.isLoggedIn) {
    if (usersStore().isLoggedIn === false) {
      return '/'
    }
  }
})

export default router
