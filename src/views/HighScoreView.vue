<template>
  <NavBar />
  <h1>Ich bin ein Highscoreview</h1>
  <ul class="highscoreContentList">
    <li v-for="singleGame in games" :key="singleGame.id">
      {{ singleGame.id }}
      {{ singleGame.text }} Best Player: {{ singleGame.bestPlayer }} HIGHSCORE:
      {{ singleGame.highscore }}
    </li>
  </ul>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// import { highscoreStore } from '@/stores/highscores.js'

export default {
  components: {
    NavBar
  },

  data() {
    return {
      games: [
        { id: 1, text: 'Hangman', highscore: '12345', bestPlayer: 'Volker' },
        { id: 2, text: 'Rock, Paper, Scissors', highscore: '5555', bestPlayer: 'Marco' },
        { id: 3, text: 'Snake', highscore: '9876', bestPlayer: 'Volker' }
      ]
    }
  }
}
</script>

<style scoped>
.highscoreContentList {
  background-color: rgb(255, 174, 0);
  border: black 5 rem;
  width: 100%;
  height: 100%;
}
</style>
