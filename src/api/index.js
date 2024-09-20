// src/api.js

const apiClient = {
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  },

  async request(endpoint, method = 'GET', data = null) {
    const url = `${this.baseURL}${endpoint}`
    const options = {
      method,
      headers: this.headers
    }

    if (data) {
      options.body = JSON.stringify(data)
    }

    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  },

  getUsers() {
    return this.request('users')
  },
  getGamesEmbedHighscores() {
    return this.request('games?_embed=highscores')
  }
}

export default apiClient
