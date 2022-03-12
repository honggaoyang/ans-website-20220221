<template>
  <div>
    <!-- banner -->
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper
        ref="mySwiper"
        class="course_swiper banner_swiper"
        :options="swiperOption"
      >
        <swiper-slide v-for="item in bannerDate" :key="item.id">
          <router-link :to="item.url" target="_blank">
            <img
              :src="require('@/assets/images/courseDetail/' + item.img)"
              alt=""
          /></router-link>
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

    <!-- 课程列表 -->
    <div class="course_wrap">
      <div
        class="course_box"
        v-lazy-container="{
          selector: 'img',
          error: require('@/assets/images/default-pccourse.png'),
          loading: require('@/assets/images/default-pccourse.png'),
        }"
      >
        <div
          class="course_item"
          v-for="courseItem in courseList"
          :key="courseItem.id"
        >
          <router-link :to="courseItem.url" target="_blank">
            <img
              :data-src="require('@/assets/images/course/' + courseItem.img)"
            />
            <h5>{{ courseItem.tit }}</h5>
            <p>{{ courseItem.subTit }}</p>
            <span>{{ courseItem.duration }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 课程优势 -->
    <div class="courAdv_wrap">
      <img src="@/assets/images/course/course_adv.jpg" alt="课程优势" />
    </div>

    <!-- 明星导师 -->
    <div class="starTea_wrap">
      <div class="tit_wrap">
        <img src="@/assets/images/course/course_ourTeaTit.png" alt="明星导师" />
        <h1>明星导师</h1>
      </div>
      <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <swiper
          ref="mySwiper"
          class="course_swiper starTea_swiper"
          :options="swiperOption2"
        >
          <swiper-slide v-for="item in starTeaList" :key="item.id">
            <img :src="require('@/assets/images/course/' + item.img)" alt="" />
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
    </div>

    <!-- 保障制度 -->
    <div class="safe_wrap">
      <div class="tit_wrap">
        <img src="@/assets/images/course/course_safeTit.png" alt="" />
        <h1>艾尼斯毕业生保障制度</h1>
      </div>
      <div class="cont_wrap">
        <div class="item">
          <strong>创业就业支持</strong>
          <div class="line"></div>
          <p>艾尼斯即将开发人才网络平台，</p>
          <p>入学签协议支持创业推荐就业，</p>
          <p>机构永远是毕业生坚强的后盾。</p>
        </div>
        <div class="item">
          <strong>教学质量保证</strong>
          <div class="line"></div>
          <p>艾尼斯20年严谨教学质量体系，</p>
          <p>确保学生优质学习效果，</p>
          <p>满意为止</p>
        </div>
        <div class="item">
          <strong>毕业生进修优惠</strong>
          <div class="line"></div>
          <p>毕业生持有证书可返机构免费进修</p>
          <p>所学专业的新技术，</p>
          <p>一次学习免费升级。</p>
        </div>
        <div class="item">
          <strong>学一门送一门</strong>
          <div class="line"></div>
          <p>化妆美容美甲课程学一门送一门</p>
          <p>半永久除外</p>
        </div>
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
  props: ["type"], // 获取穿过来的课程类型
  data() {
    return {
      bannerDate: [],
      courseList: [],
      starTeaList: [
        { id: 1, img: "course_starTea1.png" },
        { id: 2, img: "course_starTea2.png" },
        { id: 3, img: "course_starTea3.png" },
        { id: 4, img: "course_starTea4.png" },
        { id: 5, img: "course_starTea5.png" },
      ],
      swiperOption: {
        spaceBetween: 0,
      },
      //swiper轮播配置
      swiperOption2: {
        slidesPerView: 5, // 显示多少屏
        spaceBetween: 30, // 间隔
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
  created() {
    this.setDate();
  },
  watch: {
    // 检测类型改变
    type() {
      this.setDate(); //设置数据
    },
  },
  methods: {
    setDate() {
      switch (this.type) {
        case "all":
          this.bannerDate = [
            {
              id: 1,
              img: "hz/courDetail_hz1_banner1.jpg",
              url: "/courseDetail/hz1",
            },
            {
              id: 2,
              img: "hz/courDetail_hz2_banner1.jpg",
              url: "/courseDetail/hz2",
            },
            {
              id: 3,
              img: "mj/courDetail_mj1_banner1.jpg",
              url: "/courseDetail/mj1",
            },
            {
              id: 4,
              img: "mj/courDetail_mj2_banner1.jpg",
              url: "/courseDetail/mj2",
            },
            {
              id: 5,
              img: "mr/courDetail_mr1_banner1.jpg",
              url: "/courseDetail/mr1",
            },
            {
              id: 6,
              img: "mr/courDetail_mr2_banner1.jpg",
              url: "/courseDetail/mr2",
            },
            {
              id: 7,
              img: "byj/courDetail_byj1_banner1.jpg",
              url: "/courseDetail/byj1",
            },
            {
              id: 8,
              img: "byj/courDetail_byj2_banner1.jpg",
              url: "/courseDetail/byj2",
            },
            {
              id: 9,
              img: "mf/courDetail_mf1_banner1.jpg",
              url: "/courseDetail/mf1",
            },
            {
              id: 10,
              img: "mf/courDetail_mf2_banner1.jpg",
              url: "/courseDetail/mf2",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "hz/course_hz_cover1.png",
              tit: "时尚彩妆班",
              subTit: "短期入门让你轻轻松松找工作",
              duration: "1个月",
              url: "/courseDetail/hz1",
            },
            {
              id: 2,
              img: "hz/course_hz_cover2.png",
              tit: "影楼整体造型班",
              subTit: "2个月变成影楼精英化妆师",
              duration: "2个月",
              url: "/courseDetail/hz2",
            },
            {
              id: 3,
              img: "mj/course_mj_cover1.png",
              tit: "时尚美甲班",
              subTit: "掌握前沿美甲的技术人才",
              duration: "1个月",
              url: "/courseDetail/mj1",
            },
            {
              id: 4,
              img: "mj/course_mj_cover2.png",
              tit: "美甲进阶强化班",
              subTit: "培养技术全能的美甲师",
              duration: "1.5个月",
              url: "/courseDetail/mj2",
            },
            {
              id: 5,
              img: "mr/course_mr_cover1.png",
              tit: "时尚美容班",
              subTit: "短期入门掌握前沿技术",
              duration: "1个月",
              url: "/courseDetail/mr1",
            },
            {
              id: 6,
              img: "mr/course_mr_cover2.png",
              tit: "专业美容就业班",
              subTit: "短期入门让你轻松找就业",
              duration: "2个月",
              url: "/courseDetail/mr2",
            },
            {
              id: 7,
              img: "byj/course_byj_cover1.png",
              tit: "专业半永久就业班",
              subTit: "轻松入门学完即可开店",
              duration: "7天",
              url: "/courseDetail/byj1",
            },
            {
              id: 8,
              img: "byj/course_byj_cover2.png",
              tit: "半永久进阶班",
              subTit: "掌握精湛半永久技术，高薪就业",
              duration: "15天",
              url: "/courseDetail/byj2",
            },
            {
              id: 9,
              img: "mf/course_mf_cover1.png",
              tit: "时尚美发班",
              subTit: "三个月变身时尚发型设计师",
              duration: "3个月",
              url: "/courseDetail/mf1",
            },
            {
              id: 10,
              img: "mf/course_mf_cover2.png",
              tit: "专业美发就业班",
              subTit: "从初级到高级轻松就业",
              duration: "5个月",
              url: "/courseDetail/mf2",
            },
          ];
          break;
        case "hz":
          this.bannerDate = [
            {
              id: 1,
              img: "hz/courDetail_hz1_banner1.jpg",
              url: "/courseDetail/hz1",
            },
            {
              id: 2,
              img: "hz/courDetail_hz2_banner1.jpg",
              url: "/courseDetail/hz2",
            },
            {
              id: 3,
              img: "hz/courDetail_hz3_banner1.jpg",
              url: "/courseDetail/hz3",
            },
            {
              id: 4,
              img: "hz/courDetail_hz4_banner1.jpg",
              url: "/courseDetail/hz4",
            },
            {
              id: 5,
              img: "hz/courDetail_hz5_banner1.jpg",
              url: "/courseDetail/hz5",
            },
            {
              id: 6,
              img: "hz/courDetail_hz6_banner1.jpg",
              url: "/courseDetail/hz6",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "hz/course_hz_cover1.png",
              tit: "时尚彩妆班",
              subTit: "短期入门让你轻轻松松找工作",
              duration: "1个月",
              url: "/courseDetail/hz1",
            },
            {
              id: 2,
              img: "hz/course_hz_cover2.png",
              tit: "影楼整体造型班",
              subTit: "2个月变成影楼精英化妆师",
              duration: "2个月",
              url: "/courseDetail/hz2",
            },
            {
              id: 3,
              img: "hz/course_hz_cover3.png",
              tit: "时尚进阶班",
              subTit: "从初级到高级的蜕变",
              duration: "3个月",
              url: "/courseDetail/hz3",
            },
            {
              id: 4,
              img: "hz/course_hz_cover4.png",
              tit: "化妆精品强化班",
              subTit: "专业化妆师晋级之路",
              duration: "3个月",
              url: "/courseDetail/hz4",
            },
            {
              id: 5,
              img: "hz/course_hz_cover5.png",
              tit: "化妆精品班",
              subTit: "从零基础到高级化妆造型师",
              duration: "6个月",
              url: "/courseDetail/hz5",
            },
            {
              id: 6,
              img: "hz/course_hz_cover6.png",
              tit: "化妆精英班",
              subTit: "成为精英化妆师",
              duration: "1年",
              url: "/courseDetail/hz6",
            },
          ];
          break;
        case "mj":
          this.bannerDate = [
            {
              id: 1,
              img: "mj/courDetail_mj1_banner1.jpg",
              url: "/courseDetail/mj1",
            },
            {
              id: 2,
              img: "mj/courDetail_mj2_banner1.jpg",
              url: "/courseDetail/mj2",
            },
            {
              id: 3,
              img: "mj/courDetail_mj3_banner1.jpg",
              url: "/courseDetail/mj3",
            },
            {
              id: 4,
              img: "mj/courDetail_mj4_banner1.jpg",
              url: "/courseDetail/mj4",
            },
            {
              id: 5,
              img: "mj/courDetail_mj5_banner1.jpg",
              url: "/courseDetail/mj5",
            },
            {
              id: 6,
              img: "mj/courDetail_mj6_banner1.jpg",
              url: "/courseDetail/mj6",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "mj/course_mj_cover1.png",
              tit: "时尚美甲班",
              subTit: "掌握前沿美甲的技术人才",
              duration: "1个月",
              url: "/courseDetail/mj1",
            },
            {
              id: 2,
              img: "mj/course_mj_cover2.png",
              tit: "美甲进阶强化班",
              subTit: "培养技术全能的美甲师",
              duration: "1.5个月",
              url: "/courseDetail/mj2",
            },
            {
              id: 3,
              img: "mj/course_mj_cover3.png",
              tit: "专业美甲就业班",
              subTit: "掌握美甲专业知识和技能",
              duration: "2个月",
              url: "/courseDetail/mj3",
            },
            {
              id: 4,
              img: "mj/course_mj_cover4.png",
              tit: "美甲进阶班",
              subTit: "注重提高学生实操能力",
              duration: "3个月",
              url: "/courseDetail/mj4",
            },
            {
              id: 5,
              img: "mj/course_mj_cover5.png",
              tit: "美甲精品强化班",
              subTit: "毕业后轻松就业，协助创业",
              duration: "3.5个月",
              url: "/courseDetail/mj5",
            },
            {
              id: 6,
              img: "mj/course_mj_cover6.png",
              tit: "美甲精品班",
              subTit: "毕业后轻松就业，协助创业",
              duration: "6个月",
              url: "/courseDetail/mj6",
            },
          ];
          break;
        case "mr":
          this.bannerDate = [
            {
              id: 1,
              img: "mr/courDetail_mr1_banner1.jpg",
              url: "/courseDetail/mr1",
            },
            {
              id: 2,
              img: "mr/courDetail_mr2_banner1.jpg",
              url: "/courseDetail/mr2",
            },
            {
              id: 3,
              img: "mr/courDetail_mr3_banner1.jpg",
              url: "/courseDetail/mr3",
            },
            {
              id: 4,
              img: "mr/courDetail_mr4_banner1.jpg",
              url: "/courseDetail/mr4",
            },
            {
              id: 5,
              img: "mr/courDetail_mr5_banner1.jpg",
              url: "/courseDetail/mr5",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "mr/course_mr_cover1.png",
              tit: "时尚美容班",
              subTit: "短期入门掌握前沿技术",
              duration: "1个月",
              url: "/courseDetail/mr1",
            },
            {
              id: 2,
              img: "mr/course_mr_cover2.png",
              tit: "专业美容就业班",
              subTit: "短期入门让你轻松找就业",
              duration: "2个月",
              url: "/courseDetail/mr2",
            },
            {
              id: 3,
              img: "mr/course_mr_cover3.png",
              tit: "美容进阶班",
              subTit: "从初级到高级的蜕变",
              duration: "3个月",
              url: "/courseDetail/mr3",
            },
            {
              id: 4,
              img: "mr/course_mr_cover4.png",
              tit: "美容精品强化班",
              subTit: "高标准美容人才",
              duration: "3个月",
              url: "/courseDetail/mr4",
            },
            {
              id: 5,
              img: "mr/course_mr_cover5.png",
              tit: "美容精品班",
              subTit: "专业美容师晋级之路",
              duration: "6个月",
              url: "/courseDetail/mr5",
            },
          ];
          break;
        case "byj":
          this.bannerDate = [
            {
              id: 1,
              img: "byj/courDetail_byj1_banner1.jpg",
              url: "/courseDetail/byj1",
            },
            {
              id: 2,
              img: "byj/courDetail_byj2_banner1.jpg",
              url: "/courseDetail/byj2",
            },
            {
              id: 3,
              img: "byj/courDetail_byj3_banner1.jpg",
              url: "/courseDetail/byj3",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "byj/course_byj_cover1.png",
              tit: "专业半永久就业班",
              subTit: "轻松入门学完即可开店",
              duration: "7天",
              url: "/courseDetail/byj1",
            },
            {
              id: 2,
              img: "byj/course_byj_cover2.png",
              tit: "半永久进阶班",
              subTit: "掌握精湛半永久技术，高薪就业",
              duration: "15天",
              url: "/courseDetail/byj2",
            },
            {
              id: 3,
              img: "byj/course_byj_cover3.png",
              tit: "半永久精品班",
              subTit: "毕业后轻松就业，协助创业",
              duration: "1个月",
              url: "/courseDetail/byj3",
            },
          ];
          break;
        case "qn":
          this.bannerDate = [
            {
              id: 1,
              img: "qn/courDetail_qn1_banner1.jpg",
              url: "/courseDetail/qn1",
            },
            {
              id: 1,
              img: "qn/courDetail_qn2_banner1.jpg",
              url: "/courseDetail/qn2",
            },
            {
              id: 1,
              img: "qn/courDetail_qn3_banner1.jpg",
              url: "/courseDetail/qn3",
            },
            {
              id: 1,
              img: "qn/courDetail_qn4_banner1.jpg",
              url: "/courseDetail/qn4",
            },
            {
              id: 1,
              img: "qn/courDetail_qn5_banner1.jpg",
              url: "/courseDetail/qn5",
            },
            {
              id: 1,
              img: "qn/courDetail_qn6_banner1.jpg",
              url: "/courseDetail/qn6",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "qn/course_qn_cover1.jpg",
              tit: "未来之星大咖班(美容星课)",
              subTit: "培养高层次美容专业人才",
              duration: "21天",
              url: "/courseDetail/qn1",
            },
            {
              id: 2,
              img: "qn/course_qn_cover2.jpg",
              tit: "未来之星大咖班(美甲星课)",
              subTit: "行业高标准美甲师标杆",
              duration: "21天",
              url: "/courseDetail/qn2",
            },
            {
              id: 3,
              img: "qn/course_qn_cover3.jpg",
              tit: "未来之星大咖班(美发星课)",
              subTit: "高端美发专业人才",
              duration: "21天",
              url: "/courseDetail/qn3",
            },
            {
              id: 4,
              img: "qn/course_qn_cover4.jpg",
              tit: "未来之星大咖班(化妆星课)",
              subTit: "高层次化妆师标杆",
              duration: "21天",
              url: "/courseDetail/qn4",
            },
            {
              id: 5,
              img: "qn/course_qn_cover5.jpg",
              tit: "未来之星高级班(化妆星课)",
              subTit: "高级化妆师晋升之路",
              duration: "21天",
              url: "/courseDetail/qn5",
            },
            {
              id: 6,
              img: "qn/course_qn_cover6.jpg",
              tit: "未来之星大咖班(半永久星课)",
              subTit: "高端半永久专业人才",
              duration: "21天",
              url: "/courseDetail/qn6",
            },
          ];
          break;
        case "mf":
          this.bannerDate = [
            {
              id: 1,
              img: "mf/courDetail_mf1_banner1.jpg",
              url: "/courseDetail/mf1",
            },
            {
              id: 2,
              img: "mf/courDetail_mf2_banner1.jpg",
              url: "/courseDetail/mf2",
            },
            {
              id: 3,
              img: "mf/courDetail_mf3_banner1.jpg",
              url: "/courseDetail/mf3",
            },
            {
              id: 4,
              img: "mf/courDetail_mf4_banner1.jpg",
              url: "/courseDetail/mf4",
            },
          ];
          this.courseList = [
            {
              id: 1,
              img: "mf/course_mf_cover1.png",
              tit: "时尚美发班",
              subTit: "三个月变身时尚发型设计师",
              duration: "3个月",
              url: "/courseDetail/mf1",
            },
            {
              id: 2,
              img: "mf/course_mf_cover2.png",
              tit: "专业美发就业班",
              subTit: "从初级到高级轻松就业",
              duration: "5个月",
              url: "/courseDetail/mf2",
            },
            {
              id: 3,
              img: "mf/course_mf_cover3.png",
              tit: "美发精品班",
              subTit: "高端美发造型师之路",
              duration: "7个月",
              url: "/courseDetail/mf3",
            },
            {
              id: 4,
              img: "mf/course_mf_cover4.png",
              tit: "美发精英班",
              subTit: "精英美发造型师之路",
              duration: "1年",
              url: "/courseDetail/mf4",
            },
          ];
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.banner_swiper {
  width: 100%;
  height: 718px;
  text-align: center;
}

// 课程列表
.course_wrap {
  width: 100%;
  background-color: #000000;
  padding-top: 100px;
  .course_box {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    .course_item {
      a {
        color: #ffffff;
        width: 555px;
        display: inline-block;
        img {
          width: 100%;
          height: 360px;
        }
        h5 {
          font-size: 37px;
          font-weight: 500;
          margin-top: 20px;
        }
        p {
          font-size: 20px;
          letter-spacing: 2px;
          margin-top: 5px;
        }
        span {
          background-color: #980518;
          display: inline-block;
          font-size: 25px;
          padding: 5px 30px;
          margin: 30px 0 50px;
        }
      }
    }
  }
}

// 课程优势
.courAdv_wrap {
  width: 100%;
  background-color: #000000;
  text-align: center;
  img {
    width: 1500px;
    height: 769px;
  }
}

// 明星导师
.starTea_wrap {
  background-color: #000000;
  padding-bottom: 130px;
  .tit_wrap {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 110px;
    img {
      width: 600px;
      height: 95px;
    }
    h1 {
      font-size: 40px;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .starTea_swiper {
    max-width: 1920px;
    height: 400px;
    .swiper-slide {
      text-align: center;
    }
    img {
      width: 270px;
      height: 400px;
    }
  }
}

// 保障制度
.safe_wrap {
  .tit_wrap {
    text-align: center;
    padding-top: 70px;
    padding-bottom: 50px;
    img {
      width: 650px;
      // height: 142px;
    }
    h1 {
      font-size: 28px;
      font-weight: 400;
    }
  }
  .cont_wrap {
    width: 1210px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 100px;
    .item {
      width: 570px;
      border: 3px solid #000000;
      border-radius: 10px;
      text-align: center;
      padding: 30px 0;
      margin-bottom: 65px;
      strong {
        font-size: 32px;
        font-weight: 500;
      }
      .line {
        width: 40px;
        height: 4px;
        background-color: #970518;
        margin: 20px auto;
      }
      p {
        font-size: 19px;
        line-height: 35px;
      }
    }
  }
}
</style>