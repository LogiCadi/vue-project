<template>
  <div class="chartroom">

    <div class="chartroom-content">

      <ul>
        <li :class="{'left' : item.my}" v-for="item in list" :key="item.id">
          <div class="name">{{ item.fname }}</div>
          <div class="said">
            <i class="jian"></i>{{ item.say }}</div>
        </li>
      </ul>
    </div>
    <!-- 底部输入 -->
    <div class="input-box">

      <button @tap="setName">{{ name }}</button>

      <input type="text" ref="text">
      <button class="submit" @tap="send">发送</button>
    </div>
  </div>
</template>
<script>
const url = "http://localhost:3000/";
// const url = "http://luokai.frpzj.kskxs.com:8081/";
export default {
  data() {
    return {
      name: localStorage.getItem("localName") || "匿名",
      list: [],
      timeId: ""
    };
  },
  created() {
    this.$emit("change-title", "聊天室");
    this.getCharts();

    this.timeId = setInterval(() => {
      this.getCharts();
    }, 3000);
  },
  mounted() {
    console.log(document.documentElement.scrollHeight);
    let interval = setInterval(function() {
      console.log(document.body.scrollTop);
      console.log(document.body.scrollHeight);
      
      
      document.body.scrollTop = document.body.scrollHeight;
    }, 100);
  },
  beforeDestroy() {
    // 离开前关闭定时器
    clearInterval(this.timeId);
  },
  methods: {
    // 发送消息
    send() {
      // 先更新data中的数据，再持久化到数据库
      let text = this.$refs.text.value.trim();
      this.$refs.text.value = "";
      if (text.length == 0) {
        return;
      }
      let newSend = {
        name: this.name,
        fname: this.name.slice(0, 1),
        say: text,
        my: true
      };
      this.list.push(newSend);
      this.$nextTick(() => {
        window.scrollTo(0, document.documentElement.scrollHeight);
      });

      this.$http.post(url + "send", newSend).then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("请求失败");
          console.error(res.body.message);
        }
      });
    },
    // 获取聊天数据
    getCharts() {
      this.$http.get(url + "getCharts").then(res => {
        if (res.body.status !== 0) {
          this.mui.toast("请求失败");
          console.error(res.body.message);
        } else {
          if (this.list.length != res.body.message.length) {
            // 有新数据
            res.body.message.forEach(item => {
              // 获得name第一个个字符
              item.fname = item.name.slice(0, 1);

              // 判断是不是本人
              if (item.name == this.name) {
                item.my = true;
              } else {
                item.my = false;
              }
            });

            this.list = res.body.message;

            this.$nextTick(() => {
              window.scrollTo(0, document.documentElement.scrollHeight);
            });
          }
        }
      });
    },
    // 设置名字
    setName() {
      if (this.name == "匿名") {
        this.mui.prompt("请输入你的昵称", e => {
          this.name = e.value;
          // 持久化到本地
          localStorage.setItem("localName", e.value);
        });
      } else {
        this.mui.toast("二次改名请充钱");
      }
    }
  }
};
</script>
<style  lang="scss" scoped>
.chartroom {
  .chartroom-content {
    margin-bottom: 60px;
    ul {
      padding: 0;
      margin: 0;
    }

    li.left {
      flex-direction: row-reverse;
      .said {
        margin-left: 0;
        margin-right: 20px;
        .jian {
          right: -2px;
          left: auto;
        }
      }
    }
    li {
      list-style: none;

      padding: 15px;
      display: flex;
      .name {
        text-align: center;
        line-height: 40px;
        float: left;
        width: 40px;
        height: 40px;
        background-color: lightblue;
        // flex布局 固定元素宽
        flex: 0 0 40px;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        border-radius: 5px;
      }
      .said {
        margin-left: 20px;
        background-color: #a5d836;
        line-height: 30px;

        padding: 5px 10px;
        border-radius: 5px;
        position: relative;

        // 强制换行
        word-break: break-all;
        z-index: 1;

        .jian {
          position: absolute;
          z-index: -1;
          left: -2px;
          top: 10px;
          width: 20px;
          height: 20px;
          background-color: #a5d836;
          transform: rotate(45deg);
        }
      }
    }
  }
  .input-box {
    position: fixed;
    background-color: #fff;
    z-index: 99;
    width: 100%;
    bottom: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    button {
      height: 40px;
      margin: 0 5px;
      &.submit {
        background-color: #a5d836;
        color: #fff;
      }
    }
    input {
      display: inline-block;
      width: 100%;
      margin: 0;
    }
  }
}
</style>
