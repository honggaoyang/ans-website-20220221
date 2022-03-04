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
          <img
            :src="require('@/assets/images/courseDetail/' + item.img)"
            alt=""
          />
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

    <!-- 课程简介 -->
    <div class="courseIntro_wrap">
      <div class="tit_wrap">
        <img
          src="@/assets/images/courseDetail/course_introTit.png"
          alt="课程简介"
        />
        <h1>课程简介</h1>
      </div>

      <!-- 化妆 -->
      <div
        class="cont_wrap"
        v-if="
          type.indexOf('hz') != -1 ||
          type.indexOf('qn4') == 0 ||
          type.indexOf('qn5') == 0
        "
      >
        <div class="item">
          <span class="iconfont icon-caizhuang--"></span>
          <strong>专业内容</strong>
          <p>
            艾尼斯专业之一，业内优秀教师手把手教学，授课方式分为全日制和业余制，针对零基础学员，紧跟流行趋势，毕业后可掌握盘发、化妆、造型设计等技能。学时分为1个月和3个月，从萌新小白到化妆造型师逐步进阶。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-RectangleCopy"></span>
          <strong>培养目标</strong>
          <p>
            1.从妆容细节到造型技巧提升，使学员掌握不同场所的妆容打造技巧<br />2.掌握专业知识技能和潮流时尚审美能力<br />3.以学习综合性专业技术为入口，学员既学会专业技术，又精通美业经商之道，通过商业工具加方法，放大并传播学员的技术，从而获取丰厚的商业回报。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-weibiaoti1"></span>
          <strong>就业方向</strong>
          <p>
            网红、主播、新媒体运营
            彩妆培训师、化妆教育机构培训师、摄影机构造型师、化妆学校彩妆讲师、传媒公司和电视台等化妆造型师、私人顾问等。
          </p>
        </div>
      </div>

      <!-- 美甲 -->
      <div
        class="cont_wrap"
        v-if="type.indexOf('mj') != -1 || type.indexOf('qn2') == 0"
      >
        <div class="item">
          <span class="iconfont icon-caizhuang--"></span>
          <strong>专业内容</strong>
          <p>
            零基础学员通过学习专业知识和专业的美甲技法，并了解和掌握专业知识和技法以及技巧，通过专业强化的训练的学员熟练掌握，美甲知识理论学，指甲的护理及保养抛光打蜡，甲油的选择与涂抹及甲型矫正，贴片的制作，韩式光疗术，冰晶甲（透明水晶甲延长），潮流的百搭款，成为一个品德兼优的美甲师。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-RectangleCopy"></span>
          <strong>培养目标</strong>
          <p>
            1.零基础学员通过美甲专业知识和美甲技法学习，了解和掌握美甲专业知识和技能<br />2.通过强化训练让学员熟练掌握前沿美甲技术，提高行业竞争力。<br />3.学员既学会专业技术，又精通美业经商之道，通过商业工具加方法，放大并传播学员
            的技术，从而获取丰厚的商业汇报。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-weibiaoti1"></span>
          <strong>就业方向</strong>
          <p>
            网红、主播、新媒体运营、大型专业美甲连锁店、大型美甲沙龙高级美甲师、高级美甲
            导师、美甲沙龙管理者、自主创业、美甲店(沙龙)经营管理等。
          </p>
        </div>
      </div>

      <!-- 美容 -->
      <div
        class="cont_wrap"
        v-if="type.indexOf('mr') != -1 || type.indexOf('qn1') == 0"
      >
        <div class="item">
          <span class="iconfont icon-caizhuang--"></span>
          <strong>专业内容</strong>
          <p>
            通过学习细胞的构造、面部水疗、肠胃保养、颈部芳香SPA、美容师的职业道德、冰晶甲延长操作等课程,让学员方面拥有美容专业知识技术,成为行业精英人才,让学员以技术为入口,成为美容精英人才。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-RectangleCopy"></span>
          <strong>培养目标</strong>
          <p>
            1.熟练掌握面部及身体的诊断和分析<br />2.先进仪器的正确操作方法<br />3.熟练的美容专业技能，更具有整体能力的实战型优秀高级美容人才
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-weibiaoti1"></span>
          <strong>就业方向</strong>
          <p>
            形象工作室、减肥纤体店、美容连锁机构、化妆品公司、相关教育教学机构、彩妆品公司、广告公司、独立开店。
          </p>
        </div>
      </div>

      <!-- 半永久 -->
      <div
        class="cont_wrap"
        v-if="type.indexOf('byj') != -1 || type.indexOf('qn6') == 0"
      >
        <div class="item">
          <span class="iconfont icon-caizhuang--"></span>
          <strong>专业内容</strong>
          <p>
            以学习半永久专业技术为入口，让学员拥有行走时尚半永久行业应具备的技能。主要课程：仿真皮上的设计与练习、仙绒眉、唇形内收及外扩的原理、素描的原理、个人形象塑造课等。毕业后推荐轻松就业，协助创业。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-RectangleCopy"></span>
          <strong>培养目标</strong>
          <p>
            1.培养学员掌握前沿的半永久技术<br />2.理论和实践相结合<br />3.提高学员的审美能力和掌握精湛技术，且具备市场营销能力
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-weibiaoti1"></span>
          <strong>就业方向</strong>
          <p>主播、形象工作室、私人顾问、自主创业、独立开店等。</p>
        </div>
      </div>

      <!-- 美发 -->
      <div
        class="cont_wrap"
        v-if="type.indexOf('mf') != -1 || type.indexOf('qn3') == 0"
      >
        <div class="item">
          <span class="iconfont icon-caizhuang--"></span>
          <strong>专业内容</strong>
          <p>
            针对零基础的学员，课程从基础入门直至高级发型修剪设计，全程由导师根据学员的学习进度，进行针对性指导实践。丰富的课程设置结合科学实操的教学理念，打好扎实的技术基础，同时结合发型的流行趋势，让学员更好的掌握各项美发技术。
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-RectangleCopy"></span>
          <strong>培养目标</strong>
          <p>
            1.掌握从基础入门直至高级发型修剪设计能力，打好扎实的技术基础<br />2.结合发型的流行趋势，培养具有高级染发设计、高级烫发设计等技能，进而成为具有
            专业设计能力的高级发型设计师<br />3.精通美业经商之道，通过商业工具加方法，放大并传播学员的技术，从而获取丰厚的
            商业回报
          </p>
        </div>
        <div class="item">
          <span class="iconfont icon-weibiaoti1"></span>
          <strong>就业方向</strong>
          <p>
            可在电视台、影视剧组、摄影公司、发型设计工作室、美容美发设计中心、各大形象
            设计连锁店就职，担任高级发型设计师、营销主管、区城经理、店面店长、网红、主
            播、新媒体运营等职位。
          </p>
        </div>
      </div>
    </div>

    <!-- 课程介绍 -->
    <div class="courseDetail_wrap">
      <div class="tit_wrap">
        <img
          src="@/assets/images/courseDetail/course_detailTit.png"
          alt="课程介绍"
        />
        <h1>课程介绍</h1>
      </div>
      <div class="couseDetail_wrap">
        <div
          class="item"
          v-for="courItem in courseDetailDate"
          :key="courItem.id"
        >
          <div class="lf">
            <img
              :src="require('@/assets/images/courseDetail/' + courItem.img)"
              :alt="courItem.tit"
            />
          </div>
          <div class="rt">
            <div class="tit">
              <span class="iconfont icon-yuanquan"></span>
            </div>
            <div class="cont">
              <h3>{{ courItem.tit }}</h3>
              <p>{{ courItem.cont }}</p>
            </div>
          </div>
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
  name: "Ans2022Coursedetail",
  mixins: [swiperMixin],
  components: { Consult },
  props: ["type"], // 获取穿过来的课程类型
  data() {
    return {
      bannerDate: [], //banner数据
      courseDetailDate: [], // 课程详情数据
      swiperOption: {
        spaceBetween: 0,
      },
    };
  },

  mounted() {},
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
        case "hz1":
          this.bannerDate = [{ id: 1, img: "hz/courDetail_hz1_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用气质标准高马尾、欧式大波浪烫发、韩式内外卷烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、韩式波纹卷、假发的运用",
              img: "hz/course_detail_hz1_1.png",
            },
            {
              id: 2,
              tit: "专业化妆师基础学",
              cont: "化妆的概念、起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、日常眼妆矫正法一双眼皮调整技法",
              img: "hz/course_detail_hz1_2.png",
            },
            {
              id: 3,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、",
              img: "hz/course_detail_hz1_3.png",
            },
            {
              id: 4,
              tit: "妆容风格",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、平面底妆技巧",
              img: "hz/course_detail_hz1_4.png",
            },
            {
              id: 5,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、礼仪学、化妆师如何和客户沟通",
              img: "hz/course_detail_hz1_5.png",
            },
            {
              id: 6,
              tit: "整体造型",
              cont: "中式新娘整体造型、韩式新娘整体造型、可爱新娘整体造型、甜心约会整体造型、职业白领整体造型、社交晚宴整体造型",
              img: "hz/course_detail_hz1_1.png",
            },
            {
              id: 7,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩、美容师护理前的准备",
              img: "hz/course_detail_hz1_2.png",
            },
            {
              id: 8,
              tit: "色彩学及素描",
              cont: "色彩学的重要性与认识、色彩的运用以及注意事项、眉毛的描画",
              img: "hz/course_detail_hz1_3.png",
            },
          ];
          break;
        case "hz2":
          this.bannerDate = [{ id: 1, img: "hz/courDetail_hz2_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、欧式大波浪烫发、韩式内外卷烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、假发的运用、韩式鱼骨辨",
              img: "hz/course_detail_hz2_1.png",
            },
            {
              id: 2,
              tit: "专业化妆师基础学",
              cont: "化妆的概念、起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、日常眼妆矫正法─双眼皮调整技法",
              img: "hz/course_detail_hz2_2.png",
            },
            {
              id: 3,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "hz/course_detail_hz2_3.png",
            },
            {
              id: 4,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "hz/course_detail_hz2_4.png",
            },
            {
              id: 5,
              tit: "色彩学与素描",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、眉毛的描画",
              img: "hz/course_detail_hz2_5.png",
            },
            {
              id: 6,
              tit: "妆容风格",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、新郎妆、韩式伴娘妆、PARTY妆、立体v脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式复古新娘妆、旗袍妆",
              img: "hz/course_detail_hz2_4.png",
            },
            {
              id: 7,
              tit: "整体造型",
              cont: "中式新娘整体造型、韩式新娘整体造型、甜心约会整体造型、职业白领整体造型、社交晚宴整体造型、森系新娘整体造型、唯美新娘整体造型、欧式复古新娘整体造型、时尚晚宴整体造型、旗袍整体造型、民国秀禾整体造型",
              img: "hz/course_detail_hz2_3.png",
            },
            {
              id: 8,
              tit: "服饰与搭配",
              cont: "不同妆容的服装搭配技巧、不同妆面饰品的选择",
              img: "hz/course_detail_hz2_1.png",
            },
            {
              id: 9,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备沟通学",
              img: "hz/course_detail_hz2_2.png",
            },
          ];
          break;
        case "hz3":
          this.bannerDate = [{ id: 1, img: "hz/courDetail_hz3_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、欧式大波浪烫发、韩式内外卷烫发、 3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、假发的运用、韩式鱼骨辫、经典赫本造型、韩式S型编发",
              img: "hz/course_detail_hz3_1.png",
            },
            {
              id: 2,
              tit: "专业化妆师基础学",
              cont: "化妆的概念、起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、日常眼妆矫正法一双眼皮调整技法",
              img: "hz/course_detail_hz3_2.png",
            },
            {
              id: 3,
              tit: "整体造型",
              cont: "中式新娘整体造型、韩式新娘整体造型、日系少女整体造型、职业白领整体造型、性感女神整体造型、森系新娘整体造型、唯美新娘整体造型、欧式复古新娘整体造型、时尚晚宴整体造型、旗袍整体造型、民国秀禾整体造型、巧克力新娘整体造型、法式新娘整体造型、创意新娘整体造型、经典赫本整体造型、时尚T台整体造型",
              img: "hz/course_detail_hz3_3.png",
            },
            {
              id: 4,
              tit: "妆容风格",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、经典烟熏妆、韩式自然新娘妆、新郎妆、韩式伴娘妆、平面底妆技巧、 PARTY妆、立体V脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式复古新娘妆、时尚晚宴妆、旗袍妆、巧克力新娘妆、法式新娘妆、经典赫本妆、日系少女妆、性感女神妆、创意新娘妆",
              img: "hz/course_detail_hz3_4.png",
            },
            {
              id: 5,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备沟通学",
              img: "hz/course_detail_hz3_5.png",
            },
            {
              id: 6,
              tit: "鱼骨轻推",
              cont: "鱼骨轻推的由来、鱼骨轻推和传统美目贴的区别、鱼骨轻推的工具介绍、鱼骨轻推5.0的介绍、鱼骨轻推操作技巧步骤",
              img: "hz/course_detail_hz3_6.png",
            },
            {
              id: 7,
              tit: "色彩学、素描、服饰与搭配",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、色彩的选择和搭配、眉毛的描画",
              img: "hz/course_detail_hz3_7.png",
            },
            {
              id: 8,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "hz/course_detail_hz3_1.png",
            },
            {
              id: 9,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "hz/course_detail_hz3_2.png",
            },
            {
              id: 10,
              tit: "服饰与搭配",
              cont: "服饰的分类、不同妆容的服装搭配技巧、不同妆面饰品的选择",
              img: "hz/course_detail_hz3_3.png",
            },
          ];
          break;
        case "hz4":
          this.bannerDate = [{ id: 1, img: "hz/courDetail_hz4_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、欧式大波浪烫发、韩式内外卷烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、假发的运用、韩式鱼骨辫、经典赫本造型、韩式S型编发、森系女神辫、复古双层手推波造型、经典中国结",
              img: "hz/course_detail_hz4_1.png",
            },
            {
              id: 2,
              tit: "专业化妆师基础学",
              cont: "化妆的概念、起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、日常眼妆矫正法—双眼皮调整技法",
              img: "hz/course_detail_hz4_2.png",
            },
            {
              id: 3,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "hz/course_detail_hz4_3.png",
            },
            {
              id: 4,
              tit: "鱼骨轻推",
              cont: "鱼骨轻推的由来、鱼骨轻推和传统美目贴的区别、鱼骨轻推的工具介绍、鱼骨轻推5.0的介绍、鱼骨轻推操作技巧步骤",
              img: "hz/course_detail_hz4_4.png",
            },
            {
              id: 5,
              tit: "素描系列",
              cont: "眉毛的描画、眼睛的描画、唇形的描画、彩妆设计稿、仿真野生眉手绘",
              img: "hz/course_detail_hz4_5.png",
            },
            {
              id: 6,
              tit: "妆容风格",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、服饰搭配的技巧、PARTY妆、立体v脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式复古新娘妆、欧式宫廷华丽新娘妆、时尚晚宴妆、旗袍妆、可爱学生妆、蛋肌咬唇妆、巧克力新娘妆、舞台新娘埴型、法式新娘造型、经典赫本造型、灵动潮流妆、日系少女妆、性感女神妆、创意网红新娘妆、鲜花妆、元素类古装妆面、甜美鲜花风格新娘妆、潮流晚宴妆、彩色烟熏妆、小丑妆、朋克妆、圣诞妆、黑人妆、晒伤妆、甜美减龄妆、几何猫眼妆、水果妆、老年妆、时尚复古妆、国潮妆、精灵妆、森系贴花",
              img: "hz/course_detail_hz4_6.png",
            },
            {
              id: 7,
              tit: "整体造型",
              cont: "中式新娘整体造型、韩式新娘整体造型、可爱新娘整体填型、甜心约会整体造型、职业白领整体造型、社交晚宴整体造型、森系新娘整体造型、唯美新娘整体造型、欧式宫廷华丽新娘整体造型、时尚晚宴整体造型、旗袍整体造型、民国秀禾整体造型、巧克力新娘整体填型、舞台新娘整体填型、网红新娘整体造型、经典赫本整体造型、时尚T台整体造型、时尚平面造型、运动广告拍摄造型、珠宝广告填型、创意彩妆填型",
              img: "hz/course_detail_hz4_7.png",
            },
            {
              id: 8,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "hz/course_detail_hz4_8.png",
            },
            {
              id: 9,
              tit: "经典艺术风格",
              cont: "新古典艺术风格、宫廷洛可可造型、国潮写真埴型、国际哥特艺术风格",
              img: "hz/course_detail_hz4_9.png",
            },
            {
              id: 10,
              tit: "影视人物造型",
              cont: "大唐盛妆、汉朝经典人物造型、清朝格格妆、韩国传统服装造型、COSPLAY妆",
              img: "hz/course_detail_hz4_1.png",
            },
            {
              id: 11,
              tit: "影视特效妆",
              cont: "割腕、断指、烧伤、刮伤、淤青",
              img: "hz/course_detail_hz4_2.png",
            },
            {
              id: 12,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备沟通学",
              img: "hz/course_detail_hz4_3.png",
            },
            {
              id: 13,
              tit: "服饰与搭配",
              cont: "服饰的分类、礼服与场景的搭配、不同妆容的服装搭配技巧、不同妆面饰品的选择、简单服饰的制作、饰品的分类、不同妆面饰品的选择、饰品制作的工具认识以及使用、不同饰品的制作",
              img: "hz/course_detail_hz4_4.png",
            },
            {
              id: 14,
              tit: "色彩学",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、色彩的选择和搭配",
              img: "hz/course_detail_hz4_5.png",
            },
          ];
          break;
        case "hz5":
          this.bannerDate = [{ id: 1, img: "hz/courDetail_hz5_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、经典单包发、经典双包发、气质标准高马尾、欧式大波浪烫发、韩式内外卷烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、假发的运用、韩式鱼骨辫、经典赫本造型、韩式S型编发、四叶草编发、复古双层手推波造型、经典中国结、森系新娘组合编发",
              img: "hz/course_detail_hz5_1.png",
            },
            {
              id: 2,
              tit: "专业化妆师基础学",
              cont: "化妆的概念、起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、日常眼妆矫正法",
              img: "hz/course_detail_hz5_2.png",
            },
            {
              id: 3,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备沟通学",
              img: "hz/course_detail_hz5_3.png",
            },
            {
              id: 4,
              tit: "素描系列",
              cont: "眉毛的描画、眼睛的描画、唇形的描画、彩妆设计稿、仿真野生眉手绘",
              img: "hz/course_detail_hz5_4.png",
            },
            {
              id: 5,
              tit: "妆容风格",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、平面底妆技巧、PARTY妆、立体v脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式宫廷华丽新娘妆、时尚晚宴妆、旗袍妆、巧克力新娘妆、舞台新娘妆、法式新娘妆、经典赫本妆、灵动潮流妆、日系少女妆、性感女神妆、创意新娘妆、鲜花贴面妆、洛可可新娘妆、甜美鲜花风格新娘妆、彩色烟熏妆、小丑妆、朋克妆、圣诞妆、晒伤妆、甜美减龄妆、几何猫眼妆、老年妆、时尚复古妆、国潮妆",
              img: "hz/course_detail_hz5_5.png",
            },
            {
              id: 6,
              tit: "整体造型",
              cont: "中式新娘整体造型、韩式新娘整体造型、法式新娘整体造型、洛可可新娘整体造型、甜心约会整体造型、职业白领整体造型、时尚晚宴整体造型、甜美鲜花新娘整体造型、森系新娘整体造型、唯美新娘整体造型、欧式宫廷华丽新娘整体造型、国潮新娘整体造型、旗袍整体造型、民国秀禾整体造型、巧克力新娘整体填型、舞台新娘整体埴型、创意新娘整体造型、经典赫本整体造型、时尚T台整体造型、时尚平面造型、运动广告拍摄造型、主持人造型、珠宝广告造型、创意彩妆整体造型、古典中式新娘妆、男妆整体造型",
              img: "hz/course_detail_hz5_6.png",
            },
            {
              id: 7,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "hz/course_detail_hz5_7.png",
            },
            {
              id: 8,
              tit: "鱼骨轻推",
              cont: "鱼骨轻推的由来、鱼骨轻推和传统美目贴的区别、鱼骨轻推的工具介绍、鱼骨轻推5.0的介绍、鱼骨轻推操作技巧步骤",
              img: "hz/course_detail_hz5_8.png",
            },
            {
              id: 9,
              tit: "影视人物造型",
              cont: "汉朝经典整体造型、大唐经典整体造型、清朝燕尾整体造型、韩国传统服装造型、COSPLAY妆",
              img: "hz/course_detail_hz5_9.png",
            },
            {
              id: 10,
              tit: "影视特效妆",
              cont: "割腕、断指、烧伤、刮伤、淤青",
              img: "hz/course_detail_hz5_1.png",
            },
            {
              id: 11,
              tit: "服饰与搭配",
              cont: "服饰的分类、礼服与场景的搭配、不同妆容的服装搭配技巧、不同妆面饰品的选择、简单服饰的制作、饰品的分类、不同妆面饰品的选择、饰品制作的工具认识以及使用、饰品的制作",
              img: "hz/course_detail_hz5_2.png",
            },
            {
              id: 12,
              tit: "经典艺术风格",
              cont: "新古典艺术风格、洛可可艺术风格、巴洛克艺术风格、国际哥特艺术风格",
              img: "hz/course_detail_hz5_3.png",
            },
            {
              id: 13,
              tit: "色彩学",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、色彩的选择和搭配",
              img: "hz/course_detail_hz5_4.png",
            },
            {
              id: 14,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "hz/course_detail_hz5_5.png",
            },
          ];
          break;
        case "hz6":
          this.bannerDate = [{ id: 1, img: "hz/courDetail_hz6_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业化妆师基础学",
              cont: "化妆的概念、起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、日常眼妆矫正法—双眼皮调整技法",
              img: "hz/course_detail_hz6_1.png",
            },
            {
              id: 2,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、欧式大波浪烫发、韩式内外卷烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、韩式鱼骨辫、经典赫本填型、韩式s型编发、森系女神辫、复古双层手推波造型、经典中国结、清新四叶草编发、灵动抽丝发型技巧、经典单包发、经典双包发、手打卷技巧、真假发结合运用、森系新娘组合编发",
              img: "hz/course_detail_hz6_2.png",
            },
            {
              id: 3,
              tit: "妆容风格",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、 PARTY妆、立体V脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式复古新娘妆、欧式宫廷华丽新娘妆、晚宴妆、旗袍妆、蛋肌咬唇妆、巧克力新娘妆、舞台新娘造型、法式新娘填型、经典赫本填型、灵动潮流妆、日系少女妆、甜美鲜花风格新娘妆、潮流晚宴妆、彩色烟熏妆、小丑妆、朋克妆、圣诞妆、黑人牧、晒伤妆、甜美减龄牧、几何猫眼妆、水果牧、老年妆、年代质感仿妆、欧美混企妆、芭比妆、异域风情妆、印度妆、女明星仿妆、戏剧妆、金属妆、泰国妆",
              img: "hz/course_detail_hz6_3.png",
            },
            {
              id: 4,
              tit: "整体造型",
              cont: "中式新娘整体造型、韩式新娘整体造型、法式新娘整体造型、洛可可新娘整体造型、甜心约会整体造型、职业白领整体造型、时尚晚宴整体造型、甜美鲜花新娘整体造型、森系新娘整体造型、唯美新娘整体造型、欧式宫廷华丽新娘整体造型、国潮新娘整体造型、旗袍整体造型、民国秀禾整体造型、巧克力新娘整体埴型、舞台新娘整体埴型、创意新娘整体造型、经典赫本整体造型、时尚T台整体造型、时尚平面造型、运动广告拍摄造型、主持人造型、珠宝广告造型、创意彩妆整体造型、古典中式新娘妆、男妆整体造型",
              img: "hz/course_detail_hz6_4.png",
            },
            {
              id: 5,
              tit: "色彩学",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、色彩的选择和搭配",
              img: "hz/course_detail_hz6_5.png",
            },
            {
              id: 6,
              tit: "鱼骨轻推",
              cont: "鱼骨轻推的由来、鱼骨轻推和传统美目贴的区别、鱼骨轻推的工具介绍、鱼骨轻推5.0的介绍、鱼骨轻推操作技巧步骤",
              img: "hz/course_detail_hz6_6.png",
            },
            {
              id: 7,
              tit: "商业化明星视觉打造",
              cont: "时尚平面造型、运动广告拍摄造型、主持人整体造型、珠宝广告造型、时尚T台妆容造型、创意彩妆整体造型、明星红毯秀整体造型、韩国女团整体造型",
              img: "hz/course_detail_hz6_7.png",
            },
            {
              id: 8,
              tit: "影视人物造型",
              cont: "汉朝经典整体造型、大唐经典整体造型、宋朝经典整体造型、清朝燕尾整体造型、韩国传统服装造型、COSPLAY妆、少数民族服装造型、骷髅骨骼牧、日本艺蚊妆、人鱼姬妆容、埃及艳后造型、戏曲花旦妆",
              img: "hz/course_detail_hz6_8.png",
            },
            {
              id: 9,
              tit: "影视特效妆",
              cont: "割腕、断指、烧伤、刮伤、淤青、枪伤、脓包、腐烂效果、血浆的制作、局部错位经典特写",
              img: "hz/course_detail_hz6_9.png",
            },
            {
              id: 10,
              tit: "经典艺术风格",
              cont: "新古典艺术风格、洛可可艺术风格、国潮艺术风格、国际哥特艺术风格、超现实主义艺术风格、拜占庭艺术风格、欧普艺术风格、极限主义艺术风格、巴洛克艺术风格、前拉斐尔艺术风格",
              img: "hz/course_detail_hz6_10.png",
            },
            {
              id: 11,
              tit: "服饰与搭配",
              cont: "服饰的分类、礼服与场景的搭配、不同妆容的服装搭配技巧、饰品的分类、不同妆面饰品的选择、饰品制作的工具认识以及使用",
              img: "hz/course_detail_hz6_11.png",
            },
            {
              id: 12,
              tit: "饰品DIY制作",
              cont: "简约唯美发带、轻复古网纱头饰、个性耳环制作、中式婚礼头饰、仙美清新头纱、森系唯美皇冠",
              img: "hz/course_detail_hz6_1.png",
            },
            {
              id: 13,
              tit: "素描系列",
              cont: "眉毛的描画、眼睛的描画、唇形的描画、彩妆设计稿手绘、仿真野生眉手绘、3D立体眉眼唇手绘",
              img: "hz/course_detail_hz6_2.png",
            },
            {
              id: 14,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备沟通学、时间管理学",
              img: "hz/course_detail_hz6_3.png",
            },
            {
              id: 15,
              tit: "美甲课程",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、贴片的种类与工具的选择、半贴片的操作、全贴片的操作、基础涂单色的流程、法式甲的制作、单色渐变甲、小笔绘画甲、水晶甲延长操作、日式拉线、美式彩虹甲、梅花的画法、大菊花的画法、雏菊花的画法、羽毛的画法、蝴蝶的画法、樱花的画法、椰子树的画法、玫瑰的画法、光疗延长甲、光疗术工具、光疗法式贴片",
              img: "hz/course_detail_hz6_4.png",
            },
            {
              id: 16,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "hz/course_detail_hz6_5.png",
            },
            {
              id: 17,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "hz/course_detail_hz6_6.png",
            },
          ];
          break;
        case "mj1":
          this.bannerDate = [{ id: 1, img: "mj/courDetail_mj1_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美甲师基础知识",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、指甲的护理和保养、甲油胶的类型和选择",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "贴片甲的制作",
              cont: "贴片的种类与工具的选择、半贴片的操作、全贴片的操作、法式贴片的操作指甲的款式、基础涂单色的流程、法式甲的制作、单色渐变甲、小笔绘画甲、水晶甲延长操作、日式拉线、美式彩虹甲",
              img: "mj/course_detail_mj1_10.jpg",
            },
            {
              id: 3,
              tit: "卸甲的操作",
              cont: "卸甲工具的认识以及使用、单色卸除、光疗甲卸除、水晶甲卸除",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 4,
              tit: "经营管理课程",
              cont: "美甲师的职业要求、美甲店的工作流程和要求",
              img: "mj/course_detail_mj1_9.jpg",
            },
            {
              id: 5,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部六位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "mj/course_detail_mj1_7.jpg",
            },
            {
              id: 6,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mj/course_detail_mj1_12.jpg",
            },
          ];
          break;
        case "mj2":
          this.bannerDate = [{ id: 1, img: "mj/courDetail_mj2_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美甲师基础知识",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、指甲的护理和保养、甲油胶的类型和选择",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "贴片甲的制作",
              cont: "贴片的种类与工具的选择、半贴片的操作、全贴片的制作、法式贴片的操作指甲的款式、基础涂单色的流程、光疗延长甲、光疗术工具、冰晶甲的相关知识以及注意事项、冰晶甲延长操作、法式甲的制作、单色渐变甲、小笔绘画卡通、美甲镶钻技巧、日式拉线格纹、极光粉魔镜粉的操作、星空猫眼、简约气质款、圆笔彩绘、日式拉丝款、双色渐变、波西米亚拉染甲、金铂晕染、花卉美甲款式、海洋山丘",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 3,
              tit: "玻璃甲",
              cont: "玻璃甲的相关知识和工具的认识、玻璃甲的操作与技巧",
              img: "mj/course_detail_mj1_5.jpg",
            },
            {
              id: 4,
              tit: "专业排笔画法",
              cont: "马蹄莲的画法、紫罗兰的画法",
              img: "mj/course_detail_mj1_6.jpg",
            },
            {
              id: 5,
              tit: "韩式小笔绘画",
              cont: "梅花的画法、向日葵的画法、雏菊花的画法、羽毛的画法、雪花的画法、樱花的画法、椰子树的画法、玫瑰的画法",
              img: "mj/course_detail_mj1_3.jpg",
            },
            {
              id: 6,
              tit: "卸甲的操作",
              cont: "卸甲工具的认识以及使用、单色卸除、光疗甲卸除、水晶甲卸除",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 7,
              tit: "经营管理课程",
              cont: "美甲师的职业要求、美甲店的工作流程和要求",
              img: "mj/course_detail_mj1_9.jpg",
            },
            {
              id: 8,
              tit: "化妆课程",
              cont: "化妆的概念起源的分析、化妆工具的认识以及使用方法、正确的工具摆放操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正、自然简釣生活妆、都市自领职业妆",
              img: "mj/course_detail_mj1_7.jpg",
            },
            {
              id: 9,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部六位的认识、美容师的职业要求、手部保养、头部按摩 ",
              img: "mj/course_detail_mj1_4.jpg",
            },
            {
              id: 10,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mj/course_detail_mj1_12.jpg",
            },
            {
              id: 11,
              tit: "美甲雕花粉系列",
              cont: "3D梅花、3D蝴蝶结",
              img: "mj/course_detail_mj1_10.jpg",
            },
          ];
          break;
        case "mj3":
          this.bannerDate = [{ id: 1, img: "mj/courDetail_mj3_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美甲师基础知识",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、指甲的护理和保养、甲油胶的类型和选择",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "贴片甲的制作",
              cont: "贴片的种类与工具的选择、半贴片的操作、全贴片的操作、法式贴片的操作",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 3,
              tit: "指甲的款式",
              cont: "基础涂单色的流程、光疗工具的认识及操作方法、光疗延长、冰品甲的相关知识以及注意事项、冰晶甲延长操作、法式甲的制作、单色渐变甲、小笔绘画卡通、美甲镶钻技巧、日式拉线格纹、极光粉魔镜粉的操作、星空猫眼、简约气质款、圆笔彩绘、日式拉丝美甲、双色渐变",
              img: "mj/course_detail_mj1_4.jpg",
            },
            {
              id: 4,
              tit: "韩式小笔绘画",
              cont: "梅花的画法、向日葵的画法、雏菊花的画法、羽毛的画法、雪花的画法、樱花的画法、椰子树的画法、玫瑰的画法",
              img: "mj/course_detail_mj1_3.jpg",
            },
            {
              id: 5,
              tit: "卸甲的操作",
              cont: "卸甲工具的认识以及使用、单色卸除、光疗甲卸除、水晶甲卸除",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 6,
              tit: "经营管理课程",
              cont: "美甲师的职业要求、美甲店的注意事项",
              img: "mj/course_detail_mj1_9.jpg",
            },
            {
              id: 7,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部六位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "mj/course_detail_mj1_2.jpg",
            },
            {
              id: 8,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mj/course_detail_mj1_12.jpg",
            },
          ];
          break;
        case "mj4":
          this.bannerDate = [{ id: 1, img: "mj/courDetail_mj4_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美甲师基础知识",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、指甲的护理和保养、甲油胶的类型和选择",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "贴片甲的制作",
              cont: "贴片的种类与工具的选择、半贴片的操作、全贴片的操作、法式贴片的操作指甲的款式、基础涂单色的流程、光疗延长甲、光疗术工具、冰晶甲的相关知识以及注意事项、冰晶甲延长操作、法式甲的制作、单色渐变甲、美甲彩绘卡通、日式拉线格纹、极光粉魔镜粉的操作、星空猫眼、简约气质款、圆笔彩绘、日式拉丝款、双色渐变、波西米亚拉染甲、金铂晕染、花卉美甲款式、海洋山丘、时尚百搭毛呢甲、复古经典毛呢甲",
              img: "mj/course_detail_mj1_4.jpg",
            },
            {
              id: 3,
              tit: "玻璃甲",
              cont: "玻璃甲的相关知识和工具的认识、玻璃甲的操作与技巧",
              img: "mj/course_detail_mj1_5.jpg",
            },
            {
              id: 4,
              tit: "专业排笔画法",
              cont: "马踏莲的画法、紫罗兰的画法、紫荆花的画法",
              img: "mj/course_detail_mj1_6.jpg",
            },
            {
              id: 5,
              tit: "韩式小笔绘画",
              cont: "梅花的画法、向日葵的画法、雏菊花的画法、羽毛的画法、雪花的画法、樱花的画法、椰子树的画法、玫瑰的画法",
              img: "mj/course_detail_mj1_3.jpg",
            },
            {
              id: 6,
              tit: "卸甲的操作",
              cont: "卸甲工具的认识以及使用、单色卸除、光疗甲卸除、水晶甲卸除",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 7,
              tit: "美甲雕花粉系列",
              cont: "3D梅花、3D蝴蝶结、3D玫瑰花、3D立体马蹄莲",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 8,
              tit: "经营管理课程",
              cont: "美甲师的职业要求、美甲店的工作流程和要求",
              img: "mj/course_detail_mj1_9.jpg",
            },
            {
              id: 9,
              tit: "化妆课程",
              cont: "化妆的概念,起源的分析、化妆工具的认识以及使用方法、正确的工具摆放,操作流程和标准姿势、工具的清洗及保养、脸型的分析和矫正、日常用型的分析以及画法、日常眼线的分析及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正、自然简约生活妆、都市白领职业妆、韩式视妆、甜心约会妆",
              img: "mj/course_detail_mj1_7.jpg",
            },
            {
              id: 10,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部六位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "mj/course_detail_mj1_2.jpg",
            },
            {
              id: 11,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mj/course_detail_mj1_12.jpg",
            },
          ];
          break;
        case "mj5":
          this.bannerDate = [{ id: 1, img: "mj/courDetail_mj5_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美甲师基础知识",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、指甲的护理和保养、甲油胶的类型和选择",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "贴片甲的制作",
              cont: "贴片的种类与工具的选择、半贴片的操作、全贴片的操作、法式贴片的操作指甲的款式、基础涂单色的流程、光疗延长甲、光疗术工具、冰晶甲的相关知识以及注意事项、冰晶甲延长操作、法式甲的制作、单色渐变、小笔绘画卡通、水晶甲延长操作、日式拉线格纹、极光粉魔镜粉的操作、星空猫眼、简约气质款、圆笔彩绘、金铂晕染、双色渐变、波西米亚拉染甲、花卉美甲款式、海洋山丘、日式拉丝款、时尚百搭毛呢甲、复古经典毛呢甲、网红水彩款式、幻彩贝壳甲、法拉利造型、复古新娘款、立体蝴蝶结、新娘款",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 3,
              tit: "玻璃甲",
              cont: "玻璃甲的相关知识和工具的认识、玻璃甲的操作与技巧",
              img: "mj/course_detail_mj1_5.jpg",
            },
            {
              id: 4,
              tit: "专业排笔画法",
              cont: "马踏莲的画法、紫罗兰的画法、紫荆花的画法、梅花的画法、郁金香的画法、金鱼的画法、蝴蝶的画法",
              img: "mj/course_detail_mj1_6.jpg",
            },
            {
              id: 5,
              tit: "韩式小笔绘画",
              cont: "梅花的画法、向日葵的画法、雏菊花的画法、羽毛的画法、雪花的画法、樱花的画法、椰子树的画法、玫瑰的画法",
              img: "mj/course_detail_mj1_3.jpg",
            },
            {
              id: 6,
              tit: "卸甲的操作",
              cont: "卸甲工具的认识以及使用、单色卸除、光疗甲卸除、水晶甲卸除",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 7,
              tit: "美甲雕花粉系列",
              cont: "3D梅花、3D玫瑰花、3D立体马蹄莲",
              img: "mj/course_detail_mj1_10.jpg",
            },
            {
              id: 8,
              tit: "经营管理课程",
              cont: "美甲师的职业要求、美甲店的工作流程和要求",
              img: "mj/course_detail_mj1_9.jpg",
            },
            {
              id: 9,
              tit: "化妆课程",
              cont: "化妆的概念,起源的分析、化妆工具的认识以及使用方法、正确的工具摆放,操作流程和标准姿势、工具的清洗及保养、脸型的分析和矫正、日常用型的分析以及画法、日常眼线的分析及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正、自然简约生活妆、都市白领职业妆、韩式视妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、服饰搭配的技巧、PARTY妆、立体V脸妆",
              img: "mj/course_detail_mj1_7.jpg",
            },
            {
              id: 10,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部六位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "mj/course_detail_mj1_4.jpg",
            },
            {
              id: 11,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mj/course_detail_mj1_12.jpg",
            },
          ];
          break;
        case "mj6":
          this.bannerDate = [{ id: 1, img: "mj/courDetail_mj6_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美甲师基础知识",
              cont: "美甲的起源和发展、美甲师的职业道德与规范、指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、指甲的护理和保养、甲油胶的类型和选择",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "贴片甲的制作",
              cont: "贴片的种类与工具的选择、半贴片的操作、全贴片的操作、法式贴片的操作指甲的款式、基础涂单色的流程、光疗延长甲、光疗术工具、冰晶甲的相关知识以及注意事项、冰晶甲延长操作、法式甲的制作、单色渐变、小笔绘画卡通、水晶甲延长操作、日式拉线格纹、极光粉魔镜粉的操作、星空猫眼、简约气质款、圆笔彩绘、金铂晕染、双色渐变、波西米亚拉染甲、花卉美甲款式、海洋山丘、日式拉丝款、时尚百搭毛呢甲、复古经典毛呢甲、网红水彩款式、幻彩贝壳甲、法拉利造型、复古新娘款、立体蝴蝶结、新娘款",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 3,
              tit: "玻璃甲",
              cont: "玻璃甲的相关知识和工具的认识、玻璃甲的操作与技巧",
              img: "mj/course_detail_mj1_5.jpg",
            },
            {
              id: 4,
              tit: "专业排笔画法",
              cont: "马踏莲的画法、紫罗兰的画法、紫荆花的画法、梅花的画法、郁金香的画法、金鱼的画法、蝴蝶的画法",
              img: "mj/course_detail_mj1_6.jpg",
            },
            {
              id: 5,
              tit: "韩式小笔绘画",
              cont: "梅花的画法、向日葵的画法、雏菊花的画法、羽毛的画法、雪花的画法、樱花的画法、椰子树的画法、玫瑰的画法",
              img: "mj/course_detail_mj1_3.jpg",
            },
            {
              id: 6,
              tit: "卸甲的操作",
              cont: "卸甲工具的认识以及使用、单色卸除、光疗甲卸除、水晶甲卸除",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 7,
              tit: "美甲雕花粉系列",
              cont: "3D梅花、3D玫瑰花、3D立体马蹄莲",
              img: "mj/course_detail_mj1_10.jpg",
            },
            {
              id: 8,
              tit: "经营管理课程",
              cont: "美甲师的职业要求、美甲店的工作流程和要求、时间管理、目标管理",
              img: "mj/course_detail_mj1_9.jpg",
            },
            {
              id: 9,
              tit: "化妆课程",
              cont: "化妆的概念,起源的分析、化妆工具的认识以及使用方法、正确的工具摆放,操作流程和标准姿势、工具的清洗及保养、脸型的分析和矫正、日常用型的分析以及画法、日常眼线的分析及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正、自然简约生活妆、都市白领职业妆、韩式视妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、服饰搭配的技巧、PARTY妆、立体V脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式复古新娘妆、欧式宫廷华丽新娘妆、晚宴妆、旗袍妆、蛋肌咬唇妆、巧克力新娘妆、舞台新娘造型、法式新娘造型、经典赫本造型、灵动潮流妆、日系少女妆、甜美鲜花风格新娘妆、潮流晚宴妆、彩色烟熏妆",
              img: "mj/course_detail_mj1_7.jpg",
            },
            {
              id: 10,
              tit: "鱼骨轻推",
              cont: "鱼骨轻推的由来、鱼骨轻推和传统美目贴的区别、鱼骨轻推的工具介绍、鱼骨轻推5.0的介绍、鱼骨轻推操作技巧步骤",
              img: "mj/course_detail_mj1_12.jpg",
            },
            {
              id: 11,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部六位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 12,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mj/course_detail_mj1_12.jpg",
            },
          ];
          break;
        case "mr1":
          this.bannerDate = [{ id: 1, img: "mr/courDetail_mr1_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美容师基础知识",
              cont: "皮肤的构造、皮肤的分类、皮肤的生长因素、皮肤的九大功能、皮肤的定义、面部穴位的认识、美容师的职业要求",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 2,
              tit: "专业化妆品学习",
              cont: "化妆品的认识以及使用、化妆品的鉴别、如何选择正确的化妆品、化妆品过敏如何处理、化妆品如何保存",
              img: "mr/course_detail_mr1_12.jpg",
            },
            {
              id: 3,
              tit: "相关皮肤问题的护理",
              cont: "肤色不良的形成以及护理、色斑皮肤的形成以及护理、座疮皮肤的形成以及护理",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 4,
              tit: "美容手法",
              cont: "面部洗脸和按摩手法、头部按摩手法、眼部按摩手法、扁颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 5,
              tit: "刮痧学",
              cont: "刮痧常用工具、面部刮痧的步骤、面部刮痧的注意事项",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 6,
              tit: "美容仪器的认识",
              cont: "市面上常用的美容佼器的认识、冷热喷仪器的认识以及操作、面部导入俊的认识以及操作",
              img: "mr/course_detail_mr1_6.jpg",
            },
            {
              id: 7,
              tit: "专业化妆师基础学",
              cont: "化妆的概念,起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放,操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正",
              img: "mr/course_detail_mr1_13.jpg",
            },
            {
              id: 8,
              tit: "造型妆面",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆",
              img: "mr/course_detail_mr1_11.jpg",
            },
          ];
          break;
        case "mr2":
          this.bannerDate = [{ id: 1, img: "mr/courDetail_mr2_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美容师基础知识",
              cont: "皮肤的构造、皮肤的分类、皮肤的生长因素、皮肤的九大功能、皮肤的定义、面部穴位的认识、美容师的职业要求",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 2,
              tit: "专业化妆品学习",
              cont: "化妆品的认识以及使用、化妆品的鉴别、如何选择正确的化妆品、化妆品过敏如何处理、化妆品如何保存、色斑皮肤如何选择化妆品、痤疮皮肤如何选择化妆品、敏感性皮肤如何选择化妆品、衰老性皮肤如何选择化妆品",
              img: "mr/course_detail_mr1_12.jpg",
            },
            {
              id: 3,
              tit: "相关皮肤问题的护理",
              cont: "肤色不良的形成以及护理、色斑皮肤的形成以及护理、痤疮皮肤的形成以及护理、敏感性皮肤的形成以及护理",
              img: "mr/course_detail_mr1_9.jpg",
            },
            {
              id: 4,
              tit: "美容手法",
              cont: "衰老性皮肤的形成以及护理美容手法、面部洗脸和按摩手法、头部理疗、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 5,
              tit: "身体养生手法",
              cont: "各个手法理论知识、肠胃保养、背部保养、纤手护理",
              img: "mr/course_detail_mr1_4.jpg",
            },
            {
              id: 6,
              tit: "刮痧拔罐学",
              cont: "刮痧常用工具、面部刮痧的步骠及注意事项、拔罐的功效、背部拔罐的手法以及注意事项、市面上常用的美容佼器的认识、冷热喷仪器的认识以及操作、面部导入仪的认识以及操作、市面上减肥仪器的了解",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 7,
              tit: "芳香系列",
              cont: "精油的了解、精油的分类以及作用、精油的使用方法",
              img: "mr/course_detail_mr1_1.jpg",
            },
            {
              id: 8,
              tit: "经营管理课程",
              cont: "美容师的职业要求、美容师礼仪学、美容师沟通学",
              img: "mr/course_detail_mr1_3.jpg",
            },
            {
              id: 9,
              tit: "专业化妆师基础学",
              cont: "化妆的概念,起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放、操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正",
              img: "mr/course_detail_mr1_13.jpg",
            },
            {
              id: 10,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、韩式内外卷烫发",
              img: "mr/course_detail_mr1_11.jpg",
            },
            {
              id: 11,
              tit: "造型妆面",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、气质烟熏妆、日式裸妆",
              img: "mr/course_detail_mr1_8.jpg",
            },
          ];
          break;
        case "mr3":
          this.bannerDate = [{ id: 1, img: "mr/courDetail_mr3_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美容师基础知识",
              cont: "皮肤的构造、皮肤的分类、皮肤的生长因素、皮肤的九大功能、皮肤的定义、面部穴位的认识、美容师的职业要求",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 2,
              tit: "专业化妆品学习",
              cont: "化妆品的认识以及使用、化妆品的鉴别、如何选择正确的化妆品、化妆品过敏如何处理、化妆品如何保存、色斑皮肤如何选择化妆品、痤疮皮肤如何选择化妆品、敏感性皮肤如何选择化妆品、衰老性皮肤如何选择化妆品",
              img: "mr/course_detail_mr1_12.jpg",
            },
            {
              id: 3,
              tit: "相关皮肤问题的护理",
              cont: "肤色不良的形成以及护理、色斑皮肤的形成以及护理、痤疮皮肤的形成以及护理、敏感性皮肤的形成以及护理",
              img: "mr/course_detail_mr1_9.jpg",
            },
            {
              id: 4,
              tit: "美容手法",
              cont: "衰老性皮肤的形成以及护理美容手法、面部洗脸和按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备、头部理疗、面部淋巴腺按摩",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 5,
              tit: "身体养生手法",
              cont: "各个手法理论知识、肠胃保养、胸部保养、背部保养、减肥的认识、腹部减肥、腿部减肥、背部减肥、腰部减肥、背部理疗、三焦开背",
              img: "mr/course_detail_mr1_4.jpg",
            },
            {
              id: 6,
              tit: "刮痧拔罐学",
              cont: "刮痧常用工具、面部刮痧的步骤及注意事项、拔罐的功效、拔罐的操作步骤和注意事项、背部拔罐的手法、肩部拔罐的手法、走罐的操作步骤、痧症的鉴定",
              img: "mr/course_detail_mr1_7.jpg",
            },
            {
              id: 7,
              tit: "美容仪器的认识",
              cont: "市面上常用的美容仪器的认识、冷热喷仪器的认识以及操作、面部导入仪的认识以及操作、市面上减肥仪器的了解",
              img: "mr/course_detail_mr1_6.jpg",
            },
            {
              id: 8,
              tit: "芳香系列",
              cont: "精油的了解、精油的分类以及作用、精油的使用方法、面部芳香SPA、颈部芳香SPA",
              img: "mr/course_detail_mr1_1.jpg",
            },
            {
              id: 9,
              tit: "经营管理课程",
              cont: "美容师的职业要求、美容师礼仪学、美容师沟通学、美容院的接待与咨询、美容院应该具备的条件和设施",
              img: "mr/course_detail_mr1_3.jpg",
            },
            {
              id: 10,
              tit: "专业化妆师基础学",
              cont: "化妆的概念,起源的分析以及行业的发展趋势特点解析、化妆工具的认识以及使用方法、正确的工具摆放,操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正",
              img: "mr/course_detail_mr1_13.jpg",
            },
            {
              id: 11,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、韩式内外卷烫发、欧式大波浪烫发、3D玉米烫发、日系反编三加二、经典四五六股手法",
              img: "mr/course_detail_mr1_11.jpg",
            },
            {
              id: 12,
              tit: "造型妆面",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、中式伴娘妆、日系新娘妆、日式裸妆",
              img: "mr/course_detail_mr1_8.jpg",
            },
          ];
          break;
        case "mr4":
          this.bannerDate = [{ id: 1, img: "mr/courDetail_mr4_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美容师基础知识",
              cont: "皮肤的构造、皮肤的分类、皮肤的生长因素、皮肤的九大功能、皮肤的定义、面部穴位的认识、美容师的职业要求",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 2,
              tit: "专业化妆品学习",
              cont: "化妆品的认识以及使用、化妆品的鉴别、如何选择正确的化妆品、化妆品过敏如何处理、化妆品如何保存、色斑皮肤如何选择化妆品、痤疮皮肤如何选择化妆品、敏感性皮肤如何选择化妆品、衰老性皮肤如何选择化妆品",
              img: "mr/course_detail_mr1_12.jpg",
            },
            {
              id: 3,
              tit: "相关皮肤问题的护理",
              cont: "肤色不良的形成以及护理、色斑皮肤的形成以及护理、痤疮皮肤的形成以及护理、敏感性皮肤的形成以及护理",
              img: "mr/course_detail_mr1_9.jpg",
            },
            {
              id: 4,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备、头部理疗、面部淋巴腺按摩",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 5,
              tit: "身体养生手法",
              cont: "肠胃保养、胸部保养、背部保养、腹部减肥、腿部减肥、背部减肥、腰部减肥、背部理疗、减肥的认识、手部减肥、卵巢保养、热石疗法、臀部保养、腹部保养",
              img: "mr/course_detail_mr1_4.jpg",
            },
            {
              id: 6,
              tit: "刮痧拔罐学",
              cont: "刮痧常用工具、面部刮痧的步骤、面部刮痧的注意事项、拔罐常用工具、拔罐的操作步骤和注意事项、背部拔罐的手法以及注意事项、肩部拔罐的手法以及注意事项、走罐的操作步骤以及注意事项、痧症的鉴定、手部刮痧、头部刮痧、眼部刮痧",
              img: "mr/course_detail_mr1_7.jpg",
            },
            {
              id: 7,
              tit: "美容仪器的认识",
              cont: "市面上常用的美容仪器的认识、冷热喷仪器的认识以及操作、市面上减肥仪器的了解",
              img: "mr/course_detail_mr1_6.jpg",
            },
            {
              id: 8,
              tit: "芳香系列",
              cont: "精油的了解、精油的分类以及作用、精油的使用方法、面部芳香SPA、颈部芳香SPA",
              img: "mr/course_detail_mr1_1.jpg",
            },
            {
              id: 9,
              tit: "淋巴排毒",
              cont: "耳后淋巴排毒、锁骨淋巴排毒",
              img: "mr/course_detail_mr1_4.jpg",
            },
            {
              id: 10,
              tit: "经营管理课程",
              cont: "美容师的职业要求、美容师礼仪学、美容师沟通学、美容院的接待与咨询、美容院应该具备的条件和设施、美容院顾客档案管理、店面员工管理",
              img: "mr/course_detail_mr1_3.jpg",
            },
            {
              id: 11,
              tit: "专业化妆师基础学",
              cont: "化妆的概念,起源的分析、化妆工具的认识以及使用方法、正确的工具摆放,操作渣程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正",
              img: "mr/course_detail_mr1_13.jpg",
            },
            {
              id: 12,
              tit: "专业化妆师发型学",
              cont: "发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、韩式内外卷烫发、欧式大波浪烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、假发的运用、韩式鱼骨辩",
              img: "mr/course_detail_mr1_11.jpg",
            },
            {
              id: 13,
              tit: "色彩学",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、色彩的选择和搭配",
              img: "mr/course_detail_mr1_8.jpg",
            },
            {
              id: 14,
              tit: "造型妆面",
              cont: "白然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、PARTY妆、立体V脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式宫廷华丽新娘妆、时尚晚宴妆、旗袍妆",
              img: "mr/course_detail_mr1_11.jpg",
            },
            {
              id: 15,
              tit: "美甲课程",
              cont: "指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、贴片的种类与工具的选择、半贴片的操作、全贴片的操作、基础涂单色的流程、法式甲的制作、单色渐变甲、小笔绘画甲",
              img: "mr/course_detail_mr1_15.jpg",
            },
          ];
          break;
        case "mr5":
          this.bannerDate = [{ id: 1, img: "mr/courDetail_mr5_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美容师基础知识",
              cont: "皮肤的构造、皮肤的分类、皮肤的生长因素、皮肤的九大功能、皮肤的定义、面部穴位的认识、美容师的职业要求",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 2,
              tit: "专业化妆品学习",
              cont: "化妆品的认识以及使用、化妆品的鉴别、如何选择正确的化妆品、化妆品过敏如何处理、化妆品如何保存、色斑皮肤如何选择化妆品、痤疮皮肤如何选择化妆品、敏感性皮肤如何选择化妆品、衰老性皮肤如何选择化妆品",
              img: "mr/course_detail_mr1_12.jpg",
            },
            {
              id: 3,
              tit: "相关皮肤问题的护理",
              cont: "肤色不良的形成以及护理、色斑皮肤的形成以及护理、痤疮皮肤的形成以及护理、敏感性皮肤的形成以及护理、衰老性皮肤的形成以及护理",
              img: "mr/course_detail_mr1_9.jpg",
            },
            {
              id: 4,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备、头部理疗、面部淋巴腺按摩",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 5,
              tit: "身体养生手法",
              cont: "肠胃保养、胸部保养、背部保养、腹部减肥、腿部减肥、背部减肥、腰部减肥、背部理疗、减肥的认识、手部减肥、卵巢保养、热石疗法、臀部保养、腹部保养",
              img: "mr/course_detail_mr1_4.jpg",
            },
            {
              id: 6,
              tit: "刮痧拔罐学",
              cont: "刮痧常用工具、面部刮痧的步骤、面部刮痧的注意事项、拔罐常用工具、拨罐的操作步器和注意事项、背部拔罐的手法以及注意事项、肩部拨罐的手法以及注意事项、走罐的操作步骤以及注意事项、痧症的鉴定、手部刮痧、头部刮痧、眼部刮疹",
              img: "mr/course_detail_mr1_7.jpg",
            },
            {
              id: 7,
              tit: "美容仪器的认识",
              cont: "市面上常用的美容仪器的认识、面部导入仪的认识以及操作、市面上减肥仪器的了解",
              img: "mr/course_detail_mr1_6.jpg",
            },
            {
              id: 8,
              tit: "芳香系列",
              cont: "精油的了解、精油的分类以及作用、精油的使用方法、面部芳香SPA、颈部芳香SPA",
              img: "mr/course_detail_mr1_1.jpg",
            },
            {
              id: 9,
              tit: "淋巴排毒",
              cont: "耳后淋巴排毒、锁骨淋巴排毒",
              img: "mr/course_detail_mr1_4.jpg",
            },
            {
              id: 10,
              tit: "经营管理课程",
              cont: "美容师的职业要求、美容师礼仪学、美容师沟通学、美容院的接待与咨询、美容院应该具备的条件和设施、美容院顾客档案管理、店面员工管理",
              img: "mr/course_detail_mr1_3.jpg",
            },
            {
              id: 11,
              tit: "专业化妆师基础学",
              cont: "化妆的概念,起源的分析、化妆工具的认识以及使用方法、正确的工具摆放,操作流程和标准姿势、工具的清洗以及保养、脸型的分析和矫正、日常眉型的分析以及画法、日常眼线的分析以及画法、日常唇形的分析以及画法、五官矫正法-脸型和眉型的矫正、发质的认识、发型如何分区、盘发工具的认识以及运用、气质标准高马尾、韩式内外卷烫发、欧式大波浪烫发、3D玉米烫发、日系反编三加二、经典四五六股手法、复古单层手推波纹、韩式波纹卷、假发的运用、韩式鱼骨辩",
              img: "mr/course_detail_mr1_13.jpg",
            },
            {
              id: 12,
              tit: "色彩学",
              cont: "色彩学的重要性与认识、色彩学的分类、色彩的运用以及注意事项、色彩的选择和搭配",
              img: "mr/course_detail_mr1_8.jpg",
            },
            {
              id: 13,
              tit: "造型妆面",
              cont: "自然简约生活妆、都市白领职业妆、韩式裸妆、甜心约会妆、经典烟熏妆、韩式自然新娘妆、古典中式新娘妆、新郎妆、韩式伴娘妆、PARTY妆、立体V脸妆、唯美新娘妆、民国秀禾妆、森系新娘妆、欧式宫廷华丽新娘妆、时尚晚宴妆、旗袍妆",
              img: "mr/course_detail_mr1_11.jpg",
            },
            {
              id: 14,
              tit: "美甲课程",
              cont: "指甲的构造与甲型的认识、不同甲型的修剪、美甲工具的认识与使用、贴片的种类与工具的选择、半贴片的操作、全贴片的操作、基础涂单色的流程、法式甲的制作、单色渐变甲、小笔绘画甲、梅花画法",
              img: "mr/course_detail_mr1_15.jpg",
            },
          ];
          break;
        case "byj1":
          this.bannerDate = [{ id: 1, img: "byj/courDetail_byj1_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "韩式半永久的基础知识",
              cont: "韩式半永久的了解、韩式半永久工具的认识及实操、数码仪器和针的分类、各类眉毛的画法(标准眉,一字眉,轻挑眉)、根据脸型设计不同眉形、半永久行业的发展史以及未来的流行趋势、半永久与传统纹绣的区别、人体面部的黄金比例分割、半永久的禁忌人群",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 2,
              tit: "韩式半永久(眉部、眼部)",
              cont: "眉部理论与操作流程、仿真线条眉仿真皮示范+练习、雾眉仿真皮示范+练习、魅惑美瞳线仿真皮操作、魅惑美瞳线操作技巧及护理保养、专业老师实操真人眉毛课程、魅惑美瞳线理论与操作流程、专业老师实操真人美瞳线",
              img: "byj/course_detail_byj1_6.jpg",
            },
            {
              id: 3,
              tit: "韩式半永久唇部操作",
              cont: "唇形的画法、水晶润唇理论与操作流程、水晶润唇仿真皮操作技巧、唇部注意事项及术后保养",
              img: "byj/course_detail_byj1_1.jpg",
            },
            {
              id: 4,
              tit: "经营管理经营管理",
              cont: "韩式半永久师的职业要求、店面接待流程、沟通学、礼仪学",
              img: "byj/course_detail_byj1_9.jpg",
            },
            {
              id: 5,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "byj/course_detail_byj1_13.jpg",
            },
            {
              id: 6,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "byj/course_detail_byj1_10.jpg",
            },
          ];
          break;
        case "byj2":
          this.bannerDate = [{ id: 1, img: "byj/courDetail_byj2_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "韩式半永久的基础知识",
              cont: "韩式半永久的了解、韩式半永久工具的认识及实操、数码仪器和针的分类、各类眉毛的画法(标准眉,一字眉,轻挑眉)、根据脸型设计不同眉形、半永久行业的发展史以及未来的流行趋势、半永久与传统纹绣的区别、人体面部的黄金比例分割、半永久的禁忌人群",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 2,
              tit: "韩式半永久(眉部、眼部)",
              cont: "眉部理论与操作流程、仿真线条眉仿真皮示范+练习、雾眉仿真皮示范+练习、丝雾眉仿真皮示范+练习、魅惑美瞳线仿真皮操作、魅惑美瞳线操作技巧及护理保养、专业老师实操真人眉毛课程、魅惑美瞳线理论与操作流程、专业老师实操真人美瞳线",
              img: "byj/course_detail_byj1_6.jpg",
            },
            {
              id: 3,
              tit: "韩式半永久(改眉盖眉)",
              cont: "修改老式红眉、修改老式蓝眉、修改残缺眉",
              img: "byj/course_detail_byj1_3.jpg",
            },
            {
              id: 4,
              tit: "韩式半永久唇部",
              cont: "唇形的画法、水晶润唇理论与操作流程、水晶润唇仿真皮操作技巧、唇部注意事项及术后保养",
              img: "byj/course_detail_byj1_1.jpg",
            },
            {
              id: 5,
              tit: "韩式半永久(驻颜粉底)",
              cont: "什么是驻颜粉底、驻颜粉底工具的认识及操作方法、驻颜粉底的作用及适用人群、驻颜粉底真人实操教学、驻颜粉底的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_8.jpg",
            },
            {
              id: 6,
              tit: "小纹身",
              cont: "什么是小纹身、小纹身工具的认识及操作方法、小纹身的作用及适用人群、小纹身真人实操教学、小纹身的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_12.jpg",
            },
            {
              id: 7,
              tit: "经营管理",
              cont: "韩式半永久的职业要求、店面接待流程、沟通学、礼仪学",
              img: "byj/course_detail_byj1_9.jpg",
            },
            {
              id: 8,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "byj/course_detail_byj1_13.jpg",
            },
            {
              id: 9,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备",
              img: "byj/course_detail_byj1_10.jpg",
            },
          ];
          break;
        case "byj3":
          this.bannerDate = [{ id: 1, img: "byj/courDetail_byj3_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "韩式半永久的基础知识",
              cont: "韩式半永久的了解、韩式半永久工具的认识及实操、数码仪器和针的分类、各类眉毛的画法(标准眉,一字眉,轻挑眉)、根据脸型设计不同眉形、半永久行业的发展史以及未来的流行趋势、半永久与传统纹绣的区别、人体面部的黄金比例分割、半永久的禁忌人群",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 2,
              tit: "韩式半永久(眉部、眼部)",
              cont: "眉部理论与操作流程、仿真线条眉仿真皮示范+练习、雾眉仿真皮示范+练习、丝雾眉仿真皮示范+练习、半永久纹绣定妆眉、魅惑关瞳线仿真皮操作、魅感关瞳线操作技巧及护理保养、专业老师实操真人眉毛课程、魅惑关瞳线理论与操作流程、专业老师实操真人关瞳线",
              img: "byj/course_detail_byj1_6.jpg",
            },
            {
              id: 3,
              tit: "韩式半永久(改眉盖眉)",
              cont: "修改老式红眉、修改老式蓝眉、修改残缺眉",
              img: "byj/course_detail_byj1_3.jpg",
            },
            {
              id: 4,
              tit: "韩式半永久(开运眉)",
              cont: "什么是开运眉,工具的认识及操作方法、开运眉的认识及操作方法、开运眉真人实操教学、开运眉的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_5.jpg",
            },
            {
              id: 5,
              tit: "韩式半永久(乳晕)",
              cont: "什么是乳晕、乳晕工具的认识及操作方法、乳晕的作用及适用人群、乳晕真人实操教学、乳晕的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_11.jpg",
            },
            {
              id: 6,
              tit: "韩式半永久唇部",
              cont: "唇形的画法、水晶润唇理论与操作流程、水晶润唇仿真皮操作技巧、国部注意事项及术后保养",
              img: "byj/course_detail_byj1_1.jpg",
            },
            {
              id: 7,
              tit: "韩式半永久(驻颜粉底)",
              cont: "什么是驻颜粉底、驻颜粉底工具的认识及操作方法、驻颜粉底的作用及适用人群、驻颜粉底真人实操教学、驻颜粉底的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_8.jpg",
            },
            {
              id: 8,
              tit: "小纹身",
              cont: "什么是小纹身、小纹身工具的认识及操作方法、小纹身的作用及适用人群、小纹身真人实操教学、小纹身的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_12.jpg",
            },
            {
              id: 9,
              tit: "韩式半永久(发际线)",
              cont: "什么是发际线、发际线工具的认识及操作方法、发际线的作用及适用人群、发际线真人实操教学、发际线的操作流程、学员真人练习",
              img: "byj/course_detail_byj1_2.jpg",
            },
            {
              id: 10,
              tit: "韩式半永久(孕睫)",
              cont: "什么是孕睫、孕睫的作用及适用人群、孕睫的操作流程、孕睫工具的认识及操作方法、孕睫真人实操教学",
              img: "byj/course_detail_byj1_7.jpg",
            },
            {
              id: 11,
              tit: "经营管理",
              cont: "韩式半永久的职业要求、店面接待流程、沟通学、礼仪学",
              img: "byj/course_detail_byj1_9.jpg",
            },
            {
              id: 12,
              tit: "专业美容师基础知识",
              cont: "皮肤的分类、面部穴位的认识、美容师的职业要求、手部保养、头部按摩",
              img: "byj/course_detail_byj1_13.jpg",
            },
            {
              id: 13,
              tit: "美容手法",
              cont: "面部洗脸手法、面部按摩手法、眼部按摩手法、肩颈部按摩手法、按摩的作用以及注意事项、美容师护理前的准备、",
              img: "byj/course_detail_byj1_10.jpg",
            },
          ];
          break;
        case "mf1":
          this.bannerDate = [{ id: 1, img: "mf/courDetail_mf1_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美发师基础学",
              cont: "毛发理学,头皮理学、毛发结构学、脸型和头型的认识、国际标准七大要素、经典分区点线面之间的关系、日式水洗,干洗",
              img: "mf/course_detail_mf1_8.jpg",
            },
            {
              id: 2,
              tit: "吹风造型系列",
              cont: "吹风工具的认识与使用、男士吹风造型男士蓬松造型、男士吹风造型男士定位造型、女士吹风造型中式大卷、女士吹风造型吹直吹蓬",
              img: "mf/course_detail_mf1_1.jpg",
            },
            {
              id: 3,
              tit: "染发系列",
              cont: "染发的工具和染膏,双氧的认识、染发的注意事项、染色操作全流程、国际染膏颜色代码的认识",
              img: "mf/course_detail_mf1_6.jpg",
            },
            {
              id: 4,
              tit: "剪发系列",
              cont: "剪发工具的认识以及运用、经典的发型分区、男士电推操作以及使用、均等裁剪、女士长碎发造型、女士刘海分区、男士板寸圆寸毛寸、女士短发造型、女士日韩发型烫发系列、国际四大排版操作以及运用方法、国际标准离子烫,冷烫,热烫",
              img: "mf/course_detail_mf1_3.jpg",
            },
            {
              id: 5,
              tit: "经营管理课程",
              cont: "美发师的职业要求、美发店工作的相关流程和注意事项、礼仪学",
              img: "mf/course_detail_mf1_4.jpg",
            },
          ];
          break;
        case "mf2":
          this.bannerDate = [{ id: 1, img: "mf/courDetail_mf2_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美发师基础学",
              cont: "毛发理学,头皮理学、毛发结构学、脸型和头型的认识、国际标准七大要素、经典分区点线面之间的关系、日式水洗,干洗",
              img: "mf/course_detail_mf1_8.jpg",
            },
            {
              id: 2,
              tit: "吹风造型系列",
              cont: "吹风工具的认识与使用、男士吹风造型男士蓬松造型、男士吹风造型男士定位造型、女士吹风造型中式大卷、女士吹风造型吹直吹蓬、男士吹风造型男士时尚吹风造型、女士吹风造型日韩吹风造型、女士吹风造型手吹大卷",
              img: "mf/course_detail_mf1_1.jpg",
            },
            {
              id: 3,
              tit: "染发系列",
              cont: "染发的工具和染喜,双氧的认识、染发的注意事项、染色操作全流程、国际染膏颜色代码的认识、商业片染的操作流程、染色褪色白发覆盖、多种补色操作流程",
              img: "mf/course_detail_mf1_6.jpg",
            },
            {
              id: 4,
              tit: "剪发系列",
              cont: "剪发工具的认识以及运用、经典的发型分区、男士电推操作以及使用、均等栽剪、女士长碎发、女士刘海分区、男士板寸,圆寸,毛寸、女士短发、女士日韩发型、女士日韩时尚发型、男士日韩时尚发型、沙宣B0B经典裁剪、沙宣经典组合裁剪、盖白发理论、点线面体理论、角度与切口、站姿站位、经典三角形45'C推挤重量、短碎发的剪法",
              img: "mf/course_detail_mf1_3.jpg",
            },
            {
              id: 5,
              tit: "烫发系列",
              cont: "国际四大排版操作以及运用方法、国际标准离子烫,冷烫,热烫、日韩空气灵感烫、欧美立体数码烫",
              img: "mf/course_detail_mf1_7.jpg",
            },
            {
              id: 6,
              tit: "经营管理课程",
              cont: "美发师的职业要求、美发店工作的相关流程和注意事项、礼仪学、美发店人员的管理体系、美发店人员的培训体系、美发店的销售特点与技巧",
              img: "mf/course_detail_mf1_4.jpg",
            },
          ];
          break;
        case "mf3":
          this.bannerDate = [{ id: 1, img: "mf/courDetail_mf3_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美发师基础学",
              cont: "毛发理学,头皮理学、毛发结构学、脸型和头型的认识、国际标准七大要素、经典分区点线面之间的关系、日式水洗,干洗",
              img: "mf/course_detail_mf1_8.jpg",
            },
            {
              id: 2,
              tit: "吹风造型系列",
              cont: "吹风工具的认识与使用、男士吹风造型男士蓬松造型、男士吹风造型男士定位造型、男士吹风造型男士时尚吹风造型、女士吹风造型中式大卷、女士吹风造型日韩吹风造型、女士吹风造型吹直吹蓬、男士吹风造型男士日韩吹风造型、女士吹风造型手吹大卷、水平外翘外斜大花时尚吹风造型、女士吹风造型欧美吹风",
              img: "mf/course_detail_mf1_1.jpg",
            },
            {
              id: 3,
              tit: "染发系列",
              cont: "染发的工具和染膏,双氧的认识、染发的注意事项、染色操作全流程、国际染颜色代码的认识、商业片染的操作流程、染色,褪色,白发覆盖、多种补色操作流程、日式3D立体挑染、调彩加强色工具色的应用、漂粉及0-00的应用、染膏色素量、天然底色及天然底色色量、对冲原理、棕色系微潮色配方、光线染、多色挑染、后颈染/后劲多色染、挂耳染/挂耳多色染",
              img: "mf/course_detail_mf1_6.jpg",
            },
            {
              id: 4,
              tit: "剪发系列",
              cont: "剪发工具的认识以及运用 、经典的发型分区、男士电推操作以及使用、均等裁剪、女士日韩时尚发型、男士日韩时尚发型、女士长碎发、男士板寸,圆寸,毛寸、女士短发、沙宣B0B经典裁剪、沙宣经典组合裁剪、线条与形态的处理技巧、几何学在发型设计中的运用、沙宣混合滚动性立体裁剪",
              img: "mf/course_detail_mf1_3.jpg",
            },
            {
              id: 5,
              tit: "烫发系列",
              cont: "国际四大排版操作以及运用方法、国际标准离子烫,冷烫,热烫、日韩空气灵感烫、欧美立体数码烫、日本菱形烫、日韩潮流烫",
              img: "mf/course_detail_mf1_7.jpg",
            },
            {
              id: 6,
              tit: "经营管理课程",
              cont: "美发师的职业要求、美发店工作的相关流程和注意事项、礼仪学、美发店人员的管理体系、美发店人员的培训体系、美发店的销售特点与技巧",
              img: "mf/course_detail_mf1_4.jpg",
            },
          ];
          break;
        case "mf4":
          this.bannerDate = [{ id: 1, img: "mf/courDetail_mf4_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美发师基础学",
              cont: "毛发理学,头皮理学、毛发结构学、脸型和头型的认识、国际标准七大要素、经典分区点线面之间的关系、日式水洗,干洗",
              img: "mf/course_detail_mf1_8.jpg",
            },
            {
              id: 2,
              tit: "吹风造型系列",
              cont: "吹风工具的认识和使用、男士吹风造型男士莲松造型、男士吹风造型男士定位造型、男士吹风造型男士时尚吹风造型、女士吹风造型中式大卷、女士吹风造型日韩吹风造形、女士吹风造型吹直吹蓬、男士吹风造型男士日韩吹风造型、女士吹风造型欧美吹风、女士吹风造型手吹大卷、日系浪漫时尚吹风造型、尖尾梳时尚爆米花造型、水平外翘,外斜大花时尚吹风造型、日韩森系时尚吹风造型、沙宣几何吹风造型、经典的直线曲线纹理经典造型、日式翻翘女士短发造型、商业吹风造型手法及解析、国际量感吹风要诀、内层打薄、内层高层次打薄、内层低层次打薄、内层打薄的深度中度浅度、线条打薄、发根打薄、修饰剪打薄技术、平剪深刻痕,浅刻痕修饰、左右滑剪/上下滑剪打薄、飞剪技术组合、不连接大切口打薄",
              img: "mf/course_detail_mf1_1.jpg",
            },
            {
              id: 3,
              tit: "染发系列",
              cont: "染发的工具和染膏,双氧的认识、染发的注意事项、染色操作全流程、国际染膏颜色代码的认识、商业片染的操作流程、日式3D立体挑染、染色,褪色和白发覆盖、多种补色操作流程、国际新潮漂染、日韩唯美花色染、两重,三重色染发操作流程、原色对冲色用法,颜色抵消,漂洗用法、色素淡化",
              img: "mf/course_detail_mf1_6.jpg",
            },
            {
              id: 4,
              tit: "剪发系列",
              cont: "剪发工具的认识以及运用、经典的发型分区、男士电推操作以及使用、均等裁剪、女士日韩时尚发型、男士日韩时尚发型、女士长碎发、女士刘海分区、男士板寸,圆寸,毛寸、女士短发、女士日韩发型、沙宣BOB经典裁剪、沙宣经典组合裁剪、线条与形态的处理技巧、几何学在发型设计中的运用、三维立体空间方位定点裁剪、三维立体轮廓,重度,重感的调整、方,圆,三角及动力学的作用及操作、沙宣BOB发型、托尼盖技术原理,剪发示范、沙宣几何学的线面立体对比创造概念",
              img: "mf/course_detail_mf1_3.jpg",
            },
            {
              id: 5,
              tit: "烫发系列",
              cont: "国际四大排版操作以及运用方法、国际标准离子烫,冷烫,热烫、日韩空气灵感烫、欧美立体数码烫、日韩潮流烫、日本菱形烫、三维空间固体烫、标榜烫发全过程、日式蛋卷烫发、国际新潮流组合花式烫",
              img: "mf/course_detail_mf1_6.jpg",
            },
            {
              id: 6,
              tit: "盘发书法造型",
              cont: "假发的认识以及运用、经典赫本造型、日韩半丸子头、晚宴高盘发造型、经典玫瑰卷、韩式S型辫、手推水波纹、中式新娘盘发、经典中国结、日系反编三加二、气质标准高马尾、清新四叶草",
              img: "mf/course_detail_mf1_5.jpg",
            },
            {
              id: 7,
              tit: "化妆课程",
              cont: "自然简约生活妆、甜心约会美妆、都市白领职业妆、韩式裸妆、潮流晚宴妆",
              img: "mf/course_detail_mf1_2.jpg",
            },
            {
              id: 8,
              tit: "经营管理课程",
              cont: "美发师的职业要求、美发店工作的相关流程和注意事项、礼仪学、美发店人员的管理体系、美发店人员的培训体系、美发店的销售特点与技巧",
              img: "mf/course_detail_mf1_4.jpg",
            },
          ];
          break;
        case "qn1":
          this.bannerDate = [{ id: 1, img: "qn/courDetail_qn1_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美容师知识",
              cont: "皮肤的构造、皮肤的分类以及测试方法、皮肤的生长因素、皮肤的九大功能、问题性皮肤的分析及处理、面部穴位功效解析、按摩的作用及注意事项",
              img: "mr/course_detail_mr1_14.jpg",
            },
            {
              id: 2,
              tit: "美容手法",
              cont: "面部微雕的手法、眼部疏通手法、肩颈部按摩的手法、纤手护理、天鹅颈、肠胃保养、胸部疏通、背部保养、温宫卵巢保养、腿部疏通、翘臀理疗、三大淋巴排毒、腹部减肥",
              img: "mr/course_detail_mr1_2.jpg",
            },
            {
              id: 3,
              tit: "芳香系列",
              cont: "精油的了解、精油的分类及作用、单芳精油的调配及功效、复芳精油的功效、精油的使用方式",
              img: "mr/course_detail_mr1_1.jpg",
            },
            {
              id: 4,
              tit: "中医养生",
              cont: "背部诊断、面诊、舌诊、紫竹微排、刺络放血、耳烛灸、宫寒的症状的解析、泥灸的功效及注意事项、肾部的结构及亚健康的分析、胸部的病症分析",
              img: "mr/course_detail_mr1_7.jpg",
            },
            {
              id: 5,
              tit: "皮肤管理",
              cont: "小气泡的使用及功效、激光祛斑、芦荟灌肤、冰点脱毛、光子嫩肤、超声刀抗衰、MTS皮肤管理、超声波导入、韩式皮肤管理的认识、黄金焕肤术、樱花焕肤术、木乃伊焕肤术、黑脸娃娃认识及操作、铲皮仪的使用及功效",
              img: "mr/course_detail_mr1_9.jpg",
            },
            {
              id: 6,
              tit: "产后康复",
              cont: "满月发汗的作用、产后做骨盆修复的重要性、骨盆变形的危害、产后腹直肌修复的必要性、盆底肌的重要性、腹直肌修复手法、通乳,排残奶的手法",
              img: "mr/course_detail_mr1_10.jpg",
            },
            {
              id: 7,
              tit: "美容院营销学",
              cont: "美容的经营管理、美容院产品了解、如何处理美容院纠纷、如何锁客拓客提升客户消费、如何维护好客情及邀约休眠客户话术、美容院销售八大关、美容院的接待话术",
              img: "mr/course_detail_mr1_3.jpg",
            },
          ];
          break;
        case "qn2":
          this.bannerDate = [{ id: 1, img: "qn/courDetail_qn2_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "国际高端课程",
              cont: "国际美甲概念学、美甲专业色彩调配、高端美甲培训讲师定位",
              img: "mj/course_detail_mj1_1.jpg",
            },
            {
              id: 2,
              tit: "韩式半永久(眉部、眼部)",
              cont: "打磨机的操作方法及注意事项、打磨机的前置处理、打磨机的卸甲处理",
              img: "mj/course_detail_mj1_11.jpg",
            },
            {
              id: 3,
              tit: "美甲喷枪款式",
              cont: "喷枪格纹、喷枪渐变、喷枪唯美彩蝶、喷枪双层花卉、喷枪日式晕染、喷枪鹌鹑蛋款、喷枪渐变法式",
              img: "mj/course_detail_mj1_5.jpg",
            },
            {
              id: 4,
              tit: "时尚系列款式",
              cont: "时尚泡泡甲、刺绣花卉甲、镭射水波纹、渐变山丘甲、幻彩贝壳甲、芭蕾舞鞋甲、流行编织甲、性感蕾丝甲、秋日豹纹甲、涩味蛇纹田、初冬宝格丽、磨砂木纹甲、磨砂木纹甲、渐变菱形格纹甲、香风毛呢甲、英伦毛衣甲、烈火焰日甲、飘逸百褶裙、网红飘带甲、黑色棋盘甲、波西米亚甲、猫眼星空甲、幻彩羽毛甲、立体橙子甲、多色涂鸦甲",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 5,
              tit: "各类饰品的搭配款式",
              cont: "日式干花甲、日式宝石款、日式贴纸款、美甲满钻款、鲍鱼贝壳款、永生花水晶球、极光粉的操作、转印纸的操作、日式链条的操作",
              img: "mj/course_detail_mj1_5.jpg",
            },
            {
              id: 6,
              tit: "高级新娘甲系列",
              cont: "白纱新、韩式新娘甲、中式复古风",
              img: "mj/course_detail_mj1_10.jpg",
            },
            {
              id: 7,
              tit: "日式晕染款式",
              cont: "简约大理石、玳瑁琥珀甲、高调翡翠甲、山水墨画甲、石膏油画甲、纸巾晕染甲、淡彩水莲甲",
              img: "mj/course_detail_mj1_6.jpg",
            },
            {
              id: 8,
              tit: "高级水晕染系列款",
              cont: "水彩花卉甲、水彩玫瑰甲、水染五瓣花",
              img: "mj/course_detail_mj1_4.jpg",
            },
            {
              id: 9,
              tit: "日式手绘款式",
              cont: "卡通无脸男、猫眼斑马纹、摩洛哥图腾、幻彩羽毛甲、圣诞节日款、春节新年款、彩绘米老鼠、手绘招财猫、彩绘卡通人物、晶石猫眼可爱熊、中国风手绘仙鹤",
              img: "mj/course_detail_mj1_3.jpg",
            },
            {
              id: 10,
              tit: "微浮雕系列款式",
              cont: "璀璨金鱼甲、立体蝴蝶结、唯美狐狸甲",
              img: "mj/course_detail_mj1_4.jpg",
            },
            {
              id: 11,
              tit: "日式立体款式",
              cont: "5D招财猫、5D茶杯犬、5D布朗熊、5D嘟嘟猪、5D财神爷、5D雕花玫瑰、5D圣诞老人、12D京剧脸谱",
              img: "mj/course_detail_mj1_10.jpg",
            },
            {
              id: 12,
              tit: "花开富贵图排比系列",
              cont: "3D大排笔系列之百合花、3D大排笔系列之梅花树、3D大排笔系列之双层尖花",
              img: "mj/course_detail_mj1_8.jpg",
            },
            {
              id: 13,
              tit: "店面的经营课程",
              cont: "社区群众运营、日本极致服务、树立老板形象、销售系统流程、价格的定制化、提高口才情商",
              img: "mj/course_detail_mj1_9.jpg",
            },
          ];
          break;
        case "qn3":
          this.bannerDate = [{ id: 1, img: "qn/courDetail_qn3_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "专业美发师基础学",
              cont: "毛发理学,头皮理学、毛发结构学、脸型和头型的认识、国际标准七大要素、经典分区点线面之间的关系、日式水洗,干洗",
              img: "mf/course_detail_mf1_8.jpg",
            },
            {
              id: 2,
              tit: "吹风造型系列",
              cont: "吹风工具的认识与使用、男士吹风造型男士蓬松造型、男士吹风造型男士定位造型、女士吹风造型中式大卷、女士吹风造型吹直吹蓬、男士吹风造型男士时尚吹风造型、女士吹风造型日韩吹风造型、女士吹风造型手吹大卷、三维立体吹风造型、日系慵懒造型、束状感卷发造型、接发系列、水品无痕、贴片式、渐变色接发、美式脏辫",
              img: "mf/course_detail_mf1_1.jpg",
            },
            {
              id: 3,
              tit: "染发系列",
              cont: "染发的工具和染喜,双氧的认识、染发的注意事项、染色操作全流程、国际染膏颜色代码的认识、商业片染的操作流程、染色褪色白发覆盖、多种补色操作流程",
              img: "mf/course_detail_mf1_6.jpg",
            },
            {
              id: 4,
              tit: "剪发系列",
              cont: "剪发工具的认识以及运用、经典的发型分区、男士电推操作以及使用、均等裁剪、女士长碎发、女士刘海分区、男士板寸,圆寸,毛寸、女士短发、女士日韩发型、女十日韩时尚发型、男士日韩时尚发型、沙宣B0B经典裁剪、沙宣经典组合裁剪、盖白发理论、点线面体理论、角度与切口、站姿站位、经典三角形45°C推挤重量、短碎发的剪法、刀法解析、TonIGuy剪发讲解、BOB发型设计系列、各种刘海讲解及剪法、美发男士雕刻剪发技巧、线条雕刻、男士渐变操作讲解、男士清理边缘、网红发型解析、欧式发型风格解析、日韩发型风格解析",
              img: "mf/course_detail_mf1_3.jpg",
            },
            {
              id: 5,
              tit: "烫发系列",
              cont: "商业造型烫发讲解、皮卡路烫发、时尚潮流齐肩烫发奥义、欧式复古波浪卷、国际冷烫波浪烫发设计理念、国际女士波浪发、国际四大排版操作以及运用方法、国际标准离子烫、冷烫、热烫、日韩空气灵感烫、欧美立体数码烫",
              img: "mf/course_detail_mf1_1.jpg",
            },
            {
              id: 6,
              tit: "色彩系列",
              cont: "对冲色讲解及运用、同色系渐变染色、多段色渐变染色、巴黎画染、三原色,色轮环讲解、各种颜色的含义及美发颜色的区别、微潮色运用",
              img: "mf/course_detail_mf1_7.jpg",
            },
            {
              id: 7,
              tit: "经营管理课程",
              cont: "美发师的职业要求、美发店工作的相关流程和注意事项、礼仪学、美发店人员的管理体系、美发店人员的培训体系、美发店的销售特点与技巧",
              img: "mf/course_detail_mf1_4.jpg",
            },
          ];
          break;
        case "qn4":
          this.bannerDate = [{ id: 1, img: "qn/courDetail_qn4_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "国际化妆理论实践基石",
              cont: "浅谈中国电影化妆发展简史、正确摆放和护理及拿握站姿、深度了解彩妆产品的特征与功效、时尚高级美妆新概念、时尚化妆流行趋势分析、了解面部结构与五官比列对视呈现的影响、人物脸型及面部特点分析、面部标准美及标准五官",
              img: "hz/course_detail_hz6_1.png",
            },
            {
              id: 2,
              tit: "美术上层艺术",
              cont: "实用美术在化妆专业中的应用、平面素描眉眼唇、3D立体素描眉眼唇",
              img: "hz/course_detail_hz6_2.png",
            },
            {
              id: 3,
              tit: "色彩学",
              cont: "色彩基础认知、色调与色系、妆容效果美人图绘制、国际美学技法研修、平面底妆的方法及运用、七大眉形的分析和技法运用、多种唇形的分析和技法运用、3D立体底妆的技法运用、韩式平涂眼妆技法、韩式渐层眼妆技法、欧美假双眼妆技法、欧美后移眼妆技法、欧美前移眼妆技法、日式烟熏眼妆技法、欧式眼妆技法、多种眼线的技法运用、面部立体修容的技法运用、多种腮红的技法运用、卷翘上下睫毛的技法运用、粘贴整段式及分段式睫毛的技法运用、粘贴下睫毛的技法运用、传统美目贴的技法运用、不同脸型与眉形的搭配、多种眼型的矫正调整",
              img: "hz/course_detail_hz6_3.png",
            },
            {
              id: 4,
              tit: "国际潮流美发专修技术",
              cont: "发型基础知识、冷热工具及盘发工具认知与基本使用方法、高级手法一一倒梳、高级手法一一手打卷 、高级手法一一三加二立体反边、高级手法一一包发、高级手法一一四,五,六股编发、高级手法一一鱼骨辫编发、高级手法一一S辫编发、高级手法一一四叶草编发、高级手法一一经典中国结编发、高级手法一一内外卷发、高级手法一一3D玉米须烫发、高级手法一一标准马尾、高级手法一一复古单,双层推波、真假发结合使用、复古单双层手推波纹",
              img: "hz/course_detail_hz6_4.png",
            },
            {
              id: 5,
              tit: "鱼骨轻推",
              cont: "鱼骨轻推的由来、鱼骨轻推和传统美目贴的区别、鱼骨轻推技巧步骤、鱼骨轻推5.0",
              img: "hz/course_detail_hz6_5.png",
            },
            {
              id: 6,
              tit: "高级新娘甲系列",
              cont: "喷枪大普及、什么是喷枪、喷枪历史、喷枪与彩妆、喷枪颜料、喷枪的优点及功效、喷枪的正确操作方法及点线面练习、喷枪清透水润心机裸妆、高级技法一一羽化法(星芒妆)、高级技法一一反透法(冷眼看世界)、高级技法一一色彩叠加法(银河)、高级技法一一遮盖法(梦魇)、高级技法一一镂空法(天使泪)、高级技法一一催流法(涟漪)、高级技法一一粘合法(蔓延)、高级技法一一喷溅法(荼靡)、喷枪创意技法一一梦幻泡影、喷枪彩妆模板制作、DIY自己的彩妆一一将所有化妆品喷出来",
              img: "hz/course_detail_hz6_6.png",
            },
            {
              id: 7,
              tit: "影视剧组伤效创造技法",
              cont: "割腕、断指、烧伤、刮伤、淤青、脓包、枪伤、腐烂效果、抓伤、咬伤、受伤无眼、各种疤痕增生、局部错位视觉、炸伤、老疤、血浆的制作、勾织胡子",
              img: "hz/course_detail_hz6_7.png",
            },
            {
              id: 8,
              tit: "经典舞台戏曲设计绘制",
              cont: "舞台化妆的特点、舞台表演妆造设计、戏曲妆容搭配技巧及五官勾画技巧(人体彩绘)、装扮典型戏曲脸谱勾画",
              img: "hz/course_detail_hz6_8.png",
            },
            {
              id: 9,
              tit: "高级手工技法饰品制作",
              cont: "羽毛饰品制作、手工造花制作、创意珠艺制作、古装饰品制作、T台创意夸张饰品制作、创意面具制作、造花液饰品制作、各式手缝针法",
              img: "hz/course_detail_hz6_9.png",
            },
            {
              id: 10,
              tit: "中国经典影视角色设计塑造",
              cont: "秦朝时期妆容造型发展由来及特点、秦朝经典妆容造型设计、汉朝时期妆容造型发展由来及特点、汉朝经典妆容造型设计、唐朝时期造型发展由来和特点、唐朝时期妆容造型设计、宋朝时期妆容造型发展由来及特点、宋朝时期妆妆容造型设计、元朝时期妆容造型发展由来及特点、元朝时期妆妆容造型设计、明朝时期妆容造型发展由来及特点、明朝时期妆妆容造型设计、清朝时期妆容造型发展由来及特点、清朝时期妆容造型设计、韩国传统妆容造型发展由来及特点、韩国传统妆容造型设计、日本艺伎妆容造型发展由来及特点、日本艺伎妆容造型设计、埃及艳后妆容造型发展由来及特点、埃及艳后妆容造型设计、骷髅妆容造型设计、泰国妆容造型发展由来及特点、泰国妆容造型设计",
              img: "hz/course_detail_hz6_10.png",
            },
            {
              id: 11,
              tit: "高级新娘整体妆造设计",
              cont: "唯美韩式新娘(丝质饰品搭配)、气质西式新娘(皇冠饰品搭配)、甜美日式新娘(鲜花饰品搭配)、复古法式新娘(帽饰饰品搭配)、新娘晚礼妆发设计、新娘旗袍妆发设计、新娘中式复古妆发设计、新娘古典中式妆发设计、新娘欧式复古妆发设计、新娘出门,仪式,敬酒妆发解析、西式短发新娘妆发设计、中式短发新娘妆发设计、复古油画风格妆发设计、国潮风格写真妆造设计、新郎妆,父亲妆、伴娘妆,妈妈妆",
              img: "hz/course_detail_hz6_11.png",
            },
            {
              id: 12,
              tit: "国际现代美学风格定妆术",
              cont: "百搭休闲妆、清雅职业妆、韩式裸妆、个性时尚妆、洛丽塔妆造设计、男士造型设计、逆龄妆发设计、轻奢名媛妆法设计、晒伤妆、轻欧美混血妆发设计",
              img: "hz/course_detail_hz6_1.png",
            },
            {
              id: 13,
              tit: "国际商业化明星平面整体造型",
              cont: "国际T台妆容造型设计、电视主持人妆容造型设计、明星红毯妆容造型设计、杂志封面妆容造型设计、护肤品广告妆容造型设计",
              img: "hz/course_detail_hz6_2.png",
            },
            {
              id: 14,
              tit: "全面技能掌握主题练习",
              cont: "日常化妆整体造型、综合发型技巧、新娘整体造型、老年妆整体造型、战争面目全非妆造、艺术创作、古代人物造型、影视特效整体塑造",
              img: "hz/course_detail_hz6_3.png",
            },
            {
              id: 15,
              tit: "化妆师职业课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备沟通学、时间管理学",
              img: "hz/course_detail_hz6_4.png",
            },
          ];
          break;
        case "qn5":
          this.bannerDate = [{ id: 1, img: "qn/courDetail_qn5_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "国际化妆理论实践基石",
              cont: "威尼斯面具喷绘效果、摄影新娘喷绘效果、创意眼妆喷绘效果、广告色彩喷绘设计、羽画法理论认识、黏合发理论认识、镂空法理论认识、遮盖法理论认识、催流法理论认识、色彩叠加法理论认识、喷渐法理论认识、唯美星空喷绘效果",
              img: "hz/course_detail_hz6_1.png",
            },
            {
              id: 2,
              tit: "影视人物仿妆",
              cont: "洛丽塔妆面造型设计、老年人物塑造(绘画法)、莱托小丑仿妆、青蛇仿妆、青蛇仿妆造型、敦煌飞天造型、敦煌飞天、盛唐时期妆容造型的由来及特点、大唐盛妆妆容造型设计、清朝格格妆容的由来和特点、清朝格格妆容造型设计、汉朝时期妆容造型的由来及特点、汉朝时期妆容造型设计、韩国传统传统妆容的由来及特点、韩国传统妆容造型设计、日本艺伎妆容造型由来及特点、日本艺伎妆容造型设计、埃及艳后妆容造型的由来及特点、埃及艳后妆容造型设计、印度妆容造型的由来及特点、秦朝妆容造型由来及特点、秦朝妆面造型设计、戏曲妆、宋制珍珠整体造型设计、创意古风妆面造型",
              img: "hz/course_detail_hz6_2.png",
            },
            {
              id: 3,
              tit: "轻奢时尚现代",
              cont: "时尚大烟熏、复古摩登、摩登造型、轻著名媛妆面造型、国潮造型、轻欧美混血妆、厌世妆、湿推造型、国际T台秀场妆、法式公主风、舞台化妆的特点、舞台表演妆、部落女酋妆、猫头鹰妆面造型、泰妆、复古油画风、复古油画造型、蝴蝶妆、欧美妆容介绍、欧美写真拍摄妆面造型",
              img: "hz/course_detail_hz6_3.png",
            },
            {
              id: 4,
              tit: "个人形象设计",
              cont: "羽毛饰品制作、创意面具制作、古装饰品制作、森系鲜花饰品制作、帽式新娘头饰制作、中国结编发、四股编、铜钱编、蝴蝶结、国际知名彩妆品牌的认识、女人穿衣的职业法则、色彩的选择和搭配、电影卧蚕的塑造及技巧、人体彩绘-局部、彩妆设计稿、仿真野生眉手绘",
              img: "hz/course_detail_hz6_4.png",
            },
            {
              id: 5,
              tit: "十大艺术风格认识",
              cont: "洛可可艺术风格解析、极限主义艺术风格解析、拜占庭艺术风格解析、超现实主义艺术风格解析、国际哥特艺术风格解析、波普艺术风格解析、巴洛克艺术风格解析、新古典艺术风格解析、肖拉斐尔艺术风格解析、欧普艺术风格解析、洛可可新娘妆、轻奢巴洛克新娘妆",
              img: "hz/course_detail_hz6_5.png",
            },
            {
              id: 6,
              tit: "影视特效",
              cont: "刀疤、光头制作、面目全非特效、丧尸整体人物塑造、断掌、老人妆(催皱法)、骷髅妆、创意广告特效妆、枪伤、万圣节妆容塑造",
              img: "hz/course_detail_hz6_6.png",
            },
            {
              id: 7,
              tit: "专业化妆师职业专修课",
              cont: "化妆师职业要求、化妆师必备礼仪学、化妆师必备淘通学、时间管理学",
              img: "hz/course_detail_hz6_7.png",
            },
          ];
          break;
        case "qn6":
          this.bannerDate = [{ id: 1, img: "qn/courDetail_qn6_banner1.jpg" }];
          this.courseDetailDate = [
            {
              id: 1,
              tit: "韩式半永久的基础知识",
              cont: "韩式半永久的了解、韩式半永久工具的认识及实操、数码仪器和针的分类、各类眉毛的画法(标准眉,一字眉,轻挑眉)、根据脸型设计不同眉形、半永久行业的发展史以及未来的流行趋势、半永久与传统纹绣的区别、人体面部的黄金比例分割、半永久的禁忌人群",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 2,
              tit: "韩式半永久(眉部、眼部)",
              cont: "眉部理论与操作流程、仿真线条眉仿真皮示范+练习、雾眉仿真皮示范+练习、丝雾眉仿真皮示范+练习、半永久纹绣定妆眉、魅惑美瞳线仿真皮操作、魅惑美瞳线操作技巧及护理保养、专业老师实操真人眉毛课程、魅惑美瞳线理论与操作流程、专业老师实操真人美瞳线",
              img: "byj/course_detail_byj1_6.jpg",
            },
            {
              id: 3,
              tit: "韩式半永久唇部操作",
              cont: "唇形的画法、水晶润唇理论与操作流程、水晶润唇仿真皮操作技巧、唇部注意事项及术后保养",
              img: "byj/course_detail_byj1_1.jpg",
            },
            {
              id: 4,
              tit: "理论知识",
              cont: "各类皮肤的操作技巧、眉毛操作后的几大问题及处理方法、面部十二宫、玄学话术之开运眉设计、激光洗眉术",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 5,
              tit: "高端雾眉系列",
              cont: "海藻眉、氢氧眉、粉墨眉、高光眉、轻奢定妆眉、轻奢滚轮眉、手工拉丝雾眉、仪器粉黛眉",
              img: "byj/course_detail_byj1_5.jpg",
            },
            {
              id: 6,
              tit: "仿真线条系列",
              cont: "3D飘逸眉、开运眉设计、野生眉、男士商务眉、男士野生眉、免麻仪器仙绒眉",
              img: "byj/course_detail_byj1_7.jpg",
            },
            {
              id: 7,
              tit: "高端眼部系列",
              cont: "6D魅惑亮眼定妆术、手工美瞳线、沙雾美瞳线",
              img: "byj/course_detail_byj1_13.jpg",
            },
            {
              id: 8,
              tit: "高端唇部系列",
              cont: "韩式手工花瓣唇、梦露红唇、时尚渐变唇、免麻仪器点雾唇部手法、唇部开运讲解",
              img: "byj/course_detail_byj1_1.jpg",
            },
            {
              id: 9,
              tit: "素描系列",
              cont: "素描眉眼唇结构分析、美妆素描标准眉,男士眉、美妆素描闭眼,睁眼、美妆素描-咬唇、美妆素描-微笑唇、美妆素描-嘟嘟唇、一秒点斑祛痣",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 10,
              tit: "个人形象塑造课",
              cont: "心机裸妆、职场精英妆、高冷宴会妆、开店如何选址/营销/策划、如何引流客户以及升单",
              img: "byj/course_detail_byj1_8.jpg",
            },
            {
              id: 11,
              tit: "美睫理论",
              cont: "美睫上模头+练习、睫毛实操流程、美业人的必修课",
              img: "byj/course_detail_byj1_4.jpg",
            },
            {
              id: 12,
              tit: "经营管理",
              cont: "韩式半永久的职业要求、店面接待流程、沟通学、礼仪学",
              img: "byj/course_detail_byj1_9.jpg",
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
/* 课程简介 */
.courseIntro_wrap {
  padding-bottom: 40px;
  .tit_wrap {
    text-align: center;
    padding-top: 130px;
    padding-bottom: 70px;
    img {
      width: 655px;
      height: 104px;
    }
    h1 {
      font-size: 45px;
      font-weight: 400;
      margin-top: 10px;
    }
  }
  .cont_wrap {
    width: 950px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .item {
      width: 300px;
      border: 2px solid #727171;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 30px;
      .iconfont {
        color: #970518;
      }
      .icon-caizhuang-- {
        font-size: 70px;
        height: 112px;
        display: flex;
        align-items: center;
      }
      .icon-RectangleCopy {
        font-size: 110px;
      }
      .icon-weibiaoti1 {
        font-size: 110px;
      }
      strong {
        font-size: 34px;
        padding: 0px 0 45px;
      }
      p {
        font-size: 18px;
        line-height: 29px;
        text-align: justify;
      }
    }
  }
}

// 课程介绍
.courseDetail_wrap {
  width: 100%;
  padding-top: 170px;
  padding-bottom: 235px;
  background-color: #000000;
  margin-bottom: 105px;
  .tit_wrap {
    text-align: center;
    margin-bottom: 110px;
    img {
      width: 650px;
      height: 103px;
    }
    h1 {
      font-size: 42px;
      font-weight: 400;
      margin-top: 10px;
      color: #ffffff;
    }
  }
  .couseDetail_wrap {
    background: url(../../assets/images/courseDetail/course_bg.jpg) no-repeat
      left center;
    .item {
      width: 950px;
      margin: 60px auto 0 auto;
      color: #ffffff;
      border: 1px dashed #ffffff;
      padding: 8px 30px 8px 8px;
      display: flex;
      .lf {
        width: 330px;
        img {
          width: 100%;
          height: 220px;
        }
      }
      .rt {
        flex: 1;
        display: flex;
        padding-top: 10px;
        justify-content: flex-end;
        .tit {
          .iconfont {
            font-size: 30px;
            color: #970518;
          }
          margin-right: 10px;
          margin-top: -2px;
        }
        .cont {
          width: 455px;
          h3 {
            font-size: 23px;
            margin-top: -3px;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            text-align: justify;
            width: 100%;
            height: 170px;
            overflow: auto;
          }
        }
      }
    }
  }
}
</style>