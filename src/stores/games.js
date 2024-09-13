import { defineStore } from 'pinia'
import router from '@/router'

export const gamesStore = defineStore('games', {
  //data()
  state() {
    return {
      games: [
        {
          id: 1,
          gamename: 'hangman',
          gamepath: 'nix'
        },
        {
          id: 2,
          gamename: 'rock paper siccors',
          gamepath: 'nix'
        },
        {
          id: 3,
          gamename: 'snake',
          gamepath: '<Snake/>'
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
