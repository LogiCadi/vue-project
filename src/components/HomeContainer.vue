<template>
  <div class="home-container">

    <!-- 轮播图 -->
    <image-swipe :list="list"></image-swipe>
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
        <a href="#">
          <span class="mui-icon mui-icon-chatboxes"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
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
        },
        {
          img: require("../image/milkyway4.jpg")
        },
        {
          img: require("../image/milkyway5.jpg")
        },
        {
          img: require("../image/milkyway6.jpg")
        }
      ]
    };
  },
  methods: {
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
    // this.getLunbo();
    this.$emit("change-title", "首页");
    //获得slider插件对象
    var gallery = this.mui(".mui-slider");
    gallery.slider({
      interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  //   height: 100vh;
  .mui-media-body {
    font-size: 13px !important;
  }
}
</style>

