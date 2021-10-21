<template>
  <div class="pokemon d-flex"
    @click="$router.push({name: 'pokemon-id', params: {id: id}})"
  >
    <div>
      <p>{{ pokemon.name }}</p>
    </div>
    <div>
      <img :src="imgSrc" alt="pokemon image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }
  }
}
</script>

<style lang="stylus" scoped>
.pokemon
  align-items: center
  background-color: white
  border: 1px solid #0dcaf0
  cursor: pointer
  color: black
  justify-content: center
  margin: 10px 5px
  text-transform: capitalize
  p
    font-weight: bold
</style>