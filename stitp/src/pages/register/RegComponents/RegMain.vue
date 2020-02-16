<template>
  <div class="loginWrapper">
    <div class="loginTitle">
      <div class="loginTitleLine">
        <span class="loginText">注册</span>
      </div>
    </div>
    <div class="logWindow">
      <div class="traditionLog">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="loginForm">
          <el-form-item prop="userName">
            <el-input v-model="ruleForm.userName" autocomplete="off" placeholder="你的用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码(6-16个字符组成区分大小写)"></el-input>
          </el-form-item>
          <el-form-item prop="phoneNum">
            <el-input v-model="ruleForm.phoneNum" auto-complete="off" placeholder="电话号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="ruleForm.checkNum" auto-complete="off" placeholder="验证码"></el-input>
            <el-button type="primary">获取验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="regButton">注册</el-button>
          </el-form-item>
        </el-form>
        <router-link tag="el-link" to="/login">
          <span>已有账号直接登录</span>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegMain',
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
      var validatePhoneNum = (rule, value, callback) => {
        let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;// 手机号码校验规则
        if ( ! valid_rule.test(phone_number)) {
          callback(new Error('手机号码格式错误'));
        }
        else {
          callback();
        }
      }
      return {
        ruleForm: {
          userName: '',
          pass: '',
          phoneNum: '',
          checkNum: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          userName: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          phoneNum: [
            { validator: validatePhoneNum, trigger: 'blur'}
          ]
        },
        QRcodeUrl: '/static/images/QRcode.png'
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
   .logWindow
    width: 489px
    margin: 0 auto
    .traditionLog
      padding-left: 45px
      width: 489px
      box-sizing: border-box
      float: left
      .loginForm
        margin-top: 80px
        width: 414px
        .regButton
          width: 414px
</style>