<template>
    <div>
        <header>
            This is the header
        </header>
        <main>
            <h1>title</h1>
            <p>Welcome to</p>
            <ul>
                <li>Today</li>
                <li>is</li>
                <li>Sunday</li>
                <li>And</li>
                <li>I</li>
                <li>have</li>
                <li>to</li>
                <li>go</li>
                <li>to</li>
                <li>work</li>
                <li>tomorrow</li>
            </ul>
        </main>
        <footer id="sendText">
            <input type="text" id="textInput" v-on:focus="txtFocus" placeholder="Type here...">
        </footer>
    </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      textInput: null,
      sendText: null
    };
  },
  created: function() {},
  methods: {
    txtFocus() {
      setTimeout(() => {
        this.sendText.scrollIntoView(true);
        this.sendText.scrollIntoViewIfNeeded();
      }, 300);
      if (this.$store.state.browser.versions.ios) {
        //判断IOS设备
        var ver = u.match(/OS (\d+)_(\d+)_?(\d+)?/);
        ver = parseInt(ver[1], 10);
        if (ver != 11) {
          //ios11 不需要做任何的处理
          setTimeout(() => {
            document.body.scrollTop = 9999;
          }, 600);
        }
      }
    },
    txtBlur() {
      this.textInput.blur();
    }
  },
  mounted() {
    this.textInput = document.getElementById("textInput");
    this.sendText = document.getElementById("sendText");
    window.addEventListener("touchstart", this.txtBlur);
  }
};
</script>
<style lang='less'>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  background: #ccc;
}
main {
  position: absolute;
  top: 50px;
  bottom: 10px;
  left: 20px;
  width: 100%;
  margin-bottom: 50px;
  /* 使之可以滚动 */
  overflow-y: scroll;
  /* 增加该属性，可以增加弹性，是滑动更加顺畅 */
  -webkit-overflow-scrolling: touch;
}
footer {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #666;
  border-top: 1px solid #e6e6e6;
}
footer input {
  display: inline-block;
  width: 90%;
  height: 20px;
  font-size: 14px;
  outline: none;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
}
</style>