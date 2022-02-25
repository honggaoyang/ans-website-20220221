export default {
    data() {
        return {
            // 是否鼠标移入
            mouseIsEnter: false,
            //swiper轮播配置
            swiperOption: {
                slidesPerView: 1, // 显示多少屏
                spaceBetween: 0,// 间隔
                loop: true,// 是否循环
                // 左右翻页
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                // 轮播间隔时间
                autoplay: {
                    delay: 3000,
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {
        // 移入
        mouseEnter() {
            this.swiper.autoplay.stop();
            this.mouseIsEnter = true;
        },
        // 移出
        mouseLeave() {
            this.swiper.autoplay.start();
            this.mouseIsEnter = false;
        },
    },
}