<template>
  <div>
    <el-table
      :data="points_data"
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
        prop="ratio"
        label="占比">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
  points: "PointsTable",
  data () {
    return {
      points_data: [],
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
  },
  computed: {
    ...mapState(['course_id', 'id'])
  },
  created () {
    this.$http({
      method: 'get',
      url: 'testApi/user/getCoursePoints',
      params: {
        std_id: this.id,
        course_id: this.course_id
      }
    }).then((res) => {
      let c_ratio = res.data.c_ratio;
      let l_points = res.data.l_points;
      let total_points = 0;
      //各个分数
      for(let i in res.data.c_ratio){
        let element = {
                        section: c_ratio[i].p_name, 
                        points: l_points[i].l_points_num, 
                        ratio: c_ratio[i].p_ratio
                      }
        this.points_data.push(element);
        total_points += (element.points*element.ratio/100);
      }
      //总分数
      let element = {
        section: '总分数',
        points: total_points,
        ratio: '-'
      }
      this.points_data.push(element)
    })
  }
}
</script>

<style lang="stylus" scoped>
.el-table
  background: #e9eef3
</style>