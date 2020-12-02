<template>
  <div class="content">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator=">">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    
</el-breadcrumb>
  </div>
  <el-form ref="form" :model="form" size="mini">
  <el-form-item label="状态">
    <el-radio-group v-model="form.resource">
      <el-radio label="全部"></el-radio>
      <el-radio label="草稿"></el-radio>
      <el-radio label="待审核"></el-radio>
      <el-radio label="审核通过"></el-radio>
      <el-radio label="审核失败"></el-radio>
      <el-radio label="审核通过"></el-radio>
    </el-radio-group>
  </el-form-item>
   <el-form-item label="频道">
    <el-select v-model="form.region" placeholder="请选择频道">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期">
     <el-date-picker
      v-model="form.data1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  
  </el-form-item>
      <el-button type="primary" @click="onSubmit" class="search-btn">筛选</el-button>
</el-form>
  
</el-card>
  <!--面包屑导航-->
  

<!--/面包屑导航-->

<!--
  数据表格
-->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>根据条件筛选出45201条数据结果</span>
    
  </div>
   <el-table
      :data="tableData"
      style="width: 100%" stripe class="list-table">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    
    <el-pagination
  background
  layout="prev, pager, next"
  :total="20" class="fenye">
 
</el-pagination>
</el-card>

  </div>
</template>
<script>
import {getArticle} from '@/api/articles.js'
  export default {
    name:'contentIndex',
    components:{},
    props:{},
    data(){
      return {
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
         },
           tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          articles:[]
      
      }

},
computed:{},
watch:{},
created (){
  this.loadArticles()
},
mounted (){},
methods:{
  loadArticles(){
    getArticle().then(res=>{
    // console.log(res)
    this.articles=res.data.data.results 
  })
  
  },
  onSubmit(){
    console.log(222);
  }
  
}


}
</script> 
<style lang="less" scoped>
.box-card{
  margin-bottom: 20px !important;
  border-radius: 3px;
  .search-btn{
  margin-left: 40px;
}
.list-table{
  margin-bottom: 30px;}
.fenye{
  text-align: center;
}
}



</style>