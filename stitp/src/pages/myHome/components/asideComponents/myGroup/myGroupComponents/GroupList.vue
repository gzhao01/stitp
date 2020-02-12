<template>
  <div>
    <el-row
      v-for="(item, index) in lists"
      :key="index"
      class="image-row"
    >
      <el-col
        :span="4"
        v-for="(img, index) in item"
        :key="index"
      >
        <div class="image-wrapper">
          <img :src="img.url" alt="">
        </div>
        <div class="img-desc">
          {{img.desc}}
        </div>
      </el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'groupList',
  data() {
    return {
      list: 
      [
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
       {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
      {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
      {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       },
      {
         url: '/static/images/snow.jpg',
         desc: 'desc'
       }
      ]
    }
  },
  computed: {
    lists () {
      let lists = []
      this.list.forEach((item,index) => {
        let group = Math.floor(index/5)
        if(!lists[group]){
          lists[group] = []
        }
        lists[group].push(item)
      })
      return lists
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.image-row
  margin-bottom: $gap
  padding-left: $gap
  padding-right: $gap
  .el-col
    margin-right:$gap*2
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
  .el-col:nth-child(5)
    margin-right:0
</style>