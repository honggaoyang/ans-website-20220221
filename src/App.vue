<template>
  <div id="app">
    <Header />
    <transition>
      <router-view />
    </transition>
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

.v-enter {
  opacity: 1;
}
.v-enter-active {
  transition: 0.8s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 1;
}
.v-leave-active {
  opacity: 1;
  transition: 0s;
}
</style>
