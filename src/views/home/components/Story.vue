<template>
  <section class="story_sec">
    <div class="tit_wrap">
      <img src="@/assets/images/home/schoolStory.png" alt="" />
      <h1>校友故事</h1>
    </div>
    <div class="cont_wrap" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/images/home/home_story1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/home/home_story1.png" alt="" />
        </swiper-slide>

        <div
          class="swiper-button-prev"
          :class="{ hide: !mouseIsEnter }"
          slot="button-prev"
        ></div>

        <div
          class="swiper-button-next"
          slot="button-next"
          :class="{ hide: !mouseIsEnter }"
        ></div>
      </swiper>
    </div>
  </section>
</template>
<script>
import swiperMixin from "@/mixin/swiperMixin.js";
export default {
  name: "Ans2022Story",
  mixins: [swiperMixin],
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.story_sec {
  background-color: #000000;
  padding-bottom: 100px;
  .tit_wrap {
    text-align: center;
    padding-top: 100px;
    h1 {
      font-size: 55px;
      color: #ffffff;
      font-weight: 400;
    }
  }
  .cont_wrap {
    padding-top: 80px;
    .course_swiper {
      img {
        width: 100%;
      }
    }
  }
}
.course_swiper .hide {
  opacity: 0;
}
.swiper-button-next,
.swiper-button-prev {
  transition: opacity 0.5s;
}
</style>