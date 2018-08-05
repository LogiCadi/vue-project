<template>
  <div>

    <h4>发表评论</h4>
    <textarea v-model="content"></textarea>
    <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @tap="newComment">发表</button>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell" v-for="(item,i) in list" :key="item.add_time">
        <div class="comment-info">第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="comment-content">{{ item.content }}</div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      list: [],
      content: ""
    };
  },

  created() {
    this.getComments();
  },

  props: ["id"],
  methods: {
    // 发表评论
    newComment() {
      this.$http
        .post("postcomment/" + this.id, { content: this.content })
        .then(res => {
          if (res.body.status !== 0) {
            this.mui.toast("请求失败");
          } else {
            this.mui.toast(res.body.message);
            // 添加评论到list数组头部
            this.list.unshift({
              user_name: "匿名用户",
              add_time: new Date(),
              content: this.content
            });
            this.content = "";
          }
        });
    },
    getComments(callback) {
      this.$http
        .get("getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
          if (res.body.status !== 0) {
            this.mui.toast("请求失败");
          } else {
            if (res.body.message.length > 0) {
              //   this.list = [...this.list, ...res.body.message];
              this.list = this.list.concat(res.body.message);
              callback && callback();
            } else {
              // 没有更多数据了
              callback && callback(true);
            }
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
textarea {
  margin-bottom: 5px;
}
li {
  list-style: none;
}
button.mui-btn {
  padding: 10px;
  line-height: 0.8;
}
.comment-info {
  font-size: 12px;
  background-color: #ccc;
}
.comment-content {
  padding-top: 5px;
  text-indent: 2em;
}
</style>
