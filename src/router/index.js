import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Course from '@/views/course/Course'
import Ans from '@/views/ans/Ans'
import Brand from '@/views/brand/Brand'
import Product from '@/views/product/Product'
import Contact from '@/views/contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/ans',
      name: 'ans',
      component: Ans
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
