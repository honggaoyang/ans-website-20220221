<template>
  <section class="course_sec">
    <div class="tit_wrap">
      <img src="@/assets/images/home/makeup_course.png" alt="" />
      <h1>课程类别</h1>
    </div>
    <div class="cont_wrap" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
        <swiper-slide>
          <div><img src="@/assets/images/home/home_course1.png" alt="" /></div>
          <p class="tit">
            时尚彩妆<router-link class="more" to="/course/hz" target="_blank"
              >更多</router-link
            >
          </p>
        </swiper-slide>
        <swiper-slide>
          <div><img src="@/assets/images/home/home_course2.png" alt="" /></div>
          <p class="tit">
            潮流美甲<router-link class="more" to="/course/mj" target="_blank"
              >更多</router-link
            >
          </p>
        </swiper-slide>
        <swiper-slide>
          <div><img src="@/assets/images/home/home_course3.png" alt="" /></div>
          <p class="tit">
            美容护肤
            <router-link class="more" to="/course/mr" target="_blank"
              >更多</router-link
            >
          </p>
        </swiper-slide>
        <swiper-slide>
          <div><img src="@/assets/images/home/home_course4.png" alt="" /></div>
          <p class="tit">
            精品半永久
            <router-link class="more" to="/course/byj" target="_blank"
              >更多</router-link
            >
          </p>
        </swiper-slide>
        <swiper-slide>
          <div><img src="@/assets/images/home/home_course4.png" alt="" /></div>
          <p class="tit">
            时尚美发
            <router-link class="more" to="/course/mf" target="_blank"
              >更多</router-link
            >
          </p>
        </swiper-slide>
        <swiper-slide>
          <div><img src="@/assets/images/home/home_course4.png" alt="" /></div>
          <p class="tit">
            美妆达人全能班
            <router-link class="more" to="/course/qn" target="_blank"
              >更多</router-link
            >
          </p>
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
    <div class="course_consult">
      <h3>课程咨询</h3>
      <div class="form_wrap">
        <div class="form_box">
          <div class="lf_wrap">
            <div class="item">
              <p>意向课程</p>
              <select v-model="info.course">
                <option value="请选择">请选择</option>
                <option value="化妆">化妆</option>
                <option value="美甲">美甲</option>
                <option value="美容">美容</option>
              </select>
            </div>
            <div class="item">
              <p>手机<span>*</span></p>
              <input type="text" v-model="info.phone" />
            </div>
            <div class="item">
              <p>城市<span>*</span></p>
              <input type="text" v-model="info.city" />
            </div>
          </div>
          <div class="rt_wrap">
            <div class="item">
              <p>姓名<span>*</span></p>
              <input type="text" v-model="info.name" />
            </div>
            <div class="item">
              <p>验证码<span>*</span></p>
              <div class="code_wrap">
                <input type="text" v-model="info.code" />
                <button>获取验证码</button>
              </div>
            </div>
            <div class="item">
              <p>邮箱</p>
              <input type="text" v-model="info.email" />
            </div>
          </div>
        </div>
        <div class="mess_wrap">
          <p>留言<span>*</span></p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="info.msg"
          ></textarea>
        </div>
        <div class="btn">
          <button @click="handleInfo">提交</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import swiperMixin from "@/mixin/swiperMixin.js";
export default {
  name: "Ans2022Course",
  mixins: [swiperMixin],
  data() {
    return {
      info: {
        course: "请选择",
        phone: "",
        city: "",
        name: "",
        code: "",
        email: "",
        msg: "",
      },
      swiperOption: {
        slidesPerView: 4,
      },
    };
  },
  methods: {
    handleInfo() {
      console.log(JSON.parse(JSON.stringify(this.info)));
      if (this.info.phone.trim() === "") {
        alert("手机号不能为空");
      } else if (this.info.city.trim() === "") {
        alert("请填写城市信息");
      } else if (this.info.msg.trim() === "") {
        alert("请填写留言");
      } else if (this.info.name.trim() === "") {
        alert("请填写姓名");
      } else if (this.info.code.trim() === "") {
        alert("请填写验证码");
      } else {
        alert("提交成功！");
      }
    },
  },
};
</script>


<style lang="less" scoped>
.course_sec {
  background-color: #000000;
  .tit_wrap {
    text-align: center;
    padding-top: 100px;
    img {
      width: 560px;
      height: 107px;
    }
    h1 {
      font-size: 40px;
      color: #ffffff;
      font-weight: 400;
    }
  }
  .cont_wrap {
    margin-top: 60px;
    margin-bottom: 100px;
    .course_swiper {
      width: 1450px;
      height: 530px;
      img {
        width: 340px;
        height: 460px;
      }
      .tit {
        color: #ffffff;
        font-size: 30px;
        text-align: center;
        font-weight: 300;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        .more {
          width: 100px;
          height: 40px;
          background-color: #980519;
          color: #ffffff;
          font-size: 20px;
          cursor: pointer;
          padding: 8px 25px;
          margin-left: 15px;
        }
      }
    }
  }
  .course_consult {
    h3 {
      color: #ffffff;
      font-size: 25px;
      text-align: center;
      font-weight: 400;
    }
    .form_wrap {
      width: 1100px;
      margin: 0 auto;
      .form_box {
        display: flex;
        justify-content: space-between;
        input,
        select {
          width: 290px;
          height: 35px;
          outline: none;
          border: none;
          background-color: #000000;
          border: 1px solid #ffffff;
          color: #ffffff;
          font-size: 16px;
          line-height: 35px;
          padding: 0 10px;
        }
        .item {
          margin-top: 30px;
          p {
            font-size: 20px;
            color: #ffffff;
            margin-bottom: 10px;
            span {
              color: #980518;
              font-size: 20px;
              padding: 0px 4px;
            }
          }

          .code_wrap {
            input {
              width: 150px;
            }
            button {
              width: 130px;
              height: 35px;
              font-size: 18px;
              outline: none;
              cursor: pointer;
              margin-left: 10px;
            }
          }
        }
      }
      .mess_wrap {
        p {
          margin-top: 30px;
          font-size: 20px;
          color: #ffffff;
          margin-bottom: 10px;
          span {
            color: #980518;
            font-size: 20px;
            padding: 0px 4px;
          }
        }
        textarea {
          width: 100%;
          height: 130px;
          outline: none;
          border: none;
          background-color: #000000;
          border: 1px solid #ffffff;
          color: #ffffff;
          font-size: 16px;
          padding: 10px;
        }
      }

      .btn {
        text-align: center;
        button {
          width: 220px;
          height: 40px;
          font-size: 20px;
          margin: 60px 0;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>