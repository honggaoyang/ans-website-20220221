<template>
  <section class="singUp_sec">
    <div class="lt_wrap">
      <img src="@/assets/images/home/home_signUpKF_img.png" alt="" />
    </div>
    <div class="rt_wrap">
      <p class="text">
        <img src="@/assets/images/home/home_singup.jpg" alt="" />
      </p>
      <button class="btn">立即报名</button>
    </div>
  </section>
</template>
<style lang="less" scoped>
.singUp_sec {
  display: flex;

  .lt_wrap {
    flex: 1;
    text-align: right;
  }
  .rt_wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text {
      font-size: 50px;
      font-weight: bold;
      margin-left: 150px;
    }
    .btn {
      margin-left: 180px;
      width: 290px;
      height: 90px;
      background-color: #980519;
      color: #ffffff;
      border: none;
      font-size: 45px;
      font-weight: bold;
      letter-spacing: 10px;
      text-indent: 10px;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>