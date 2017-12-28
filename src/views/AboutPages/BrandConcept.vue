<template>
  <div class="concept">
    <h2 class="titleB">品牌理念</h2>
    <hr class="lineB">
    <div class="contentB">
      <p>艾可加有限公司</p>
      <div class="oneB">
        <p>以優質的產品 誠懇的服務及合理的價格</p>
        <p>提供客戶滿意的消費體驗</p>
      </div>
      <div class="oneB">
        <p>堅持百分之百台灣製造</p>
        <p>強調布料的柔軟和舒適性</p>
        <p>注重車縫細節 提供高標準的衣服品質</p>
        <p>印刷方式採用新進技術多元選擇 呈現獨特的設計風格</p>
        <p>使衣服兼具實用及設計感</p>
      </div>
      <div class="oneB">
        <p>我們提供各式產品</p>
        <p>以客製化的獨特性 滿足客戶的需求</p>
        <p>憑藉成衣製造經驗20年</p>
        <p>希望帶給所有人美好的衣著體驗</p>
      </div>
    </div>
  </div>
</template>

<style>
  .concept {
    width: 100%;
  }

  .titleB {
    padding-top: 20px;
    padding-left: 20px;
    letter-spacing: 3px;
  }

  .lineB {
    margin-left: 20px;
    margin-right: 20px;
    border: 2px solid grey;
  }

  .contentB {
    font-size: 16px;
    padding-left: 25px;
    padding-bottom: 5px;
    color: #5d5d5d;
  }

  .oneB {
    padding-top: 20px;
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    .titleB {
      font-size: 32px;
      padding-top: 0;
    }

    .contentB {
      font-size: 20px;
    }
  }

  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    .titleB {
      font-size: 32px;
      padding-top: 0;
    }

    .contentB {
      font-size: 20px;
    }
  }

  @media screen and (min-device-width: 640px) and (max-device-width: 1024px) {
    .titleB {
      font-size: 32px;
      padding-top: 20px;
    }

    .contentB {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1024px) {

  }
</style>
