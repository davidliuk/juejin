<template>
  <header class="list-header">
    <nav role="navigation" class="list-nav">
      <ul class="nav-list left">
        <li v-for="(item,index) in list0" :class="['nav-item', currentIndex===index?'active':'']"
            @click="clickChangeColor(index)" :style="[item==='热榜'?'border:none;':'']">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
      <div class="drop-down-area" v-show="isClick">
        <div class="drop-down" @click="unfoldOrFoldList">
          <li class="drop-down-toggle">
            3天内
            <i :class="['icon',isUnfold ? 'toggled' : '']"></i>
          </li>
          <ul class="drop-down-menu" v-show="isUnfold">
            <li v-for="item in list1" class="route-active">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang='ts'>
// 列表导航栏

import List from "@/views/home/List.vue";

export default {
  name: 'listNav',
  components: {List},
  data() {
    return {
      list0: ['推荐', '最新', '热榜'],
      currentIndex: 0,
      list1: ['3天内', '7天内', '30天内', '全部'],
      // 是否点击热榜
      isClick: false,
      // 热榜展开项
      isUnfold: false,
    }
  },
  methods: {
    clickChangeColor(index) {
      this.currentIndex = index
      if(index==2){
        this.isClick=!this.isClick
      }
    },
    unfoldOrFoldList() {
      this.isUnfold = !this.isUnfold
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

.drop-down-area {
  position: relative;
  z-index: 9;
}

.drop-down-area .drop-down {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.drop-down {
  color: #909097;
  min-width: 4rem;
  height: 22.5px;
}

.drop-down-toggle:hover {
  background-color: #fafafb;
  cursor: pointer;
}

.drop-down-toggle {
  box-sizing: border-box;
  min-width: 7rem;
  font-size: 1rem;
  border-radius: 2px;
  padding: 2px 10px;
  font-weight: 500;
  border: 1px solid #ebebeb;
  text-align: left;
  height: 100%;
  display: flex;
  align-items: center;
}

.icon.toggled {
  transform: rotate(-180deg);
}

.icon {
  width: 0;
  height: 0;
  position: absolute;
  right: 0.83rem;
  top: 0.7rem;
  border-top: 0.42rem solid #b2bac2;
  border-left: 0.42rem solid transparent;
  border-right: 0.42rem solid transparent;
}

.icon.toggled {
  transform: rotate(-180deg);
  transition: all .5s;
}

.drop-down-menu {
  box-sizing: border-box;
  position: absolute;
  top: 105%;
  left: 0;
  z-index: 1000;
  min-width: 7rem;
  font-size: 1rem;
  list-style: none;
  text-align: left;
  border-radius: 0.17rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border: 1px solid #ebebeb;
  background-color: #fff;
  padding: 0;
  margin: 0;
}

.drop-down-menu li a {
  display: block;
  clear: both;
  padding: 0.83rem;
  line-height: 1.17;
  color: #909097;
}

.drop-down-menu li {
  overflow: hidden;
  width: 100%;
}

.drop-down-menu li:hover {
  background-color: #fafafb;
  cursor: pointer;
}
</style>
    