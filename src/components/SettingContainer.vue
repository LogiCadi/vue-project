<template>
    <div class="setting-container">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media">
                <router-link class="mui-navigate-right" to="/setting/account">
                    <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../image/milkyway6.jpg">
                    <div class="mui-media-body">
                        Hello LogiCadi
                        <p class="mui-ellipsis">账号:LogiCadi</p>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <router-link to="/setting/account" class="mui-navigate-right">账号与安全</router-link>
            </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <router-link to="/setting/notice" class="mui-navigate-right">新消息通知</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="/setting/private" class="mui-navigate-right">隐私</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="/setting/general" class="mui-navigate-right">通用</router-link>
            </li>
        </ul>

        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <router-link to="/setting/about" class="mui-navigate-right">关于Demo
                    <i class="mui-pull-right update">V0.0.8</i>
                </router-link>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" style="text-align: center;">
                <a>退出登录</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("change-title", "设置");
    this.initSwiper();
  },
  methods: {
    // 左右滑动 切换页面
    initSwiper() {
      // 设备宽度
      var deviceWidth = document.documentElement.clientWidth;
      var wrapper = document.querySelector(".setting-container");

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
.mui-table-view {
  margin-top: 20px;
  #head-img {
    border-radius: 2px;
  }
  .update {
    font-style: normal;
    color: #999999;
    margin-right: -25px;
    font-size: 15px;
  }
}
</style>

