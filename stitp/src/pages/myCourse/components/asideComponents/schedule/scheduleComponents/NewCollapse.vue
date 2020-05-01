<template>
  <div>
      <el-collapse accordion>
        <el-collapse-item
          v-for="(item, index) in lists"
          :key="index"
          :name = "index"
          :title = "item.c_schedule_week"
        >
          <div>{{item.c_schedule_content}}</div>
        </el-collapse-item>
      </el-collapse>   
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'NewCollapse',
  data () {
    return {
      lists: []
    }
  },
  computed: {
    ...mapState(['course_id'])
  },
  created () {
     this.$http({
       method: 'get',
       url: '/testApi/user/getCourseSchedule',
       params: {
         course_id: this.course_id
       }
     }).then((res) => {
       console.log(res.data.c_schedule);
       this.lists = res.data.c_schedule;
     })
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.el-collapse
  padding: 20px
.el-collapse >>> .el-collapse-item
  background-color: #e9eef3 !important
.el-collapse-item >>> .el-collapse-item__header
  background-color: #e9eef3 !important
  border-bottom: 1px solid #DCDFE6
.el-collapse-item >>> .el-collapse-item__header.is-active
  border-bottom: transparent
.el-collapse-item >>> .el-collapse-item__wrap
  background-color: #e9eef3 !important
  border-bottom: 1px solid #DCDFE6
</style>