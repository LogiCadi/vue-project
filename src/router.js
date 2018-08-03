import VueRouter from 'vue-router'

// 导入组件
import homeContainer from './components/HomeContainer.vue'
import memberContainer from './components/MemberContainer.vue'
import cartContainer from './components/CartContainer.vue'
import searchContainer from './components/SearchContainer.vue'
import newsList from './components/NewsList.vue'
import newsInfo from './components/NewsInfo.vue'
import photoList from './components/PhotoList.vue'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },

        {
            path: '/home',
            component: homeContainer
        },
        {
            path: '/member',
            component: memberContainer
        },
        {
            path: '/cart',
            component: cartContainer
        },
        {
            path: '/search',
            component: searchContainer
        },
        {
            path: '/home/newsList',
            component: newsList
        },
        {
            path: '/home/newsInfo/:id',
            component: newsInfo
        },
        {
            path: '/home/photoList',
            component: photoList
        }
    ],
    linkActiveClass: 'mui-active'
})

// 导出路由
export default router