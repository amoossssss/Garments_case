<template>
  <div>
    <el-row justify="space-around" type="flex">
      <el-col :span="23">
        <img src="../../src/assets/Portfolio/歷年作品.jpg" class="title_image">
      </el-col>
    </el-row>
    <!--作品區-->
    <el-row :span="24" class="portfolio" justify="space-around" type="flex">

      <el-col :span="7" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Portfolio/cloth1.jpg" class="product_image">
          <div style="padding: 14px;" class="work">
            <span>百樂</span>
            <span class="year">2017</span>
          </div>
        </el-card>
      </el-col>

      <el-col :span="7" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Portfolio/cloth2.jpg" class="product_image">
          <div style="padding: 14px;" class="work">
            <span>政大財經</span>
            <span class="year">2017</span>
          </div>
        </el-card>
      </el-col>

      <el-col :span="7" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Portfolio/cloth3.jpg" class="product_image">
          <div style="padding: 14px;" class="work">
            <span>Juniper</span>
            <span class="year">2017</span>
          </div>
        </el-card>
      </el-col>

    </el-row>

    <el-row :span="24" class="portfolio"  justify="space-around" type="flex">

      <el-col :span="7" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Portfolio/cloth4.jpg" class="product_image">
          <div style="padding: 14px;" class="work">
            <span>光紅建聖</span>
            <span class="year">2016</span>
          </div>
        </el-card>
      </el-col>

      <el-col :span="7" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Portfolio/cloth5.jpg" class="product_image">
          <div style="padding: 14px; " class="work">
            <span>國光劇團</span>
            <span class="year">2016</span>
          </div>
        </el-card>
      </el-col>

      <el-col :span="7" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/Portfolio/cloth6.jpg" class="product_image">
          <div style="padding: 14px;" class="work">
            <span>妮樂佛創意有限公司</span>
            <span class="year">2016</span>
          </div>
        </el-card>
      </el-col>

    </el-row>

    <!--分頁區-->
    <el-row>
      <el-col :span="24" class="pages">
        <el-pagination
          layout="prev, pager, next"
          :total=totalWork
          :page-size="9">
        </el-pagination>
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
        dialogVisible: false,
        totalWork: 9
        // TODO 換頁
      };
    },
  };

</script>

<style>

  .portfolio {
    width: 100%;
    padding-bottom: 25px;
  }

  .pages {
    padding-top: 40%;
    text-align: center;
  }


  .product_image {
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .work {
    text-align: center;
    background-color: darkgrey;
    font-size: medium;
  }

  .year {
    padding-top: 4px;
    float: right;
    font-size: small;
  }

  .title_image {
    width: 100%;
    margin-bottom: 50px;
  }

</style>
