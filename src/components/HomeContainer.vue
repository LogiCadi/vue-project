<template>
  <div class="home-container">

    <!-- 轮播图 -->
    <image-swipe :list="list"></image-swipe>
    <div class="content" :style="{height:contentHeight+'px'}">
      <!-- 九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/photoList">
            <span class="mui-icon mui-icon-image"></span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/goodsList">
            <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/newsList">
            <span class="mui-icon mui-icon-star-filled"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/chartroom">
            <span class="mui-icon mui-icon-chatboxes"></span>
            <div class="mui-media-body">开心聊吧</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#" @tap="mui.alert('未开放')">
            <span class="mui-icon mui-icon-videocam"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#" @tap="mui.alert('未开放')">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
import imageSwipe from "./subComponents/ImageSwipe.vue";
export default {
  data() {
    return {
      list: [
        {
          img: require("../image/milkyway1.jpg")
        },
        {
          img: require("../image/milkyway2.jpg")
        },
        {
          img: require("../image/milkyway3.jpg")
        }
      ],
      // 内容区域高度
      contentHeight: 0
    };
  },
  methods: {
    initContentHeight() {
      var deviceWidth = document.documentElement.clientWidth;
      var deviceHeight = document.documentElement.clientHeight;
      this.contentHeight = deviceHeight - 95 - deviceWidth * 0.625;
    },
    // 左右滑动 切换页面
    initSwiper() {
      // 设备宽度
      var deviceWidth = document.documentElement.clientWidth;
      // 除去轮播图的区域
      var wrapper = document.querySelector(".content");
      var container = document.querySelector(".home-container");

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

        container.style.transition = "left 0s";
        container.style.left = distance + "px";
      });

      wrapper.addEventListener("touchend", e => {
        if (isMove) {
          if (-distance >= deviceWidth / 3) {
            container.style.display = "none";
            this.$emit("change-translate", "fade");
            this.$router.push("/member");
          } else {
            // 弹回去
            container.style.transition = "left 0.1s ease";
            container.style.left = 0 + "px";
            setTimeout(() => {
              container.style.transition = "all 0.5s ease";
            }, 100);
          }
          isMove = false;
        }
        start = move = distance = 0;
      });
    },
    getLunbo() {
      this.$http.get("getlunbo").then(res => {
        if (res.body.status !== 0) {
          throw "轮播图获取失败";
        } else {
          this.list = res.body.message;
        }
      });
    }
  },
  components: {
    imageSwipe
  },
  mounted() {
    window.scrollTo(0, 0);
    // this.getLunbo();
    this.$emit("change-title", "首页");
    //获得slider插件对象
    var gallery = this.mui(".mui-slider");
    gallery.slider({
      interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
    this.initSwiper();
    this.initContentHeight();
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  // height: 100vh;
  .mui-table-view {
    background-color: #efeff4;
  }
  .mui-media-body {
    font-size: 13px !important;
  }
  .content {
    min-height: 216px;
    .mui-icon {
      color: rgb(157, 195, 207);
    }
  }
}
</style>

