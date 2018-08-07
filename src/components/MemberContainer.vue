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
      var distance = 0;
      wrapper.addEventListener("touchstart", e => {
        start = e.touches[0].clientX;
      });
      wrapper.addEventListener("touchmove", e => {
        var move = e.touches[0].clientX;
        distance = move - start;

        wrapper.style.left = distance + "px";
      });
      wrapper.addEventListener("touchend", e => {
        if (distance >= deviceWidth / 3) {
          wrapper.style.display = "none";
          this.$emit("change-translate", "left");
          this.$router.push("/home");
        } else if (-distance >= deviceWidth / 3) {
          wrapper.style.display = "none";
          this.$emit("change-translate", "right");
          this.$router.push("/cart");
        } else {
          wrapper.style.left = 0 + "px";
        }
        start = distance = 0;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

