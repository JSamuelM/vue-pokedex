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
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  padding: 0.5rem
  .navbar__logo
    display: flex
    align-items: center
    img
      margin-right: 5px
  .navbar__buttons
    button
      background: #0dcaf0
      border: 1px solid #0dcaf0
      cursor: pointer
      height: 40
      padding: 5px 10px
</style>