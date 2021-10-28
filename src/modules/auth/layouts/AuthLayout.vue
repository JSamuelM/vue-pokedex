<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue'))
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin: 30px auto
</style>