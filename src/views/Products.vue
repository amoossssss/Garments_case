<template>
  <div>

    <!--商品區-->
    <el-row :span="24" class="products">

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes2.jpg" class="image">
          <div style="padding: 14px;" class="work">
            <span>商品名稱1</span>
            <div class="bottom clearfix">
              <el-button type="text" @click="goDetails">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :offset="3" :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes2.jpg" class="image">
          <div style="padding: 14px;" class="work">
            <span>商品名稱2</span>
            <div class="bottom clearfix">
              <el-button type="text" @click="goDetails">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :offset="3" :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/clothes2.jpg" class="image">
          <div style="padding: 14px;" class="work">
            <span>商品名稱3</span>
            <div class="bottom clearfix">
              <el-button type="text" @click="goDetails">商品詳情</el-button>
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
      };
    },
    methods: {
      goDetails(){
          this.$router.push({name:'商品詳情', params:{id:1}}) ;
      }
    },
  };

</script>

<style>

  .products {
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
