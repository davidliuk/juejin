<template>
  <nav>顶部通栏综合等一直吸附在顶部</nav>
  <AppTopNav :show="false" />
  <div class="main-content">
    <div class="left-column">
      <div class="title">「React进阶」 React全部api解读+基础实践大全(夯实基础2万字总结)</div>
      <AuthorInfo></AuthorInfo>
      <Content></Content>
    </div>
    <div class="right-column">
      <Aside></Aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Content from "./Content.vue";
import AuthorInfo from "./AuthorInfo.vue";
import Aside from "./Aside.vue";
import { useHeightStore } from "@/store/article";
import { ref } from "vue";

let height = useHeightStore();

</script>

<style lang="less">
@import "../../style.css";
.main-content {
  position: relative;
  width: 960px;
  margin: 20px auto;
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
