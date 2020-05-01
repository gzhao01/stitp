<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>课程计划</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <new-collapse></new-collapse>
  </div>
</template>

<script>
import ScheduleCollapse from './scheduleComponents/ScheduleCollapse.vue'
import newCollapse from './scheduleComponents/NewCollapse.vue'
export default {
  name: 'Schedule',
  components: {
    ScheduleCollapse: ScheduleCollapse,
    newCollapse: newCollapse
  }
}
</script>

<style lang="stylus" scoped>

</style>