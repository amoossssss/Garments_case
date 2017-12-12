<template>
  <div>
    <el-row justify="space-around" type="flex">
      <el-col :span="22">
        <img src="../../src/assets/Product/商品清單.jpg" class="title_image">
      </el-col>
    </el-row>
    <!--商品區-->
    <el-row :span="24" class="products" justify="space-around" type="flex">

      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goDetails('tshirt')">
            <img src="../assets/Product/T恤小圖.jpg" class="box_image">
          </div>
          <div style="padding: 14px;" class="workP">
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
            <img src="../assets/Product/polo小圖.jpg" class="box_image">
          </div>
          <div style="padding: 14px;" class="workP">
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
            <img src="../assets/Product/帽T小圖.jpg" class="box_image">
          </div>
          <div style="padding: 14px;" class="workP">
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
            <img src="../assets/Product/帆布袋.jpg" class="box_image">
          </div>
          <div style="padding: 14px;" class="workP">
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
            <img src="../assets/Product/帽小.jpg" class="box_image">
          </div>
          <div style="padding: 14px;" class="workP">
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
            <img src="../../src/assets/Product/其他商品.jpg" class="box_image" id="other">
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
    padding-top: 40%;
    text-align: center;
  }

  .box_image {
    width: 100%;
  }

  .title_image {
    width: 100%;
    margin-bottom: 50px;
  }

  .workP {
    text-align: center;
  }

  .item_name {
    font-size: x-large;
  }

  .bottom {
    margin-top: 10px;
  }

  .custom {
    background-color: white;
    color: grey;
  }

</style>
