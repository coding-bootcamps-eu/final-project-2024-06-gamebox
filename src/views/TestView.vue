<template>
  <ScissorsGame />
  <div>
    <button @click="onClick">TestView</button>
  </div>
</template>

<script>
import ScissorsGame from '@/components/ScissorsGame.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'TestView',
  components: {
    ScissorsGame
  } /*,
  setup() {
    const router = useRouter()

    const goToHome = () => {
      router.push({ name: 'home' })
    }

    return {
      goToHome
    }
  }
*/
}
</script>
