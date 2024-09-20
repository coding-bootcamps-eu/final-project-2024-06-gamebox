<template>
  <main>
    <header id="gameMenu">
      <div id="gameState">{{ gameState }}</div>
      <div id="fails">Fails: {{ countFails }}/10</div>
      <button id="newGameBtn" @click="initGame">NEW GAME</button>
    </header>
    <div>
      <span id="output">{{ guessStr }}</span>
    </div>
    <menu id="letters">
      <li v-for="letter in 'abcdefghijklmnopqrstuvwxyz'" :key="letter">
        <button @click="handleLetterClick(letter)" :disabled="disabledLetters[letter]">
          {{ letter }}
        </button>
      </li>
    </menu>
    <form @submit.prevent="addNewWord">
      <input type="text" name="new-word" id="new-word" v-model="newWord" />
      <label for="new-word">Add new word to list</label>
      <button id="btn-add-word">Add word</button>
    </form>
  </main>
</template>

<script>
const defaultWords = ['flexbox', 'juni', 'bootcamp', 'javascript']

export default {
  data() {
    return {
      words: JSON.parse(localStorage.getItem('words')) || defaultWords,
      currentWord: '',
      guess: [],
      countFails: 0,
      gameState: 'ACTIVE',
      disabledLetters: {},
      newWord: ''
    }
  },
  computed: {
    guessStr() {
      return this.guess.join('')
    }
  },
  methods: {
    initGame() {
      this.chooseRandomWord()
      this.resetDisabledLetters()
      this.initGuess()
      this.countFails = 0
      this.gameState = 'ACTIVE'
    },
    chooseRandomWord() {
      const randomIndex = Math.floor(Math.random() * this.words.length)
      this.currentWord = this.words[randomIndex]
    },
    resetDisabledLetters() {
      this.disabledLetters = {}
    },
    initGuess() {
      this.guess = Array(this.currentWord.length).fill('_')
    },
    handleLetterClick(letter) {
      this.disabledLetters[letter] = true

      if (!this.currentWord.includes(letter)) {
        this.countFails++
        if (this.countFails >= 10) {
          this.gameState = 'GAME OVER'
          this.disableAllLetters()
        }
        return
      }

      this.checkGuess(letter)
    },
    checkGuess(guessedLetter) {
      for (let i = 0; i < this.currentWord.length; i++) {
        if (this.currentWord[i] === guessedLetter) {
          this.guess[i] = guessedLetter
        }
      }

      if (this.currentWord === this.guessStr) {
        this.gameState = 'YOU WIN!'
        this.disableAllLetters()
      }
    },
    disableAllLetters() {
      'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter) => {
        this.disabledLetters[letter] = true
      })
    },
    addNewWord() {
      const notAcceptedCharacters = this.newWord.match(/[^a-z]/)
      if (notAcceptedCharacters) return

      if (this.newWord !== '') {
        this.words.push(this.newWord)
        localStorage.setItem('words', JSON.stringify(this.words))
        this.newWord = ''
      }
    }
  },
  mounted() {
    this.initGame()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: monospace;
}

body {
  max-width: 800px;
  margin-inline: auto;
}

main {
  display: grid;
}

header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
}

header * {
  border-bottom: solid black;
}

header > div {
  border-right: solid black;
}

div {
  text-align: center;
}

main > div {
  height: 400px;
  align-content: center;
}

#output {
  font-size: 2.5rem;
  letter-spacing: 0.25rem;
}

menu {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 0rem;
}

form {
  margin-top: 13rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

button {
  width: 100%;
}

#newGameBtn {
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
}
</style>
