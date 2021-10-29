<template>
  <div class="container">
    <Navbar />
    <div v-if="isLoading">
      <div class="alert">
        <h2>Cargando...</h2>
        <i class="fa fa-spin fa-sync"></i>
      </div>
    </div>
    <div v-else>
      <PokemonFavoritesList />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue')),
    PokemonFavoritesList: defineAsyncComponent(() => import('../components/PokemonFavoritesList.vue'))
  },
  computed: {
    ...mapState('pokemon', ['isLoading'])
  },
}
</script>

<style>

</style>