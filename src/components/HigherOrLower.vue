<template>
  <h1>Gamestate</h1>
  <div class="game">
    <div class="column">
      <div clas="your-roll">0</div>
      <button class="your-dice">your dice</button>
    </div>
    <div class="column">
      <div clas="selection">?</div>
    </div>
    <div class="column">
      <div clas="enemy-roll">0</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  width: 33%;
  text-align: center;
}
</style>
