<template>
  <NavBar />
  <body>
    
    <div class="container">
      <div class="flexbox" v-for="item in gamesStore.games" :key="item.id">
        <img
          :src="item.imagepath"
          alt="Play Game"
          class="play-button"
          @click="$router.push('/singleGame/' + item.id)"
        >
        
        </img>
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
  padding: 1rem;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 0 0 2rem 2rem;
  width: 100%;
  height: 100%;
  background-color: rgb(243, 238, 234);
 
  display: flex;
  justify-content: center;
  align-items: center;
}



.flexbox {
  border: 2px ;
  width: 30%;
  height: 200px;
 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  

}

.play-button {
  border: 2px solid black;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}


</style>
