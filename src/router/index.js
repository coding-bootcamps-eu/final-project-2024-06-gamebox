import { createRouter, createWebHistory } from 'vue-router'
import { usersStore } from '@/stores/users.js'
import HomeView from '../views/HomeView.vue'
import HighScoreView from '@/views/HighScoreView.vue'
import SingleGameView from '@/views/SingleGameView.vue'

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
    },

    {
      path: '/singleGame',
      name: 'singleGame-overview',
      component: SingleGameView,
      meta: {
        isLoggedIn: true
      }
    },

    {
      path: '/singleGame/:id',
      name: 'singleGame',
      component: SingleGameView,
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
