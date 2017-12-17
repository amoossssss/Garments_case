<template>
  <div id="app">
    <el-container id="container">
      <el-header class="header" height="80px">
        <div @click="goHome()">
          <img src="./assets/MainPage/logo.png" class="logo">
        </div>
        <div>
          <el-menu
            :default-active="$route.path"
            class="demo"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
            background-color=" #fdfdfd  "
            text-color="#565656"
            active-text-color="#f26531">
              <el-menu-item index="/home">首頁</el-menu-item>
              <el-submenu index="/about">
                <template slot="title">關於我們</template>
                <el-menu-item index="/brandconcept" class="menu_title">品牌理念</el-menu-item>
                <el-menu-item index="/materials" class="menu_title">布料材質</el-menu-item>
                <el-menu-item index="/techniques" class="menu_title">印刷技術</el-menu-item>
                <el-menu-item index="/howtomaintain" class="menu_title">保養方式</el-menu-item>
              </el-submenu>
              <el-menu-item index="/products">商品清單</el-menu-item>
              <el-menu-item index="/portfolio">歷年作品</el-menu-item>
              <el-menu-item index="/connectus">聯絡我們</el-menu-item>
          </el-menu>
        </div>
      </el-header>

      <el-main>
        <div  class="main-right" >
          <router-view class="view"></router-view>
        </div>
      </el-main>

      <el-footer height="auto">
        <el-row>
          <el-col :span="10">
            <h2>SERVICE</h2>
            <div class="contact">
              <h3>電子信箱 echoplus2016@gmail.com</h3>
              <h3>聯絡電話 ：(02)8692-3526 / 0975-010-399</h3>
              <h3>週一至週五 9:00-17:00</h3>
            </div>
            <h6>©echoplus. All Rights reserved</h6>
          </el-col>
          <el-col :span="4" :offset="8">
            <a target="_blank" href="https://facebook.com/echoplus2016/">
              <img src="./assets/MainPage/FB.png" class="FB">
            </a>
          </el-col>
        </el-row>
      </el-footer>

    </el-container>
  </div>
</template>

<script>

  import ElFooter from "../node_modules/element-ui/packages/footer/src/main";
  import ElContainer from "../node_modules/element-ui/packages/container/src/main";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElCol,
      ElContainer,
      ElFooter},
    name: 'app',
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goHome() {
          this.$router.push({name:'主頁'}) ;
      }
    }
  }

</script>

<style>

  body {
    margin: 0;
  }

  #app {
    background-color: #e6e6e6;
    font-family: Helvetica,  "Hiragino Sans GB", sans-serif;
  }

  #container {
    margin: 0 auto;
    max-width: 1600px;
    min-width: 1200px;
    background-color: rgba(149,149,149,0.86);
  }

  /* 導覽目錄 */
  header{z-index: 1000; transition: all 0.5s ease;  background-color: #fdfdfd;}
  /*header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}*/
  header .demo{float: right; margin-right: 42px;height: 100%; margin-top: 20px;}

  /* 主内容區 */
  main{ display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 950px;  border: solid 40px #d9d9d9; background-color: #d9d9d9;  }
  main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; border-radius: 5px;}

  .el-submenu__title {
    font-size: 20px;
  }

  .el-submenu__icon-arrow::before {
    color: #565656;
  }

  .el-footer{
    background-color: #898989;
    /*#545c64*/
    color: #ffffff;
    padding-left: 80px;
  }

  .logo {
    height: 70px;
    margin-left: 60px;
    margin-top: 5px;
    display: block;
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }

  .contact {
    margin-top: 20px ;
    font-size: small;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .FB {
    width: 100%;
    margin-top: 25%;
  }

  .el-menu-item {
    font-size: 20px;
  }

</style>
