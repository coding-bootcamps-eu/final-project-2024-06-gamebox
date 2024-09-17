<template>
  <NavBar />
  <body>
    <div class="container">
      <ul class="highscoreContentList">
        <li v-for="singleGame in games" :key="singleGame.id">
          {{ singleGame.id }}
          {{ singleGame.text }} Best Player: {{ singleGame.bestPlayer }} HIGHSCORE:
          {{ singleGame.highscore }}
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

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
  border: 2px solid black;
  border-radius: 0 0 2rem 2rem;
  width: 100%; /* Corrected width */
  height: 90%;
  background-color: rgb(209, 204, 204);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
