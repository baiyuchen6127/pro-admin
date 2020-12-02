<template> 
  <el-menu
       :default-active="defaultUrl"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b" router  :collapse="isCollapse">
      <!-- <div class="img">
   <img src=".././assets/images/logo.jpg" >
   </div> -->
    <el-menu-item >
        
        <span slot="title" class="title">小白头条</span>
      </el-menu-item>
     <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/content">
        <i class="el-icon-menu"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/images">
        <i class="el-icon-picture"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="publish">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="comment">
        <i class="el-icon-s-comment"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-present"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/person">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
    
</template>
<script>
  export default {
    name:'AppAside',
    components:{},
    props:[
      'is-collapse'
    ],
    data(){
      return {
       defaultUrl:"/"
        // isCollapse:false
      }

},
computed:{},
watch:{
  
},
created (){},
mounted (){
  let href=window.location.href;
  this.defaultUrl=href.split('/#')[1]

},
methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      
}


}
</script>
<style lang="less" scoped>
  .img img{
    width: 200px;
    height: 60px;
  }
  .title{
    text-align: center;
    line-height: 56px;
    font-size: 24px;
  }
  .iconfont{
    margin-right: 8px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    padding-left: 3px;
  }
  
  
  </style>