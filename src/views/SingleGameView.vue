<template>
  <NavBar />
  <h1>Ich bin die SingleGameView</h1>
  <div class="currentGame">
    <!-- <Snake />
    <div>
      <p>Total games: {{ gamesStore.totalGames }}</p>
      <p>All game names: {{ gamesStore.gameNames.join(', ') }}</p>

      <p>Game with id : {{ gamesStore.getGameById(3)?.gamename }}</p>
      <p>Gamepath with id : {{ gamesStore.getGameById(3)?.gamepath }}</p>
      {{ gamesStore.getGameById(1)?.gamepath }}
    </div> -->
    <!-- {{ gameId }}
    {{ gamesStore.getGameById(1)?.gamename }}
    {{ gameComponent }} -->

    {{ gameId }}

    <component v-if="gameId === '1'" :is="gamesStore.getGameById(1)?.gamename"></component>
    <component v-if="gameId === '2'" :is="gamesStore.getGameById(2)?.gamename"></component>
    <component v-if="gameId === '3'" :is="gamesStore.getGameById(3)?.gamename"></component>
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
      return this.$route.params.id
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

<style scoped>
.currentGame {
  background-color: rgb(255, 102, 0);
  border: black 5 rem;
  width: 100%;
  height: 100%;
}
</style>
