<!--TODO font size issue & view small img issue-->
<template>
  <div>
    <h2 class="titleM">布料材質</h2>
    <hr class="lineM">

    <div class="desc_block">
      <el-row :span="24" >
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
      <el-row :span="24" >
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
      <el-row :span="24" >
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
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    data(){
      return {
        imagesSet1: [
          { imageUrl: require('../../assets/Materials/純棉2.jpg') },
          { imageUrl: require('../../assets/Materials/純棉3.jpg') },
          { imageUrl: require('../../assets/Materials/純棉4.jpg') }
        ],
        imagesSet2: [
          { imageUrl: require('../../assets/Materials/吸濕2.jpg') },
          { imageUrl: require('../../assets/Materials/吸濕3.jpg') },
          { imageUrl: require('../../assets/Materials/吸濕4.jpg') }
        ],
        imagesSet3: [
          { imageUrl: require('../../assets/Materials/polo2.jpg') },
          { imageUrl: require('../../assets/Materials/polo3.jpg') },
          { imageUrl: require('../../assets/Materials/polo4.jpg') }
        ],
//        imagesSet1: [
//          { imageUrl: require('../../assets/Materials/1.jpg') },
//          { imageUrl: require('../../assets/Materials/2.jpg') },
//          { imageUrl: require('../../assets/Materials/3.jpg') }
//        ],
//        imagesSet2: [
//          { imageUrl: require('../../assets/Materials/4.jpg') },
//          { imageUrl: require('../../assets/Materials/5.jpg') },
//          { imageUrl: require('../../assets/Materials/6.jpg') }
//        ],
//        imagesSet3: [
//          { imageUrl: require('../../assets/Materials/7.jpg') },
//          { imageUrl: require('../../assets/Materials/8.jpg') },
//          { imageUrl: require('../../assets/Materials/9.jpg') }
//        ],
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
    components : {
      ElCol,
      vueImages: vueImages
    }
  }
</script>

<style>

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

</style>
