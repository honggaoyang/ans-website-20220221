<template>
  <div>
    <!-- banner -->
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/images/ans/jd/jd_banner1.jpg" alt="" />
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

    <div class="intro_wrap">
      <div class="art_box">
        苏州际达生物科技集团有限公司成立于2015年，隶属于艾尼斯控股集团，秉承匠心、使命、梦想，际达重新勾画产品市场定位和行业认知，以极强的价值观聚焦研发、设计、品质、服务，相继打造了中国潮牌美妆文化的缔造者“bibididi”彩妆、中高端护肤“竹言”、中端彩妆护肤“斯念”等众多知名品牌。
      </div>
    </div>
    <div class="brand_wrap">
      <img src="@/assets/images/ans/jd/jd_brand.jpg" alt="品牌" />
    </div>

    <!-- 咨询列表 -->
    <Consult></Consult>
  </div>
</template>

<script>
import swiperMixin from "@/mixin/swiperMixin.js";
import Consult from "@/components/footer/Consult";
export default {
  name: "Ans2022Jd",
  mixins: [swiperMixin],
  components: { Consult },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.intro_wrap {
  width: 100%;
  background: #000000;
  .art_box {
    color: #ffffff;
    width: 1290px;
    margin: auto;
    font-size: 32px;
    text-indent: 2em;
    line-height: 60px;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    padding: 20px 0;
  }
}
.brand_wrap {
  margin-bottom: 50px;
  img {
    width: 100%;
  }
}
</style>