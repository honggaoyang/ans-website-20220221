<template>
  <section class="teacher_sec">
    <div class="tit_wrap">
      <img src="@/assets/images/home/ourTeamOfTeachers.png" alt="" />
      <h1>师资团队</h1>
    </div>
    <div class="cont_wrap" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
        <swiper-slide>
          <div class="tea_box">
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="马若寒老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name">马若寒</p>
              <p class="cont">明星化妆师</p>
              <p class="cont">美学研究院副院长</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="马若寒老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name">马若寒</p>
              <p class="cont">明星化妆师</p>
              <p class="cont">美学研究院副院长</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="马若寒老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name">马若寒</p>
              <p class="cont">明星化妆师</p>
              <p class="cont">美学研究院副院长</p>
            </div>
          </div>
          <div class="tea_box">
            <div class="tea_cont">
              <p class="name">马若寒</p>
              <p class="cont">明星化妆师</p>
              <p class="cont">美学研究院副院长</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher1.png"
                alt="李时珍老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name">马若寒</p>
              <p class="cont">明星化妆师</p>
              <p class="cont">美学研究院副院长</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher1.png"
                alt="李时珍老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name">马若寒</p>
              <p class="cont">明星化妆师</p>
              <p class="cont">美学研究院副院长</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher1.png"
                alt="李时珍老师"
              />
            </div>
          </div>
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
  name: "Ans2022Teacher",
  mixins: [swiperMixin],
  data() {
    return {
      swiperOption: {
        loop: false,
      },
    };
  },
};
</script>
<style lang="less" scoped>
.teacher_sec {
  background-color: #efefef;
  .tit_wrap {
    text-align: center;
    padding-top: 50px;
    img {
      width: 570px;
      height: 108px;
    }
    h1 {
      font-size: 40px;
      color: #000000;
      font-weight: 400;
    }
  }
  .cont_wrap {
    margin-top: 80px;
    .course_swiper {
      width: 100%;
      height: 890px;
      .tea_box {
        display: flex;
        .tea_cont {
          flex: 1;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .name {
            font-size: 40px;
            font-weight: 500;
            margin-bottom: 30px;
          }
          .cont {
            font-size: 18px;
            padding: 0 30px;
            line-height: 30px;
          }
        }
        .tea_img {
          flex: 1;
          img {
            width: 100%;
            height: 420px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>