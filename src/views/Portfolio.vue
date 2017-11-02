<template>
  <div>

    <!--作品區-->
    <el-row :span="24" class="portfolio">

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes.jpg" class="image">
          <div style="padding: 14px;" class="work">
            <span>作品名稱1</span>
            <div class="bottom clearfix">
              <el-button type="text" @click="dialogVisible = true">查看大圖</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :offset="3" :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes.jpg" class="image">
          <div style="padding: 14px;" class="work">
            <span>作品名稱2</span>
            <div class="bottom clearfix">
              <el-button type="text" @click="dialogVisible = true">查看大圖</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :offset="3" :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes.jpg" class="image">
          <div style="padding: 14px;" class="work">
            <span>作品名稱3</span>
            <div class="bottom clearfix">
              <el-button type="text" @click="dialogVisible = true">查看大圖</el-button>
            </div>
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

    <!--顯示大圖-->
    <el-dialog
      title="作品名稱"
      :visible.sync="dialogVisible"
      width="75%"
      center>
      <img src="../assets/clothes.jpg" class="image">
    </el-dialog>

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    data() {
      return {
        dialogVisible: false,
        totalWork: 45
      };
    },
  };

</script>

<style>

  .portfolio {
    width: 100%;
  }


  .pages {
    /*position: static;*/
    padding-top: 40%;
    text-align: center;
  }


  .image {
    width: 100%;
  }


  .work {
    text-align: center;
  }



</style>
