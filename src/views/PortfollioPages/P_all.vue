<template>
  <div>

    <div id="sm">
      <el-row :span="24" class="portfolio" justify="space-between" type="flex">

        <el-col :span="7">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth1.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>百樂</span>
              <span class="year">2017</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="7">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth2.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>政大財經</span>
              <span class="year">2017</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="7">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth3.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>Juniper</span>
              <span class="year">2017</span>
            </div>
          </el-card>
        </el-col>

      </el-row>

      <el-row :span="24" class="portfolio" justify="space-between" type="flex">

        <el-col :span="7">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth4.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>光紅建聖</span>
              <span class="year">2016</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="7">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth5.jpg" class="product_image">
            <div style="padding: 14px; " class="work">
              <span>國光劇團</span>
              <span class="year">2016</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="7">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth6.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>妮樂佛創意有限公司</span>
              <span class="year">2016</span>
            </div>
          </el-card>
        </el-col>

      </el-row>
    </div>

    <div id="xs">
      <el-row :span="24" class="portfolio" type="flex" justify="space-around">

        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth1.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>百樂</span>
              <span class="year">2017</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth2.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>政大財經</span>
              <span class="year">2017</span>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :span="24" class="portfolio" justify="space-around" type="flex">

        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth3.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>Juniper</span>
              <span class="year">2017</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth4.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>光紅建聖</span>
              <span class="year">2016</span>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :span="24" class="portfolio" justify="space-around" type="flex">

        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth5.jpg" class="product_image">
            <div style="padding: 14px; " class="work">
              <span>國光劇團</span>
              <span class="year">2016</span>
            </div>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/Portfolio/cloth6.jpg" class="product_image">
            <div style="padding: 14px;" class="work">
              <span>妮樂佛創意有限公司</span>
              <span class="long-year">2016</span>
            </div>
          </el-card>
        </el-col>

      </el-row>
    </div>


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
  export default {
    data() {
      return {
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

  .long-year {
    padding-top: 4px;
    float: right;
    font-size: small;
  }

  #sm {
    display: none;
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }

    .long-year {
      padding-top: 4px;
      float: none;
      font-size: small;
    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    #sm {
      display: block;
    }

    #xs {
      display: none;
    }
  }

</style>
