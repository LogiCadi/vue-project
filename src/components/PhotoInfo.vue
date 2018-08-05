<template>
  <div class="photo-info">
    <div class="mui-content-padded">
      <mt-loadmore class="wrapper" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" :auto-fill="false" ref="loadmore">
        <h3>{{ info.title }}</h3>

        <p class="time-click">
          <span class="time">发表时间：{{ info.add_time | dateFormat }}</span>
          <span class="click">点击：{{ info.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <ul class="info-imgs mui-table-view mui-grid-view">
          <li v-for="item in thumImgs" :key="item.src" class="mui-table-view-cell mui-col-xs-6">

            <img :src="item.src" preview="0" preview-text="描述文字">

          </li>

        </ul>
        <div class="info-content" v-html="info.content"></div>

        <comment ref="comment" :id="$route.params.id"></comment>
        <div class="allLoaded" v-if="allLoaded">没有更多数据了</div>

        <div slot="bottom" class="mint-loadmore-bottom">

          <div v-show="bottomStatus !== 'loading'">
            <span :class="{'mui-icon':true, 'mui-icon-arrowthinup':true, 'rotate': bottomStatus === 'drop' }"></span>
            <span v-show="bottomStatus === 'pull'">上拉加载</span>
            <span v-show="bottomStatus === 'drop'">释放更新</span>
          </div>

          <div v-show="bottomStatus === 'loading'">
            <span class="mui-spinner"></span>
            <span>正在刷新</span>
          </div>

        </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
// 导入评论组件
import comment from "./subComponents/Comment.vue";
export default {
  data() {
    return {
      info: {},
      // 上拉加载 是否全部加载完毕
      allLoaded: false,
      // 上拉加载的状态 pull、drop、loading
      bottomStatus: "",
      // 缩略图
      thumImgs: [
        { src: require("../image/1.jpg") },
        { src: require("../image/2.jpg") },
        { src: require("../image/3.jpg") },
        { src: require("../image/4.jpg") }
      ]
    };
  },
  inject: ["defaultImg"],
  mounted() {
    this.$emit("change-title", "图片详情");

    this.$refs.comment.getComments(isNodata => {
      if (isNodata) {
        // 上拉加载 数据全部加载完毕
        this.allLoaded = true;
      }
    });
  },
  created() {
    this.getPhotoInfo();
    this.getImgs();
  },
  components: {
    comment
  },
  methods: {
    handleBottomChange(status) {
      // 获得上拉加载的状态
      this.bottomStatus = status;
    },
    loadBottom() {
      // mint-ui 上拉加载

      setTimeout(() => {
        // 页码加一
        this.$refs.comment.pageindex++;
        //加载数据
        this.$refs.comment.getComments(isNodata => {
          if (isNodata) {
            // 上拉加载 数据全部加载完毕
            this.allLoaded = true;
          }
          // 上拉加载完毕 重置
          this.$refs.loadmore.onBottomLoaded();
        });
      }, 1500);
    },
    // ajax获取图片数据
    getPhotoInfo() {
      this.$http.get("getimageinfo/" + this.$route.params.id).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("获取数据失败");
        } else {
          this.info = res.body.message[0];
        }
      });
    },
    // ajax获取缩略图
    getImgs() {
      this.$http.get("getthumimages/" + this.$route.params.id).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("获取数据失败");
        } else {
          this.$previewRefresh();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-info {
  height: 100vh;
  .mui-content-padded {
    margin-bottom: 60px;
  }
  // 头部
  h3 {
    text-align: center;
    font-size: 14px;
    color: #333;
  }
  p.time-click {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgb(99, 160, 230);
  }
  // 图片部分
  .info-imgs {
    &:before,
    &:after {
      position: relative;
    }

    background-color: #efeff4;
    .mui-table-view-cell {
      img {
        width: 100%;
        // margin: 4px 2vw;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        border-radius: 2px;
      }
    }
  }
  // 正文部分
  .info-content {
    font-size: 14px;
    line-height: 2;
  }
}

// 上拉加载 显示状态的一些样式
.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;

  &.rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
.allLoaded {
  text-align: center;
  line-height: 50px;
}
</style>
