<template>
    <div class="goods-list">
        <ul class="clearfix">

            <li>
                <div class="card">
                    <a href="#">
                        <img :src="image">
                        <div class="title-wraper">
                            <div class="title">荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻影蓝全网通 移动联通电信4G 双卡双待</div>
                        </div>
                        <div class="desc">
                            <p>
                                <span class="now">￥ 2199</span>
                                <span class="old">￥ 1999</span>
                            </p>
                            <p>
                                <span>热卖中</span>
                                <span>剩余60件</span>
                            </p>

                        </div>
                    </a>
                </div>
            </li>
            <li>
                <div class="card">
                    <a href="#">
                        <img :src="image2">
                        <div class="title-wraper">
                            <div class="title">【两片装】酷乐锋 荣耀10钢化膜 华为荣耀10钢化膜 全屏覆盖/全屏玻璃膜 全覆盖手机保护膜非水凝前膜 黑色</div>
                        </div>
                        <div class="desc">
                            <p>
                                <span class="now">￥ 2199</span>
                                <span class="old">￥ 1999</span>
                            </p>
                            <p>
                                <span>热卖中</span>
                                <span>剩余60件</span>
                            </p>

                        </div>
                    </a>
                </div>
            </li>
            <li>
                <div class="card">
                    <a href="#">
                        <img :src="image2">
                        <div class="title-wraper">
                            <div class="title">【两片装】酷乐锋 荣耀10钢化膜 华为荣耀10钢化膜 全屏覆盖/全屏玻璃膜 全覆盖手机保护膜非水凝前膜 黑色</div>
                        </div>
                        <div class="desc">
                            <p>
                                <span class="now">￥ 2199</span>
                                <span class="old">￥ 1999</span>
                            </p>
                            <p>
                                <span>热卖中</span>
                                <span>剩余60件</span>
                            </p>

                        </div>
                    </a>
                </div>
            </li>

        </ul>

    </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("../image/item.jpg"),
      image2: require("../image/item2.jpg")
    };
  },
  mounted() {
    this.$emit("change-title", "商品列表");
  }
};
</script>
<style lang="scss" scoped>
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
</style>

