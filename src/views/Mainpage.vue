<template class="main">
  <div>
    <el-row>
      <el-col>
        <div class="block">
        <el-carousel indicator-position="outside" height="600px">
          <el-carousel-item  :key="1">
           <img src="../assets/MainPage/banner1.jpg" class="carousel-img">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="../assets/MainPage/banner2.jpg" class="carousel-img">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="../assets/MainPage/banner3.jpg" class="carousel-img">
          </el-carousel-item>
        </el-carousel>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col>
        <el-row>
          <el-col :span="3">
            <div class="decoration">
              <h3 class="features-title">客製產品</h3>
            </div>
          </el-col>
        </el-row>
        <el-row class="items" justify="space-between" type="flex">
          <el-col :span="5" >
            <div @click="product('Tshirt')">
              <img src="../../src/assets/MainPage/小圖1.jpg" class="features-img">
            </div>
          </el-col>
          <el-col :span="5">
            <div @click="product('Hoodie')">
              <img src="../../src/assets/MainPage/小圖2.jpg" class="features-img">
            </div>
          </el-col>
          <el-col :span="5">
            <div @click="product('Polo')">
              <img src="../../src/assets/MainPage/小圖4.jpg" class="features-img">
            </div>
          </el-col>
          <el-col :span="5">
            <div @click="product('Bag')">
              <img src="../../src/assets/MainPage/小圖5.jpg" class="features-img">
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col>
        <el-row>
          <el-col :span="3">
            <div class="decoration">
              <h3 class="features-title">產品特色</h3>
            </div>
          </el-col>
        </el-row>
        <img src="../../src/assets/MainPage/banner5.jpg" class="features-img">
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElCol,
      ElRow
    },
    methods: {
        product(name){
            if(name=='Tshirt'){
              this.$router.push({name:'T恤'}) ;
            }
            if(name=='Hoodie'){
              this.$router.push({name:'帽T'}) ;
            }
            if(name=='Polo'){
              this.$router.push({name:'Polo衫'}) ;
            }
            if(name=='Bag'){
              this.$router.push({name:'帆布袋'}) ;
            }
        }

    },
  }
</script>

<style>
  .carousel-img {
    width: 100%;
  }

  .features-img {
    width: 100%;
  }

  .decoration {
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
  }

  .features-title {
    text-align: center;
    margin-bottom: 5px;
    margin-top: 5px;
    color: grey;
  }

  .items {
    margin-top: 30px;
    margin-bottom: 70px;
  }

</style>
