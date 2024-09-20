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
  border-radius: 2rem 2rem 0 0;
  border: 3px solid rgb(0, 0, 0);
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: rgb(36, 34, 34);
}

.nav-link {
  text-decoration: none;
  color: #fa6400;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 5px solid rgb(224, 223, 223);
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

button {
  margin-left: 1rem;
}
</style>
