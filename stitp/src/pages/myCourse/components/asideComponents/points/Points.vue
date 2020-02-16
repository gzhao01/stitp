<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>分数（课程名称）</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row type="flex" justify="start">
      <el-button size="mini" round>申请更正</el-button>
    </el-row>
    <points-table></points-table>
    <el-divider></el-divider>
    <points-chart></points-chart>
  </div>
</template>

<script>
import PointsTable from './pointsComponents/Table.vue'
import PointsChart from './pointsComponents/Chart.vue'
export default {
  name: "Points",
  components: {
    PointsTable: PointsTable,
    PointsChart: PointsChart
  }
}
</script>

<style lang="stylus" scoped>

</style>