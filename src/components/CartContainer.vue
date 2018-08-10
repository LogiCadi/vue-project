<template>
  <div class="cart-container">

    <div class="content">
      <div class="mui-card" v-for="item in list" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="mui-card-content-inner-thumimg" @tap="$router.push('/home/goodsinfo/' + item.id)">
              <img :src="require('../image/iteminfo1.jpg')" alt="">
            </div>
            <div class="mui-card-content-inner-right">
              <div class="title">{{ item.title }}</div>
              <div class="price">￥{{ item.sell_price }}</div>&nbsp;

              <div class="desc">
                <span class="mui-numbox" data-numbox-min="1" :data-numbox-max="item.stock_quantity">
                  <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                  <input readonly class="mui-input-numbox" type="number" ref="num" :value="item.num" @change="editNum(item.id, parseInt($event.target.value))">
                  <button class="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
                </span>

                <span class="del">
                  <button class="mui-btn mui-btn-danger" @tap="delGoods(item.id)">删除</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="cart-container-settle">
      共
      <span class="num">{{ $store.state.cart.length }}</span>
      件商品，总计
      <span class="total">￥{{ getTotal }}</span>
      <button class="mui-btn mui-btn-warning" @tap="mui.alert('未开放')">结算</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  inject: ["changeBadge"],
  created() {
    this.getCart();
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$emit("change-title", "购物车");

    this.initSwiper();
  },
  computed: {
    getTotal() {
      let total = 0;
      this.list.forEach(item => {
        total += item.sell_price * item.num;
      });

      return total;
    }
  },
  methods: {
    // 删除商品
    delGoods(id) {
      this.list.forEach((item, i) => {
        if (item.id == id) {
          this.list.splice(i, 1);
          return;
        }
      });
      this.$store.commit("delGoods", id);
    },
    // 修改商品数量
    editNum(id, num) {
      this.list.forEach(item => {
        if (item.id == id) {
          item.num = num;
          return;
        }
      });

      const goods = { id, num };
      this.$store.commit("editNum", goods);
    },
    // 获取购物车数据
    getCart() {
      this.$store.getters.getCart.forEach(item => {
        // ids.push(item.id);
        this.$http.get("goods/getinfo/" + item.id).then(res => {
          if (res.body.status != 0) {
            this.mui.toast("获取数据失败");
          } else {
            // 把商品数量添加到data数组
            res.body.message[0].num = item.num;
            this.list.push(res.body.message[0]);

            this.$nextTick(() => {
              // 初始化数字输入框
              this.mui(".mui-numbox").numbox();
            });
          }
        });
      });
    },
    // 左右滑动 切换页面
    initSwiper() {
      // 设备宽度
      var deviceWidth = document.documentElement.clientWidth;
      var wrapper = document.querySelector(".cart-container");

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

        wrapper.style.transition = "left 0s";
        wrapper.style.left = distance + "px";
      });

      wrapper.addEventListener("touchend", e => {
        if (isMove) {
          if (distance >= deviceWidth / 3) {
            wrapper.style.display = "none";
            this.$emit("change-translate", "fade");
            this.$router.push("/member");
          } else if (-distance >= deviceWidth / 3) {
            wrapper.style.display = "none";
            this.$emit("change-translate", "fade");
            this.$router.push("/setting");
          } else {
            // 弹回去
            wrapper.style.transition = "left 0.1s ease";
            wrapper.style.left = 0 + "px";
            setTimeout(() => {
              wrapper.style.transition = "all 0.5s ease";
            }, 100);
          }
          isMove = false;
        }
        start = move = distance = 0;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-container {
  // height: 100vw;
  .content {
    padding-bottom: 50px;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .mui-card-content-inner {
    padding: 10px 5px;
    display: flex;
    .mui-card-content-inner-thumimg {
      img {
        width: 30vw;
        max-width: 120px;
        vertical-align: top;
      }
    }
    .mui-card-content-inner-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      padding: 3px 5px;
      .title {
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
        // 最多显示2行
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        color: rgb(243, 61, 61);
      }
      .desc {
        margin-top: -20px;
        .del {
          float: right;
          margin-top: 1px;
        }
      }
    }
  }

  .cart-container-settle {
    position: fixed;
    bottom: 50px;
    background-color: #f7f7f7;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    line-height: 30px;
    padding: 10px;
    z-index: 99;

    .num,
    .total {
      color: rgb(243, 61, 61);
    }
    .mui-btn {
      position: absolute;
      top: 50%;
      right: 10px;

      transform: translateY(-50%);
    }
  }
}
</style>

