<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>课程材料</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <collapse></collapse>
  </div>
</template>

<script>
import Collapse from './materialsComponents/Collapse.vue'
export default {
  name: 'Materials',
  components: {
    Collapse: Collapse
  },
 data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
</style>