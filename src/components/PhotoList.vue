<template>
  <div class="photo-list">

    <!-- 图片分类 -->
    <!-- 横向区域滑动 -->
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" :class="{'noImage':noImage}">
      <div class="mui-scroll">

        <a @tap='getImgs(item.id)' href="javascrpt:;" :class="['mui-control-item', i==0? 'mui-active':'']" v-for="(item,i) in imgCategory" :key="item.id">
          {{ item.title }}
        </a>

      </div>
    </div>
    <div class="photo-list-content">
      <!-- 图片列表详情 -->
      <div class="mui-card" v-for="item in imgs" :key="item.id">
        <router-link :to="'/home/photoInfo/' + item.id">
          <img v-lazy="item.img_url" alt="">
          <p class="mui-slider-title">
            <span>
              <b>{{ item.title }}</b>
            </span><br>
            <span>{{ item.zhaiyao }}</span>
          </p>
        </router-link>
      </div>
      <div class="noImage-text" v-show="noImage">该分类没有图片</div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      imgCategory: [],
      imgs: [],
      noImage: false
    };
  },
  inject: ["defaultImg"],
  mounted() {
    this.$emit("change-title", "图片分享");

    this.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      indicators: false //是否显示滚动条
    });
  },
  created() {
    this.getCategory();
    this.getImgs(0);
    this.pageScroll();
  },
  methods: {
    pageScroll() {
      let _this = this;
      // 监听滚动距离 设置分类栏的透明度
      document.addEventListener(
        "scroll",
        function() {
          if (
            _this.$route.path === "/home/photoList" &&
            document.querySelector(".photo-list").getBoundingClientRect()
              .left == 0
          ) {
            var top = Math.abs(
              document.querySelector(".photo-list").getBoundingClientRect().top
            );
            var opVar = top / 240 + 0.1;
            opVar = opVar > 0.85 ? 0.85 : opVar;
            document.querySelector(
              ".mui-scroll-wrapper"
            ).style.backgroundColor =
              "rgba(0, 0, 0, " + opVar + ")";
          }
        },
        true
      );
    },
    getImgs(catId) {
      window.scrollTo(0, 0);
      this.$http.get("getimages/" + catId).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("获取数据失败");
        } else {
          this.imgs = res.body.message;

          if (res.body.message.length === 0) {
            this.noImage = true;
          } else {
            this.noImage = false;
            this.imgs.forEach(item => {
              item.img_url = require("../image/milkyway1.jpg");
            });
          }
        }
      });
    },
    getCategory() {
      this.$http.get("getimgcategory").then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("获取数据失败");
        } else {
          this.imgCategory = res.body.message;
          this.imgCategory.unshift({ title: "全部", id: 0 });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.photo-list {
  .mui-scroll-wrapper {
    position: fixed;
    color: #ccc;
    top: 44px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 99;
    opacity: 1;
  }
  .mui-scroll-wrapper.noImage {
    color: #333;
  }

  img {
    width: 100%;
    vertical-align: top;
  }
  .mui-card {
    margin: 0;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    height: 58vw;
    background-color: #ccc;
    text-align: center;
    img[lazy="loading"] {
      padding-top: 20vw;
      width: 40px;
    }
    .mui-slider-title {
      height: auto;
      font-size: 10px;
      line-height: 2;
      text-indent: 0;
      padding: 6px;
      color: #ccc;

      // 最多显示3行
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      span {
        &:first-child {
          font-size: 13px;
        }
      }
    }
  }
  .noImage-text {
    margin-top: 60px;
    text-align: center;
    color: #aaa;
  }
}
</style>
