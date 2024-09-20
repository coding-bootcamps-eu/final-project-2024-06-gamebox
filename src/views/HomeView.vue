<template>
  <NavBar />
  <body>
    <div class="container">
      <div class="flexbox" v-for="item in gamesStore.games" :key="item.id">
        <button class="play-button" @click="$router.push('/singleGame/' + item.id)">
          <img :src="item.imagepath" alt="Play Game" class="game-image" />
          <span class="game-name">{{ item.gamename }}</span>
        </button>
      </div>
      <router-link to="@/stores/HighScores.js" class="flexbox-highscores">Highscores</router-link>
    </div>
  </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { gamesStore } from '@/stores/games.js'

export default {
  components: {
    NavBar
  },

  setup() {
    const store = gamesStore()
    return { gamesStore: store }
  }
}
</script>

<style scoped>
body {
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 0 0 2rem 2rem;
  border: 7px solid rgb(0, 0, 0);
  background-color: rgb(226, 222, 222);

  height: 90%;
}

html {
  background-color: rgb(157, 157, 158);
  margin: 0;
  height: 100%;
  overflow-x: auto;
}

.flexbox-highscores {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 20%;
  font-size: 200%;
}

.container {
  display: flex;
  padding: 2rem;
  height: 40%;
  width: 80%;
  margin-top: 20%;
  border-radius: 3rem;
  border: 7px solid rgb(0, 0, 0);
  background-color: rgb(255, 174, 0);
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}
.flexbox {
  width: calc(20% - 1rem);
  /* margin-top: 00%; */
  height: 200px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 2rem;
}

.play-button {
  font-size: 40%;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.game-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  text-align: center;
}
</style>
