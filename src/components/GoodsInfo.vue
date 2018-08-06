<template>
  <div class="goods-list">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图 -->
          <image-swipe :list="list"></image-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

          <div class="mui-card-content-inner-price">
            市场价：
            <span class="market-price">￥999</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：
            <span class="our-price">￥666</span>
          </div>
          <div class="mui-card-content-inner-number">购买数量：

            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="test" class="mui-input-numbox" type="number" value="1">
              <button class="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp; 库存：99
          </div>
          <div class="mui-card-content-inner-btn">
            <span class="mui-btn mui-btn-danger">立即购买</span>
            <span class="mui-btn mui-btn-primary">加入购物车</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import imageSwipe from "./subComponents/ImageSwipe.vue";

export default {
  data() {
    return {
      list: [
        { img: require("../image/iteminfo1.jpg") },
        { img: require("../image/iteminfo2.jpg") },
        { img: require("../image/iteminfo3.jpg") }
      ]
    };
  },
  mounted() {
    this.$emit("change-title", "商品详情");

    this.mui(".mui-numbox").numbox();
  },
  components: {
    imageSwipe
  }
};
</script>
<style lang="scss" scoped>
.mui-card {
  margin-top: 10px !important;

  .mui-card-header {
    font-weight: 500;
  }
  .mui-card-content-inner {
    line-height: 35px;
    padding: 10px 15px;
    .market-price {
      text-decoration: line-through;
      color: #333;
      font-size: 12px;
    }
    .our-price {
      color: rgb(223, 25, 25);
      font-size: 16px;
    }
    .mui-numbox {
      height: 30px;
    }
    .mui-card-content-inner-btn {
      padding-top: 10px;
      padding-bottom: 5px;
    }
  }
}
</style>
