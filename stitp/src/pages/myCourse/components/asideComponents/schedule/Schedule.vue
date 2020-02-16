<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>课程材料</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <schedule-collapse></schedule-collapse>
  </div>
</template>

<script>
import ScheduleCollapse from './scheduleComponents/ScheduleCollapse.vue'
export default {
  name: 'Schedule',
  components: {
    ScheduleCollapse: ScheduleCollapse
  }
}
</script>

<style lang="stylus" scoped>

</style>