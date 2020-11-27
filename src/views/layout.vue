<template>

   <el-container class="container">
  
   
  <el-aside width="200px" class="aside">
    
  <app-aside class="aside-menu"/>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>
<script>
import AppAside from '@/components/aside_nav.vue'
export default {
  name: "layoutIndex",
  components: {
      AppAside
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
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