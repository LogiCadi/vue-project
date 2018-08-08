<template>
  <div class="goods-list">
    <div class="content-wrap">
      <mt-loadmore class="wrapper" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" :auto-fill="false" ref="loadmore">

        <ul>
          <li v-for="item in list" :key="item.id">
            <div class="card">
              <router-link :to="'/home/goodsInfo/' + item.id">
                <!-- 图片炸了 -->
                <img :src="image">
                <div class="title-wraper">
                  <div class="title">{{ item.title }}</div>
                </div>
                <div class="desc">
                  <p>
                    <span class="now">￥ {{ item.sell_price }}</span>
                    <span class="old">￥ {{ item.market_price }}</span>
                  </p>
                  <p>
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                  </p>
                </div>
              </router-link>
            </div>
          </li>
        </ul>

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
export default {
  data() {
    return {
      image: require("../image/item.jpg"),
      image2: require("../image/item2.jpg"),
      // 商品展示页码
      pageIndex: 1,
      list: [],
      // 上拉加载 是否全部加载完毕
      allLoaded: false,
      // 上拉加载的状态 pull、drop、loading
      bottomStatus: ""
    };
  },
  mounted() {
    this.$emit("change-title", "商品列表");
    this.getList(isNodata => {
      if (isNodata) {
        this.allLoaded = true;
      }
    });

    this.scrollChange();
  },
  methods: {
    // 向下滚动 改变分类栏的透明度
    scrollChange() {
      document.addEventListener("scroll", function() {
        var opVar = document.documentElement.scrollTop / 10;
        console.log(opVar);

        document.querySelector(".mui-scroll-wrapper").style.opacity =
          0.3 + opVar;
      });
    },
    // 获得商品列表
    getList(callback) {
      this.$http.get("getgoods?pageindex=" + this.pageIndex).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("请求失败");
        } else {
          this.list = this.list.concat(res.body.message);
          if (res.body.message.length < 10) {
            // 没有数据了
            callback && callback(true);
          } else {
            callback && callback();
          }
        }
      });
    },
    handleBottomChange(status) {
      // 获得上拉加载的状态
      this.bottomStatus = status;
    },
    loadBottom() {
      // mint-ui 上拉加载
      setTimeout(() => {
        // 页码加一
        this.pageIndex++;
        //加载数据
        this.getList(isNodata => {
          if (isNodata) {
            this.allLoaded = true;
          }
          // 上拉加载完毕 重置
          this.$refs.loadmore.onBottomLoaded();
        });
      }, 1500);
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  // height: 100vh;
  // .content-wrap {
  //   margin-bottom: 50px;
  // }

  ul {
    margin: 0;
    padding: 0 5px 8px 0;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      // float: left;
      list-style: none;
      .card {
        margin: 8px 0 0 5px;
        box-shadow: 0 0 4px #999;

        img {
          width: 100%;
          vertical-align: middle;
        }
        .title-wraper {
          padding: 2px;
          padding-top: 2px;
          height: 44px;
          font-size: 12px;
          font-weight: 700;
          color: #333;
          line-height: 12px;
          background-color: #fff;
          display: flex;
          // flex排列 纵向从下往上
          flex-direction: column-reverse;
          .title {
            // 最多显示2行
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        .desc {
          padding: 3px;
          background-color: rgb(236, 233, 233);
          p:first-child {
            margin: 0;
            .now {
              color: #e4393c;
            }
            .old {
              font-size: 12px;
              color: #888;
              text-decoration: line-through;
            }
          }
          p:last-child {
            margin: 0;
            font-size: 10px;
            color: #888;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
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
  //   padding-bottom: 80px;
}
</style>

