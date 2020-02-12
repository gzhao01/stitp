<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>个人信息</span></el-col>
    </el-row>
    
    <el-divider></el-divider>
    
    <el-row type="flex" justify="start" :gutter="20">
      <el-col :span="3"></el-col>
      <el-col :span="3">
        <el-image class="sticker" :src="sticker"></el-image>
      </el-col>
      <el-col>
        <table class="info-table">
          <tr>
            <td>姓名</td>
            <td>身份证号</td>
          </tr>
          <tr>
            <td>所在学校</td>
            <td>学号</td>
          </tr>
          <tr>
            <td>所学专业</td>
            <td>入学时间</td>
          </tr>
          <tr>
            <td>政治面貌</td>
          </tr>
        </table>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>个人简历</span></el-col>
    </el-row>
    <el-col :span="3"></el-col>
    <span>个人简历...</span>

    <el-divider></el-divider>
    
    <el-col :span="3"></el-col>
    学分
    学科竞赛
    实践活动
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  data () {
    return {
      sticker: 'static/images/mea-jump.gif'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sticker
    height: 100px
    width: 100px
  .info-table
    tr
      height: 40px
      td
        text-align: left
        padding: 0 0 0 100px
</style>