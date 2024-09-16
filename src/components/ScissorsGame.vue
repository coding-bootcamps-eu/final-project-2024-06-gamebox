<template>
  <!-- <section class="container" :class="{ start: isStarting }">
    <div class="result_field">
      <div class="result_images">
        <span class="user_result">
          <img :src="userResult" alt="User's choice" />
        </span>
        <span class="cpu_result">
          <img :src="cpuResult" alt="CPU's choice" />
        </span>
      </div>
      <div class="result">{{ resultText }}</div>
    </div>
    <div class="option_images">
      <span
        v-for="(option, index) in options"
        :key="option.name"
        class="option_image"
        :class="{ active: activeIndex === index }"
        @click="playGame(index)"
      >
        <img :src="option.image" :alt="option.name" />
        <p>{{ option.name }}</p>
      </span>
    </div>
  </section> -->
  <p>rock paper scissor</p>
</template>

<!-- <script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const options = [
      { name: 'Rock', image: 'images/rock.png', value: 'R' },
      { name: 'Paper', image: 'images/paper.png', value: 'P' },
      { name: 'Scissors', image: 'images/scissors.png', value: 'S' }
    ]

    const userResult = ref('images/rock')
    const cpuResult = ref('images/rock.png')
    const resultText = ref("Let's Play!!")
    const activeIndex = ref(-1)
    const isStarting = ref(false)

    const outcomes = {
      RR: 'Draw',
      RP: 'Cpu',
      RS: 'User',
      PP: 'Draw',
      PR: 'User',
      PS: 'Cpu',
      SS: 'Draw',
      SR: 'Cpu',
      SP: 'User'
    }

    const playGame = (index) => {
      activeIndex.value = index
      userResult.value = cpuResult.value = 'images/rock.png'
      resultText.value = 'Wait...'
      isStarting.value = true

      setTimeout(() => {
        isStarting.value = false
        userResult.value = options[index].image

        const randomIndex = Math.floor(Math.random() * 3)
        cpuResult.value = options[randomIndex].image

        const userValue = options[index].value
        const cpuValue = options[randomIndex].value
        const outcome = outcomes[userValue + cpuValue]

        resultText.value = userValue === cpuValue ? 'Match Draw' : `${outcome} Won!!`
      }, 2500)
    }

    return {
      options,
      userResult,
      cpuResult,
      resultText,
      activeIndex,
      isStarting,
      playGame
    }
  }
}
</script> -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f7fb;
}
::selection {
  color: #fff;
  background-color: #7d2ae8;
}
container {
  padding: 2rem 7rem;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.result_images {
  display: flex;
  column-gap: 7rem;
}
.container.start .user_result {
  transform-origin: right;
  animation: cpuShake 0.7s ease infinite;
}
@keyframes cpuShake {
  50% {
    transform: rotate(-10deg);
  }
}
.result_image img {
  width: 100px;
}
.user-result img {
  transform: rotate(90deg);
}
.cpu_result img {
  transform: rotate(-90deg) rotateY(180deg);
}
.result {
  text-align: center;
  font-size: 2rem;
  color: #7d2ae8;
  margin-top: 1.5rem;
}

.option_image img {
  width: 50px;
}

.option images {
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  justify-content: space-between;
}
.container.start .option_images {
  pointer-events: none;
}
.option_image {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.option_image:hover {
  opacity: 1;
}
.option_image.avtive {
  opacity: 1;
}
.options_image img {
  pointer-events: none;
}
.option_image p {
  color: #7d2ae8;
  font-size: 1.235rem;
  margin-top: 1rem;
  pointer-events: none;
}
</style>
