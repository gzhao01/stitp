<template>
  <div class="aside">
    <h1>我的课程</h1>
    <!-- 课程名 -->
    <div>课程名:{{course_detail.c_name}}</div>
    <el-menu
      :default-active="$router.name"
      class="menu"
      router
    >
      <el-menu-item
        v-for ="(nav, index) in newHomeList"
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
      <div>教师名:{{course_detail.t_name}}</div>
      <!-- 答疑时间 -->
      <div>答疑时间:{{course_detail.c_qtime}}</div>
      <!-- 上课时间 -->
      <div>上课时间:{{course_detail.c_class_time}}</div>
      <div class="info">留言</div>
      <el-divider></el-divider>
      <div>{{course_detail.c_wish}}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
      ],
      course_detail: {}
    }
  },
  methods: {
    // handleSelect(path, path_key) {
    //   console.log(path, path_key)
    // }
  },
  computed: {
    //local storage course id
    ...mapState(['course_id']),
    newHomeList: function(){
      let newHomeList = this.HomeList;
      //should not be "el of newHomeList"
      for(var el of newHomeList){
        el.path = el.path + "?id=" + this.course_id;
      }
      return newHomeList;
    }
  },
  created() {
    this.$http({
      //not methods
      method: 'get',
      url: '/testApi/user/getCourseDetail',
      params: {
        course_id: this.course_id
      }
    }).then((res) => {
      console.log(res);
      this.course_detail = res.data.courseDetail;
    })
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