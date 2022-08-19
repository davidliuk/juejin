<template>
  <nav>顶部通栏综合等一直吸附在顶部</nav>
  <AppTopNav />
  <div class="main-content">
    <div class="left-column">
      <div class="title">标题</div>
      <AuthorMiniInfo></AuthorMiniInfo>
      <Content></Content>
    </div>
    <div class="right-column">
      <Aside></Aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Content from "./Content.vue";
import AuthorMiniInfo from "./AuthorMiniInfo.vue";
import Aside from "./Aside.vue";

</script>

<style lang="less" scoped>
.main-content {
  position: relative;
  width: 960px;
  margin: 70px auto;
  text-align: start;

  .left-column {
    width: 700px;
    background-color: #fff;
    border: 5px solid #fff;
    border-radius: 3px;
    padding-top: 2.667rem;
    padding-bottom: 3.33rem;

    .title {
      font-size: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      margin: 0 0 1.667rem;
      font-size: 2.667rem;
      font-weight: 600;
      line-height: 1.31;
      color: #252933;
      // margin: 10px 32px 32px 32px;
      // color: #252933;
      // font-size: 30px;
      // font-weight: 600;
      font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
        Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue",
        "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial !important;
    }
  }

  .right-column {
    position: absolute;
    width: 240px;
    top: 0;
    right: 0;
  }
}
</style>
