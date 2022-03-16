## vue创建项目
    vue create 项目名称

## 查看第三方库所有版本
    npm view webpack versions  查看webpack所有版本
    npm view less-loader versions  查看less-loader所有版本  

## 使用less

    直接安装 less-loader （报错）
    原因：版本不兼容，需要安装指定版本 npm i less-loader@7  

    //npm install less --save
    //npm install less-loader --save-dev --force  // 安装loader版本报错过高

## 按需引入element

    按需引入element https://element.eleme.cn/#/zh-CN/component/quickstart#quan-ju-pei-zhi
    npm i element-ui -S
    npm install babel-plugin-component -D
    npm install babel-preset-es2015 --save-dev



## swiper轮播

    https://github.com/surmon-china/vue-awesome-swiper   低版本swiper
    npm install swiper vue-awesome-swiper --save

## 检测IE浏览器版本，版本太低给出提示
    <!-- 检测IE浏览器版本，版本太低给出提示 -->
    https://www.cnblogs.com/ordinary-yolanda/p/13541264.html


## 滚动加载动画
    vue中实滚动加载动画的实现 https://blog.csdn.net/qq_45135053/article/details/108333732
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

## 图片懒加载

    https://www.jianshu.com/p/4f3f79a0d7ce
    npm install vue-lazyload --save
​    

## 配置修改 webpack 
    创建 vue.config.js
    如果开发者需要补充或修改默认设置，需要在 package.json 同级下新建一个 vue.config.js 文件

## 打包js禁止生成.map文件

    run dev build 打包项目后出现的list中的".map"文件最大。

    “.map”文件的作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 
        有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。

        去掉“.map”: 在运行打包前，在config/index.js中改一个参数。

        productionSourceMap:false 
        这样就在打包后没有“.map”文件