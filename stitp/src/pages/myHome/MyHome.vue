<template>
  <el-container class="wrapper">
    <el-header>
      <my-home-header></my-home-header>
    </el-header>
    <el-container class="bottom-wrapper">
      <el-aside>
        <my-home-aside></my-home-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHomeHeader from './components/HomeHeader'
import MyHomeAside from './components/HomeAside'
export default {
  name: 'MyHome',
  data () {
    return {
    }
  },
  components: {
    MyHomeHeader: MyHomeHeader,
    MyHomeAside: MyHomeAside,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  /*
    container
  */
  .wrapper
    .bottom-wrapper
      width: $cardWidth
      margin: 0 auto
  .el-header
    background-color: #409EFF
    color: #333
    text-align: center
    height: $headerHeight !important
    box-shadow: 0px 1px 3px #888888
    min-width: 1120px
    margin: 0px
  .el-aside
    background-color: #D3DCE6
    color: #333
    text-align: center
    width: $asideWidth !important
    margin-right: $gap
    margin-top: $gap
    border-top-right-radius: $radius
    border-bottom-right-radius: $radius
    box-shadow: 0px 1px 3px #888888
    padding-bottom: $gap
  .el-main
    background-color: #E9EEF3
    color: #333
    text-align: center
    margin-top: $gap
    margin-right: $gap
    border-radius: $radius
    box-shadow: 0px 1px 3px #888888
</style>
