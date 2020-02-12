<template>
<div class="frame">
  <div class="wrapper">
    <div v-for="(item, index) in list" :key="index">
      <el-row class="msgRow">
        <el-avatar :src="circleUrl"></el-avatar>
        <el-row class="msgText">
          <div class="row1">
            <span class="userName">用户名</span>
            <span class="time">时间</span>
          </div>
          <el-row class="row2">
            <el-col :span="10" class="msg">
              <p>信息信息信息信息信息信息信
                息信息信息信息信息信息信息信
                息信息信息信息信息信息信息信息信
                息信息信息信息信息信息信息信息信息
                信息信息信息信息信息信息信息信息信息
                信息信息信息信息信息信息信息信息信
                息信息信息信息信息信息信息信息信
                息信息信息信息信息信息信息信息信息
                信息信息信息信息信息信息信息信息信
                息信息信息信息信息信息</p>
            </el-col>
            <div class="msgDetail">
              <el-link type="primary">
                查看详情
              </el-link>
              <i class="el-icon-arrow-right"></i>
            </div>
          </el-row>
          <div class="row3">
            <i class="el-icon-link"></i>
            <span>文件</span>
          </div>
        </el-row>
      </el-row>
      <el-row type="flex" justify="start">
        <div class="placeholderLeft"></div>
        <el-divider></el-divider>
        <div class="placeholderRight"></div>
      </el-row>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Msg',
  components: {
    
  },
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      list: ['1','1','1','1','1','1']
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.frame
  display: flex
  justify-content: center
  .wrapper
    width: 800px
    .msgRow
      display: flex
      justify-content: start
      height: 140px
      .el-avatar
        height: 60px
        width: 60px
        margin-right: $gap
      .msgText
        width: 100%
        .row1
          margin-bottom: $gap
          display: flex
          justify-content: start
          .userName
            margin-right: $gap
          .time
            color: #BBB
        .row2
          margin-bottom: $gap
          .msg
            display: flex
            justify-content: flex-start
            align-items: flex-start
            margin: 0 $gap 0 0
            padding: 0
            height: 60px
            p
              height: 100%
              width: 100%
              overflow:hidden;
              text-overflow:ellipsis
              display:-webkit-box
              -webkit-box-orient:vertical
              -webkit-line-clamp:3
              margin: 0
              text-align: left
          .msgDetail
            color: #409eff
            display: flex
            justify-content: left
            align-items: baseline
        .row3
          display: flex
          justify-content: left
    .placeholderLeft
      width: 60px
      height: 10px
    .placeholderRight
      width: $gap
</style>