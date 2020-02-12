<template>
  <div>
    <el-row type="flex" justify="space between">
      <!-- header logo -->
      <el-col class="logo-container">
        <img class="logo" :src="logo" alt="">
      </el-col>
      <!-- header button -->
      <el-col class="button-container">
          <div class="el-icon-plus"></div>
        <div class="avatar">
          <el-avatar :size="45" :src="circleUrl"></el-avatar>
          <div class="iconfont icon-caret-down"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
     logo: "/static/images/mea-jump.gif",
     circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
/*
  header
*/
.logo-container
  margin-top: 0px
  display: flex
  justify-content: flex-start
  height: $headerHeight
.logo 
  height: $headerHeight
  width: auto
.button-container
  margin-top: 0px
  display: flex
  justify-content: flex-end
  align-items: center
  height: $headerHeight
.avatar
  display: flex
  flex-direction: column
  margin-bottom: -8px
.el-icon-plus
  font-size: 55px
.iconfont.icon-caret-down
  font-size: 27px
  margin-top: -10px
</style>