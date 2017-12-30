<template>
  <div>

    <el-row :span="24" class="portfolio" justify="space-between" type="flex">

      <el-col :span="7">
      </el-col>

      <el-col :span="7" >
      </el-col>

      <el-col :span="7" >
      </el-col>

    </el-row>

    <!--分頁區-->
    <!--<el-row>-->
      <!--<el-col :span="24" class="pages">-->
        <!--<el-pagination-->
          <!--layout="prev, pager, next"-->
          <!--:total=totalWork-->
          <!--:page-size="9">-->
        <!--</el-pagination>-->
      <!--</el-col>-->
    <!--</el-row>-->

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
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

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
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
