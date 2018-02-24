<template>
  <div class="materials">
    <h2 class="titleM">布料材質</h2>
    <hr class="lineM">

    <div class="desc_block">
      <el-row :span="24">
        <img src="../../assets/Materials/布料1.jpg" class="main_img" alt="純棉1">
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24" justify="space-between" type="flex">
        <el-col :span="15">
          <div class="little_img">
            <vue-images :imgs="imagesSet1"
                        :modalclose="modalclose"
                        :keyinput="keyinput"
                        :mousescroll="mousescroll"
                        :showclosebutton="showclosebutton"
                        :showcaption="showcaption"
                        :imagecountseparator="imagecountseparator"
                        :showimagecount="showimagecount"
                        :showthumbnails="showthumbnails">
            </vue-images>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="desc_block">
      <el-row :span="24">
        <img src="../../assets/Materials/布料2.jpg" class="main_img" alt="吸濕1">
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24" justify="space-between" type="flex">
        <el-col :span="15">
          <div class="little_img">
            <vue-images :imgs="imagesSet2"
                        :modalclose="modalclose"
                        :keyinput="keyinput"
                        :mousescroll="mousescroll"
                        :showclosebutton="showclosebutton"
                        :showcaption="showcaption"
                        :imagecountseparator="imagecountseparator"
                        :showimagecount="showimagecount"
                        :showthumbnails="showthumbnails">
            </vue-images>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="desc_block">
      <el-row :span="24">
        <img src="../../assets/Materials/布料3.jpg" class="main_img" alt="polo1">
      </el-row>
    </div>
    <div class="little_block">
      <el-row :span="24" justify="space-between" type="flex">
        <el-col :span="15">
          <div class="little_img">
            <vue-images :imgs="imagesSet3"
                        :modalclose="modalclose"
                        :keyinput="keyinput"
                        :mousescroll="mousescroll"
                        :showclosebutton="showclosebutton"
                        :showcaption="showcaption"
                        :imagecountseparator="imagecountseparator"
                        :showimagecount="showimagecount"
                        :showthumbnails="showthumbnails">
            </vue-images>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import vueImages from 'vue-images'

  export default {
    data(){
      return {
        imagesSet1: [
          {imageUrl: require('../../assets/Materials/純棉2.jpg')},
          {imageUrl: require('../../assets/Materials/純棉3.jpg')},
          {imageUrl: require('../../assets/Materials/純棉4.jpg')}
        ],
        imagesSet2: [
          {imageUrl: require('../../assets/Materials/吸濕2.jpg')},
          {imageUrl: require('../../assets/Materials/吸濕3.jpg')},
          {imageUrl: require('../../assets/Materials/吸濕4.jpg')}
        ],
        imagesSet3: [
          {imageUrl: require('../../assets/Materials/polo2.jpg')},
          {imageUrl: require('../../assets/Materials/polo3.jpg')},
          {imageUrl: require('../../assets/Materials/polo4.jpg')}
        ],
        modalclose: true,
        keyinput: true,
        mousescroll: true,
        showclosebutton: true,
        showcaption: false,
        imagecountseparator: 'of',
        showimagecount: false,
        showthumbnails: true
      }
    },
    components: {
      vueImages: vueImages
    }
  }
</script>

<style>
  .materials {
    width: 100%;
  }

  .titleM {
    padding-top: 20px;
    padding-left: 20px;
    letter-spacing: 3px;
  }

  .lineM {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
    border: 2px solid grey;
  }

  .main_img {
    width: 100%;
    display: block;
    margin: auto;
  }

  .little_img {
    width: 100%;
    margin-bottom: 40px;
  }

  .desc_block {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;

  }

  .little_block {
    margin-top: 15px;
    margin-left: 20px;
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    .titleM {
      font-size: 32px;
      padding-top: 0;
    }
    .gallery .wrapper img[data-v-6173992d] {
      width: 100%;
      height: 100%;

    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    .titleM {
      font-size: 32px;
      padding-top: 0;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    .titleM {
      font-size: 32px;
      padding-top: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
  }

</style>
