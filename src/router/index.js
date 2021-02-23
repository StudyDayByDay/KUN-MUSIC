import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'name',
        component: () => import('../layout/layout.vue'),
        children: []
    }
]
// 这个配置是什么意思
const router = new VueRouter({
    base: process.env.BASE_URL, //这句话是什么意思
    routes
})

export default router