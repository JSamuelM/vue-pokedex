<template>
  <nav class="navbar d-flex">
    <a class="navbar__logo">
      <img
        src="@/assets/favicon.png"
        alt="logo pokedex"
        height="40">
        Pokedex Vue
    </a>
    <div class="navbar__buttons">
      <router-link :to="{ name: 'pokemon'}">
        <button type="button" class="home">
          <i class="fas fa-home"></i>
          Home
        </button>
      </router-link>
      <div v-if="!isAuth">
        <router-link :to="{ name: 'login'}">
          <button type="button" class="login">
            <i class="fas fa-sign-in-alt"></i>
            Login
          </button>
        </router-link>
        <router-link :to="{ name: 'register'}">
          <button type="button" class="register">
            <i class="fas fa-user-plus"></i>
            Register
          </button>
        </router-link>
      </div>
      <div v-if="isAuth">
        <button type="button" class="logout" @click.passive="logOut">
          <i class="fas fa-user-plus"></i>
          LogOut
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['signOutAction']),
    logOut() {
      this.signOutAction()
    }
  },
  computed: {
    ...mapState('auth', ['isAuth'])
  }
}
</script>

<style lang="stylus" scoped>
.navbar
  background-color: #1d6042
  border-radius: 15px
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  padding: 1rem
  min-height: 54px
  .navbar__logo
    display: flex
    align-items: center
    font-size: 20px
    font-weight: bold
    flex: 1
    img
      margin-right: 5px
  .navbar__buttons
    display: flex
    justify-content: space-between
    button
      // background: #0dcaf0
      border-radius: 10px
      // border: 1px solid #0dcaf0
      color: #222
      cursor: pointer
      height: 40px
      padding: 5px 10px
      margin: 0 10px
    .login
      background: #0dcaf0
      border: 1px solid #0dcaf0
    .register
      background: #ffc107
      border: 1px solid #ffc107
    .home
      background: #f8f9fa
      border: 1px solid #f8f9fa
      &:hover
        background: #343a40
        border: 1px solid #343a40
        color: #fff
        transition: all 0.2s ease-in-out
    .logout
      background: #dc3545
      border: 1px solid #dc3545
      color: #fff
      &:hover
        background: #fff
        border: 1px solid #fff
        color: #dc3545
        transition: all 0.2s ease-in-out
</style>