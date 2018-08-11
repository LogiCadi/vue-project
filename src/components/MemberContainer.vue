<template>

  <div class="member-container">

    <div class="mui-card">
      <div class="mui-card-header mui-card-media" :style="{ backgroundImage: `url(${ require('../image/milkyway4.jpg') })` }"></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <a href="https://logicadi.gitee.io/web">@luokai</a> 发表于：1970-1-1 08:00</p>
          <p class="text">
            使用的是Vue.js + MUI做的
            <a href='https://baike.baidu.com/item/SPA/17536313?fr=aladdin'>单页面web</a>。
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header mui-card-media" :style="{ backgroundImage: `url(${ require('../image/milkyway3.jpg') })` }"></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <a href="https://logicadi.gitee.io/web">@luokai</a> 发表于：1970-1-1 08:00</p>
          <p class="text">
        
           发现生命中的美好，保持一颗积极乐观的心，努力追逐属于自己的幸福。
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ["changeBadge"],
  mounted() {
    window.scrollTo(0, 0);
    // this.$emit("change-title", "会员中心");
    this.$emit("change-title", "关于");
    // 左右滑动切换页面
    this.initSwiper();

    // 消除footer中的徽章个数
    this.changeBadge("about", 0);
  },
  methods: {
    initSwiper() {
      // 设备宽度
      var deviceWidth = document.documentElement.clientWidth;
      var wrapper = document.querySelector(".member-container");

      var start = 0;
      var move = 0;
      var distance = 0;
      var isMove = false;
      wrapper.addEventListener("touchstart", e => {
        start = e.touches[0].clientX;
      });

      wrapper.addEventListener("touchmove", e => {
        isMove = true;
        move = e.touches[0].clientX;
        distance = move - start;

        wrapper.style.transition = "left 0s";
        wrapper.style.left = distance + "px";
      });

      wrapper.addEventListener("touchend", e => {
        if (isMove) {
          if (distance >= deviceWidth / 3) {
            wrapper.style.display = "none";
            this.$emit("change-translate", "fade");
            this.$router.push("/home");
          } else if (-distance >= deviceWidth / 3) {
            wrapper.style.display = "none";
            this.$emit("change-translate", "fade");
            this.$router.push("/cart");
          } else {
            // 弹回去
            wrapper.style.transition = "left 0.1s ease";
            wrapper.style.left = 0 + "px";
            setTimeout(() => {
              wrapper.style.transition = "all 0.5s ease";
            }, 100);
          }
          isMove = false;
        }
        start = move = distance = 0;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-card-media {
  height: 40vw;
  background-size: cover;
}
.text {
  color: #333;
  font-size: 16px;
  text-indent: 1em;
}
</style>

