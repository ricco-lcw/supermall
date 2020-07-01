import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../Layout'


Vue.use(Router)

const CommonMap = [
    {
        path: '/',
        redirect: '/Layout',
    },{
        path: '/Layout',
        name: 'Layout',
        meta: { title: 'Home页面'},
        component: Layout
      }
]

const router = new Router({
    routes: CommonMap,
    mode: 'history'
})

export default router
