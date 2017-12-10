<template>
  <el-container>
    <el-row :span="24" class="tac">
      <el-col :span="4" class="sidemenu">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
          backgroundColor="#f2f2f2"
          text-color="#191919"
          active-text-color="#f26531">
          <el-menu-item index="/brandconcept" class="item">
            <i class="el-icon-menu"></i>
            <span slot="title">品牌理念</span>
          </el-menu-item>
          <el-menu-item index="/materials" class="item">
            <i class="el-icon-star-on"></i>
            <span slot="title">布料材質</span>
          </el-menu-item>
          <el-menu-item index="/techniques" class="item">
            <i class="el-icon-printer"></i>
            <span slot="title">印刷技術</span>
          </el-menu-item>
          <el-menu-item index="/howtomaintain" class="item">
            <i class="el-icon-question"></i>
            <span slot="title">保養方式</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :offset="2" :span="18">
        <div class="rightcontent">
         <router-view></router-view>
        </div>
      </el-col>

    </el-row>
  </el-container>
</template>

<script>
  import ElCol from "element-ui/packages/col/src/col";
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  export default {
    components: {
      ElContainer,
      ElCol},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

  .tac {
    min-width: 100%;
  }

  .el-menu-vertical-demo {

    /*margin: 20px auto;*/
  }

  .rightcontent {
    background-color: #f2f2f2;
    /*height: 320px;*/
    /*border-radius: 15px;*/
  }

  .sidemenu {
    padding-top: 20px;
  }

  .item {
    text-align: center;
    font-size: medium;
  }
</style>
