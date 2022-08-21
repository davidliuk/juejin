<template>
  <div class="author-info">
    <div>
        <img
        src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image"
        alt=""
        class="lazy avatar"
      />
    </div>
    <div class="basic-info">
      <div class="author-name">David</div>
      <div class="time">掘金小队</div>
    </div>
    <a-button class="subscribe" type="outline">
        <span class="icon icon-flow"></span>
        + 关注
    </a-button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.author-info {
  display: flex;
  align-items: center;
  margin: 5px 32px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    margin-right: 15px;
  }
  
  .subscribe {
    margin: 0 0 0 auto;
    padding: 0 1rem;
    height: 34px;
    font-size: 14px;
    color: #1e80ff;
    background: rgba(30,128,255,.05);
    border: 1px solid rgba(30,128,255,.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
  }

  .basic-info {
    flex: 1 1 auto;
    color: #515767;
    line-height: 25px;

    .time {
      color: #8a919f;
      font-size: 15px;
    }
  }
}
</style>
