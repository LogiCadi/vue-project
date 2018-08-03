<template>
    <div class="home-container">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <!--这里放置真实显示的DOM内容-->

                <!-- 轮播图 -->
                <div class="mui-slider">
                    <div class="mui-slider-group mui-slider-loop">
                        <!--支持循环，需要重复图片节点-->
                        <div class="mui-slider-item mui-slider-item-duplicate">
                            <a href="#"><img :src="list[list.length-1] && list[list.length-1].img" /></a>
                        </div>

                        <div v-for="item in list" :key="item.img" class="mui-slider-item">
                            <a href="#"><img :src="item.img" /></a>
                        </div>

                        <!--支持循环，需要重复图片节点-->
                        <div class="mui-slider-item mui-slider-item-duplicate">
                            <a href="#"><img :src="list[0] && list[0].img" /></a>
                        </div>
                    </div>

                    <div class="mui-slider-indicator">
                        <div v-for="(item,i) in list" :key="item.img" :class="['mui-indicator', i == 0? 'mui-active': '']"></div>
                    </div>
                </div>
                <!-- 九宫格 -->
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <router-link to="/home/newsList">
                            <span class="mui-icon mui-icon-star-filled"></span>
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <router-link to="/home/photoList">
                            <span class="mui-icon mui-icon-image"></span>
                            <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href="javascript:;">
                            <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                            <div class="mui-media-body">商品购买</div>
                        </a>
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
        </div>
    </div>
</template>

<script>
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

  created() {
    // this.getLunbo();
  },
  mounted() {
    this.$emit("change-title", "首页");
    //获得slider插件对象
    var gallery = this.mui(".mui-slider");
    gallery.slider({
      interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

    this.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      indicators: false //是否显示滚动条
    });
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  .mui-media-body {
    font-size: 13px !important;
  }
}
</style>

