<template>
  <div>
    <!-- banner -->
    <el-carousel indicator-position="none" height="550px">
      <!-- <el-carousel-item v-for="item in 4" :key="item">
        <img src="@/assets/home/banner3.jpg" />
      </el-carousel-item>-->
      <el-carousel-item>
        <img
          src="@/assets/home/banner1.jpg"
          style="object-fit: fill; width: 100%; height: 100%"
        />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="@/assets/home/banner2.jpg"
          style="object-fit: fill; width: 100%; height: 100%"
        />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="@/assets/home/banner3.jpg"
          style="object-fit: fill; width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>

    <!-- course -->
    <section class="course_sec">
      <h3>课程介绍</h3>
      <div class="course_wrap">
        <div class="course_item">
          <div class="course_img">
            <img src="@/assets/home/banner1.jpg" alt="" />
            <p>专业彩妆师大师班</p>
            <span>近期开课 2022/09/12</span>
          </div>
          <router-link class="course_search" to="/">查看课程</router-link>
        </div>
        <div class="course_item">
          <div class="course_img">
            <img src="@/assets/home/banner2.jpg" alt="" />
            <p>专业彩妆师大师班</p>
            <span>近期开课 2022/09/12</span>
          </div>
          <router-link class="course_search" to="/">查看课程</router-link>
        </div>
        <div class="course_item">
          <div class="course_img">
            <img src="@/assets/home/banner3.jpg" alt="" />
            <p>专业彩妆师大师班</p>
            <span>近期开课 2022/09/12</span>
          </div>
          <router-link class="course_search" to="/">查看课程</router-link>
        </div>
        <div class="course_item">
          <div class="course_img">
            <img src="@/assets/home/banner1.jpg" alt="" />
            <p>专业彩妆师大师班</p>
            <span>近期开课 2022/09/12</span>
          </div>
          <router-link class="course_search" to="/">查看课程</router-link>
        </div>
      </div>
    </section>

    <!-- teacher -->
    <section class="teacher_sec">
      <h3>我们的资深团队{{ teacherActive }}</h3>
      <div class="teacher_menu_wrap">
        <p @click="teacherActive = 0" :class="{ active: teacherActive == 0 }">
          学校领导
        </p>
        <p @click="teacherActive = 1" :class="{ active: teacherActive == 1 }">
          北京
        </p>
        <p @click="teacherActive = 2" :class="{ active: teacherActive == 2 }">
          上海
        </p>
        <p @click="teacherActive = 3" :class="{ active: teacherActive == 3 }">
          深圳
        </p>
        <p @click="teacherActive = 4" :class="{ active: teacherActive == 4 }">
          杭州
        </p>
        <p @click="teacherActive = 5" :class="{ active: teacherActive == 5 }">
          成都
        </p>
      </div>
      <div class="teacher_wrap" v-if="teacherActive === 0">
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>曹艳</p>
        </div>
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>曹艳</p>
        </div>
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>曹艳</p>
        </div>
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>曹艳</p>
        </div>
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>曹艳</p>
        </div>
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>曹艳</p>
        </div>
      </div>
      <div class="teacher_wrap" v-if="teacherActive === 1">
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>1</p>
        </div>
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>1</p>
        </div>
      </div>
      <div class="teacher_wrap" v-if="teacherActive === 2">
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>2</p>
        </div>
      </div>
      <div class="teacher_wrap" v-if="teacherActive === 3">
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>3</p>
        </div>
      </div>
      <div class="teacher_wrap" v-if="teacherActive === 4">
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>4</p>
        </div>
      </div>
      <div class="teacher_wrap" v-if="teacherActive === 5">
        <div class="teacher_item">
          <img src="@/assets/home/banner1.jpg" alt="" />
          <p>5</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherActive: 0
    };
  }
};
</script>

<style lang="less" scoped>
.course_sec {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  h3 {
    text-align: center;
    font-size: 25px;
    padding-bottom: 20px;
  }
  .course_wrap {
    display: flex;
    justify-content: space-around;
    .course_item {
      border: 1px solid #dedede;
      width: 23%;
      .course_img {
        position: relative;
        img {
          width: 100%;
          height: 300px;
          vertical-align: middle;
        }
        p {
          position: absolute;
          top: 20%;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
        }
        span {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          text-align: center;
          color: #ffffff;
        }
      }
      .course_search {
        display: inline-block;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        text-decoration: underline;
        letter-spacing: 2px;
      }
    }
  }
}

.teacher_sec {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  h3 {
    text-align: center;
    font-size: 25px;
    padding-bottom: 20px;
  }

  .teacher_menu_wrap {
    display: flex;
    p {
      padding: 0 20px;
      cursor: pointer;
    }
    p.active {
      color: red;
    }
  }
  .teacher_wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
    .teacher_item {
      width: 180px;
      img {
        width: 100%;
        height: 230px;
        vertical-align: middle;
      }
      p {
        padding: 10px 0;
      }
    }
  }
}
</style>
