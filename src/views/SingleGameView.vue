<template>
  <NavBar />
  <h1>Ich bin die SingleGameView</h1>
  <div class="currentGame">
    <Snake />
    <div>
      <p>Total games: {{ gamesStore.totalGames }}</p>
      <p>All game names: {{ gamesStore.gameNames.join(', ') }}</p>

      <p>Game with id : {{ gamesStore.getGameById(3)?.gamename }}</p>
      <p>Gamepath with id : {{ gamesStore.getGameById(3)?.gamepath }}</p>
      {{ gamesStore.getGameById(3)?.gamepath }}
    </div>
    <component :is="gamesStore.getGameById(1)?.gamename"></component>
  </div>
</template>

<script>
import Hangman from '@/components/Hangman.vue'
import NavBar from '@/components/NavBar.vue'
import Snake from '@/components/Snake.vue'
import { gamesStore } from '@/stores/games.js'

export default {
  components: {
    NavBar,
    Snake,
    Hangman
  },
  // data() {
  //   return {
  //     store: gamesStore()
  //   }
  // }

  setup() {
    const store = gamesStore()
    return { gamesStore: store }
  }
  // data() {
  //   return {
  //     componentName: Snake
  //   }
  // }
  // computed {
  //   return{

  //   }
  // }
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
