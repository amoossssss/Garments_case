<!--TODO font size issue & view small img issue-->
<template>
  <div>
    <h2 class="titleM">布料材質</h2>
    <hr class="lineM">

    <div class="desc_block">
      <el-row :span="24" >
        <!--<el-col :span="24">-->
          <img src="../../assets/Materials/布料1.jpg" class="main_img" alt="純棉1">
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<h3 class="desc_title">純棉</h3>-->
          <!--<div class="desc_content">-->
            <!--<p>100% 純棉</p>-->
            <!--<p>分為20 支、30 支、40 支</p>-->
            <!--<p>支數越高 質地越細緻柔軟</p>-->
            <!--<p>輕薄柔 舒適吸汗</p>-->
            <!--<p>耐洗不變形</p>-->
            <!--<p>不褪色 不起球</p>-->
            <!--<br>-->
            <!--<p>適用於T 恤主料</p>-->
          <!--</div>-->
        <!--</el-col>-->
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24">
        <el-col :span="12">
          <el-row  justify="space-between" type="flex">
            <el-col :span="7">
              <a @click="dialogVisible1 = true"><img src="../../assets/Materials/純棉2.jpg" class="little_img" alt="純棉2"></a>
            </el-col>
            <el-col :span="7">
              <a @click="dialogVisible2 = true"><img src="../../assets/Materials/純棉3.jpg" class="little_img" alt="純棉3"></a>
            </el-col>
            <el-col :span="7">
              <a @click="dialogVisible3 = true"><img src="../../assets/Materials/純棉4.jpg" class="little_img" alt="純棉4"></a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="desc_block">
      <el-row :span="24" >
        <!--<el-col :span="16">-->
          <img src="../../assets/Materials/布料2.jpg" class="main_img" alt="吸濕1">
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<h3 class="desc_title_2">吸濕排汗</h3>-->
          <!--<div class="desc_content">-->
            <!--<p>100% 聚酯纖維</p>-->
            <!--<p>輕薄柔軟 舒適耐穿</p>-->
            <!--<p>吸汗快乾不黏貼</p>-->
            <!--<p>不褪色 不起球 不變形</p>-->
            <!--<br>-->
            <!--<p>適用於運動衫主料</p>-->
          <!--</div>-->
        <!--</el-col>-->
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24">
        <el-col :span="12">
          <el-row  justify="space-between" type="flex">
            <el-col :span="7">
              <a @click="dialogVisible4 = true"><img src="../../assets/Materials/吸濕2.jpg" class="little_img" alt="吸濕2"></a>
            </el-col>
            <el-col :span="7">
              <a @click="dialogVisible5 = true"><img src="../../assets/Materials/吸濕3.jpg" class="little_img" alt="吸濕3"></a>
            </el-col>
            <el-col :span="7">
              <a @click="dialogVisible6 = true"><img src="../../assets/Materials/吸濕4.jpg" class="little_img" alt="吸濕4"></a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="desc_block">
      <el-row :span="24" >
        <!--<el-col :span="16">-->
          <img src="../../assets/Materials/布料3.jpg" class="main_img" alt="polo1">
        <!--</el-col>-->
        <!--<el-col :span="8">-->
          <!--<h3 class="desc_title_2">CVC 網眼</h3>-->
          <!--<div class="desc_content">-->
            <!--<p>35% 純棉</p>-->
            <!--<p>65% 聚酯纖維</p>-->
            <!--<p>柔軟舒適 挺拔防縮</p>-->
            <!--<p>不褪色 不起球 不變形</p>-->
            <!--<br>-->
            <!--<p>適用於 POLO 衫主料</p>-->
          <!--</div>-->
        <!--</el-col>-->
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24">
        <el-col :span="12">
          <el-row  justify="space-between" type="flex">
            <el-col :span="7">
              <a @click="dialogVisible7 = true"><img src="../../assets/Materials/polo2.jpg" class="little_img" alt="polo2"></a>
            </el-col>
            <el-col :span="7">
              <a @click="dialogVisible8 = true"><img src="../../assets/Materials/polo3.jpg" class="little_img" alt="polo3"></a>
            </el-col>
            <el-col :span="7">
              <a @click="dialogVisible9 = true"><img src="../../assets/Materials/polo4.jpg" class="little_img" alt="polo3"></a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <el-dialog
      :visible.sync="dialogVisible1"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/純棉2.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible2"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/純棉3.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible3"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/純棉4.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible4"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/吸濕2.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible5"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/吸濕3.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible6"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/吸濕4.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible7"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/polo2.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible8"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/polo3.jpg">
    </el-dialog>

    <el-dialog
      :visible.sync="dialogVisible9"
      width="60%">
      <img class="viewerImg" src="../../assets/Materials/polo4.jpg">
    </el-dialog>

  </div>

</template>

<script>

  export default {
    data() {
      return {
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false,
        dialogVisible5: false,
        dialogVisible6: false,
        dialogVisible7: false,
        dialogVisible8: false,
        dialogVisible9: false,

      };
    }
  };
</script>

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
    margin-bottom: 40px;
  }

  .desc_block {
    display: inline-block;
    /*background-color: #d8d8db;*/
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

  .desc_title_2 {
    text-align: center;
    height: 100%;
    padding-bottom: 20px;
  }

  .desc_content {
    text-align: center;
    font-size: calc(5px + 1vw);
    line-height: 100%;
  }

  .viewerImg {
    width: 100%;
  }
</style>
