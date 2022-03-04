# ans-web-20220120

> ans

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




 npm install less --save
 npm install less-loader --save-dev --force  // 安装loader版本报错过高


按需引入element https://element.eleme.cn/#/zh-CN/component/quickstart#quan-ju-pei-zhi
npm i element-ui -S
npm install babel-plugin-component -D
npm install babel-preset-es2015 --save-dev





https://github.com/surmon-china/vue-awesome-swiper   低版本swiper
npm install swiper vue-awesome-swiper --save
 

<!-- 检测IE浏览器版本，版本太低给出提示 -->
https://www.cnblogs.com/ordinary-yolanda/p/13541264.html


2022.3.4 
    1. Vue中实滚动加载动画的实现 https://blog.csdn.net/qq_45135053/article/details/108333732
    cnpm install wowjs --save

    在main.js中 引入animate.css
    import 'wowjs/css/libs/animate.css'

    在组件中使用
    import { WOW } from "wowjs";

    在mounted中使用wow
    mounted() {
        this.$nextTick(() => {
            var wow = new WOW({
                boxClass: "wow",  // 默认属性名
                animateClass: "animated", // 默认触发的动画类(包含在animate css中)
                offset: 0,// 为所有添加wow的元素设置 data-wow-delay属性 的默认值
                mobile: true, // 是否在移动设备中开启动画
                live: true,// 持续监测页面中是否插入新的wow元素
            });
            wow.init();
        });
    },

    添加动画控制, 主要控制四个属性:
    data-wow-duration: 动画持续时间
    data-wow-delay: 动画开始之前的延迟播放的时间
    data-wow-offset: 元素距离底部大于此数值时,开始播放动画
    data-wow-iteration: 动画重复的次数

    <!--动画持续时间为2秒, 动画开始之前的延迟播放的时间为5s 元素底部距离浏览器底部400像素时开始播放动画, 动画重复次数为2次-->
    <p class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s" data-wow-offset="400" data-wow-iteration="2">从左边滑入的动画</p>

