<!-- 根据主体文章生成目录 -->
<template>
  <div class="catalog-box">
    <div class="title-box">目录</div>
    <div class="item-box" id="item-box">
      <div
        v-for="item in catalogData"
        :key="item.id"
        :class="[
          'item',
          item.isActivate ? 'activate' : '',
          'level-' + item.level,
        ]"
        @click="goto(item)"
      >
        <div class="label"></div>
        <div class="text">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useHeightStore } from "@/store/article";

export default {
  data() {
    return {
      catalogData: [],
      busy: false,
      allItem: 0,
      currItem: 0,
    };
  },
  mounted() {
    let passage = document.querySelector(".left-column");
    if (passage == null) return;

    this.catalogData = [];
    let headers = Array.from(passage.querySelectorAll("h1, h2")); //获取所有标签为h1，h2的节点
    headers.forEach((item, index) => {
      this.catalogData.push({
        title: item.innerHTML,
        id: item.id,
        level: Number.parseInt(item.localName.slice(1)),
        isActivate: false,
        index: index,
      });
    });
    this.allItem = this.catalogData.length;
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    goto(item) {
      const windowTop = document.body.getBoundingClientRect().top;
      const toTopDistance = document
        .getElementById(item.id)
        .getBoundingClientRect().top;
      window.scrollTo({
        top: toTopDistance - windowTop - (item.index  < this.currItem? 70: 10),
        behavior: "smooth",
      });
      this.currItem = item.index;
      this.scrollListener();
    },
    scrollListener() {
      // 不监听的情况
      if (this.busy === true) {
        return;
      }
      useHeightStore().height = document.getElementById("content").getBoundingClientRect().height + "px";
      let passage = document.querySelector(".left-column");
      if (passage == null) return;

      let headers = Array.from(passage.querySelectorAll("h1, h2")); //获取所有标签为h1，h2的节点
      let catalogData = []
      headers.forEach((item, index) => {
        catalogData.push({
          title: item.innerHTML,
          id: item.id,
          level: Number.parseInt(item.localName.slice(1)),
          isActivate: false,
          index: index,
        });
      });
      if (catalogData.length != this.catalogData.length) {
        this.catalogData = catalogData
        this.allItem = this.catalogData.length;
      }

      this.busy = true;
      // 如果是ture上拖
      let upDragged = false; 
      //先判断是上移了还是下移了
      const newWindowBoundTop = document.body.getBoundingClientRect().top;
      if (this.windowBoundTop > newWindowBoundTop) {
        upDragged = false;
      } else {
        upDragged = true;
      }
      useHeightStore().top = upDragged? '70px': '10px'

      this.windowBoundTop = newWindowBoundTop;

      let allNum = headers.length;
      // this.currItem = 0;
      let top = parseInt(useHeightStore().top.slice(0, -2)) + 10
      for (let i = 0; i < allNum; i++) {
        if (
          // i + 1 == allNum || 
          headers[i].getBoundingClientRect().top <= top && headers[i + 1].getBoundingClientRect().top > top
        ) {
          this.catalogData.forEach((item) => (item.isActivate = false));
          let indexOfActivate = i;
          this.catalogData[indexOfActivate].isActivate = true;
          this.currItem = indexOfActivate;
          break;
        }
      }

      // active项始终显示在可视区内
      let itemBox = document.getElementById("item-box");
      if (this.currItem < 5) {
        itemBox.scrollTop = 0;
      } else if (this.currItem > this.allItem - 5) {
        itemBox.scrollTop = 45 * (this.allItem - 5);
      } else {
        itemBox.scrollTop = 45 * (this.currItem - 5);
      }

      this.busy = false;
    },
  },
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.catalog-box {
  margin-top: 20px;
  width: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  .title-box {
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e4e6eb;
    display: flex;
    align-items: center;
    color: #1d2129;
    margin: 0 20px;
  }
  .item-box {
    height: 360px;
    overflow-y: scroll;
    scrollbar-face-color: #e4e6eb;
    .item {
      width: 100%;
      height: 45px;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .label {
        width: 4px;
        height: 16px;
        border-radius: 0 4px 4px 0;
        left: 0;
        background-color: #fff;
      }

      .text {
        width: 100%;
      }
      &.level-1 .text {
        color: #000;
        padding-left: 16px;
      }
      &.level-2 .text {
        color: #333;
        padding-left: 30px;
      }
      &.level-3 .text {
        color: gray;
        padding-left: 45px;
      }

      &.activate {
        color: #1e80ff;
        .label {
          background-color: #1e80ff;
        }
      }
      &:hover {
        cursor: pointer;
        background-color: #f7f8fa;
      }
    }
  }
}
.catalog-box #item-box .item.activate .text {
  color: #1e80ff;
}
</style>
