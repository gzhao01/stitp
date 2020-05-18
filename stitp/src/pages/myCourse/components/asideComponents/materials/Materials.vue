<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>课程材料</span></el-col>
    </el-row>
    <el-divider></el-divider>
    <new-collapse></new-collapse>
  </div>
</template>

<script>
// import Collapse from './materialsComponents/Collapse.vue'
import NewCollapse from './materialsComponents/NewCollapse.vue'
import {mapState} from 'vuex'
export default {
  name: 'Materials',
  components: {
    // Collapse: Collapse,
    NewCollapse: NewCollapse
  },
  data() {
    return {
      activeNames: ['1'],
      lists: []
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  computed: {
    ...mapState(['course_id'])
  },
  created () {
    //change course_id
  //   var id = this.$route.query.id;
  //   if(this.course_id != id){
  //     this.$store.dispatch('changeCourseID', id);
  //   }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
</style>