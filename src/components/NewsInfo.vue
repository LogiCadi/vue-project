<template>
  <div class="news-info">

    <div class="mui-content-padded">

      <mt-loadmore class="wrapper" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" :auto-fill="false" ref="loadmore">

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
    <!-- </div>
    </div> -->
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
    window.scrollTo(0, 0);
    this.$emit("change-title", "新闻详情");

    // 初次获取评论数据
    this.$refs.comment.getComments(isNodata => {
      if (isNodata) {
        // 上拉加载 数据全部加载完毕
        this.allLoaded = true;
      }
    });
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
      this.axios.get("getnew/" + this.id).then(res => {
        if (res.data.status !== 0) {
          this.mui.toast("获取数据失败");
          console.error(res.data.message);
        } else {
          this.newsInfo = res.data.message[0];
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
  height: 100vh;
  .mui-content-padded {
    margin-bottom: 60px;
  }
  img {
    width: 100%;
  }
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
}
// 上拉加载样式
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
  margin-bottom: 50px;
  line-height: 50px;
}
</style>
