<template>
  <div class="hello">
    <el-row>
  <el-col :span="24"><div class="block">
  <span class="demonstration">搜索：</span>
  <span class="wrapper">
    <el-button type="success">种子资源</el-button>
    <el-button type="warning">电影资源</el-button>
    <el-button type="danger">唯美写真</el-button>
    <el-button type="info">书籍资源</el-button>
  </span>
</div></el-col>
</el-row>
<el-row>
  <el-col :span="4" ><div class="grid-content"></div></el-col>
  <el-col :span="16"><el-input
  placeholder="请输入内容"
  icon="search"
  v-model="input2"
  :on-icon-click="handleIconClick">
</el-input></el-col>
<el-col :span="4" ></el-col>
</el-row>
<el-row>
  <el-col :span="12">
  <el-radio-group v-model="radio2">
    <el-radio :label="3">苍老师</el-radio>
    <el-radio :label="6">小泽玛利亚</el-radio>
    <el-radio :label="9">波多野结衣</el-radio>
  </el-radio-group>
</el-col>
  <!-- <el-col :span="24"><div class="grid-content bg-purple"></div></el-col> -->
</el-row>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
