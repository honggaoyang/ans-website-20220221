<template>
  <div>
    <!-- banner -->
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <swiper ref="mySwiper" class="course_swiper" :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/images/ans/ans_banner1.jpg" alt="探索ans banner" />
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

    <!-- 集团简介 -->
    <div class="intro_wrap">
      <h1>集团简介</h1>
      <div class="cont_wrap">
        <div class="lf_box">
          <img
            class="intro_img wow fadeIn"
            data-wow-duration="2s"
            src="@/assets/images/ans/ans_intro.png"
            alt="集团简介"
          />
          <div class="line"></div>
          <h3>扬美中国 妆亮世界</h3>
          <img
            class="beauty_img"
            src="@/assets/images/ans/ans_beautyBusiness.png"
            alt="扬美中国 妆亮世界"
          />
        </div>
        <div class="rt_box">
          <p class="tit">艾尼斯20年匠心筑梦</p>
          <article>
            艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦匠心筑梦梦匠心筑梦艾尼斯20年匠心筑梦匠心筑梦艾尼斯20年匠心筑梦匠心筑梦艾尼斯20年匠心筑梦匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦
          </article>
          <p class="text wow bounceInLeft" data-wow-duration="1s">
            价值观：擎天爱人、热情、学习、传承、服务、匠心
          </p>
          <p class="text wow bounceInRight" data-wow-duration="1s">
            理念：厚品质、聚精英、创伟业
          </p>
        </div>
      </div>
      <div class="info_wrap">
        <div class="info_box">
          <div class="wow fadeInDown">
            <strong>2002</strong>
            <p>艾尼斯教育成立</p>
          </div>
          <div class="wow fadeInDown" data-wow-delay="0.2s">
            <strong>36+</strong>
            <p>校区分布</p>
          </div>
          <div class="wow fadeInDown" data-wow-delay="0.4s">
            <strong>23</strong>
            <p>城市分布</p>
          </div>
          <div class="wow fadeInDown" data-wow-delay="0.6s">
            <strong>500+</strong>
            <p>公司员工</p>
          </div>
          <div class="wow fadeInDown" data-wow-delay="0.8s">
            <strong>500000+</strong>
            <p>累计输送人才</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 董事长信息 -->
    <div class="leaderInfo_wrap">
      <div class="leaderInfo_box">
        <div class="img_box">
          <img src="@/assets/images/ans/ans_zqs.jpg" alt="" />
        </div>
        <div class="cont_box">
          <p class="zqsEn">
            <img src="@/assets/images/ans/ans_zqsEN.png" alt="" />
          </p>
          <article>
            <h3>董事长：左清松</h3>
            <p>
              左清松，女，1972年出生于江苏连云港，艾尼斯控股董事长，女性民营企业家，20余年企业管理操盘经验，中国首批美业探索者、传播者
            </p>
            <p>
              左清松出生于知识分子家庭，自幼受到父母的言传身教。1998年，在全国多地考察之后，左清松来到苏州开创新的市场，一年内就成立了美容公司和化妆品公司，成功创办了植丽草、芬香格尔两大自主品牌。2002年转型美业职业教育，成立艾尼斯美妆连锁机构，二十余年来，持续为社会解决更多就业问题、为中国美业发展贡献力量。
            </p>
            <p>
              如今，艾尼斯美妆连锁机构在全国多个重点城市拥有36+直营分部。左清松还成立艾尼斯控股，布局了互联网平台、人才就业平台、线上教学平台、化妆品研发和销售平台等多个矩阵，为女性打造艾尼斯轻美美容馆
              ，主营面部护理、化妆美容、美发造型、时尚美甲等美容项目。
            </p>
          </article>
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
import { WOW } from "wowjs";
export default {
  mixins: [swiperMixin],
  components: { Consult },
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    });
  },
};
</script>
<style lang="less" scoped>
.course_swiper {
  width: 100%;
  height: 492px;
  text-align: center;
  img {
    // width: 100%;
  }
}

.intro_wrap {
  background: #ffffff;
  h1 {
    width: 1130px;
    margin: auto;
    font-size: 38px;
    font-weight: 500;
    margin-top: 150px;
    margin-bottom: 40px;
  }
  .cont_wrap {
    width: 1130px;
    margin: auto;
    display: flex;
    .lf_box {
      width: 550px;
      .intro_img {
        width: 400px;
        height: 98px;
        margin-left: -5px;
      }
      .line {
        width: 70px;
        height: 3px;
        background-color: #000000;
        margin: 60px 0;
      }
      h3 {
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .beauty_img {
        width: 175px;
        margin-left: -5px;
      }
    }
    .rt_box {
      flex: 1;
      border-left: 1px dashed #000000;
      padding-left: 150px;
      .tit {
        font-size: 27px;
        margin-bottom: 30px;
      }
      article {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 30px;
      }
      .text {
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
      }
    }
  }
  .info_wrap {
    background-color: #f2f2f2;
    padding: 20px 0;
    width: 100%;
    margin-top: 180px;
    .info_box {
      display: flex;
      width: 850px;
      margin: auto;
      div {
        flex: 1;
        text-align: center;
        strong {
          font-size: 48px;
          color: #960519;
          font-weight: 500;
        }
        p {
          font-size: 18px;
          color: #5c5c5c;
        }
      }
    }
  }
}

.leaderInfo_wrap {
  background-color: #000000;
  width: 100%;
  margin-bottom: 100px;
  .leaderInfo_box {
    width: 1200px;
    margin: auto;
    // background-color: #5c5c5c;
    display: flex;
    .img_box {
      flex: 1;
      text-align: center;
      img {
        width: 450px;
        height: 660px;
      }
    }
    .cont_box {
      width: 530px;
      .zqsEn {
        margin-top: 70px;
        img {
          width: 290px;
          height: 124px;
          margin-left: -15px;
        }
      }
      article {
        color: #ffffff;
        // width: 800px;
        h3 {
          font-size: 24px;
          font-weight: 500;
          margin-top: 45px;
        }
        p {
          font-size: 14px;
          margin-top: 23px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>