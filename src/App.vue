<template>
  <div class="app-container">
    <header id="header" class="mui-bar mui-bar-nav" v-if="header">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="javascript:;" v-show="title !== '首页'"></a>
      <h1 class="mui-title">{{ title }}</h1>
    </header>

    <transition>
      <router-view @change-translate="changeTranslate" @change-title="changeTitle" :class="['mui-content', effect]"></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab" v-if="footer">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-star">
          <span class="mui-badge" v-show="badge.about != 0">{{ badge.about }}</span>
        </span>
        <span class="mui-tab-label">关于</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" v-show="badge.cart != 0">{{ badge.cart }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // header中的标题
      title: "首页",
      // header是否显示
      header: true,
      // footer是否显示
      footer: true,
      // 控制footer中的徽章显示
      badge: {
        about: 1,
        cart: 0,
        search: 0
      },
      // 页面切换效果，分为rightSlide 右滑 和 fade淡入
      effect: "rightSlide"
    };
  },
  provide() {
    that = this;
    return {
      defaultImg: require("./image/default.jpg"),
      changeBadge(name, num) {
        // 修改badge的值
        that.badge[name] = num;
      }
    };
  },
  watch: {
    effect: function() {
      setTimeout(() => {
        this.effect = "rightSlide";
      }, 500);
    }
  },
  methods: {
    // 改变左右滑动方向
    changeTranslate(effect = "rightSlide") {
      this.effect = effect;
    },
    changeTitle(title) {
      this.title = title;
    }
  },
  mounted() {
    // MUI 的坑
    this.mui("body").on("tap", "a", function() {
      document.location.href = this.href;
    });
  }
};
</script>
<style lang="scss">
// 清除浮动
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}

.app-container {
  overflow-x: hidden;
  // height: 100vh;
}
.mui-content {
  min-height: 100vh;
  width: 100%;
  padding-bottom: 50px;
  position: relative;
}

// MUI的坑
// * {
//   touch-action: none;
// }

.rightSlide.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.rightSlide.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute !important;
}

.fade.v-enter {
  opacity: 0;
}
.fade.v-leave-to {
  opacity: 0;
  position: absolute !important;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

