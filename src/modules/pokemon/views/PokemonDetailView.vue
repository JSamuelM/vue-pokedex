<template>
  <div class="container">
    <Navbar />
    <div class="card">
      <button class="goBack" @click="$router.push({name: 'pokemon'})">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="favorite" :disabled="!isAuth" @click="addFavorite">
        <i class="far fa-heart"></i>
      </button>
      <div class="card-info">
        <div class="pokemon">
          <h1>{{ pokemon.name }}</h1>
          <img
            :src="imgSrc + pokemon.id + '.png'"
            alt="pokemon picture"
            class="pokemon__image">
            <p class="pokemon__id">#{{ pokemon.id }}</p>
        </div>
        <div class="info">
          <div class="abilities">
            <h3>Habilidades</h3>
            <ul>
              <li
                v-for="(abilities, index) in pokemon.abilities"
                :key="index"
              >
                {{ abilities.ability.name }}
              </li>
            </ul>
          </div>
          <div class="information">
            <h3>Información</h3>
            <p><span>Peso: </span>{{pokemon.weight}} Lb</p>
            <p><span>Size: </span>{{pokemon.height}} m</p>
            <p><span>Género: </span>10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue'))
  },
  data() {
    return {
      id: this.$route.params.id,
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
    }
  },
  methods: {
    ...mapActions('pokemon', ['loadPokemon']),
    loadInfo() {
      const id = this.$route.params.id
      this.loadPokemon(id)
    },
    addFavorite() {
      console.log(this.pokemon);
    }
  },
  computed: {
    ...mapState('auth', ['isAuth']),
    ...mapState('pokemon', ['pokemon'])
  },
  created() {
    this.loadInfo()
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
  width: 75%
  .card-info
    display: flex
    flex-direction: row
    justify-content: space-around
    width: 100%
    text-transform: capitalize
    .pokemon
      align-items: center
      display: flex
      flex-direction: column
      justify-content: center
      img.pokemon__image
        background: #2c3e50
        border-radius: 50%
        height: 100px
        width: 100px
      .pokemon__id
        font-size: 20px
        font-weight: bold
        margin-bottom: 0px
        text-align: center
    .info
      display: flex
      flex-direction: column
      .abilities
        h3
          font-weight: bold
        ul
          padding-left: 10px
          li
            color: white
            background: #198754
            border-radius: 15px
            display: inline-block
            list-style: none
            padding: 5px 10px
            margin-right: 5px
            margin-bottom: 5px
      .information
        p
          margin: 5px 0px
          span
            font-weight: bold 
</style>