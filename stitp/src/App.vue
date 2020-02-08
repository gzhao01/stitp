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
  background-color: $bgColor
  overflow: auto
</style>
