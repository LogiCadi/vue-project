<template>
    <div class="cart-container">

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
    this.changeBadge("cart", 0);
  }
};
</script>

<style lang="scss" scoped>
.cart-container {
  height: 100%;
  .mui-card-media {
    height: 40vw;
    background-size: cover;
  }
}
</style>

