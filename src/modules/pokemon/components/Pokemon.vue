<template>
  <div class="pokemon"
    @click="$router.push({name: 'pokemon-id', params: {id: id}})"
  >
    <img :src="imgSrc" alt="pokemon image" class="pokemon__image">
    <p class="pokemon__name">{{id}}. {{ pokemon.name }}</p>
    <p class="pokemon__type">Type: Grass, Poison</p>
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
  background-color: #f4f4f4
  border-radius: 15px
  color: #222
  cursor: pointer
  padding: 40px
  text-align: center
  &:hover
    @-webkit-animation: bounce 0.5 linear
    animation: bounce 0.5 linear
  img.pokemon__image
    height: 180px
  p.pokemon__name
    font-size: 32px
    font-weight: normal
    margin-bottom: 0px
    text-transform: capitalize
  p.pokemon__type
    font-weight: lighter
    color: #666
    margin-top: 5px
    text-transform: capitalize
@keyframes bounce
  20%
    transform: translateY(-6px)
  40%
    transform: translateY(0px)
  60%
    transform: translateY(-2px)
  80%
    transform: translateY(-0px)
</style>