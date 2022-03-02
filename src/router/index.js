import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/views/home/Home'

// import Course from '@/views/course/Course'
// import CourseDetail from '@/views/course/CourseDetail'

// import Ans from '@/views/ans/Ans'
// import Jd from '@/views/ans/jd/Jd'

// import Brand from '@/views/brand/Brand'
// import Product from '@/views/product/Product'
// import Contact from '@/views/contact/Contact'
import notFind from "@/components/404/NotFind"

Vue.use(Router)

const Home = () => import('@/views/home/Home')
const Course = () => import('@/views/course/Course')
const CourseDetail = () => import('@/views/course/CourseDetail')
const Ans = () => import('@/views/ans/Ans')
const Jd = () => import('@/views/ans/jd/Jd')
const Brand = () => import('@/views/brand/Brand')
const Product = () => import('@/views/product/Product')
const Contact = () => import('@/views/contact/Contact')


const routes = [
  { path: '', redirect: "/home" },

  // 首页
  { path: '/home', name: 'home', component: Home, meta: { title: "首页" } },

  // 课程分类
  { path: '/course/:type', name: 'course', component: Course, props: true, meta: { title: "课程分类" } },
  { path: '/courseDetail/:type', name: 'CourseDetail', component: CourseDetail, props: true, meta: { title: "课程介绍" } },

  // 探索ans
  { path: '/ans', name: 'ans', component: Ans, meta: { title: "探索艾尼斯" } },

  // 际达生物
  { path: '/jd', name: 'jd', component: Jd, meta: { title: "际达生物" } },

  // 美妆品牌
  { path: '/brand', name: 'brand', component: Brand, meta: { title: "美妆品牌" } },

  // 作品展示
  { path: '/product', name: 'product', component: Product, meta: { title: "作品展示" } },

  // 联系我们
  { path: '/contact', name: 'contact', component: Contact, meta: { title: "联系我们" } },

  { path: '*', component: notFind, meta: { title: '404' } },
]

const router = new Router({
  routes,
  // mode: 'history'
})

export default router;