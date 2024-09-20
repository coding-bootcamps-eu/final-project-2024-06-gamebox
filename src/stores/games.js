import { defineStore } from 'pinia'

export const gamesStore = defineStore('games', {
  //data()
  state() {
    return {
      games: [
        {
          id: 1,
          gamename: 'HANGMAN',
          gamepath: 'Hangman',
          imagepath:
            'https://images.deepai.org/art-image/af4416e5be394d568ca6cc2bd502c9ba/massive-gallows-surrounded-by-smaller-gallows.jpg'
        },
        {
          id: 2,
          gamename: 'ROCK PAPER SCISSORS',
          gamepath: 'ScissorsGame',
          imagepath:
            'https://images.deepai.org/art-image/419435d801a64027b319d46ab46e11a4/dice-cc1697-thumb.jpg'
        },
        {
          id: 3,
          gamename: 'SNAKE',
          gamepath: 'Snake',
          imagepath:
            'https://images.deepai.org/art-image/7a09e5a49c244b068888dd2f0e6c15ef/rock-paper-scissor-7d0ac5.jpg'
        },
        {
          id: 4,
          gamename: 'HIGHER OR LOWER',
          gamepath: 'HigherOrLower',
          imagepath:
            'https://images.deepai.org/art-image/bde592a507f649e5b64593088d2374b2/shake-snake-thumb.jpg'
        }
      ]
    }
  },

  getters: {
    // Computed property to get the total number of games
    totalGames() {
      return this.games.length
    },

    // Computed property to get a game by id
    getGameById: (state) => (id) => {
      return state.games.find((element) => element.id === id)
    },

    // Computed property to get game names
    gameNames() {
      return this.games.map((element) => element.gamename)
    }
  }
})
