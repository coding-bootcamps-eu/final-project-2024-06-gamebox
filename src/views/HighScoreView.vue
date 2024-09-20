<!-- src/components/UserList.vue -->

<template>
  <NavBar />

  <div class="highscoreContentList">
    <div v-if="loading">Loading users...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <!-- <li class="list-element" v-for="user in users" :key="user.id">
        {{ user.id }}{{ user.username }} -->
      <li class="list-element" v-for="game in gamesEmbedHighscore" :key="game.id">
        {{ game.id }}{{ game.title }}
        <ul>
          <li v-for="highScore in game.highscores" :key="highScore.id">
            {{ highScore.score }}
          </li>
        </ul>
      </li>
      <!-- <li v-for="element in users.highscores" :key="element.id">
        {{ element.id }} {{ element.gameID }} {{ element.userID }} {{ element.score }}
      </li> -->
    </ul>
  </div>
</template>

<script>
import apiClient from '@/api/index.js'
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
  name: 'test-data',

  data() {
    return {
      users: [],
      gamesEmbedHighscore: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchUsers()
    this.fetchGamesEmbedHighscore()
  },
  methods: {
    async fetchUsers() {
      try {
        this.loading = true
        this.users = await apiClient.getUsers()
      } catch (error) {
        console.error('Error fetching users:', error)
        this.error = 'Failed to load users. Please try again later.'
      } finally {
        this.loading = false
      }
    },
    async fetchGamesEmbedHighscore() {
      try {
        this.loading = true
        this.gamesEmbedHighscore = await apiClient.getGamesEmbedHighscores()
      } catch (error) {
        console.error('Error fetching users:', error)
        this.error = 'Failed to load users. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.highscoreContentList {
  background-color: rgb(255, 174, 0);
  border: 5px solid black; /* Corrected border property */
  /* width: 110vh; */
  width: 100%;
  height: 100%;
  border-radius: 0rem 0rem 2rem 2rem;
}

body,
html {
  display: flex;
  justify-content: center;
  background-color: rgb(11, 99, 231);
  margin: 0;
  height: 100%;
}

.list-element {
  border: 2px solid black;
  border-radius: 1rem;
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
