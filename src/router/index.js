import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Course from '@/views/course/Course'

import Ans from '@/views/ans/Ans'
import Jd from '@/views/ans/jd/Jd'

import Brand from '@/views/brand/Brand'
import Product from '@/views/product/Product'
import Contact from '@/views/contact/Contact'
import notFind from "@/components/404/NotFind"


Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: "/home" },

    // 首页
    { path: '/home', name: 'home', component: Home },

    // 课程分类
    { path: '/course', name: 'course', component: Course },

    // 探索ans
    { path: '/ans', name: 'ans', component: Ans, },

    // 际达生物
    { path: '/jd', name: 'jd', component: Jd },

    // 美妆品牌
    { path: '/brand', name: 'brand', component: Brand },

    // 作品展示
    { path: '/product', name: 'product', component: Product },

    // 联系我们
    { path: '/contact', name: 'contact', component: Contact },

    { path: '*', component: notFind },
  ]
})
