<template>
  <NavBar />
  <body>
    <div class="container">
      <div class="flexbox-container">
        <!-- <div class="flexbox">
          <button @click="$router.push('/singleGame/1')">
            {{ gamesStore.getGameById(1)?.gamename }}
          </button>
        </div>
        <div class="flexbox">
          <button @click="$router.push('/singleGame/2')">
            {{ gamesStore.getGameById(2)?.gamename }}
          </button>
        </div>
        <div class="flexbox">
          <button @click="onClick">Game-Three</button>
        </div>
        <div class="flexbox">
          <button @click="onClick">Game-Four</button>
        </div> -->
        <div class="flexbox" v-for="item in gamesStore.games" :key="item.id">
          <button @click="$router.push('/singleGame/' + item.id)">
            {{ gamesStore.getGameById(item.id)?.gamename }}
          </button>
        </div>
      </div>
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

  // setup() {
  //   const router = useRouter()

  //   const goToHome = () => {
  //     router.push({ name: 'home' })
  //   }

  //   return {
  //     goToHome
  //   }
  // }
}
</script>

<style>
body,
html {
  display: flex;
  justify-content: center;
  background-color: bisque;
  margin: 0;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexbox-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 80%;
}

.flexbox {
  width: 400px;
  height: 200px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
}
</style>
