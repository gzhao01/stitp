<template>
  <div>
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="3"><span>个人信息</span></el-col>
    </el-row>
    
    <el-divider></el-divider>
    
    <el-row type="flex" justify="start" :gutter="20">
      <el-col :span="3"></el-col>
      <el-col :span="3">
        <el-image class="sticker" :src="sticker"></el-image>
      </el-col>
      <el-col>
        <table class="info-table">
          <tr>
            <td>姓名: {{info_data.s_name}}</td>
            <td>身份证号: {{info_data.s_id_card}}</td>
          </tr>
          <tr>
            <td>所在学校: {{info_data.s_school}}</td>
            <td>学号: {{info_data.s_id_card}}</td>
          </tr>
          <tr>
            <td>所学专业: {{info_data.s_major}}</td>
            <td>入学时间: {{info_data.s_ent_date}}</td>
          </tr>
          <tr>
            <td>政治面貌: {{info_data.s_political}}</td>
          </tr>
        </table>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    
    <el-row type="flex" justify="start" class="aside-title">
      <el-col :span="2">
        <span>个人简历</span>
      </el-col>
      <el-col :span="3">
        <el-button
          @click = "changeResume"
          class="changeButton"
        >更改</el-button>
      </el-col>
    </el-row>
    <el-col :span="3"></el-col>
    <span>{{info_data.s_resume}}</span>
    <!-- change resume dialog -->
    <el-dialog title="更改简介" :visible.sync="resumeVisible">
      <el-input
        type="textarea"
        :rows="5"
        v-model="resume_content">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmChange">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </span>
    </el-dialog>

    <el-divider></el-divider>
    
    <el-col :span="3"></el-col>
    学分: {{gpaPoints}}
    能力分:{{ablPoints}}
    学科竞赛:
    实践活动:
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  inject:['reload'],  
  name: 'HomeMain',
  data () {
    return {
      sticker: 'static/images/mea-jump.gif',
      info_data: {},
      gpaPoints: 0,
      ablPoints: 0,
      resumeVisible: false,
      resume_content: ""
    }
  },
  computed: {
    ...mapState(['id'])
  },
  watch:{
    resume_content(){
    }
  },
  methods: {
    changeResume() {
      this.resumeVisible = true;
      this.resume_content = this.info_data.s_resume
    },
    confirmChange(){
      this.$message("更改成功");
      this.$http({
        method: "post",
        url: '/testApi/user/changeResume',
        data: {
          id: this.id,
          resume_content: this.resume_content
        }
      }).then((res)=>{
        console.log(res);
      })
    },
    handleClose() {
      this.reload();
    }
  },
  created () {
    //get student id number from login page
    // var id = this.$route.params.id;
    // if(this.id != id){
    //   //change the id in state
    //   //call the actions, pass index: id
    //   this.$store.dispatch('changeID', id); 
    // }
    
    //get the student information
    this.$http.get('/testApi/user/getPInfo',{
      params:{
        id: this.id
      }
    }).then((response)=>{
      this.info_data = response.data.std_info;
      console.log(response.data.std_info);
    })

    //get student's gpa points
    this.$http({
      method: 'get',
      url: '/testApi/user/getPoints',
      params: {
        std_id: this.id
      }
    }).then((res) => {
      this.gpaPoints = res.data.result_point;
      this.ablPoints = res.data.abl_points;
    })
  }
}
</script>

<style lang="stylus" scoped>
.sticker
  height: 100px
  width: 100px
.info-table
  tr
    height: 40px
    td
      text-align: left
      padding: 0 0 0 100px
.changeButton
  position: relative
  bottom: 10px
  padding: 0
  height: 20px
  width: 50px
  radius: 5px
</style>