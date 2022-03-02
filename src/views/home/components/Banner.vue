<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
      <swiper-slide>
        <img src="@/assets/images/home/banner1.jpg" alt="" />
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
</template>
<script>
import swiperMixin from "@/mixin/swiperMixin.js";
export default {
  name: "Ans2022Banner",
  mixins: [swiperMixin],
  data() {
    return {
      swiperOption: {
        // loop: false, // 是否循环
      },
    };
  },
};
</script>
<style lang="less" scoped>
.course_swiper {
  width: 100%;
  height: 873px;
}
.course_swiper img {
  // width: 100%;
}
</style>