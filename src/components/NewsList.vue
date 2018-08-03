<template>
  <div class="news-list">
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">

        <ul class="mui-table-view">

          <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
            <router-link :to="'/home/newsInfo/'+item.id">
              <img class="mui-media-object mui-pull-left" :src="item.img_url" @error="item.img_url=defaultImg">
              <div class="mui-media-body">
                {{ item.title }}
                <p class="mui-ellipsis">
                  <span class="time">发表时间：{{ item.add_time | dateFormat }}</span>
                  <span class="click">点击：{{ item.click }}次</span>
                </p>
              </div>
            </router-link>
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
      list: []
    };
  },
  inject: ["defaultImg"],
  mounted() {
    this.$emit("change-title", "新闻列表");
    //获得slider插件对象
    this.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      indicators: false //是否显示滚动条
    });
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get("getnewslist").then(res => {
        if (res.body.status !== 0) {
          throw "列表获取失败";
        } else {
          this.list = res.body.message;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.news-list {
  height: 100%;
  .mui-ellipsis {
    font-size: 12px;
    color: rgb(99, 160, 230);
    display: flex;
    justify-content: space-between;
  }
}
</style>
