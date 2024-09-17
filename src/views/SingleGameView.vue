<template>
  <NavBar />
  <div class="currentGame">
    <component :is="gamesStore.getGameById(gameId)?.gamepath"></component>
  </div>
</template>

<script>
import Hangman from '@/components/Hangman.vue'
import HigherOrLower from '@/components/HigherOrLower.vue'
import NavBar from '@/components/NavBar.vue'
import ScissorsGame from '@/components/ScissorsGame.vue'
import Snake from '@/components/Snake.vue'
import { gamesStore } from '@/stores/games.js'

export default {
  components: {
    NavBar,
    Snake,
    Hangman,
    ScissorsGame,
    HigherOrLower
  },

  setup() {
    const store = gamesStore()
    return { gamesStore: store }
  },

  computed: {
    gameId() {
      return Number(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.currentGame {
  background-color: rgb(255, 102, 0);
  border: black 5 rem;
  width: 100%;
  height: 100%;
}
</style>
