<template>
  <div id="app">
    <el-container id="container">
      <el-header class="header">
        <div @click="goHome()">
          <img src="./assets/MainPage/logo.png" class="logo">
        </div>
        <div>
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
            background-color="#676F77"
            text-color="#fff"
            active-text-color="#f26531">
            <!--<el-col :span="3">-->
              <el-menu-item index="/home" class="menu">首頁</el-menu-item>
            <!--</el-col>-->
            <!--<el-col :span="3">-->
              <el-submenu index="/about">
                <template slot="title">關於我們</template>
                <el-menu-item index="/brandconcept">品牌概念</el-menu-item>
                <el-menu-item index="/materials">布料材質</el-menu-item>
                <el-menu-item index="/techniques">印刷技術</el-menu-item>
                <el-menu-item index="/howtomaintain">保養方式</el-menu-item>
              </el-submenu>
            <!--</el-col>-->
            <!--<el-col :span="3">-->
              <el-menu-item index="/products">商品清單</el-menu-item>
            <!--</el-col>-->
            <!--<el-col :span="3">-->
              <el-menu-item index="/portfolio">歷年作品</el-menu-item>
            <!--</el-col>-->
            <!--<el-col :span="3">-->
              <el-menu-item index="/connectus">聯絡我們</el-menu-item>
            <!--</el-col>-->
          </el-menu>
        </div>
      </el-header>

      <el-main>
        <div  class="main-right" >
          <router-view class="view"></router-view>
        </div>
      </el-main>

      <el-footer height="">
        <el-row>
          <el-col :span="10">
            <h2>SERVICE</h2>
            <div class="contact">
              <h3>電子信箱 echoplus2016@gmail.com</h3>
              <h3>聯絡電話 02-8692-356</h3>
            </div>
            <h6>©echoplus. All Rights reserved</h6>
          </el-col>
          <el-col :span="3" :offset="9">
            <a target="_blank" href="https://facebook.com/echoplus2016/">
              <img src="./assets/MainPage/FB.jpg" class="FB">
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
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  #container {
    margin: 0 auto;
    max-width: 1600px;
    min-width: 1200px;
    background-color: rgba(149,149,149,0.86);;
  }

  /* 導覽目錄 */
  header{z-index: 1000; transition: all 0.5s ease;  background-color: #676F77;}
  /*header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}*/
  header .el-menu-demo{padding-left: 220px!important; float: right; margin-right: 42px}

  /* 主内容區 */
  main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 950px;  border: solid 40px #d9d9d9; background-color: #d9d9d9;  }
  main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; border-radius: 12px}

  .el-footer{
    background-color: rgba(145,145,145,0.76);
    /*#545c64*/
    color: #fff;
    padding-left: 80px;
  }

  .logo {
    height: 55px;
    margin-left: 60px;
    margin-top: 2px;
    display: block;
    position: absolute;
    z-index: 1;
  }

  .contact {
    margin-top: 20px ;
    font-size: small;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .FB {
    width: 100%;
    margin-top: 45%;
  }


</style>
