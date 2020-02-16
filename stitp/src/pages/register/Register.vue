<template>
  <div class="reg">
    <reg-header class="regHeader"></reg-header>
    <div class="regMain">
      <reg-main></reg-main>
    </div>
  </div>
</template>

<script>
import RegMain from './RegComponents/RegMain.vue'
import RegHeader from './RegComponents/RegHeader.vue'
export default {
  name: 'Login',
  components: {
    RegMain: RegMain,
    RegHeader: RegHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  /*
    container
  */
  .regHeader
    background-color: #409EFF
    color: #333
    text-align: center
    height: $headerHeight !important
    box-shadow: 0px 1px 3px #888888
    min-width: 1120px
    margin: 0px
  .reg
    height: 100%
    .regMain
      display: flex
      align-items: center
</style>