<template>
  <div class="aside">
    <h1>我的课程</h1>
    <el-menu
      :default-active="$router.name"
      class="menu"
      router
    >
      <el-menu-item
        v-for ="(nav, index) in HomeList"
        :key="index"
        :index="nav.path"
      >
        <template slot="title">
          <div>{{nav.name}}</div>
        </template>
      </el-menu-item>
    </el-menu>
    <div class="bottom">
      <div class="info">信息</div>
      <el-divider></el-divider>
      <div>上课教师</div>
      <div>答疑时间</div>
      <el-divider></el-divider>
      <div>寄语</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCourseAside',
  data () {
    return {
      HomeList: [
        {
          path: '/courseDetail/materials',
          name: "课程材料"
        },
        {
          path: '/courseDetail/points',
          name: "分数"
        },
        {
          path: '/courseDetail/members',
          name: "成员"
        },
        {
          path: '/courseDetail/schedule',
          name: "课程计划"
        },
        {
          path: '/courseDetail/takeOff',
          name: "作业"
        },
        {
          path: '/courseDetail/homeWork',
          name: "请假"
        }
        ]
    }
  },
  methods: {
    // handleSelect(path, path_key) {
    //   console.log(path, path_key)
    // }
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
.bottom
  text-align: left
  .info
    margin-top: $gap
  .el-divider
    background-color: #BBBBBB
    margin-top: 0
    margin-bottom: $gap
</style>