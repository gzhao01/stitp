<template>
  <div id="app">
    <router-view/>
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
</style>
