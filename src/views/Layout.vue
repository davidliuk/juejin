<template>
  <nav>顶部通栏综合等一直吸附在顶部</nav>
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
  <!-- <footer>底部</footer> -->
</template>

<script>
// import Header from "@/components/Header.vue"
import AppTopNav from '@/components/AppTopNav.vue'
import AppSideBar from "@/components/AppSideBar.vue";

export default {
  name: 'Layout',
  components: {
    AppTopNav,
  }
}
</script>

<style scoped lang="less">

.main-content {
  position: relative;
  width: 960px;
  margin: 100px auto;

  .left-column {
    width: 700px;
  }

  .right-column {
    position: absolute;
    width: 240px;
    top: 0;
    right: 0;
  }

}
</style>