<template>
  <div id="app">
    <el-container id="container">
      <el-header class="header" height="80px">
        <div @click="goHome()">
          <img src="./assets/MainPage/logo.png" class="logo">
        </div>
        <div id="nor-menu">
          <el-menu
            :default-active="$route.path"
            class="demo"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
            background-color="#fdfdfd"
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
            <el-menu-item index="/products">訂製商品</el-menu-item>
            <el-menu-item index="/portfolio">歷年作品</el-menu-item>
            <el-menu-item index="/connectus">聯絡我們</el-menu-item>

          </el-menu>
        </div>

        <div id="sm-menu" class="sm-menu">

          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-button type="info"><i class="el-icon-menu"></i></el-button>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="home">首頁</el-dropdown-item>
              <el-dropdown-item command="about">關於我們</el-dropdown-item>
              <el-dropdown-item command="products">訂製商品</el-dropdown-item>
              <el-dropdown-item command="portfolio">歷年作品</el-dropdown-item>
              <el-dropdown-item command="connectus">聯絡我們</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>

      </el-header>

      <el-main>
        <div class="main-right">
          <transition name="el-fade-in-linear">
            <router-view class="view"></router-view>
          </transition>
        </div>
      </el-main>

      <el-footer height="auto">
        <el-row>
          <div id="sm">
            <el-col :sm="10" :xs="24">
              <h2>SERVICE</h2>
              <div class="contact">
                <h3>電子信箱 ：echoplus2016@gmail.com</h3>
                <h3>聯絡電話 ：(02)8692-3526 / 0975-010-399</h3>
                <h3>週一至週五 9:00-17:00</h3>
              </div>
              <h6>©echoplus. All Rights reserved</h6>
            </el-col>
            <el-col :sm={span:4,offset:9} :xs={span:8,offset:0}>
              <a target="_blank" href="https://facebook.com/echoplus2016/">
                <img src="./assets/MainPage/fb_small.png" class="FB1">
              </a>
              <a @click="dialogVisiblesm = true">
                <img src="./assets/MainPage/line.png" class="FB1">
              </a>
            </el-col>
          </div>
          <div id="xs">
            <el-col :sm="12" :xs="18">
              <h2>SERVICE</h2>
              <div class="contact">
                <h3>電子信箱 ：echoplus2016@gmail.com</h3>
                <h3>聯絡電話 ：(02)8692-3526 / 0975-010-399</h3>
                <h3>週一至週五 9:00-17:00</h3>
              </div>
              <el-row>
                <el-col :span="8">
                  <a target="_blank" href="https://facebook.com/echoplus2016/">
                    <img src="./assets/MainPage/fb_small.png" class="FB">
                  </a>
                  <a @click="dialogVisiblexs = true">
                    <img src="./assets/MainPage/line.png" class="FB">
                  </a>
                </el-col>
              </el-row>
              <h6>©echoplus. All Rights reserved</h6>
            </el-col>
          </div>
        </el-row>
      </el-footer>

      <el-dialog
        title="加入Line好友"
        :visible.sync="dialogVisiblesm"
        width="30%">
        <img src="./assets/MainPage/QRcode.jpg" class="QR">
      </el-dialog>

      <el-dialog
        title="加入Line好友"
        :visible.sync="dialogVisiblexs"
        width="70%">
        <img src="./assets/MainPage/QRcode.jpg" class="QR">
      </el-dialog>

    </el-container>
  </div>
</template>

<script>

  import ElFooter from "../node_modules/element-ui/packages/footer/src/main";
  import ElContainer from "../node_modules/element-ui/packages/container/src/main";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../node_modules/element-ui/packages/button/src/button";
  export default {
    data(){
      return {
        isCollapse: true,
        dialogVisiblexs: false,
        dialogVisiblesm: false
      }
    },
    components: {
      ElButton,
      ElCol,
      ElContainer,
      ElFooter
    },
    name: 'app',
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goHome() {
        this.$router.push({name: '主頁'});
      },
      handleCommand(command) {
        this.$router.push('/' + command);
      }
    }
  }

</script>

<style>

  .el-fade-in-linear-enter-active {
    transition-delay: 0.2s;
  }

  body {
    margin: 0;
  }

  #app {
    background-color: #e6e6e6;
    font-family: "Microsoft YaHei", sans-serif;
    /*font-family: Helvetica,"Microsoft YaHei";*/
  }

  #container {
    margin: 0 auto;
    max-width: 1600px;
    min-width: 480px;
    background-color: rgba(149, 149, 149, 0.86);
  }

  /* 導覽目錄 */
  header {
    z-index: 1000;
    transition: all 0.5s ease;
    background-color: #fdfdfd;
  }

  /*header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}*/
  header .demo {
    float: right;
    margin-right: 42px;
    height: 100%;
    margin-top: 20px;
  }

  /* 主内容區 */
  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 950px;
    border: solid 40px #d9d9d9;
    background-color: #d9d9d9;
  }

  main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
    padding: 50px 50px;
    border-radius: 5px;

  }

  .el-submenu__title {
    font-size: 20px;
  }

  .el-submenu__icon-arrow::before {
    color: #565656;
  }

  .el-footer {
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
    margin-top: 20px;
    font-size: small;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .FB {
    width: 40%;
    margin-right: 5%;
    /*margin-top: 45%;*/
  }

  .FB1 {
    width: 60px;
    margin-top: 35%;
    margin-right: 5%;
    text-align: right;
  }

  .QR {
    width: 100%;
  }

  .el-menu-item {
    font-size: 20px;
  }

  .el-dropdown-menu {
    width: 150px;
  }

  .sm-menu {
    text-align: right;
    margin-right: 8px;
    margin-top: 20px;
  }

  /*TODO menu hover color*/
  .el-dropdown-menu__item {
    width: auto;
    font-size: 19px;
    font-weight: 300;
    letter-spacing: 3px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #nor-menu {
    display: none;
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    #nor-menu {
      display: none;
    }

    #sm-menu {
      display: block;
    }

    main {
      border: solid 0px #d9d9d9;
    }

    main .main-right {
      padding: 20px 20px;
      border-radius: 5px;
    }

    .logo {
      margin-left: 20px;
    }

    .FB {
      margin-top: 0;
      width: 40%;
    }

    .contact {
      margin-bottom: 0%;
    }

    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    #nor-menu {
      display: none;
    }

    #sm-menu {
      display: block;
    }

    main {
      border: solid 0px #d9d9d9;
    }

    main .main-right {
      padding: 20px 20px;
      border-radius: 5px;
    }

    .logo {
      margin-left: 20px;
    }

    .FB {
      margin-top: 0;
      width: 50%;
    }

    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    #nor-menu {
      display: none;
    }

    #sm-menu {
      display: block;
    }

    main {
      border: solid 0px #d9d9d9;
    }

    main .main-right {
      padding: 20px 20px;
      border-radius: 5px
    }

    /*.FB {*/
      /*margin-top: 0;*/
      /*width: 30%;*/
    /*}*/

    .logo {
      margin-left: 20px;
    }

    #sm {
      display: none;
    }

    #xs {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    #nor-menu {
      display: block;
    }

    #sm-menu {
      display: none;
    }

    #sm {
      display: block;
    }

    #xs {
      display: none;
    }

  }

</style>
