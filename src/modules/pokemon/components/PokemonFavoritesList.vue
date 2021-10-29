<template>
  <div class="container">
    <h1>My Favorite Pokemon's</h1>
    <div class="input">
      <input type="text" placeholder="Buscar Pokemon..." v-model="name">
    </div>
    <div class="pokemon-list">
      <Pokemon
        v-for="pokemon in pokemonsByName"
        :key="pokemon"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
export default {
  components: {
    Pokemon: defineAsyncComponent(() => import('./Pokemon.vue')),
  },
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters('pokemon', ['getPokemonsFavorites']),
    pokemonsByName() {
      return this.getPokemonsFavorites(this.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  font-size: 54px
  margin-bottom: 40px
  text-align: center
.pokemon-list
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
  grid-gap: 25px
.input
  margin: 0 auto
  width: 50%
  input
    border: 0
    border-radius: 10px
    font-size: 16px
    height: 20px
    margin-bottom: 40px
    padding: 10px
    width: 100%
</style>