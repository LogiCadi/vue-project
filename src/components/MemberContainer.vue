<template>

  <div class="member-container">

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          MemberContainer
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
  mounted() {
    this.$emit("change-title", "会员中心");
    // 左右滑动切换页面
    this.initSwiper();
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
</style>

