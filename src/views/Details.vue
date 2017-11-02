<template>
  <div>

    <el-row class="details">

      <el-col :span="4">

        <!--TODO @click 跳轉頁面-->
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          backgroundColor="#f2f2f2"
          text-color="#191919"
          active-text-color="#f2a718">
          <el-menu-item  class="item" index="1">
            <i class="el-icon-caret-right"></i>
            <span slot="title">商品名稱1</span>
          </el-menu-item>
          <el-menu-item  class="item" index="2">
            <i class="el-icon-caret-right"></i>
            <span slot="title">商品名稱2</span>
          </el-menu-item>
          <el-menu-item  class="item" index="3">
            <i class="el-icon-caret-right"></i>
            <span slot="title">商品名稱3</span>
          </el-menu-item>
        </el-menu>

      </el-col>

      <el-col :offset="2" :span="18">

        <el-row>
          <el-col :span="12">
            <img src="../assets/clothes2.jpg" class="image">
          </el-col>
          <el-col :offset="2" :span="10" class="name_color">
            <h1>商品名稱</h1>
            <h3>Colors</h3>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="name_color">
            <h2>商品資訊</h2>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="name_color">
            <h2>單品大圖</h2>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="name_color">
            <h2>尺寸表/試穿報告</h2>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="name_color">
            <h2>保養方法</h2>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="name_color">
            <h2>表單詢價</h2>
          </el-col>
        </el-row>

      </el-col>


    </el-row>




  </div>
</template>

<style>

  .details {
    width: 100%;
  }

  .el-menu-vertical-demo {
    max-width: 150px;
    margin: 0 auto;
  }

  .image {
    width: 100%;
  }

  .name_color {
    margin-top: 20px;
    text-align: center;
    border: solid 5px #d9d9d9;
    color: crimson;
  }
</style>
