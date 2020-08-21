import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const CommonMap = [
    {
        path: '/',
        redirect: '/Layout',
    },{
        path: '/Layout',
        name: 'Layout',
        meta: { title: 'Layout'},
        component: () => import('@/Layout'),
        children: [
            {
                path: '/',
                redirect: '/homePage',
            },{
                path: '/homePage',
                name: 'homePage',
                meta: { title:'homePage' },
                component: () => import('views/homePage/index')
            },{
                path: '/category',
                name: 'category',
                meta: { title:'category' },
                component: () => import('views/category')
            },{
                path: '/cart',
                name: 'cart',
                meta: { title:'cart' },
                component: () => import('views/cart')
            },{
                path: '/profile',
                name: 'profile',
                meta: { title:'profile' },
                component: () => import('views/profile')
            },{
                path: '/detail',
                name: 'detail',
                meta: { title:'detail' },
                component: () => import('views/detail')
            }
        ]
    }
]

const router = new Router({
    routes: CommonMap,
    mode: 'history'
})

export default router
