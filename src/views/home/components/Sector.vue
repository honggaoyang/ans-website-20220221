<template>
  <div>
    <!-- the commercial sector -->
    <section class="commercial_sec">
      <div class="commercial_box">
        <div class="img_wrap">
          <img src="@/assets/images/home/commercial_img.jpg" alt="" />
        </div>
        <div class="cont_wrap">
          <img src="@/assets/images/home/commercial_title.png" alt="" />
          <p class="tit">360°就业创业扶持<br />多方向选择</p>
          <p class="line"></p>
          <p class="cont">· 美业人才就业 <span>猎美英才人力资源公司</span></p>
          <p class="cont">· 美业人才创业 <span>轻美会馆整店输出运营</span></p>
          <p class="cont">· 0门槛主播就业 <span>神树科技万人主播家族</span></p>
          <button class="more">更多</button>
        </div>
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
  .commercial_box {
    width: 1280px;
    // background-color: antiquewhite;
    margin: auto;
    display: flex;
    .img_wrap {
      width: 640px;
      img {
        width: 100%;
      }
    }
    .cont_wrap {
      flex: 1;
      color: #ffffff;
      padding: 200px 0 0 150px;
      img {
        margin-left: -10px;
        width: 450px;
        height: 115px;
      }
      .tit {
        font-size: 35px;
        margin-top: 20px;
      }
      .line {
        width: 70px;
        height: 5px;
        background-color: #ffffff;
        margin: 40px 0;
      }

      .cont {
        font-size: 20px;
        line-height: 40px;
        span {
          font-size: 20px;
          margin-left: 50px;
        }
      }
      .more {
        width: 115px;
        height: 50px;
        background-color: #000000;
        color: #980519;
        border: 1px solid #980519;
        font-size: 25px;
        letter-spacing: 10px;
        text-indent: 10px;
        margin-top: 75px;
        cursor: pointer;
        outline: none;
      }
    }
  }
}

// 部门
.sectop_sec {
  background-color: #000000;
  width: 100%;
  padding-top: 100px;
  text-align: center;
  img {
    width: 1280px;
    height: 670px;
  }
}
</style>