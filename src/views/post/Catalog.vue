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

<script>
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
    console.log(passage);
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
    // console.log(this.catalogData)
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
      console.log(toTopDistance);
      window.scrollTo({
        top: toTopDistance - windowTop,
        behavior: "smooth",
      });
      this.currItem = item.index;
      this.scrollListener();
    },
    scrollListener() {
      //不能一个劲监听
      if (this.busy === true) {
        return;
      }
      this.busy = true;

      let passage = document.querySelector(".left-column");
      // console.log(passage)

      let flag = false; //如果是false，下拖，否则上拖
      //先判断是上移了还是下移了
      const newWindowBoundTop = document.body.getBoundingClientRect().top;
      if (this.windowBoundTop > newWindowBoundTop) {
        //往下拖了
        console.log("下拖");
        flag = false;
      } else {
        //往上拖了
        console.log("上拖");
        flag = true;
      }
      this.windowBoundTop = newWindowBoundTop;

      let headers = Array.from(passage.querySelectorAll("h1, h2")); //获取所有标签为h1，h2的节点
      // console.log(headers)
      let allNum = headers.length;
      for (let i = 0; i < allNum; i++) {
        console.log(headers[i].getBoundingClientRect().top);
        if (
          headers[i].getBoundingClientRect().top > 110 &&
          headers[i].getBoundingClientRect().top < 130
        ) {
          console.log("1111111111111111111");
          this.catalogData.forEach((item) => (item.isActivate = false));
          let indexOfActivate = i;
          if (flag) {
            //往上托，如果是0的话，那也只能是0
            indexOfActivate = i === 0 ? 0 : i - 1;
          }
          // document.getElementsByClassName('el-tabs__active-bar is-right')[0].setAttribute('style', `height: 40px; transform: translateY(${actualHighlightTitle*40}px);`);
          this.catalogData[indexOfActivate].isActivate = true;
          this.currItem = indexOfActivate;
          break;
        }
      }

      //下面实现：active项始终显示在可视区内
      //前5个，后5个，距离锁死就可以了
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

      &.activate {
        .label {
          background-color: #1e80ff;
        }
        color: #1e80ff;
      }
      &:hover {
        cursor: pointer;
        background-color: #f7f8fa;
      }
    }
  }
}
</style>
