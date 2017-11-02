<template>
  <div>
    <el-row>
      <el-col :span="24" >
        <el-carousel indicator-position="outside" height="400px">
          <el-carousel-item  :key="1">
           <!--<img src="../assets/clothes.jpg">-->
            <h1>Image1</h1>
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <!--<img src="../assets/clothes2.jpg">-->
            <h1>Image2</h1>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes.jpg" class="image">
          <div style="padding: 14px;" class="center">
            <span>推薦衣服{{index+1}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">查看詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="1" :offset="1" class="recommend">
        推薦商品
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="23">
        <el-card class="box-card">
          <h3>衣服材質圖例說明</h3>
          <p>xxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxx</p>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  export default {
    components: {ElRow},
    data() {
      return {
        currentDate: new Date()
      };
    }
  }
</script>

<style>

  .el-carousel {
    margin-bottom: 20px;
  }

  .el-carousel__item h1 {
    color: #475669;
    font-size: 48px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 30px;
    text-align: center;
    height: 200px;
  }

  .center {
    text-align: center;
  }

  .recommend{
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    text-align: center;
    color: crimson;
    font-size: larger;
  }
</style>
