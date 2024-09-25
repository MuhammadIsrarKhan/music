<template>
  <Header />

  <div class="pb-20">
    <router-view></router-view>
  </div>
 <player />

  <auth />
</template>

<script>
import Header from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import { useUserStore } from './stores/user'
import { getAuth } from 'firebase/auth'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Header,
    Auth,
    Player
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    const auth = getAuth()
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
