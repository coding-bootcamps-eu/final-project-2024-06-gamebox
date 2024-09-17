<template>
  <NavBar />
  <div class="container">
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
  </div>
</template>

<script>
import Hangman from '@/components/Hangman.vue'
import NavBar from '@/components/NavBar.vue'
import ScissorsGame from '@/components/ScissorsGame.vue'
import Snake from '@/components/Snake.vue'
import { gamesStore } from '@/stores/games.js'

export default {
  components: {
    NavBar,
    Snake,
    Hangman,
    ScissorsGame
  },

  setup() {
    const store = gamesStore()
    return { gamesStore: store }
  },

  computed: {
    gameId() {
      return Number(this.$route.params.id)
    }

    // dynamicGameComponent() {
    //   const game = this.gamesStore.getGameById(this.gameId)
    //   return game ? game.gamename : null
    // }

    // gameComponent() {
    //   return this.gamesStore.getGameById(this.gameId)?.gamename
    // },
    // isGameeLoaded() {
    //   return !!this.gameComponent
    // }
  }
}
</script>

<style>
.currentGame {
  background-color: rgb(255, 174, 0);
  border: 5px solid black; /* Corrected border property */
  width: 110vh;
  height: 100%;
  border-radius: 0rem 0rem 2rem 0rem;
}

body,
html {
  display: flex;
  justify-content: center;
  background-color: rgb(11, 99, 231);
  margin: 0;
  height: 100%;
}

.container {
  border: 1px solid black; /* width, style, color */
  border-radius: 0 0 2rem 2rem;
  width: 100%;
  height: 90%;
  background-color: rgb(209, 204, 204);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
