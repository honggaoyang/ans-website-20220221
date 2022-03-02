<template>
  <section class="schoolDetail_sec">
    <div class="tit_wrap">
      <img src="@/assets/images/home/schoolDetail.png" alt="" />
      <h1>校区展示</h1>
      <div class="ser_wrap">
        <span>区域搜索</span>
        <input type="text" />
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="cont_wrap" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/images/home/home_school1.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/home/home_school2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/home/home_school3.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/home/home_school4.png" alt="" />
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

    <div class="text_wrap">
      <h2>艾尼斯美妆连锁机构 实现梦想拥抱未来</h2>
      <p>
        艾尼斯美妆连锁机构的分部位置都是精心选址的，机构周边交通便利、教学环境简约舒适，学习氛围浓郁，分部内设完善的教学活动室以及专业实操室教室，确保学员可以安心舒适的学习。艾尼斯美妆连锁机构每个分部都诚邀来自全国各地有梦想的年轻人，只要持有认真的学习态度，有拼搏的职业精神，有感恩谦逊的匠心情怀，艾尼斯美妆机构将会是你实现梦想的平台，欢迎大家前来报名参观。
      </p>
    </div>
  </section>
</template>
<script>
import swiperMixin from "@/mixin/swiperMixin.js";
export default {
  name: "Ans2022School",
  mixins: [swiperMixin],
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.6,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.schoolDetail_sec {
  background-color: #000000;
  .tit_wrap {
    text-align: center;
    padding-top: 60px;
    img {
      width: 856px;
      height: 163px;
    }
    h1 {
      font-size: 55px;
      color: #ffffff;
      font-weight: 400;
    }
    .ser_wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      color: #ffffff;
      span {
        font-size: 35px;
      }
      input {
        width: 244px;
        height: 64px;
        border: 3px solid #ffffff;
        border-radius: 10px;
        outline: none;
        background-color: #000000;
        color: #efefef;
        font-size: 30px;
        padding: 0 10px;
        margin: 0 20px;
      }
      .iconfont {
        font-size: 50px;
        color: #efefef;
        cursor: pointer;
      }
    }
  }
  .cont_wrap {
    margin-top: 75px;
    .course_swiper {
      width: 100%;
      height: 458px;
      img {
        width: 691px;
        height: 458px;
      }
    }
  }
  .text_wrap {
    padding: 50px 0 0px;
    text-align: center;
    color: #ffffff;
    h2 {
      font-size: 35px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    p {
      font-size: 25px;
      width: 70%;
      margin: auto;
      line-height: 50px;
    }
  }
}
</style>