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
      var wrapper = document.getElementsByClassName("setting-container")[0];

      var start = 0;
      var distence = 0;
      wrapper.addEventListener("touchstart", e => {
        start = e.touches[0].clientX;
      });
      wrapper.addEventListener("touchmove", e => {
        var move = e.touches[0].clientX;
        distence = move - start;

        wrapper.style.left = distence + "px";
      });
      wrapper.addEventListener("touchend", e => {
        if (distence >= deviceWidth / 3) {
          // 左滑切换
          wrapper.style.display = "none";
          this.$emit("change-translate", "left");
          this.$router.push("/cart");
        } else {
          wrapper.style.left = 0 + "px";
        }
        start = distence = 0;
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

