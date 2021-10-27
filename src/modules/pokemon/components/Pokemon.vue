<template>
  <div class="pokemon"
    @click="$router.push({name: 'pokemon-id', params: {id: pokemon.id}})"
  >
    <img :src="pokemon.image" alt="pokemon image" class="pokemon__image">
    <p class="pokemon__name">{{pokemon.id}}. {{ pokemon.name }}</p>
    <p class="pokemon__type">
      Type: 
      <ul>
        <li 
          v-for="type in pokemon.type.map(type => type.type.name)"
          :key="type"
        >
          {{type}}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
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
    animation: bounce 0.5 linear
    box-shadow: 0px 10px 20px 1px rgba(0,0,0,0.4)
    transition: all 0.2s ease-in-out
  img.pokemon__image
    height: 180px
  p.pokemon__name
    font-size: 32px
    font-weight: normal
    margin-bottom: 0px
    text-transform: capitalize
  p.pokemon__type
    color: #666
    font-size: 16px
    font-weight: lighter
    margin-top: 5px
    text-transform: capitalize
    ul
      padding: 0
      display: inline-block
      li
        background: #343a40
        border-radius: 15px
        color: white
        display: inline-block
        list-style: none
        margin: 0 5px
        padding: 5px 10px
</style>