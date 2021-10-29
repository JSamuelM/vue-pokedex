<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue'))
  },
  methods: {
    ...mapActions('pokemon', ['loadPokemons']),
  },
  computed: {
    ...mapState('pokemon', ['pokemons'])
  },
  created() {
    if (this.pokemons.length == 0) {
      console.log('cargo');
      this.loadPokemons()
    }
  }
}
</script>