import { defineStore } from 'pinia'

export const gamesStore = defineStore('games', {
  //data()
  state() {
    return {
      games: [
        {
          id: 1,
          gamename: 'HANGMAN',
          gamepath: 'Hangman'
        },
        {
          id: 2,
          gamename: 'ROCK PAPER SCISSORS',
          gamepath: 'ScissorsGame'
        },
        {
          id: 3,
          gamename: 'SNAKE',
          gamepath: 'Snake'
        },
        {
          id: 4,
          gamename: 'HIGHER OR LOWER',
          gamepath: 'HigherOrLower'
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
