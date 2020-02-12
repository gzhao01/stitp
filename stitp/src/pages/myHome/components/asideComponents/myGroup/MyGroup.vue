<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>我的小组</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <course-list></course-list>
  </div>
</template>

<script>
import CourseList from './myGroupComponents/GroupList.vue'
export default {
  name: 'MyGroup',
  data () {
    return {
      compulsoryList: [],
      optionalList: []
    }
  },
  components: {
    CourseList: CourseList
  }
}
</script>

<style lang="stylus">
@import '~styles/variables.styl'
.aside-title.course
  margin-bottom: $gap
</style>