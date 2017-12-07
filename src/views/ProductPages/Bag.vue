<template>
  <div>
    <el-row :span="24" justify="center" type="flex" class="product">
      <el-col :span="6">
        <img src="../../assets/Product/帆布袋.jpg" class="item_image">
      </el-col>
      <el-col :offset="2" :span="10">
        <p class="item_title">帆布袋</p>
        <div class="desc_button">
          <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
        </div>
        <div class="desc">
          <p class="desc_message">商品資訊：</p>
          <p>Made In Taiwan</p>
        </div>
      </el-col>
    </el-row>
    <hr class="line">
    <el-row :span="24" justify="center" type="flex" class="product">
      <el-col :span="16">
        <img src="../../assets/Product/袋/帆布袋細節.jpg" class="desc_image">
        <div class="center">
          <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    methods: {
      connectUs(){
        this.$router.push({name:'聯絡我們'}) ;
      }
    }
  }

</script>

<style>
  .product {
    width: 100%;
  }

  .item_image {
    width: 100%;
    border: 3px solid grey;
  }

  .item_title {
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  .line {
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 30px;
    border: 2px solid rgba(201,202,202,0.76);
  }

  .desc_button {
    text-align: right;
  }

  .desc {
    background-color: rgba(222,222,222,0.76);
    height: 45%;
    padding-left: 20px;
  }

  .desc_message {
    padding-top: 10px;
  }

  .desc_image {
    width: 100%;
    margin-top: 40px;
  }

  .center {
    text-align: center;
    margin-top: 60px;
  }

  .largeButton {
    font-size: x-large;
  }
</style>
