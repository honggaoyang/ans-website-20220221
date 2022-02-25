<template>
  <div>
    <!-- the commercial sector -->
    <section class="commercial_sec">
      <div class="img_wrap">
        <img src="@/assets/images/home/commercial_img.jpg" alt="" />
      </div>
      <div class="cont_wrap">
        <img src="@/assets/images/home/commercial_title.png" alt="" />
        <p class="tit">360°就业创业扶持<br />多方向选择</p>
        <p class="line"></p>
        <p class="cont">· 美业人才就业 猎美英才人力资源公司</p>
        <p class="cont">· 美业人才就业 猎美英才人力资源公司</p>
        <p class="cont">· 美业人才就业 猎美英才人力资源公司</p>
        <button class="more">更多</button>
      </div>
    </section>

    <!-- 部门 -->
    <section class="sectop_sec">
      <img src="@/assets/images/home/sectop.png" alt="" />
    </section>
  </div>
</template>


<style lang="less" scoped>
// the commercial sector
.commercial_sec {
  width: 100%;
  background-color: #000000;
  display: flex;
  .img_wrap {
    flex: 1;
    text-align: right;
    img {
      width: 100%;
    }
  }
  .cont_wrap {
    flex: 1;
    color: #ffffff;
    padding: 230px 0 0 50px;
    img {
      margin-left: -13px;
    }
    .tit {
      font-size: 48px;
      margin-top: 50px;
    }
    .line {
      width: 80px;
      height: 8px;
      background-color: #ffffff;
      margin: 50px 0;
    }

    .cont {
      font-size: 25px;
      line-height: 50px;
    }
    .more {
      width: 160px;
      height: 66px;
      background-color: #000000;
      color: #980519;
      border: 1px solid #980519;
      font-size: 30px;
      letter-spacing: 20px;
      text-indent: 20px;
      margin-top: 100px;
      cursor: pointer;
      outline: none;
    }
  }
}

// 部门
.sectop_sec {
  background-color: #000000;
  img {
    width: 100%;
  }
}
</style>