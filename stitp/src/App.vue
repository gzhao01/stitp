<template>
  <div id="app">
    <el-scrollbar style="height: 100%">
      <router-view/>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.el-scrollbar__wrap{
  overflow-x: hidden;
}
</style>
