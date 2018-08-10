import Vue from 'vue';

// 导入vue-router 核心路由插件
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 导入MUI css
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入MUI js
import mui from './lib/mui/js/mui.js'
Vue.prototype.mui = mui

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

// 获取localStorage中的储存购物车信息的数据
var cart = localStorage.getItem('cart') || '[{"id":"87","num":2}]'
// vuex存储对象
const store = new Vuex.Store({
    state: {
        cart: JSON.parse(cart)
    },
    mutations: {
        // 加入购物车
        addCart(state, data) {
            let exist = false
            // 购物车有该商品 ，加数量
            state.cart.forEach(item => {
                if (item.id === data.id) {
                    item.num += data.num
                    exist = true
                    return
                }
            });
            // 购物车没有该商品
            if (!exist) {
                state.cart.push(data)
            }

            // 持久化到localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        // 修改商品的数量
        editNum(state, goods) {
            state.cart.forEach(item => {
                if (item.id == goods.id) {
                    item.num = goods.num
                    return
                }
            })

            // 持久化到localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        // 删除商品
        delGoods(state, id) {
            state.cart.forEach((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1)
                    return
                }
            })
            // 持久化到localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters: {
        getCart(state) {
            return state.cart
        }
    }
})
// vue实例
const vm = new Vue({
    el: '#app',
    render: c => c(app),
    // 挂架路由对象
    router,
    // 挂载vuex状态管理对象
    store
})