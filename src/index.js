import Vue from 'vue';

// 导入vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 导入MUI css
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.preimage.css'

// 导入MUI js
import mui from './lib/mui/js/mui.js'

Vue.prototype.mui = mui

// 引入app组件
import app from './App.vue'
// 引入路由容器
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入moment 格式化时间
import moment from 'moment'

// mint-ui [基于 Vue.js 的移动端组件库]
// import {
//     Lazyload,
//     Loadmore,
//     Spinner
// } from 'mint-ui';

import mintui from 'mint-ui'
Vue.use(mintui)
import 'mint-ui/lib/style.css'


// Vue.component(Spinner.name, Spinner);
// Vue.component(Loadmore.name, Loadmore);
// Vue.use(Lazyload, {
//     // mint-ui 图片懒加载配置
//     // 失败时默认图片
//     error: require('./image/default.jpg')
// });


// 全局过滤器
Vue.filter('dateFormat', function (date, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(date).format(pattern)
})

Vue.http.options.root = 'http://47.89.21.179:8080/api'
Vue.http.options.emulateJSON = true

// vue实例
const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})