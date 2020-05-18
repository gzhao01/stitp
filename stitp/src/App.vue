<template>
  <div id="app">
    <!-- <el-scrollbar style="height: 100%"> -->
      <el-scrollbar style="height: 100%">
        <router-view v-if="isRouterAlive"/>
        <el-backtop
          target=".el-scrollbar__wrap" 
          :bottom = "130"
          :right="80"
        >
        </el-backtop>
      </el-scrollbar>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script>
export default {
  name: 'App',
    provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
      return {
          reload: this.reload                                              
      }
  },
  data() {
      return{
          isRouterAlive: true                    //控制视图是否显示的变量
      }
  },
  methods: {
      reload () {
          this.isRouterAlive = false;            //先关闭，
          this.$nextTick(function () {
              this.isRouterAlive = true;         //再打开
          }) 
      }
  }
}
</script>

<style lang="stylus">
@import '~styles/variables.styl'
body
  background-color: white
  overflow: auto
html, body, #app
  margin: 0
  padding: 0
  height: 100%
.el-scrollbar__wrap
  overflow-x: hidden
.el-backtop
  width: 45px
  height: 45px
</style>
