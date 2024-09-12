<template>
  <NavBar class="navbar" />
  <h1>Ich bin die SingleGameView</h1>
  <div class="currentGame"></div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.currentGame {
  background-color: blue;
  border: black 5 rem;
  width: 100%;
  height: 100%;
}
</style>
