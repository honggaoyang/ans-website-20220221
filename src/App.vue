<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* 引入全局样式 */
@import url("./assets/css/Global.css");

/* 引入字体图标 */
@import url("./assets/fonts/iconfont.css");
</style>
