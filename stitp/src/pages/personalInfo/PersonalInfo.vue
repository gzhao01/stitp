<template>
  <el-container class="wrapper">
    <el-header>
      <p-info-header></p-info-header>
    </el-header>
    <el-container class="bottom-wrapper">
      <el-aside>
        <p-info-aside></p-info-aside>
      </el-aside>
      <el-main>
        <p-info-main></p-info-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PInfoHeader from './components/PInfoHeader'
import PInfoAside from './components/PInfoAside'
import PInfoMain from './components/PInfoMain'
export default {
  name: 'PersonalInfo',
  data () {
    return {
    }
  },
  components: {
    PInfoHeader: PInfoHeader,
    PInfoAside: PInfoAside,
    PInfoMain: PInfoMain
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
