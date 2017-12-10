<template>
  <div>
    <h1 class="center">產品清單</h1>
    <hr class="linePro">
    <!--商品區-->
    <el-row :span="24" class="products" justify="space-around" type="flex">

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goDetails('tshirt')">
            <img src="../assets/Product/Ｔ恤小圖.jpg" class="image">
          </div>
          <div style="padding: 14px;" class="work">
            <span class="item_name">T恤</span>
            <div class="bottom clearfix">
              <el-button type="info" round @click="goDetails('tshirt')" class="custom">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goDetails('polo')">
            <img src="../assets/Product/polo小圖.jpg" class="image">
          </div>
          <div style="padding: 14px;" class="work">
            <span class="item_name">POLO衫</span>
            <div class="bottom clearfix">
              <el-button type="info" round @click="goDetails('polo')" class="custom">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goDetails('hoodie')">
            <img src="../assets/Product/帽T小圖.jpg" class="image">
          </div>
          <div style="padding: 14px;" class="work">
            <span class="item_name">帽T</span>
            <div class="bottom clearfix">
              <el-button type="info" round @click="goDetails('hoodie')" class="custom">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

    </el-row>

    <el-row :span="24" class="products" justify="space-around" type="flex">

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goDetails('bag')">
            <img src="../assets/Product/帆布袋.jpg" class="image">
          </div>
          <div style="padding: 14px;" class="work">
            <span class="item_name">帆布袋</span>
            <div class="bottom clearfix">
              <el-button type="info" round @click="goDetails('bag')" class="custom">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goDetails('hat')">
            <img src="../assets/Product/帽小.jpg" class="image">
          </div>
          <div style="padding: 14px;" class="work">
            <span class="item_name">帽子</span>
            <div class="bottom clearfix">
              <el-button type="info" round @click="goDetails('hat')" class="custom">商品詳情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <!--排版需求-->
      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goOther()">
            <img src="../../src/assets/Product/其他商品.jpg" class="image" id="other">
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
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow},
    data() {
      return {
        dialogVisible: false,
        totalWork: 9
      };
    },
    methods: {
      goDetails(names){
        if(names=='tshirt'){
          this.$router.push({name:'T恤'}) ;
        }
        if(names=='polo'){
          this.$router.push({name:'Polo衫'}) ;
        }
        if(names=='bag'){
          this.$router.push({name:'帆布袋'}) ;
        }
        if(names=='hoodie'){
          this.$router.push({name:'帽T'}) ;
        }
        if(names=='hat'){
          this.$router.push({name:'帽子'}) ;
        }
      },
      goOther(){
          this.$router.push({name:'聯絡我們'});
      }
    },
  };

</script>

<style>

  .products {
    width: 100%;
    margin-bottom: 50px;
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
    background-color: darkgrey;
  }

  .item_name {
    font-size: x-large;
  }

  .bottom {
    margin-top: 10px;
  }

  .center {
    text-align: center;
    font-size: 32px;
    margin-bottom: 0px;
    letter-spacing: 3px;
  }

  .linePro {
    margin-bottom: 30px;
    margin-top: 10px;
    margin-left: 45px;
    margin-right: 45px;
    border: 2px solid grey;
  }

  .custom {
    background-color: white;
    color: grey;
  }
</style>
