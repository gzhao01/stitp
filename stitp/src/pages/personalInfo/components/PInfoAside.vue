<template>
  <div class="aside">
    <h1>我的课程</h1>
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      class="menu"
    >
      <el-menu-item
        v-for ="(name, index) in HomeList"
        :key="index"
        :index="index"
      >
        <template slot="title">
          <span>{{name}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'PInfoAside',
  data () {
    return {
      HomeList: ["个人信息","我的课程","我的小组","消息","通知","课表","设置"]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
/*
  aside
*/ 
.menu
  border-radius: $radius
.course-image
  width: $asideWidth
  height: $asideWidth
</style>