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
          <span>{{nav.name}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HomeAside',
  data () {
    return {
      HomeList: [
        {
          path: '/pInfo',
          name: "个人信息"
        },
        {
          path: '/myCourse',
          name: "我的课程"
        },
        {
          path: '/myGroup',
          name: "我的小组"
        },
        {
          path: '/msg',
          name: "消息"
        },
        {
          path: '/notice',
          name: "通知"
        },
        {
          path: '/table',
          name: "课表"
        },
        {
          path: '/setting',
          name: "设置"
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
</style>