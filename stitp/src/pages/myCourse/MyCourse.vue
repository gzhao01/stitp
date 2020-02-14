<template>
  <el-container class="wrapper">
    <el-header>
      <my-course-header></my-course-header>
    </el-header>
    <el-container class="bottom-wrapper">
      <el-aside>
        <my-course-aside></my-course-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyCourseHeader from './components/MyCourseHeader.vue'
import MyCourseAside from './components/MyCourseAside.vue'
export default {
  name: 'MyCourse',
  data () {
    return {
    }
  },
  components: {
    MyCourseHeader: MyCourseHeader,
    MyCourseAside: MyCourseAside,
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
    border-radius: $radius
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
