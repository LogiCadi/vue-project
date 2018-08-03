<template>
  <div class="news-info">

    <!-- 下拉刷新容器 -->
    <div id="refreshContainer" class="mui-scroll-wrapper">
      <div class="mui-scroll">

        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" :auto-fill="false" ref="loadmore">
          <h3>{{ newsInfo.title }}</h3>

          <p class="time-click">
            <span class="time">发表时间：{{ newsInfo.add_time | dateFormat }}</span>
            <span class="click">点击：{{ newsInfo.click }}次</span>
          </p>
          <hr>
          <div class="content" v-html="newsInfo.content"></div>
          <comment ref="comment" :id="id"></comment>

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
  </div>

</template>
<script>
import comment from "./subComponents/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {},
      allLoaded: false,
      bottomStatus: ""
    };
  },

  mounted() {
    this.$emit("change-title", "新闻详情");

    this.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      // indicators: false //是否显示滚动条
    });

    // this.pullup();
  },
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      // 加载更多数据
      // this.allLoaded = true; // 若数据已全部获取完毕

      setTimeout(() => {
        // 页码加一
        this.$refs.comment.pageindex++;
        //加载数据
        this.$refs.comment.getComments(isNodata => {
          if (isNodata) {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        });
      }, 1500);
    },
    getInfo() {
      this.$http.get("getnew/" + this.id).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("请求失败");
        } else {
          this.newsInfo = res.body.message[0];
        }
      });
    }
  },
  created() {
    this.getInfo();
  },
  components: {
    comment
  }
};
</script>

<style lang="scss">
.news-info {
  // overflow: scroll;
  height: 100%;
  // margin-bottom: 50px;
  img {
    width: 100%;
  }
  padding: 5px;
  h3 {
    text-align: center;
    font-size: 14px;
    color: red;
  }
  p.time-click {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgb(99, 160, 230);
  }
}
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
  padding-bottom: 80px;
}
</style>
