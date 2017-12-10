<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
          backgroundColor="#f2f2f2"
          text-color="#191919"
          active-text-color="#f26531">
          <el-menu-item index="/tshirt">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">T-shirt</span>
          </el-menu-item>
          <el-menu-item index="/polo">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">POLO衫</span>
          </el-menu-item>
          <el-menu-item index="/hoodie">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">帽T</span>
          </el-menu-item>
          <el-menu-item index="/bag">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">帆布袋</span>
          </el-menu-item>
          <el-menu-item index="/hat">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">帽子</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :offset="2" :span="18">
        <el-row :span="24" justify="center" type="flex" class="product">
         <el-col :span="8">
          <img src="../../assets/Product/帽小.jpg" class="item_image">
         </el-col>
         <el-col :offset="2" :span="14">
           <p class="item_title">帽子</p>
           <div class="desc_button">
             <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
           </div>
           <div class="desc">
             <p class="desc_message">商品資訊：</p>
             <p>Made In Taiwan</p>
             <p>材質可分100%棉斜紋或其他混紡材質均可</p>
           </div>
         </el-col>
        </el-row>
        <hr class="lineProPage">
        <el-row :span="24" justify="center" type="flex" class="product">
         <el-col :span="24">
           <img src="../../assets/Product/帽/帽.jpg" class="desc_image">
           <img src="../../assets/Product/顏色.jpg" class="desc_image">
           <div class="center">
             <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
           </div>
         </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      connectUs(){
        //        this.$router.push({name:'聯絡我們'}) ;
//      TODO URL change
        window.open('/#/connectUs','_blank');
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

  .lineProPage {
    /*margin-left: 80px;*/
    /*margin-right: 80px;*/
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
