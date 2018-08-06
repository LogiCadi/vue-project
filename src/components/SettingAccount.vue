<template>
    <div class="setting-account">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a href="javascript:;" id="head" class="mui-navigate-right">头像
                    <span class="mui-pull-right head">
                        <img class="head-img mui-action-preview" id="head-img1" src="../image/milkyway6.jpg">
                    </span>
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a href="javascript:;">姓名
                    <span class="mui-pull-right">LogiCadi</span>
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a href="javascript:;">微信
                    <span class="mui-pull-right">11011094110</span>
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a href="javascript:;">QQ号
                    <span class="mui-pull-right">11011094110</span>
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a href="javascript:;">手机号
                    <span class="mui-pull-right">11011094110</span>
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a href="javascript:;">邮箱地址
                    <span class="mui-pull-right">110@120.com</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  created() {
    this.$emit("change-title", "账号与安全");
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  margin-top: 20px;

  span.mui-pull-right {
    color: #999;
  }

  #head {
    line-height: 40px;
    #head-img1 {
      position: absolute;
      bottom: 10px;
      right: 40px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
    }
  }
}
</style>
