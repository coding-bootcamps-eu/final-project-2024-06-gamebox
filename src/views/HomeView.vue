<template>
  <NavBar />
  <body>
    <div class="container">
      <div class="flexbox-container">
        <div class="flexbox">
          <button @click="goToHome">TestView</button>
        </div>
        <div class="flexbox">
          <button @click="onClick">Game-Two</button>
        </div>
        <div class="flexbox">
          <button @click="onClick">Game-Three</button>
        </div>
        <div class="flexbox">
          <button @click="onClick">Game-Four</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    NavBar
  },

  setup() {
    const router = useRouter()

    const goToHome = () => {
      router.push({ name: 'home' })
    }

    return {
      goToHome
    }
  }
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
