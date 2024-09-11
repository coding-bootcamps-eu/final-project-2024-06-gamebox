<template>
  <body>
    <div class="container">
      <div class="flexbox-container">
        <div class="flexbox">Spiel-1</div>
        <div class="flexbox">Spiel-2</div>
        <div class="flexbox">Spiel-3</div>
        <div class="flexbox">Spiel-4</div>
      </div>
    </div>
  </body>
</template>

<style>
body,
html {
  display: flex;
  justify-content: center;
  background-color: bisque;
  margin: 0;
  padding: 0;
  height: 100%;
}

.container {
  width: 1000%;
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
