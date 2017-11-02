<template>
  <div>
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-col :span="3" :offset="5">
              <el-menu-item index="/home">首頁</el-menu-item>
            </el-col>
            <el-col :span="3">
              <el-submenu index="2">
                <template slot="title">關於我們</template>
                <el-menu-item index="2-1">品牌概念</el-menu-item>
                <el-menu-item index="2-2">衣服布料</el-menu-item>
                <el-menu-item index="2-3">印刷技術</el-menu-item>
                <el-menu-item index="2-4">保養方式</el-menu-item>
              </el-submenu>
            </el-col>
            <el-col :span="3">
              <el-menu-item index="3">商品清單</el-menu-item>
            </el-col>
            <el-col :span="3">
              <el-menu-item index="4">歷年作品</el-menu-item>
            </el-col>
            <el-col :span="3">
              <el-menu-item index="5">聯絡我們</el-menu-item>
            </el-col>
          </el-menu>
        </el-col>
      </el-row>
    </header>

    <main>
      <div  class="main-right" >
        <router-view class="view"></router-view>
      </div>
    </main>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  body{margin: 0;}
  #app {
    min-width: 900px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 導覽目錄 */
  header{z-index: 1000;min-width: 900px;transition: all 0.5s ease;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 20px!important;}

  /* 主内容區 */
  main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
  main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
  main .el-menu{background-color: transparent!important;}
</style>
