<template>
  <section class="footConsult_sec">
    <div class="cont_wrap">
      <div class="item">
        <i class="iconfont icon-24gf-phoneLoudspeaker"></i>
        <span>电话咨询</span>
        <span>400-9699-180</span>
      </div>
      <div class="item">
        <i class="iconfont icon-zy_yuyue"></i>
        <span>预约试学</span>
        <span>预约体验试学</span>
      </div>
      <div class="item">
        <i class="iconfont icon-weixin"></i>
        <span>微信咨询</span>
        <span>专业导师回访答疑</span>
      </div>
      <div class="item">
        <i class="iconfont icon-kefu"></i>
        <span>在线客服</span>
        <span>了解机构情况</span>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.footConsult_sec {
  height: 290px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  .cont_wrap {
    width: 1350px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;
    .item {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      border-right: 1px dashed #000000;
      &:nth-last-child(1) {
        border-right: none;
      }
      .iconfont {
        font-size: 80px;
      }
      span {
        font-size: 30px;
        margin-top: 10px;
      }
    }
  }
}
</style>