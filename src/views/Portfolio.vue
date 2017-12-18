<template>
  <div>
    <el-row justify="space-around" type="flex">
      <el-col :span="23">
        <img src="../../src/assets/Portfolio/歷年作品.jpg" class="title_image">
      </el-col>
    </el-row>
    <!--作品區-->
    <el-row justify="space-around" type="flex">

      <el-col :span="3">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :router="true"
          backgroundColor="#f2f2f2"
          text-color="#191919"
          active-text-color="#f26531">
          <el-menu-item index="/all">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">全部</span>
          </el-menu-item>
          <el-menu-item index="/tshirts">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">T-shirt</span>
          </el-menu-item>
          <el-menu-item index="/polos">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">POLO</span>
          </el-menu-item>
          <el-menu-item index="/coats">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">外套</span>
          </el-menu-item>
          <el-menu-item index="/others">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">其他</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :offset="1" :span="18">
        <transition name="el-fade-in-linear">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
  };

</script>

<style>

  .title_image {
    width: 100%;
    margin-bottom: 50px;
  }

</style>
