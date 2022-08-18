<template>
  <nav>顶部通栏综合等一直吸附在顶部</nav>
  <AppTopNav />
  <header>头部掘金图标</header>
  <h1>test</h1>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
    <!-- <Header/> -->
  </main>
  <!-- <footer>底部</footer> -->
</template>

<script>
// import Header from "@/components/Header.vue"
import AppTopNav from '@/components/AppTopNav.vue'
export default {
  name: 'Layout',
  components: {
    AppTopNav,
  }
}
</script>

<style >

:root {
  font-size: 12px;
}
</style>