<template>
  <Navbar />
  <div v-if="isLoading">
    <div class="alert">
      <h2>Cargando...</h2>
      <i class="fa fa-spin fa-sync"></i>
    </div>
  </div>
  <div v-else>
    <PokemonList />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
    PokemonList: defineAsyncComponent(() => import('../components/PokemonList.vue'))
  },
  methods: {
    ...mapActions('pokemon', ['loadPokemons']),
  },
  computed: {
    ...mapState('pokemon', ['isLoading'])
  },
  created() {
    this.loadPokemons()
  }
}
</script>

<style lang="stylus" scoped>
.alert
  color: white
  background: #0dcaf0
  font-size: 18px
  padding: 10px
  margin: 20px auto
  text-align: center
  width: 30%
</style>