<template>
  <h1>{{ gameState }}</h1>
  <button @click="resetGame">new Game</button>
  <div class="game">
    <div class="column">
      <div class="your-roll">{{ myDiceRoll }}</div>
      <button @click="handleClickMyDiceRoll" :disabled="disableBtnYourDice" class="your-dice">
        your dice
      </button>
    </div>
    <div class="column">
      <div class="selection">{{ selection }}</div>
      <button @click="handleClickLower" :disabled="disableLower"><</button>
      <button @click="handleClickHigher" :disabled="disableHigher">></button>
    </div>
    <div class="column">
      <div class="enemy-roll">{{ enemyDiceRoll }}</div>
      <p>your Opponents roll</p>
    </div>
  </div>
  <p>Your Score: {{ yourScore }}</p>
  <p>
    <strong>
      {{ result }}
    </strong>
  </p>
</template>

<script>
export default {
  data() {
    return {
      yourScore: 0,
      myDiceRoll: '?',
      enemyDiceRoll: '?',
      selection: '?',
      gameState: 'ready',
      disableBtnYourDice: false,
      disableHigher: true,
      disableLower: true
    }
  },
  computed: {
    result() {
      if (this.selection === '>') {
        if (this.myDiceRoll > this.enemyDiceRoll) return 'You win!'
        if (this.myDiceRoll < this.enemyDiceRoll) return 'You lose!'
        return 'it´s a tie!'
      } else if (this.selection === '<') {
        if (this.myDiceRoll > this.enemyDiceRoll) return 'You lose!'
        if (this.myDiceRoll < this.enemyDiceRoll) return 'You win!'
        return 'it´s a tie!'
      }
      return 'still playing!'
    }
  },
  methods: {
    scorePlus() {
      this.yourScore += 1
    },
    scoreMinus() {
      if (this.yourScore > 0) {
        this.yourScore -= 1
      }
    },

    calcScore() {
      if (this.result === 'You win!') {
        this.scorePlus()
      }
      if (this.result === 'You lose!') {
        this.scoreMinus()
      }
    },

    // score() {
    //   if (this.gameState === 'You win!') {
    //     this.yourScore += 1
    //   }
    // },
    handleClickLower() {
      this.selection = '<'
      //   this.gameState = this.result
      this.toggleBtnHigher()
      this.toggleBtnLower()
      this.enemyDiceRoll = this.rollDice()
      this.calcScore()
    },
    handleClickHigher() {
      this.selection = '>'
      //   this.gameState = this.result
      this.toggleBtnHigher()
      this.toggleBtnLower()
      this.enemyDiceRoll = this.rollDice()
      this.calcScore()
    },

    handleClickMyDiceRoll() {
      this.myDiceRoll = this.rollDice()

      this.gameState = 'choose higher, or lower!'
      //   this.disableBtnYourDice = true
      this.toggleBtnYourDice()
      this.toggleBtnHigher()
      this.toggleBtnLower()
    },
    rollDice() {
      return Math.ceil(Math.random() * 6)
    },
    resetGame() {
      this.myDiceRoll = 0
      this.enemyDiceRoll = 0
      this.gameState = 'ready'
      //   this.result = 'New Game'
      this.selection = '?'
      //   this.disableBtnYourDice = false
      this.disableBtnYourDice = false
      this.disableHigher = true
      this.disableLower = true
    },
    toggleBtnYourDice() {
      return (this.disableBtnYourDice = !this.disableBtnYourDice)
    },
    toggleBtnLower() {
      return (this.disableLower = !this.disableLower)
    },
    toggleBtnHigher() {
      return (this.disableHigher = !this.disableHigher)
    }
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
