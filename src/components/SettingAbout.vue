<template>
    <div class="setting-about">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-plus-visible">
                <a href="javascript:;" id="rate" class="mui-navigate-right">评分鼓励</a>
            </li>
            <li class="mui-table-view-cell mui-plus-visible">
                <a href="javascript:;" id="welcome" class="mui-navigate-right">欢迎页</a>
            </li>
            <li class="mui-table-view-cell mui-plus-visible">
                <a href="javascript:;" id="share" class="mui-navigate-right">分享推荐</a>
            </li>
            <li class="mui-table-view-cell">
                <a href="javascript:;" id="tel" class="mui-navigate-right">客服电话</a>
            </li>
            <li class="mui-table-view-cell">
                <router-link id="feedback-btn" to="/setting/about/feedback" class="mui-navigate-right">问题反馈</router-link>
            </li>
            <li class="mui-table-view-cell mui-plus-visible">
                <a href="javascript:;" id="update" class="mui-navigate-right">检查更新</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  created() {
    this.$emit("change-title", "关于Demo");
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  margin-top: 20px;
}
</style>

