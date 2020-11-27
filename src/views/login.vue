<template>
  <div class="login-container">
    <div class="login-head">
      <div class="logo"></div>
    </div>
    <el-form
      ref="login_form"
      :model="user"
      :rules="formRules"
      class="login-from"
    >
      <el-form-item prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="isAgree">
        <el-checkbox v-model="user.isAgree"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loginLoading"
          @click="onLogin"
          class="login-btn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      loginLoading: false,
      user: {
        mobile: "",
        code: "",
        isAgree: false,
      },
      formRules: {
        //表单验证的规则配置
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "change",
          },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: "输入的手机号长度有误",
            trigger: "change",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "change",
          },
          {
            pattern: /^\d{6}$/,
            mess: "请输入正确的验证码",
            trigger: "change",
          },
        ],
        isAgree: [
          {
            //自定义校验规则
            validator: (rule, value, callback) => {
              // callback()
              if (value) {
                callback();
              } else {
                callback(new Error("请勾选用户协议"));
              }
            },
            message: "请勾选用户协议",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    //获取表单数据进行登录
    onLogin() {
      this.$refs["login_form"].validate((valid) => {
        // console.log(valid);
        if (!valid) {
          return;
        }
        this.login();
      });
    },
    login() {
      this.loginLoading = true;
      login(this.user)
        .then((res) => {
          console.log(res);
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.loginLoading = false;
          this.$router.push("/")
        })
        .catch((err) => {
          console.log("登录失败", err);
          this.$message({
            message: "登录失败， 手机号或验证码错误",
            type: "error",
          });
          this.loginLoading = false;
        });
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
      background-size: cover;
    }
  }
  .login-btn {
    width: 100%;
  }
}
</style>