import VueRouter from 'vue-router'

// 导入组件
// import homeContainer from './components/HomeContainer.vue'
// import memberContainer from './components/MemberContainer.vue'
// import cartContainer from './components/CartContainer.vue'
// import searchContainer from './components/SearchContainer.vue'
// import newsList from './components/NewsList.vue'
// import newsInfo from './components/NewsInfo.vue'
// import photoList from './components/PhotoList.vue'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },

        {
            path: '/home',
            // component: homeContainer
            component: resolve => require(['./components/HomeContainer.vue'], resolve)
        },
        {
            path: '/member',
            component: resolve => require(['./components/MemberContainer.vue'], resolve)
        },
        {
            path: '/cart',
            component: resolve => require(['./components/CartContainer.vue'], resolve)
        },
        {
            path: '/setting',
            component: resolve => require(['./components/SettingContainer.vue'], resolve)
        },
        {
            path: '/home/newsList',
            component: resolve => require(['./components/NewsList.vue'], resolve)
        },
        {
            path: '/home/newsInfo/:id',
            component: resolve => require(['./components/NewsInfo.vue'], resolve)
        },
        {
            path: '/home/photoList',
            component: resolve => require(['./components/PhotoList.vue'], resolve)
        },
        {
            path: '/home/photoInfo/:id',
            component: resolve => require(['./components/PhotoInfo.vue'], resolve)
        },
        {
            path: '/home/goodsList',
            component: resolve => require(['./components/GoodsList.vue'], resolve)
        },
        {
            path: '/home/goodsInfo/:id',
            component: resolve => require(['./components/GoodsInfo.vue'], resolve)
        },
        {
            path: '/setting/account',
            component: resolve => require(['./components/SettingAccount.vue'], resolve)
        },
        {
            path: '/setting/notice',
            component: resolve => require(['./components/SettingNotice.vue'], resolve)
        },
        {
            path: '/setting/private',
            component: resolve => require(['./components/SettingPrivate.vue'], resolve)
        },
        {
            path: '/setting/general',
            component: resolve => require(['./components/SettingGeneral.vue'], resolve)
        },
        {
            path: '/setting/about',
            component: resolve => require(['./components/SettingAbout.vue'], resolve)
        },
        {
            path: '/setting/about/feedback',
            component: resolve => require(['./components/SettingAboutFeedback.vue'], resolve)
        }

    ],
    linkActiveClass: 'mui-active'
})

// 导出路由
export default router