<template>

   <el-container class="container">
  
   
  <el-aside width="200px" class="aside">
    
  <app-aside class="aside-menu"/>
  </el-aside>
  <el-container>
    <el-header>
    <div>
      <i class="el-icon-s-fold icon-header"></i>
        <span>小白头条科技有限公司</span>
    </div>
        
        <el-dropdown>
        <div class="tx-box">
        <img :src="user.photo" alt="" class="tx">
        <span class="nichen">{{user.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <!-- <span>
        
        //   下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        // </span>-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
         
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>
<script>
import AppAside from '@/components/aside_nav.vue'
 import {getUserProfile} from '@/api/user.js'
export default {
  name: "layoutIndex",
  components: {
      AppAside
  },
  props: {},
  data() {
    return {
      user:{}
    };
  },
  computed: {},
  watch: {},
  created() {
     this.loadUserProfile();
  },
  mounted() {},
  methods: {
    loadUserProfile(){
      getUserProfile().then(res=>{
        // 
        this.user=res.data.data
      })
    }
  },
};
</script>
<style lang="less" scoped>
.el-header {
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .icon-header{
      width: 24px;
      height: 24px;
    }
    .tx-box{
      display: flex;
    align-items: center;
    justify-content: center;
    .tx{
      width: 40px;
      height: 40px;
     
      border-radius: 50%;
    }
    .nichen{
      display: inline-block;
      line-height: 60px;
      margin-left: 10px;
    }
    }
    
  }
  
  .aside {
    background-color: #D3DCE6;
    color: #333;
    width: 200px;
   .aside-menu{
       height: 100%;
   }

    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
   
   
  }
  
.container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    
    
  }
  


</style>