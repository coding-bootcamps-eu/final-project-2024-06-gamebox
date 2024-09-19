<!-- src/components/UserList.vue -->

<!-- <template>
  <div>
    <h2>User List</h2>
    <div v-if="loading">Loading users...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.username }} (ID: {{ user.id }})</li>
    </ul>
  </div>
</template>

<script>
import apiClient from '@/api/index.js'

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        this.loading = true
        this.users = await apiClient.getUsers()
      } catch (error) {
        console.error('Error fetching users:', error)
        this.error = 'Failed to load users. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script> -->
