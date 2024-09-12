<template>
  <nav>
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/Highscore" class="nav-link">Highscore</RouterLink>
    <div class="nav-link">
      <div v-if="store.isLoggedIn">
        <span>Welcome, {{ store.currentUser.username }} </span>

        <button @click="store.logout">Logout</button>
      </div>
      <div v-else>
        <input v-model="store.inputUser" placeholder="Enter username" />
        <button @click="store.login">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { usersStore } from '@/stores/users.js'

export default {
  data() {
    return {
      store: usersStore()
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

button {
  margin-left: 1rem;
}
</style>
