<template>
  <header class="list-header">
    <nav role="navigation" class="list-nav">
      <ul class="nav-list left">
        <li v-for="(item,index) in list" :class="['nav-item', currentIndex===index?'active':'']" @click="click(index)">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
      <div class="dorp-down-area">
        <!---->
      </div>
    </nav>
  </header>
</template>

<script lang='ts'>
// 列表导航栏

export default {
  name: 'listNav',
  data() {
    return {
      list: ['推荐', '最新', '热榜'],
      currentIndex: 0,
    }
  },
  methods: {
    click(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.list-header {
  background: #fff;
  padding: 1.3rem 1rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
}

article, aside, details, figcaption, figure, footer, header, main, menu, nav, section {
  display: block;
}

.list-nav {
  justify-content: flex-start !important;
  height: 1.17rem;
}

.list-header .list-nav, .list-header .nav-list {
  display: flex;
  justify-content: space-between;
}

.list-header .nav-list {
  align-items: center;
  line-height: 1;
}

.nav-list.left {
  padding: 0 0;
  margin: 0 0;
}

.list-nav .nav-list.left .nav-item {
  font-size: 1.17rem;
}

.list-header .left .nav-item {
  padding: 0 1.2rem;
  font-size: 1.16rem;
  border-right: 1px solid hsla(0, 0%, 59.2%, .2);
}

.nav-item {
  position: relative;
  cursor: pointer;
}

.list-header .nav-list .nav-item.active a, .list-header .nav-list .nav-item a:hover {
  color: #007fff;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

li {
  list-style: none;
}
</style>
    