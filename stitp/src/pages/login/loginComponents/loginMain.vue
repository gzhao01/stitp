<template>
  <div class="loginWrapper">
    <div class="loginTitle">
      <div class="loginTitleLine">
        <span class="loginText">登录</span>
      </div>
    </div>
    <div class="loginWindow">
      <div class="QRcodeLog">
        <div class="QRcodeCont">
          <div class="QRcodeBox">
            <img :src="QRcodeUrl" class="QRcode">
          </div>
        </div>
        <div class="footer">
          <p class="txt">扫描二维码登录</p>
        </div>
      </div>
      <div class="verticalLine"></div>
      <div class="traditionLog">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="loginForm">
          <el-form-item prop="userName">
            <el-input v-model="ruleForm.userName" autocomplete="off" placeholder="你的用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="buttons">
              <el-button type="primary" @click="submitForm('ruleForm')" class="logButton">登录</el-button>
              <router-link
                tag="el-button"
                to="/register"
                @click="resetForm('ruleForm')"
                class="regButton">
                注册
              </router-link>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginMain',
  data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入用户名'));
        }
        else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        id: 0,
        ruleForm: {
          userName: '',
          pass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          userName: [
            { validator: validateUserName, trigger: 'blur' }
          ]
        },
        QRcodeUrl: '/static/images/QRcode.png'
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post("/testApi/user/loginSubmit",{
              // params:{
                userName: this.ruleForm.userName,
                pass: this.ruleForm.pass
              // }
            }).then((response) =>{
              this.id = response.data.id; 
              this.$router.push({
                                //path: '/myHome/pInfo?id='+response.data.id,
                                // path: '/myHome/pInfo', query: {id: this.id},
                                name: 'pInfo', params: {id: this.id}
                                // query: {id: res.id}
                              });
              console.log(response);
            }
            )

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.loginWrapper
  margin: 0 auto
  width: 980px
  .loginTitle
    margin: 0 auto
    font-size: 38px
    .loginTitleLine
      border-bottom: 1px solid #ddd
      height: 28px
      margin-bottom: 28px
      text-align: center
      .loginText
        font-size: 38px
        padding: 0 20px
        height: 56px
        line-height: 56px
        background: white
        text-align: center
  .loginWindow
    .traditionLog
      padding-left: 45px
      width: 489px
      box-sizing: border-box
      float: left
      .loginForm
        margin-top: 80px
        width: 414px
        .buttons
          width: 414px
          .logButton, .regButton
            width: 186px
          .regButton
            margin-left: 34px
    .verticalLine
      border-right: 1px solid #ddd
      height: 300px
      margin-top: 28px
      float: left
    .QRcodeLog
      width: 480px
      float: left
      margin-right: 9px
      .footer
       width: 480px
       .txt
        margin-top: $gap
        font-size: 18px
        text-align: center
        letter-spacing: 3px 
      .QRcodeCont
        margin-top: 72px
        .QRcodeBox
          margin: 0 auto
          width: 140px
          height: 140px
          .QRcode
            height: 140px
            width: 140px
</style>