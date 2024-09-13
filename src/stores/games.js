import { defineStore } from 'pinia'

export const gamesStore = defineStore('games', {
  //data()
  state() {
    return {
      games: [
        {
          id: 1,
          game: 'hangman',
          gamepath: 'nix'
        },
        {
          id: 2,
          game: 'rock paper siccors',
          gamepath: 'nix'
        },
        {
          id: 3,
          game: 'snake',
          gamepath: 'nix'
        }
      ]
    }
  }
})
