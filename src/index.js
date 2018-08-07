import Vue from 'vue';

// 导入vue-router 核心路由插件
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 导入MUI css
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入MUI js
import mui from './lib/mui/js/mui.min.js'
Vue.prototype.mui = mui

import 'eruda'

// feedback 样式
import './lib/mui/css/feedback-page.css'

// 图片预览插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// 引入app组件
import app from './App.vue'
// 引入路由容器
import router from './router.js'

// 导入vue-resource插件 进行ajax请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入moment插件 格式化时间
import moment from 'moment'

// 导入Mint-UI 
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintui)

// 全局过滤器
/**
 * 日期格式化
 * @param data 待格式化的日期
 * @param pattern 转换格式，请参考手册
 */
Vue.filter('dateFormat', function (date, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(date).format(pattern)
})

// vue-resource 请求根路径
Vue.http.options.root = 'http://47.89.21.179:8080/api'
// 处理post请求表单提交问题
Vue.http.options.emulateJSON = true

// vue实例
const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})