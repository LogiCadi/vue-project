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
      <div class="mui-card-header">{{ goodsInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

          <div class="mui-card-content-inner-price">
            市场价：
            <span class="market-price">￥{{ goodsInfo.market_price }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：
            <span class="our-price">￥{{ goodsInfo.sell_price }}</span>
          </div>
          <div class="mui-card-content-inner-number">购买数量：

            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="test" class="mui-input-numbox" type="number" value="1">
              <button class="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp; 库存：{{ goodsInfo.stock_quantity }}
          </div>
          <div class="mui-card-content-inner-btn">
            <span class="mui-btn mui-btn-danger">立即购买</span>
            <span class="mui-btn mui-btn-primary" @tap="addCart">加入购物车</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner desc-content" v-html="goodsDesc.content">

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
      id: this.$route.params.id,
      list: [
        { img: require("../image/iteminfo1.jpg") },
        { img: require("../image/iteminfo2.jpg") },
        { img: require("../image/iteminfo3.jpg") }
      ],
      goodsInfo: {},
      goodsDesc: {}
    };
  },
  mounted() {
    this.$emit("change-title", "商品详情");

    // 初始化数字输入框
    this.mui(".mui-numbox").numbox();
    this.getInfo();
    this.getDesc();
  },
  components: {
    imageSwipe
  },
  methods: {
    // 加入购物车
    addCart() {
      this.mui.alert("加入购物车成功！");
    },
    // ajax商品详情
    getDesc() {
      this.$http.get("goods/getdesc/" + this.id).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("请求失败");
        } else {
          this.goodsDesc = res.body.message[0];
        }
      });
    },
    // ajax商品信息
    getInfo() {
      this.$http.get("goods/getinfo/" + this.id).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("请求失败");
        } else {
          this.goodsInfo = res.body.message[0];
          // 设置购买数量输入框的最大值
          this.mui(".mui-numbox")
            .numbox()
            .setOption("max", this.goodsInfo.stock_quantity);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.goods-list {
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

      .mui-card-content-inner-btn {
        padding-top: 10px;
        padding-bottom: 5px;
      }
    }
    .desc-content {
      img {
        width: 100%;
      }
    }
  }
}
</style>
