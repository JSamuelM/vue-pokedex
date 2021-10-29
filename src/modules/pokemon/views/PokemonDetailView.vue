<template>
  <div class="container">
    <div class="card">
      <button class="goBack" @click="$router.push({name: 'pokemon-list'})">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="cry" @click.prevent="soundCry">
        <i class="fas fa-play"></i>
      </button>
      <button class="favorite" :disabled="!isAuth" @click="addFavorite">
        <i class="far fa-heart"></i>
      </button>
      <div class="card-info">
        <div class="pokemon">
          <h1>{{ pokemon.name }}</h1>
          <ul>
            Types:
            <li
              v-for="type in pokemon.types.map(type => type.type.name)"
              :key="type"
            >
              {{type}}
            </li> 
          </ul>
          <img
            :src="imgSrc + pokemon.id + '.png'"
            alt="pokemon picture"
            class="pokemon__image">
            <p class="pokemon__id">#{{ pokemon.id }}</p>
        </div>
        <div class="info">
          <div class="information">
            <h3>About</h3>
            <p>
              <span>Abilities: </span>
              <span
                v-for="(abilities, index) in 
                        pokemon.abilities.map(text => text.ability.name).join(', ')"
                :key="index"
                class="information-type
                  font-weight: normal
                  text-transform: capitalize"
              >
                {{ abilities }}
              </span>
            </p>
            <p><span>Peso: </span>{{pokemon.weight}} Lb</p>
            <p><span>Size: </span>{{pokemon.height}} m</p>
            <p><span>Género: </span>10</p>
          </div>
          <div class="information">
            <h3>Pokemon Stats</h3>
            <div
              class="infomration-stat"
              v-for="(stats, index) in pokemon.stats"
              :key="index"
            >
              <span class="stat">{{stats.stat.name}}:</span>
              <input type="range" disabled readonly :value="stats.base_stat">
            </div>
          </div>
        </div>
        <!-- <div class="evolution">
          <h1>Evolution Chain</h1>
          <div class="evolution-items">
            <div 
              v-for="(item, index) in evolutionChain"
              :key="index++"
              class="item"
            >
              <img :src="imgSrc+index+'.png'" />
              <p>{{item.species_name}}</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`,
      cry: ''
    }
  },
  methods: {
    ...mapActions('pokemon', ['loadPokemon', 'loadEvolutionChain', 'addPokemonToFavorites']),
    loadInfo() {
      const id = this.$route.params.id
      this.loadPokemon(id)
    },
    addFavorite() {
      this.addPokemonToFavorites(this.pokemon)
      alert('Se agrego pokemon a Favoritos')
    },
    soundCry() {
      this.cry = new Audio(require(`@/assets/audio/cries/${this.pokemon.id}.ogg`))
      this.cry.volume = 0.1
      this.cry.play()
    }
  },
  computed: {
    ...mapState('auth', ['isAuth']),
    ...mapState('pokemon', ['pokemon', 'evolutionChain', 'pokemonCry'])
  },
  created() {
    this.loadInfo()
  },
  mounted() {
    this.loadEvolutionChain(this.pokemon.id)
  }
}
</script>

<style lang="stylus" scoped>
button
  cursor: pointer
  color: white
  top: 0
  height: 50px
  font-size: 20px
  position: absolute
  width: 50px
button.goBack
  background: #0dcaf0
  border-radius: 15px 0 0 0
  border: 1px solid #0dcaf0
  left: 0px
button.favorite
  background: #dc3545
  border-radius: 0 15px 0 0
  border: 1px solid #dc3545
  right: 0px
button.cry
  background: #ffc107
  border: 1px solid #ffc107
  right: 50px
button.favorite:disabled
    background: gray
    border: 1px solid gray
    cursor: not-allowed
.card
  align-items: center
  background: white
  border-radius: 15px
  color: black
  display: flex
  justify-content: center
  padding: 20px 30px
  margin: 2em auto
  position: relative
  width: 50%
  @media screen and (min-width: 375px)
    width: 80%
  @media screen and (min-width: 768px)
    width: 80%
  @media screen and (min-width: 1024px)
    width: 50%
  .card-info
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, 1fr)
    grid-column-gap: 10px
    grid-row-gap: 10px
    width: 100%
    text-transform: capitalize
    @media screen and (max-width: 768px)
      flex-direction: column
    .pokemon
      align-items: center
      display: flex
      flex-direction: column
      justify-content: center
      grid-area: 1 / 1 / 2 / 2
      ul
        display: inline-block
        font-size: 16px
        font-weight: lighter
        padding: 0
        li
          background: #343a40
          border-radius: 15px
          color: white
          display: inline-block
          list-style: none
          margin: 0 5px
          padding: 7px 10px
      img.pokemon__image
        background: #2c3e50
        border-radius: 50%
        height: 180px
        width: 180px
      .pokemon__id
        font-size: 20px
        font-weight: bold
        margin-bottom: 0px
        text-align: center
    .info
      display: flex
      flex-direction: column
      grid-area: 1 / 2 / 2 / 3
      .information
        h3
          font-weight: bold
        span.information-type
          font-weight: normal
          text-transform: capitalize
        .infomration-stat
          display: flex
          align-items: center
          justify-content: space-between
          margin-bottom: 10px
          input[type='range']::-webkit-slider-thumb
            -webkit-appearance: none
            -moz-appearance: none
            width: 0
            height: 0
        span.stat
          font-weight: bold
          text-transform: capitalize
        p
          margin-bottom: 10px
          span
            font-weight: bold
    .evolution
      grid-area: 2 / 1 / 3 / 3
      .evolution-items
        display: grid;
        grid-column-gap: 30px;
        grid-row-gap: px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        margin-top: 50px
        .item
          border: 1px solid #000
          border-radius: 7px
          color: #000
          display: flex
          flex-direction: column
          font-weight: bold
          text-align: center
          position: relative
          img
            background: #2c3e50
            border-radius: 50%
            position: absolute
            top: -30px
            left: 50%
            margin-left: -50px
          p
            margin-top: 75px
</style>