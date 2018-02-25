<template>
  <div>
    <div id="sm">
      <el-row justify="space-around" type="flex">
        <el-col :span="24">
          <img src="../../src/assets/Portfolio/歷年作品.jpg" class="title_image">
        </el-col>
      </el-row>
      <!--作品區-->
      <el-row justify="space-around" type="flex">

        <el-col :span="4">
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

        <el-col :span="19">
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>

    <div id="xs">
      <el-row>
        <el-col>
          <img src="../../src/assets/Portfolio/歷年作品.jpg" class="title_image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="sm-portfolio-menu">
            <el-select v-model="value" placeholder="請選擇分類" @change="update">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <!--作品區-->
      <el-row justify="space-around" type="flex">
        <el-col :span="24">
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        options: [{
          value: 'all',
          label: '全部'
        }, {
          value: 'tshirts',
          label: 'T-shirt'
        }, {
          value: 'polos',
          label: 'POLO'
        }, {
          value: 'coats',
          label: '外套'
        }, {
          value: 'others',
          label: '其他'
        }],
        value: ''
      }
    },
    methods: {
      handleCommand(command) {
        this.$router.push('/' + command);
      },
      update: function (selected) {
        this.$router.push('/' + selected);
      }
    }
  };

</script>

<style>

  .title_image {
    width: 100%;
    margin-bottom: 50px;
  }

  .sm-portfolio-menu {
    text-align: right;
    margin-bottom: 20px;
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

    .title_image {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }

    .title_image {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    #sm {
      display: none;
    }

    #xs {
      display: block;
    }

    .title_image {
      margin-bottom: 20px;
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
