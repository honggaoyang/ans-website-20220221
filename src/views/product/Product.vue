<template>
  <div>
    <!-- banner -->
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" class="banner_wrap">
      <swiper
        ref="mySwiper"
        class="course_swiper banner_swiper"
        :options="swiperOption"
      >
        <swiper-slide>
          <img src="@/assets/images/product/product_banner1.jpg" alt="" />
        </swiper-slide>
        <div
          class="swiper-button-prev swiper-button-white"
          :class="{ hide: !mouseIsEnter }"
          slot="button-prev"
        ></div>

        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
          :class="{ hide: !mouseIsEnter }"
        ></div>
      </swiper>
    </div>

    <!-- 学员作品 -->
    <div class="stuWork_contBox">
      <div
        class="stuWork_wrap"
        @mouseenter="mouseEnter2"
        @mouseleave="mouseLeave2"
      >
        <swiper
          ref="mySwiper2"
          class="course_swiper stuWork_swiper"
          :options="swiperOption2"
        >
          <swiper-slide>
            <div class="item">
              <img src="@/assets/images/product/product_work1.jpg" alt="" />
              <p>美发作品</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item">
              <img src="@/assets/images/product/product_work2.jpg" alt="" />
              <p>彩妆作品</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item">
              <img src="@/assets/images/product/product_work3.jpg" alt="" />
              <p>美甲作品</p>
            </div>
          </swiper-slide>
          <div
            class="swiper-button-prev swiper-button-white"
            :class="{ hide: !mouseIsEnter2 }"
            slot="button-prev"
          ></div>

          <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
            :class="{ hide: !mouseIsEnter2 }"
          ></div>
        </swiper>
      </div>
    </div>

    <!-- 咨询列表 -->
    <Consult></Consult>
  </div>
</template>

<script>
import swiperMixin from "@/mixin/swiperMixin.js";
import Consult from "@/components/footer/Consult";
export default {
  mixins: [swiperMixin],
  components: { Consult },
  data() {
    return {
      mouseIsEnter2: false,
      swiperOption2: {
        slidesPerView: 3, // 显示多少屏
        spaceBetween: 0, // 间隔
        loop: true, // 是否循环
        // 左右翻页
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 轮播间隔时间
        autoplay: {
          delay: 3000000,
        },
      },
    };
  },
  computed: {
    swiper2() {
      return this.$refs.mySwiper2.$swiper;
    },
  },
  methods: {
    // 移入
    mouseEnter2() {
      this.swiper2.autoplay.stop();
      this.mouseIsEnter2 = true;
    },
    // 移出
    mouseLeave2() {
      this.swiper2.autoplay.start();
      this.mouseIsEnter2 = false;
    },
  },
};
</script>

 <style lang="less" scoped>
.stuWork_swiper .hide2 {
  opacity: 0;
  .swiper-button-next,
  .swiper-button-prev {
    transition: opacity 0.5s;
  }
}

.banner_wrap {
  width: 100%;
  background-color: #000000;
  .banner_swiper {
    max-width: 1920px;
    height: 988px;
    text-align: center;
  }
}

.stuWork_contBox {
  background-color: #000000;
  width: 100%;
  margin-bottom: 130px;
  .stuWork_wrap {
    width: 1200px;
    margin: 0 auto;
    .stuWork_swiper {
      width: 1200px;
      padding-top: 130px;
      height: 700px;
      text-align: center;
      img {
        width: 295px;
        height: 350px;
        // transition: all 1s;
        // &:hover {
        //   transform: scale(1.5, 1.5);
        // }
      }
      .item {
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.4, 1.4);
        }
      }

      p {
        color: #ffffff;
        font-size: 30px;
        padding: 30px 0;
      }
    }
  }
}
</style>