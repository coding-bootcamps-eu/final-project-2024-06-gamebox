<template>
  <NavBar />
  <body>
    <div class="container">
      <div class="flexbox">
        <button @click="onClick" class="image-button">
          <img
            src="https://images.deepai.org/art-image/af4416e5be394d568ca6cc2bd502c9ba/massive-gallows-surrounded-by-smaller-gallows.jpg"
            alt="Play Game"
            class="custom-image-1"
          />
          <span class="button-text">Play</span>
        </button>
      </div>

      <div class="flexbox">
        <button @click="onClick" class="image-button">
          <img
            src="https://images.deepai.org/art-image/419435d801a64027b319d46ab46e11a4/dice-cc1697-thumb.jpg"
            alt="Play Game"
            class="custom-image-2"
          />
          <span class="button-text">Play</span>
        </button>
      </div>

      <div class="flexbox">
        <button @click="onClick" class="image-button">
          <img
            src="https://images.deepai.org/art-image/7a09e5a49c244b068888dd2f0e6c15ef/rock-paper-scissor-7d0ac5.jpg"
            alt="Play Game"
            class="custom-image-3"
          />
          <span class="button-text">Play</span>
        </button>
      </div>
      <div class="flexbox">
        <button @click="onClick" class="image-button">
          <img
            src="https://images.deepai.org/art-image/7c8ecc74b29f4c5cad8f7cb7cff84894/snake-with-snakes-in-hair.jpg"
            alt="Play Game"
            class="custom-image-4"
          />
          <span class="button-text">Play</span>
        </button>
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
  background-color: rgb(236, 240, 246);
  margin: 0;
  height: 100%;
}

.container {
  border: 2px solid rgb(0, 0, 0);
  border-radius: 0 0 2rem 2rem;
  width: 100%;
  height: 100%;
  background-color: rgb(243, 238, 234);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexbox-container {
  padding: 1%;
  background-color: rgb(255, 255, 255);
  border: 2px solid black;
  border-radius: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%;
}
.custom-image-1 {
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  /* width: 15vh; */
  height: 17vh;
  object-fit: cover;
  /* margin-right: 9vh; */
}
.custom-image-2 {
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  /* width: 15vh; */
  height: 17vh;
  object-fit: cover;
  /* margin-right: 9vh; */
}

.custom-image-3 {
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  /* width: 15vh; */
  height: 17vh;
  object-fit: cover;
  /* margin-right: 9vh; */
}
.custom-image-4 {
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  /* width: 15vh; */
  height: 17vh;
  object-fit: cover;
  /* margin-right: 9vh; */
}

.flexbox {
  border: 2px solid black;
  width: 30%;
  height: 200px;
  background-color: rgb(255, 254, 252);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
}
</style>
