<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>我的课程</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row class="aside-title course">
      <span>必修课</span>
      <course-filter></course-filter>
    </el-row>
    <course-list></course-list>
    <el-divider></el-divider>
    <el-row class="aside-title course">
      <span>选修课</span>
      <course-filter></course-filter>
    </el-row>
    <course-list></course-list>
  </div>
</template>

<script>
import CourseList from './myCourseComponents/CourseList.vue'
import CourseFilter from './myCourseComponents/Filter.vue'
export default {
  data () {
    return {
      compulsoryList: [],
      optionalList: [],
    }
  },
  components: {
    CourseList: CourseList,
    CourseFilter: CourseFilter
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.aside-title.course
  margin-bottom: $gap
  display: flex
  justify-content: flex-start
  align-items: baseline
</style>