<template>
  <div>
    <!-- Banner -->
    <Banner></Banner>

    <!-- 部门 -->
    <Sector></Sector>

    <!-- 课程 -->
    <Course></Course>

    <!-- 师资团队 -->
    <Teacher></Teacher>

    <!-- 校区展示 -->
    <School></School>

    <!-- 校友故事 -->
    <Story></Story>

    <!-- 立即报名 -->
    <SingUp></SingUp>

    <!-- 咨询列表 -->
    <Consult></Consult>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Sector from "./components/Sector.vue";
import Course from "./components/Course.vue";
import Teacher from "./components/Teacher.vue";
import School from "./components/School.vue";
import Story from "./components/Story.vue";
import SingUp from "./components/SingUp.vue";
import Consult from "@/components/footer/Consult";
export default {
  components: {
    Banner,
    Sector,
    Course,
    Teacher,
    School,
    Story,
    SingUp,
    Consult,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
