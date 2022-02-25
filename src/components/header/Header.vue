<template>
  <div class="header">
    <!-- mouseenter，mouseleave -->
    <div class="logo_wrap">
      <router-link to="/"
        ><img src="@/assets/images/logo.png" alt="LOGO艾尼斯"
      /></router-link>
    </div>
    <div class="menu_wrap">
      <div class="menu_item">
        <router-link to="/">首页</router-link>
      </div>
      <div class="menu_item">
        <router-link to="/course">课程分类</router-link>
        <div class="subMenu_wrap">
          <router-link to="/">时尚彩妆</router-link>
          <router-link to="/">潮流美甲</router-link>
          <router-link to="/">美容护肤</router-link>
          <router-link to="/">精品半永久</router-link>
          <router-link to="/">美妆达人全能班</router-link>
          <router-link to="/">高端摄影</router-link>
        </div>
      </div>
      <div class="menu_item">
        <router-link to="/ans">探索艾尼斯</router-link>
        <div class="subMenu_wrap">
          <div style="display: flex">
            <div>
              <router-link to="/">品牌故事</router-link>
              <router-link to="/">品牌理念</router-link>
              <router-link to="/">品牌历史</router-link>
              <router-link to="/">创始人左清松</router-link>
            </div>
            <div>
              <router-link to="/">教育科技</router-link>
              <router-link to="/">际达生物</router-link>
              <router-link to="/">际缘互联网</router-link>
              <router-link to="/">美容科技馆</router-link>
              <router-link to="/">神树科技</router-link>
              <router-link to="/">际宇影视</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="menu_item">
        <router-link to="/brand">美妆品牌</router-link>
        <div class="subMenu_wrap">
          <router-link to="/">bibididi</router-link>
          <router-link to="/">唯一秀场</router-link>
        </div>
      </div>
      <div class="menu_item">
        <router-link to="/product">作品展示</router-link>
        <div class="subMenu_wrap">
          <router-link to="/">美妆作品</router-link>
          <router-link to="/">美甲作品</router-link>
          <router-link to="/">半永久作品</router-link>
          <router-link to="/">摄影作品</router-link>
          <router-link to="/">达人作品</router-link>
        </div>
      </div>
      <div class="menu_item">
        <router-link to="/contact">联系我们</router-link>
      </div>
    </div>
    <div class="tel_wrap">
      <img src="@/assets/images/menu_tel.png" alt="LOGO艾尼斯" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  color: #ffffff;
  padding: 0 150px;
  background-color: #000000;
  .logo_wrap {
    width: 200px;
    img {
      vertical-align: middle;
    }
  }

  .menu_wrap {
    display: flex;
    flex: 1;
    justify-content: space-between;
    .menu_item {
      position: relative;
      & > a:first-child {
        display: inline-block;
        height: 130px;
        line-height: 130px;
        color: #ffffff;
        font-size: 25px;
      }
      &:hover {
        a {
          color: #980519;
        }
        .subMenu_wrap {
          display: block;
        }
      }
      .subMenu_wrap {
        display: none;
        position: absolute;
        background: #333333;
        height: auto;
        overflow: hidden;
        z-index: 99999;
        padding: 0 15px;
        // transition:all 2s;  display 不支持
        a {
          line-height: 36px;
          font-size: 12px;
          padding: 0 10px;
          white-space: nowrap;
          display: block;
          color: #ffffff;
          &:hover {
            color: #980519;
          }
        }
      }
    }
  }

  .tel_wrap {
    width: 250px;
    text-align: right;
    img {
      vertical-align: middle;
      margin-top: -10px;
    }
  }
}

.router-link-exact-active {
  color: aquamarine;
}
</style>
