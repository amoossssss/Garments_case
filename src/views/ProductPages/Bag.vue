<template>
  <div>
    <el-row>
      <div id="sm">
        <el-col :span="4">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
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
              <img src="../../assets/Product/帆布袋.jpg" class="item_image">
            </el-col>
            <el-col :offset="2" :span="14">
              <p class="item_title">帆布袋</p>
              <div class="desc_button">
                <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
              </div>
              <div class="desc">
                <p class="desc_message">商品資訊：</p>
                <p>Made In Taiwan</p>
                <p>100%棉帆布或其他材質均可</p>
              </div>
            </el-col>
          </el-row>
          <hr class="lineProPage">
          <el-row :span="24" justify="center" type="flex" class="product">
            <el-col :span="24">
              <img src="../../assets/Product/袋/帆布袋細節.jpg" class="desc_image">
              <div class="center">
                <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </div>

      <div id="xs">
        <el-col :span="24">
          <div class="sm-product-menu">
            <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-button type="info"><i class="el-icon-more"></i></el-button>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="tshirt"> T-shirt</el-dropdown-item>
                <el-dropdown-item command="polo">POLO衫</el-dropdown-item>
                <el-dropdown-item command="hoodie">帽T</el-dropdown-item>
                <el-dropdown-item command="bag">帆布袋</el-dropdown-item>
                <el-dropdown-item command="hat">帽子</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :span="24">
          <el-row :span="24" justify="center" type="flex" class="product">
            <el-col :span="24">
              <img src="../../assets/Product/帆布袋.jpg" class="item_image">
            </el-col>
            <el-col :offset="2" :span="14">
              <p class="xs_item_title">帆布袋</p>
              <div class="desc_button">
                <el-button type="info" round @click="connectUs()" class="xs_largeButton">前往訂製</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :span="24" justify="center" type="flex" class="product">
            <el-col :span="24">
              <div class="desc">
                <p class="desc_message">商品資訊：</p>
                <p>Made In Taiwan</p>
                <p>100%棉帆布或其他材質均可</p>
              </div>
            </el-col>
          </el-row>
          <hr class="lineProPage">
          <el-row :span="24" justify="center" type="flex" class="product">
            <el-col :span="24">
              <img src="../../assets/Product/袋/帆布袋細節.jpg" class="desc_image">
              <div class="center">
                <el-button type="info" round @click="connectUs()" class="largeButton">前往訂製</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      connectUs(){
        //        this.$router.push({name:'聯絡我們'}) ;
//      TODO URL change
        window.open('/#/connectUs', '_blank');
      },
      handleCommand(command) {
        this.$router.push('/' + command);
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

  .xs_item_title {
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  .xs_largeButton {
    font-size: large;
  }

  .lineProPage {
    /*margin-left: 80px;*/
    /*margin-right: 80px;*/
    margin-top: 30px;
    border: 2px solid rgba(201, 202, 202, 0.76);
  }

  .desc_button {
    text-align: right;
  }

  .desc {
    background-color: rgba(222, 222, 222, 0.76);
    height: auto;
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
    font-family: "Microsoft YaHei","微软雅黑",sans-serif;
  }

  .sm-product-menu {
    text-align: right;
    margin-bottom: 10px;
  }

  .el-dropdown-menu {
    font-family: "Microsoft YaHei","微软雅黑",sans-serif;
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
