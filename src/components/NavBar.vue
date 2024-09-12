<template>
  <nav>
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/Highscore" class="nav-link">Highscore</RouterLink>
    <div class="nav-link">
      <div v-if="loggedInUser">
        <span>Welcome, {{ loggedInUser }}</span>
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <input v-model="username" placeholder="Enter username" />
        <button @click="login">Login</button>
      </div>
      <!-- <button class="nav-link">Login</button> -->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loggedInUser: null,
      username: ''
    }
  },
  methods: {
    login() {
      if (this.username.trim()) {
        this.loggedInUser = this.username
        this.username = ''
      }
    },
    logout() {
      this.loggedInUser = null
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: lightgray;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #e0e0e0;
}
</style>
