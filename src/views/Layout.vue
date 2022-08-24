<template>
  <!-- <nav>顶部通栏综合等一直吸附在顶部</nav> -->
  <AppTopNav/>
  <!--  <header>头部掘金图标</header>-->
  <!--  <h1>test</h1>-->
  <main class="main-content">
    <!-- 二级路由 -->
    <div class="left-column">
      <router-view></router-view>
    </div>
    <!-- <Header/> -->
    <div class="right-column">
      <AppSideBar></AppSideBar>
      <!-- <Catalog :catalog-data="catalogData"></Catalog> -->
    </div>
  </main>
</template>

<script lang="ts">
// import Header from "@/components/Header.vue"
import AppTopNav from "@/components/AppTopNav.vue";
import AppSideBar from "@/components/AppSideBar.vue";

export default {
  // 总体页面布局
  name: "Layout",
  components: {
    AppTopNav,
    AppSideBar,
  },
};
</script>

<style>
@import "../style.css";

body {
  font-size: 12px;
  line-height: normal;
}

.main-content {
  position: relative;
  width: 960px;
  margin: 0 auto;
  margin-top: 100px;
}

.main-content .left-column {
  width: 700px;
}

.main-content .right-column {
  position: absolute;
  width: 240px;
  top: 0;
  right: 0;
}

</style>
