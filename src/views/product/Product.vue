<template>
  <div>
    <!-- banner -->
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
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
    <div class="stuWork_wrap" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper
        ref="mySwiper"
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
};
</script>

 <style lang="less" scoped>
.stuWork_wrap {
  background-color: #000000;
  width: 100%;
}

.stuWork_swiper {
  width: 100%;
  padding-top: 200px;
  height: 925px;
  text-align: center;
  img {
    width: 400px;
    height: 470px;
    // transition: all 1s;
    // &:hover {
    //   transform: scale(1.5, 1.5);
    // }
  }
  .item {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.5, 1.5);
    }
  }

  p {
    color: #ffffff;
    font-size: 30px;
    padding: 30px 0;
  }
}
</style>