import { defineStore } from 'pinia'

export const usersStore = defineStore('users', {
  //data()
  state() {
    return {
      currentUser: JSON.parse(localStorage.getItem('user')) || null,
      inputUser: null
    }
  },
  //computed
  getters: {
    isLoggedIn() {
      return this.currentUser !== null
    }
  },
  //methods
  actions: {
    login() {
      this.currentUser = {
        username: this.inputUser
      }

      localStorage.setItem('user', JSON.stringify(this.currentUser))
    },

    logout() {
      this.currentUser = null
      localStorage.setItem('user', null)
    }
  }
})
