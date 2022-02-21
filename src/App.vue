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
@import url("./assets/Global.css");
</style>
