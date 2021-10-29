<template>
  <div class="container">
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
    PokemonFavoritesList: defineAsyncComponent(() => import('../components/PokemonFavoritesList.vue'))
  },
  computed: {
    ...mapState('pokemon', ['isLoading'])
  },
}
</script>

<style lang="stylus" scoped>
.alert
  background: #0dcaf0
  border-radius: 15px
  color: white
  font-size: 18px
  padding: 10px
  margin: 20px auto
  text-align: center
  width: 30%
</style>