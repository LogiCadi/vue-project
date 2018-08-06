<template>
    <div class="image-swipe">
        <div class="mui-slider">
            <div class="mui-slider-group mui-slider-loop">
                <!--支持循环，需要重复图片节点-->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#"><img :src="list[list.length-1] && list[list.length-1].img" /></a>
                </div>

                <div v-for="item in list" :key="item.img" class="mui-slider-item">
                    <a href="#"><img :src="item.img" /></a>
                </div>

                <!--支持循环，需要重复图片节点-->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#"><img :src="list[0] && list[0].img" /></a>
                </div>
            </div>

            <div class="mui-slider-indicator">
                <div v-for="(item,i) in list" :key="item.img" :class="['mui-indicator', i == 0? 'mui-active': '']"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props:['list'],
  mounted() {
    //获得slider插件对象
    var gallery = this.mui(".mui-slider");
    gallery.slider({
      interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
