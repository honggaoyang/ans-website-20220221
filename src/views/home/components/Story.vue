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
    img {
      width: 590px;
      height: 112px;
    }
    h1 {
      font-size: 40px;
      color: #ffffff;
      font-weight: 400;
    }
  }
  .cont_wrap {
    padding-top: 80px;
    .course_swiper {
      width: 1280px;
      height: 645px;
      img {
        width: 100%;
      }
    }
  }
}
</style>