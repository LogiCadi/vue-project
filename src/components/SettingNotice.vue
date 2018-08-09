<template>
    <div class="setting-notice">

        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a href="javascript:;">接收新消息通知
                    <span class="mui-pull-right">已开启</span>
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                通知显示消息详情
                <div class="mui-switch mui-active mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <div class="mui-content-padded">
            <p>若关闭，当收到新消息时，通知提示将不显示发信人和内容摘要</p>
        </div>

        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <a href="javascript:;" class="mui-navigate-right">功能消息免打扰</a>
            </li>
        </ul>
        <div class="mui-content-padded">
            <p>设置系统功能消息提示声音和震动的时段</p>
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a href="javascript:;">接收新消息通知
                    <span class="mui-pull-right">已开启</span>
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                声音
                <div class="mui-switch mui-active mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                震动
                <div class="mui-switch mui-active mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <div class="mui-content-padded">
            <p>当HelloMUI在运行时，你可以设置是否需要声音或者震动</p>
        </div>

    </div>
</template>
<script>
export default {
  created() {
    this.$emit("change-title", "新消息通知");
  },
  mounted() {
    this.mui(".mui-switch")["switch"]();
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  margin-top: 20px;

  span.mui-pull-right {
    color: #999;
  }
}
</style>
