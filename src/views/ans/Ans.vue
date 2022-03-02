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
            class="intro_img"
            src="@/assets/images/ans/ans_intro.png"
            alt="集团简介"
          />
          <div class="line"></div>
          <h3>扬美中国 妆亮世界</h3>
          <img
            src="@/assets/images/ans/ans_beautyBusiness.png"
            alt="扬美中国 妆亮世界"
          />
        </div>
        <div class="rt_box">
          <p class="tit">艾尼斯20年匠心筑梦</p>
          <article>
            艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦匠心筑梦梦匠心筑梦艾尼斯20年匠心筑梦匠心筑梦艾尼斯20年匠心筑梦匠心筑梦艾尼斯20年匠心筑梦匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦艾尼斯20年匠心筑梦
          </article>
          <p class="text">价值观：擎天爱人、热情、学习、传承、服务、匠心</p>
          <p class="text">理念：厚品质、聚精英、创伟业</p>
        </div>
      </div>
      <div class="info_wrap">
        <div class="info_box">
          <div>
            <strong>2002</strong>
            <p>艾尼斯教育成立</p>
          </div>
          <div>
            <strong>36+</strong>
            <p>校区分布</p>
          </div>
          <div>
            <strong>23</strong>
            <p>城市分布</p>
          </div>
          <div>
            <strong>500+</strong>
            <p>公司员工</p>
          </div>
          <div>
            <strong>500000+</strong>
            <p>累计输送人才</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 董事长信息 -->
    <div class="leaderInfo_wrap">
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
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.course_swiper {
  width: 100%;
  height: 694px;
  img {
    // width: 100%;
  }
}

.intro_wrap {
  background: #ffffff;
  h1 {
    width: 1290px;
    margin: auto;
    font-size: 60px;
    font-weight: 500;
    margin-top: 150px;
    margin-bottom: 40px;
  }
  .cont_wrap {
    width: 1290px;
    margin: auto;
    display: flex;
    .lf_box {
      width: 50%;

      .intro_img {
        width: 614px;
        height: 151px;
      }
      .line {
        width: 100px;
        height: 3px;
        background-color: #000000;
        margin: 80px 0;
      }
      h3 {
        font-size: 50px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      img {
        margin-left: -10px;
      }
    }
    .rt_box {
      width: 50%;
      border-left: 1px dashed #000000;
      padding-left: 50px;
      .tit {
        font-size: 40px;
        margin-bottom: 50px;
      }
      article {
        font-size: 25px;
        line-height: 45px;
        margin-bottom: 50px;
      }
      .text {
        font-size: 25px;
        line-height: 50px;
      }
    }
  }
  .info_wrap {
    background-color: #f2f2f2;
    padding: 30px 0;
    width: 100%;
    margin-top: 180px;
    .info_box {
      display: flex;
      width: 1400px;
      margin: auto;
      div {
        flex: 1;
        text-align: center;
        strong {
          font-size: 70px;
          color: #960519;
          font-weight: 500;
        }
        p {
          font-size: 25px;
          color: #5c5c5c;
        }
      }
    }
  }
}

.leaderInfo_wrap {
  background-color: #000000;
  width: 100%;
  display: flex;
  margin-bottom: 150px;
  .img_box {
    width: 800px;
    display: flex;
    justify-content: flex-end;
    img {
      width: 682px;
      height: 995px;
    }
  }
  .cont_box {
    flex: 1;
    .zqsEn {
      margin-top: 80px;
      img {
        width: 438px;
        height: 187px;
        margin-left: -15px;
      }
    }
    article {
      color: #ffffff;
      width: 800px;
      h3 {
        font-size: 35px;
        font-weight: 500;
        margin-top: 90px;
      }
      p {
        font-size: 22px;
        margin-top: 50px;
      }
    }
  }
}
</style>