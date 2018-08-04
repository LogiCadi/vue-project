<template>
  <div class="news-list">

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
  .mui-table-view {
    margin-top: 0;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: rgb(99, 160, 230);
    display: flex;
    justify-content: space-between;
  }
}
</style>
