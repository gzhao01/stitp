<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
    <!-- <div class="wrapper">
       <div class="image-wrapper">
         <div class="image-mask">
           123
         </div>
       </div> 
    </div> -->
    <a class='download' :href='downloadhttp' download=""  title="下载">下载</a>
    <el-collapse accordion>
      <el-collapse-item class="father">
        <template slot="title">
          一致性 Consistency<i class="header-icon el-icon-info"></i>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      this.$http.post('/testApi/user/addUser', {
        username: name,
        age: age
      }).then((response) => {
        console.log(response);
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.el-collapse >>> .el-collapse-item
  background-color: #e5e9ef !important
.el-collapse-item >>> .el-collapse-item__header
  background-color: #e5e9ef !important
.el-collapse-item >>> .el-collapse-item__wrap
  background-color: #e5e9ef !important
.wrapper
  height: 200px
  width:  400px
  .image-wrapper
      height: 0
      width: 100%
      padding-bottom: 66.67%
      position: relative
      overflow: hidden
      border-radius: $radius
      img
        position: absolute
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%
        height: 100%
    .image-mask
      z-index: 4
      opacity: 0
      height: 0
      width: 100%
      padding-bottom: 66.67%
      border-radius: $radius
      color: #e5e9ef
      background-color: rgba(0,0,0,.45)
      transition: opacity .2s ease
    .image-mask:hover
        opacity: 1

</style>