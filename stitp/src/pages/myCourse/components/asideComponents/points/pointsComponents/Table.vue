<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{background:'#e9eef3'}"
      :cell-style="{background:'#e9eef3'}"
      :header-row-style="{background:'#e9eef3'}"
    >
      <el-table-column
        prop="section"
        label="指标"
        width="180">
      </el-table-column>
      <el-table-column
        prop="points"
        label="分数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="radio"
        label="占比">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default{
  points: "PointsTable",
  data () {
    return {
      tableData: [{
        section: '参与分',
        points: '30',
        radio: '10'
      },{
        section: '作业',
        points: '10',
        radio: '10'
      }, 
      {
        section: '小测验',
        points: '20',
        radio: '20'
      }, {
        section: '期中考试',
        points: '25',
        radio: '25'
      }, {
        section: '期末考试',
        points: '25',
        radio: '25'
      },{
        section: '项目',
        points: '10',
        radio: '10'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-table
  background: #e9eef3
</style>