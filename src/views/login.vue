<template>
  <div class="login-container">
    <div class="login-head">
      <div class="logo"></div>
    </div>
    <el-form ref="form" :model="user" class="login-from">
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loginLoading" @click="onLogin" class="login-btn">登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from "@/utils/request.js"
export default {
  data() {
    return {
         checked: false,
         loginLoading:false,
      user: {
        mobile: "",
        code: "",
       
      },
    };
  },
  methods: {
      //获取表单数据进行登录
    onLogin() {
      const user=this.user;
      this.loginLoading=true
      request({
          method:'POST',
          url:'/mp/v1_0/authorizations',
          data:user
      }).then(res => {
          console.log(res)
          this.$message({
              message:'登录成功',
              type:'success'
             
          })
           this.loginLoading=false
      }).catch(err=>{
          console.log("登录失败",err);
          this.$message({
              message:'登录失败， 手机号或验证码错误',
              type:'error'
          })
          this.loginLoading=false
      })
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/logo_bgc.png") no-repeat top center;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-from {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
  }
  .login-head {
    min-width: 300px;
    height: 84px;
    // background: url("../assets/images/logo.jpg") no-repeat top center;
    background-color: #fff;
    background-size: cover;
    padding: 50px;
    padding-bottom: 0px;
    .logo {
      min-width: 150px;
      height: 84px;
      background: url("../assets/images/logo.jpg") no-repeat top center;
      background-size:cover;
      
    }
  }
  .login-btn {
    width: 100%;
  }
}
</style>