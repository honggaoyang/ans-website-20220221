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
              <p class="name"><strong>马若寒</strong>老师</p>
              <p class="cont">马若寒马若寒马若寒马若寒马若寒</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher1.png"
                alt="李时珍老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name"><strong>李时珍</strong>老师</p>
              <p class="cont">
                李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍
              </p>
            </div>
          </div>
          <div class="tea_box">
            <div class="tea_cont">
              <p class="name"><strong>李时珍</strong>老师</p>
              <p class="cont">
                李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍
              </p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher1.png"
                alt="李时珍老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name"><strong>李时珍</strong>老师</p>
              <p class="cont">
                李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍李时珍
              </p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher1.png"
                alt="李时珍老师"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="tea_box">
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="李时珍老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name"><strong>马若寒老师</strong>老师</p>
              <p class="cont">
                马若寒老师马若寒老师马若寒老师马若寒老师马若寒老师
              </p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="李时珍老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name"><strong>马若寒老师</strong>老师</p>
              <p class="cont">
                马若寒老师马若寒老师马若寒老师马若寒老师马若寒老师马若寒老师
              </p>
            </div>
          </div>
          <div class="tea_box">
            <div class="tea_cont">
              <p class="name"><strong>李时珍</strong>老师</p>
              <p class="cont">
                马若寒老师马若寒老师马若寒老师马若寒老师马若寒老师马若寒老师
              </p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="马若寒老师"
              />
            </div>
            <div class="tea_cont">
              <p class="name"><strong>李时珍</strong>老师</p>
              <p class="cont">马若寒老师马若寒老师马若寒老师马若寒老师</p>
            </div>
            <div class="tea_img">
              <img
                src="@/assets/images/home/home_teacher2.png"
                alt="马若寒老师"
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
  padding-bottom: 100px;
  .tit_wrap {
    text-align: center;
    padding-top: 80px;
    img {
      width: 856px;
      height: 163px;
    }
    h1 {
      font-size: 55px;
      color: #000000;
      font-weight: 400;
    }
  }
  .cont_wrap {
    margin-top: 80px;
    .course_swiper {
      width: 100%;
      height: 1245px;
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
            strong {
              font-size: 60px;
              font-weight: 600;
              margin-right: 15px;
            }
            font-size: 40px;
          }
          .cont {
            width: 60%;
            font-size: 20px;
            margin-top: 50px;
          }
        }
        .tea_img {
          flex: 1;
          img {
            width: 100%;
            min-height: 622px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>