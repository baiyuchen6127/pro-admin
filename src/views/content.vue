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
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" class="search-btn"
          >筛选</el-button
        >
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
      <el-table :data="articles" style="width: 100%" stripe class="list-table">
        <el-table-column prop="images" label="封面"> </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag :type="articleStatus[scope.row.status].type">{{articleStatus[scope.row.status].text}}</el-tag>
            
          </template>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="medium "
              type="primary"
              icon="el-icon-edit"
              circle
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              size="medium "
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="fenye"
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { getArticle } from "@/api/articles.js";
export default {
  name: "contentIndex",
  components: {},
  props: {},
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },

      articles: [],//文章列表
      articleStatus:[
        {status:0,text:'草稿',type:'warning'},
        {status:1,text:'待审核',type:'warning'},
        {status:2,text:'审核通过',type:'success'},
        {status:3,text:'审核失败',type:'danger'},
        {status:4,text:'已删除',type:'info'},

      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadArticles();
  },
  mounted() {},
  methods: {
    loadArticles() {
      getArticle().then(res => {
        console.log(res);
        this.articles = res.data.data.results;
      });
    },
    onSubmit() {
      console.log(222);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script> 
<style lang="less" scoped>
.box-card {
  margin-bottom: 20px !important;
  border-radius: 3px;
  .search-btn {
    margin-left: 40px;
  }
  .list-table {
    margin-bottom: 30px;
  }
  .fenye {
    text-align: center;
  }
}
</style>