<template>
  <div class="cart-container" id="swiper-wrapper">

    <div class="mui-card">
      <div class="mui-card-header mui-card-media" ref="header">

      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <a href="https://logicadi.gitee.io/web">@luokai</a> 发表于：1970-1-1 08:00</p>
          <p style="color: #333;">
            使用的是Vue.js + MUI做的
            <a href='https://baike.baidu.com/item/SPA/17536313?fr=aladdin'>单页面web</a>。
          </p>
        </div>
      </div>

      <!-- <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div> -->
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 1
    };
  },
  inject: ["changeBadge"],
  mounted() {
    this.$emit("change-title", "购物车");

    this.$refs.header.style.backgroundImage =
      "url(" + require("../image/milkyway7.jpg") + ")";
    // 消除footer中的徽章个数
    this.changeBadge("cart", 0);
    this.initSwiper();
  },
  methods: {
    // 左右滑动 切换页面
    initSwiper() {
      // 设备宽度
      var deviceWidth = document.documentElement.clientWidth;
      var wrapper = document.querySelector(".cart-container");

      wrapper.addEventListener("touchstart", e => {
        var start = e.touches[0].clientX;

        wrapper.addEventListener("touchmove", e => {
          var move = e.touches[0].clientX;
          var distance = move - start;
          wrapper.style.transition = "left 0s";
          wrapper.style.left = distance + "px";

          wrapper.addEventListener("touchend", e => {
            if (distance >= deviceWidth / 3) {
              wrapper.style.display = "none";
              this.$emit("change-translate", "fade");
              this.$router.push("/member");
            } else if (-distance >= deviceWidth / 3) {
              wrapper.style.display = "none";
              this.$emit("change-translate", "fade");
              this.$router.push("/setting");
            } else {
              // 弹回去
              wrapper.style.transition = "left 0.1s ease";
              wrapper.style.left = 0 + "px";
            }
            start = move = distance = 0;
          });
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-container {
  .mui-card-media {
    height: 40vw;
    background-size: cover;
  }
}
</style>

