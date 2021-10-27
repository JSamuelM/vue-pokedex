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
      <button type="button">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.navbar
  background-color: #1d6042
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  padding: 0.5rem
  min-height: 54px
  .navbar__logo
    display: flex
    align-items: center
    font-size: 20px
    font-weight: bold
    img
      margin-right: 5px
  .navbar__buttons
    button
      background: #0dcaf0
      border: 1px solid #0dcaf0
      color: #222
      cursor: pointer
      height: 40px
      padding: 5px 10px
      width: 40px
</style>