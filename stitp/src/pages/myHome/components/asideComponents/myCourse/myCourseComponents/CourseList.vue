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
        <div
          class="image-wrapper" 
          @click = "handleImgClick(img.c_id)"
        >
          <img :src="img.c_img_path" alt="">
          <!-- image mask -->
          <div class="image-mask">
            教师:{{img.t_name}}
          </div>
        </div>
        <div class="img-desc">
          {{img.c_name}}
        </div>
      </el-col>
    </el-row>
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next, jumper"
      :current-page="currentPage"
      :total="totalCount"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 15,
      //total courses num
      totalCount: 0,
      list: []
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
    },
    ...mapState(['id'])
  },
  methods: {
    handleCurrentChange (page) {
      this.currentPage = page
      this.getData(this.pageSize, this.currentPage, this.id)
    },
    handleImgClick (c_id) {
      this.$router.push({path:'/courseDetail/materials',query: {id: c_id}});
    },
    // getData (size,toPage) {
    //   axios.get('/api/page'+toPage+'.json',{
    //     pageSize: size,
    //     currentPage: toPage
    //   },
    //   {emulateJSON: true},
    //   {
    //   headers:{"Content-Type": "application/json"} 
    //   }).then(response=>{
    //     response = response.data
    //     this.list=[]
    //     this.list=response.data.courseList
    //     this.totalCount = 20
    //     // this.totalCount=response.data.courseList.length
    //   }).catch(err=>{
    //     console.log("err: "+err)
    //   })
    // }
    // ==============================
    //get:  courseList
    //      count of the courses
    //     teacherName of each course
    getData(size, toPage, id){
      this.$http({
        method: 'get',
        url: '/testApi/user/getCoursesInfo',
        params: {
          pageSize: size,
          currentPage: toPage,
          id: id
        }
      }).then(res => {
        this.list = res.data.courseList;
        this.totalCount = res.data.totalCount;
      }).catch(e=>{
        console.log("getData err: "+ e);
      })
    }
  },
  created () {
    this.getData(this.pageSize, this.currentPage, this.id)
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
    .image-mask
      z-index: 4
      opacity: 0
      height: 0
      width: 100%
      padding-bottom: 66.67%
      position: relative
      border-radius: $radius
      transition: opacity .2s ease
      color: #e5e9ef
      background-color: rgba(0,0,0,.45)
      user-select:none;
    .image-mask:hover
      cursor: pointer
      opacity: 1
  .el-col:nth-child(5)
    margin-right:0
</style>