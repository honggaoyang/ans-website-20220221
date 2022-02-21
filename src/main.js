import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入element ui 轮播滑块
import { Carousel, CarouselItem } from 'element-ui';

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
