<template>
  <div>
    <h2 class="titleP">印刷技術</h2>
    <hr class="lineP">
    <el-row :span="24">
      <el-col :offset="3" :span="18">
        <div class="boxP">
          <h4 class="textP">膠印</h4>
        </div>
        <img src="../../assets/PrintTechnique/膠印1.jpg" class="imgP">
        <p class="descP">不易褪色、色彩飽和度佳，屬於常用印刷方式之一</p>
        <div class="boxP">
          <h4 class="textP">數位噴墨</h4>
        </div>
        <img src="../../assets/PrintTechnique/數位噴墨.jpg" class="imgP">
        <p class="descP">觸感好、透氣性佳，質感接近原布料</p>
        <div class="boxP">
          <h4 class="textP">滾筒印刷</h4>
        </div>
        <img src="../../assets/PrintTechnique/滾筒印.jpg" class="imgP">
        <p class="descP">保持衣服原有的透氣和舒適，不易退色</p>
        <div class="boxP">
          <h4 class="textP">燙金、銀</h4>
        </div>
        <img src="../../assets/PrintTechnique/燙金1.jpg" class="imgP">
        <p class="descP">印刷呈現金屬質感，字體及線條印紋清晰</p>
        <div class="boxP">
          <h4 class="textP">電腦刺繡</h4>
        </div>
        <img src="../../assets/PrintTechnique/刺繡1.jpg" class="imgP">
        <p class="descP">不易脫落、有立體感，比一般印刷容易保存</p>
        <div class="boxP">
          <h4 class="textP">貼布繡</h4>
        </div>
        <img src="../../assets/PrintTechnique/電繡.jpg" class="imgP">
        <p class="descP">電腦刺繡的一種，把布料或皮革進行切割，再將其與底布進行繡製</p>
      </el-col>
    </el-row>
  </div>
</template>

<style>

  .titleP {
    padding-top: 20px;
    padding-left: 20px;
    letter-spacing: 3px;
  }

  .lineP {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
    background-color: #5d5d5d;
    border: 2px solid grey;
  }

  .imgP {
    width: 100%;
  }

  .descP {
    font-size: 16px;
  }

  .boxP {
    width: 18%;
    background-color: transparent;
    color: black;
    position: absolute;
    opacity: 0.7;
    margin-top: 10px;
  }

  .textP {
    background-color: whitesmoke;
    font-size: 20px;
    text-align: center;
  }
</style>
