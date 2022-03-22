import Vue from 'vue'
import App from './App'
import router from './router'

// 图片懒加载
import VueLazyload from 'vue-lazyload'

// 滚动可视区域显示动画
import 'wowjs/css/libs/animate.css'

// 全局引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueLazyload)



Vue.config.productionTip = false

// <!-- 全局后置路由守卫 每次路由切换之后被调用、初始化的时候被调用 -->
router.afterEach((to, from) => {
  /*路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = "艾尼斯美妆连锁机构-" + to.meta.title || '艾尼斯美妆连锁机构'
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
