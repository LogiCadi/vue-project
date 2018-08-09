<template>
  <div class="setting-about-feedback">
    <div id="feedback" class="mui-page feedback mui-page-center" style="">

      <div class="mui-page-content">
        <p>问题和意见</p>
        <div class="row mui-input-row">
          <textarea id="question" class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
        </div>
        <p>图片(选填,提供问题截图)</p>
        <div id="image-list" class="row image-list">

          <div :style="{backgroundImage : 'url('+item.file.src+')'}" class="image-item" v-for="(item,index) of imgList" :key="item.file.src">
            <div @click="fileDel(index)" class="image-close">X</div>
            <input @change="fileChange($event)" type="file" accept="image/*" multiple>
          </div>

          <div class="image-item space">
            <div class="image-close">X</div>
            <input @change="fileChange($event)" type="file" accept="image/*" multiple>
          </div>

        </div>
        <p>QQ/邮箱</p>
        <div class="mui-input-row">
          <input id="contact" type="text" class="mui-input-clear  contact" placeholder="(选填,方便我们联系你 )" data-input-clear="19">
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
        </div>
        <button id="submit" type="button" class="mui-btn mui-btn-green">提交</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("change-title", "反馈");
  },
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    // 文件上传相关方法
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        this.fileAdd(files[i]);
      }
    },
    fileAdd(file) {
      let reader = new FileReader();
      // 使用FileReader读取File
      reader.readAsDataURL(file);
      // 读取完成事件
      reader.vue = this;
      reader.onload = function() {
        file.src = this.result;
        this.vue.imgList.push({
          file
        });
      };
    },
    fileDel(index) {
      this.imgList.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.feedback .image-list {
  height: auto;
  .image-item {
    margin-bottom: 0;
  }
}
</style>

