<template>
  <div class="member-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          MemberContainer
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("change-title", "会员中心");
  }
};
</script>

<style lang="scss" scoped>
</style>

