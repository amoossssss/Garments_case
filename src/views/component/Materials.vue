<template>
  <div>
    <h2 class="titleM">布料材質</h2>
    <hr class="lineM">

    <div class="desc_block">
      <el-row :span="24" >
        <el-col :span="16">
          <img src="../../assets/Materials/純棉1.jpg" class="main_img">
        </el-col>
        <el-col :span="8">
          <h3 class="desc_title">純棉</h3>
          <div class="desc_content">
            <p>100% 純棉</p>
            <p>分為20 支、30 支、40 支</p>
            <p>支數越高 質地越細緻柔軟</p>
            <p>輕薄柔 舒適吸汗</p>
            <p>耐洗不變形</p>
            <p>不褪色 不起球</p>
            <br>
            <p>適用於T 恤主料</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24">
        <el-col :span="12">
          <el-row  justify="space-between" type="flex">
            <el-col :span="7">
              <img src="../../assets/Materials/純棉2.jpg" class="little_img">
            </el-col>
            <el-col :span="7">
              <img src="../../assets/Materials/純棉3.jpg" class="little_img">
            </el-col>
            <el-col :span="7">
              <img src="../../assets/Materials/純棉4.jpg" class="little_img">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
  .titleM {
    padding-top: 20px;
    padding-left: 20px;
  }

  .lineM {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
    border-color: #5d5d5d;
    background-color: #5d5d5d;
  }

  .main_img {
    width: 100%;
    display: block;
    margin: auto;
  }

  .little_img {
    width: 100%;
    margin-right: 10px;
    padding-right: 10px;
  }

  .desc_block {
    display: inline-block;
    background-color: #d8d8db;
    margin-left: 20px;
    margin-right: 20px;

  }

  .little_block {
    margin-top: 15px;
    margin-left: 20px;
  }

  .desc_title {
    text-align: center;
    height: 100%;
  }

  .desc_content {
    text-align: center;
    font-size: xx-small;
    line-height: 100%;
  }
</style>
