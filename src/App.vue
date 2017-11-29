<template>
  <div id="app">
    <el-container id="container">
      <!-- TODO Logo空間 -->
      <el-header class="header" >
        <el-row>
          <el-col :span="24">
            <img src="./assets/MainPage/logo.png" class="logo">
            <el-menu
              :default-active="$route.path"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              :router="true"
              background-color="#676F77"
              text-color="#fff"
              active-text-color="#f26531">
              <el-col :span="3" :offset="3">
                <el-menu-item index="/home">首頁</el-menu-item>
              </el-col>
              <el-col :span="3">
                <el-submenu index="/about">
                  <template slot="title">關於我們</template>
                  <el-menu-item index="/brandconcept">品牌概念</el-menu-item>
                  <el-menu-item index="/materials">布料材質</el-menu-item>
                  <el-menu-item index="/techniques">印刷技術</el-menu-item>
                  <el-menu-item index="/howtomaintain">保養方式</el-menu-item>
                </el-submenu>
              </el-col>
              <el-col :span="3">
                <el-menu-item index="/products">商品清單</el-menu-item>
              </el-col>
              <el-col :span="3">
                <el-menu-item index="/portfolio">歷年作品</el-menu-item>
              </el-col>
              <el-col :span="3">
                <el-menu-item index="/connectus">聯絡我們</el-menu-item>
              </el-col>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <div  class="main-right" >
          <router-view class="view"></router-view>
        </div>
      </el-main>

      <el-footer height="110px">
        <h3>公司聯絡資訊</h3>
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
  }

  /* 導覽目錄 */
  header{z-index: 1000;min-width: 900px; transition: all 0.5s ease;  background-color: #676F77;  }
  /*header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}*/
  /*Menu pushed right 90px*/
  header .el-menu-demo{padding-left: 280px!important;}


  /* 主内容區 */
  main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 950px;  border: solid 40px #d9d9d9; background-color: #d9d9d9;  }
  main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; border-radius: 12px}

  .el-footer{
    background-color: #545c64;
    color: #fff;
    text-align: center;
  }

  .logo {
    height: 55px;
    margin-left: 60px;
    margin-top: 2px;
    display: block;
    position: absolute;
    z-index: 1;
  }

</style>
