<template class="main">
  <div>

    <el-row>

      <div id="sm">

        <el-row>
          <el-col class="block">
            <div>
              <carousel :perPage="1" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="3500"
                        paginationActiveColor="#f26531" :loop="true">
                <slide>
                  <div @click="goProduct()" class="bannerClick"><img src="../assets/MainPage/banner7.jpg"
                                                                     class="carousel-img"></div>
                </slide>
                <slide>
                  <img src="../assets/MainPage/banner1.jpg" class="carousel-img">
                </slide>
                <slide>
                  <div @click="product('Tshirt')" class="bannerClick"><img src="../assets/MainPage/banner2.jpg"
                                                                           class="carousel-img"></div>
                </slide>
                <slide>
                  <div @click="goMaterial()" class="bannerClick"><img src="../assets/MainPage/banner3.jpg"
                                                                      class="carousel-img"></div>
                </slide>
              </carousel>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-row>
              <el-col :span="5">
                <div class="decoration">
                  <h3 class="features-title">客製團體服</h3>
                </div>
              </el-col>
            </el-row>
            <el-row class="items" justify="space-between" type="flex" :gutter="20">
              <el-col :sm="6">
                <div @click="product('Tshirt')" class="item">
                  <img src="../../src/assets/MainPage/小圖1.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
              <el-col :sm="6">
                <div @click="product('Hoodie')" class="item">
                  <img src="../../src/assets/MainPage/小圖2.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
              <el-col :sm="6">
                <div @click="product('Polo')" class="item">
                  <img src="../../src/assets/MainPage/小圖4.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
              <el-col :sm="6">
                <div @click="product('Bag')" class="item">
                  <img src="../../src/assets/MainPage/小圖5.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-row>
              <el-col :span="5">
                <div class="decoration">
                  <h3 class="features-title">產品特色</h3>
                </div>
              </el-col>
            </el-row>
            <img src="../../src/assets/MainPage/banner5.jpg" class="features-img">
          </el-col>
        </el-row>
      </div>

      <div id="xs">

        <el-row>
          <el-col class="block">
            <div>
              <carousel :perPage="1" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="3500"
                        paginationActiveColor="#f26531" :loop="true">
                <slide>
                  <div @click="goProduct()" class="bannerClick"><img src="../assets/MainPage/b4.jpg"
                                                                     class="carousel-img"></div>
                </slide>
                <slide>
                  <img src="../assets/MainPage/b1.jpg" class="carousel-img">
                </slide>
                <slide>
                  <div @click="product('Tshirt')" class="bannerClick"><img src="../assets/MainPage/b2.jpg"
                                                                           class="carousel-img"></div>
                </slide>
                <slide>
                  <div @click="goMaterial()" class="bannerClick"><img src="../assets/MainPage/b3.jpg"
                                                                      class="carousel-img"></div>
                </slide>
              </carousel>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-row type="flex" justify="center">
              <el-col :span="10">
                <div class="decoration">
                  <h3 class="features-title">客製產品</h3>
                </div>
              </el-col>
            </el-row>
            <el-row class="items" justify="space-between" type="flex" :gutter="20">
              <el-col :span="12">
                <div @click="product('Tshirt')" class="item">
                  <img src="../../src/assets/MainPage/小圖1.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div @click="product('Hoodie')" class="item">
                  <img src="../../src/assets/MainPage/小圖2.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="items" justify="space-between" type="flex" :gutter="20">
              <el-col :span="12">
                <div @click="product('Polo')" class="item">
                  <img src="../../src/assets/MainPage/小圖4.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div @click="product('Bag')" class="item">
                  <img src="../../src/assets/MainPage/小圖5.jpg" class="features-img">
                  <div class="middle">
                    <div class="text">前往商品頁面</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-row type="flex" justify="center">
              <el-col :span="10">
                <div class="decoration">
                  <h3 class="features-title">產品特色</h3>
                </div>
              </el-col>
            </el-row>
            <img src="../../src/assets/MainPage/b5.jpg" class="xs-banner">
          </el-col>
        </el-row>
      </div>

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
      ElRow,

    },
    methods: {
      product(name){
        if (name == 'Tshirt') {
          this.$router.push({name: 'T恤'});
        }
        if (name == 'Hoodie') {
          this.$router.push({name: '帽T'});
        }
        if (name == 'Polo') {
          this.$router.push({name: 'Polo衫'});
        }
        if (name == 'Bag') {
          this.$router.push({name: '帆布袋'});
        }
      },
      goMaterial(){
        this.$router.push({name: '布料材質'});
      },
      goProduct(){
        this.$router.push({name: '商品清單'});
      }

    },
  }
</script>

<style>
  .carousel-img {
    width: 100%;
  }

  .features-img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .decoration {
    border-top: 3px solid grey;
    border-bottom: 3px solid grey;
  }

  .features-title {
    text-align: center;
    margin-bottom: 5px;
    margin-top: 5px;
    color: grey;
    font-size: 24px;
    letter-spacing: 3px;
  }

  .items {
    margin-top: 30px;
    margin-bottom: 70px;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    left: 50%;
    top: 50%;
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%)
  }

  .item {
    position: relative;
    cursor: pointer;
  }

  .item:hover .middle {
    opacity: 1;
  }

  .item:hover .features-img {
    opacity: 0.25;
  }

  .text {
    color: black;
    font-size: 24px;
    font-weight: bolder;
    width: 100%;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    letter-spacing: 3px;
  }

  .bannerClick {
    cursor: pointer;
  }

  .block {
    margin-bottom: 20px;
  }

  .xs-banner {
    width: 100%;
    margin-top: 30px;
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

    .features-title {
      font-size: 20px;
    }

    .decoration {
      margin-top: 20px;
    }

    .items {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }

    .features-title {
      font-size: 20px;
    }

    .decoration {
      margin-top: 20px;
    }

    .items {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }

    .features-title {
      font-size: 20px;
    }

    .decoration {
      margin-top: 20px;
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
