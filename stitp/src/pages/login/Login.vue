<template>
  <div class="login">
    <login-header class="loginHeader"></login-header>
    <div class="loginMain">
      <login-main></login-main>
    </div>
  </div>
</template>

<script>
import loginHeader from './loginComponents/loginHeader.vue'
import loginMain from './loginComponents/loginMain.vue'
export default {
  name: 'Login',
  components: {
    loginHeader: loginHeader,
    loginMain: loginMain
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  /*
    container
  */
  .loginHeader
    background-color: #409EFF
    color: #333
    text-align: center
    height: $headerHeight !important
    box-shadow: 0px 1px 3px #888888
    min-width: 1120px
    margin: 0px
  .login
    height: 100%
    .loginMain
      display: flex
      align-items: center
    // color: #333
    // text-align: center
    // margin-top: $gap
    // margin-right: $gap
    // border-radius: $radius
    // box-shadow: 0px 1px 3px #888888
</style>