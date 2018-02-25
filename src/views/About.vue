<template>
  <el-container>
    <el-row :span="24" class="tac">
      <div id="sm">
        <el-col :span="5" class="sidemenu">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
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

        <el-col :offset="1" :span="18">
          <div class="rightcontent">
            <transition name="el-fade-in-linear">
              <router-view></router-view>
            </transition>
          </div>
        </el-col>
      </div>

      <div id="xs">
        <el-col :span="24">
          <div class="sm-about-menu">
            <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-button type="info"><i class="el-icon-more"></i></el-button>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="brandconcept"> 品牌理念</el-dropdown-item>
                <el-dropdown-item command="materials">布料材質</el-dropdown-item>
                <el-dropdown-item command="techniques">印刷技術</el-dropdown-item>
                <el-dropdown-item command="howtomaintain">保養方式</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="rightcontent">
            <el-row>
              <transition name="el-fade-in-linear">
                <router-view></router-view>
              </transition>
            </el-row>
          </div>
        </el-col>

      </div>

    </el-row>
  </el-container>
</template>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$router.push('/' + command);
      }
    }
  }
</script>

<style>

  .tac {
    width: 100%;
  }

  .rightcontent {
    background-color: #f2f2f2;
  }

  .sidemenu {
    padding-top: 20px;
  }

  #sm {
    display: none;
  }

  .mobile {
    background-color: white;
  }

  .el-menu {
    border: none;
  }

  .item {
    text-align: center;
  }

  .sm-about-menu {
    text-align: right;
    margin-bottom: 10px;
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
