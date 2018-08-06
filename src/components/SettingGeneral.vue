<template>
    <div class="setting-general">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                多语言
            </li>
        </ul>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                听筒模式
                <div class="mui-switch mui-switch-mini" data-switch="18">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                功能
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  created() {
    this.$emit("change-title", "通用");
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  margin-top: 20px;
}
</style>

