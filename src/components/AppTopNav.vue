<template>
  <nav class="app-top-nav">
    <div class="container" :class="{ visible:isVisible }" >
      <div class="container-1" >
        <div class="logo">
          <a href="">
            <img class="logo-img"
                 src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                 alt="稀土掘金"/>
          </a>
        </div>
        <ul>
          <li class="nav-item"><a href="#" class="nav-item-a active" @click="changeColor('.nav-item-a')">首页</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">沸点</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">课程</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">直播</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">活动</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">商城</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">APP</a></li>
          <li class="nav-item"><a href="#" class="nav-item-a" @click="changeColor('.nav-item-a')">插件</a></li>
        </ul>
        <!-- 搜索框部分 -->
        <div :class="['search-and-creatorcenter', isSearchFocus ? 'focus' : '']">
          <div class="search">
            <input @focusout="searchFocusoutHandler" @focusin="searchFocusinHandler" :placeholder="placeholder"
                   type="text" class="input"/>
            <div class="search-icon">
              <img
                  :src="isSearchFocus ? '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6dbcdb42ffe8d518a318a5e26efade18.svg' : '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg'"
                  alt="搜索"/>
            </div>
          </div>
          <!-- 创作者中心 -->
          <div :class="['creator-center', isCenterUnfold ? 'unfold' : '']">
            <div class="title-box">
              <button class="title">创作者中心</button>
              <div class="button" @click="unfoldOrFoldList">
                <svg data-v-61b102b0="" width="12" height="12" viewBox="0 0 12 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg" class="triangle">
                  <path data-v-61b102b0=""
                        d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"
                        fill="white"></path>
                </svg>
              </div>
            </div>

            <div class="items-box" v-show="isCenterUnfold">
              <div class="item">
                <img class="icon"
                     src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0c8073862f04c2925249fd397763fd3.svg"/>
                <div class="title">写文章</div>
              </div>
              <div class="item">
                <img class="icon"
                     src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e5381c85b5939d984a4b0c0edf102122.svg"/>
                <div class="title">发沸点</div>
              </div>
              <div class="item">
                <img class="icon"
                     src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/01c75d281edffa91cacfb93189c940b4.svg"/>
                <div class="title">写代码</div>
              </div>
            </div>

          </div>
        </div>
        <!-- 右侧部分 -->
        <div class="member">
          <img class="icon"
               src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
          <div class="title">会员</div>
        </div>
        <a class="notify" href="#">
          <svg class="notify-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z"
                stroke-width="1.5" stroke-linecap="round" data-v-925bf8d6=""></path>
            <path d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round" data-v-925bf8d6=""></path>
            <path
                d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z"
                stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <!-- 头像 -->
        <!-- Todo 根据是否登录显示不同 -->
        <!--        <a-space size="large">-->
        <!--          <a-avatar :size="40" :style="{ backgroundColor: '#3370ff' }">juejin</a-avatar>-->
        <!--          &lt;!&ndash; <IconUser /> &ndash;&gt;-->
        <!--        </a-space>-->

        <!-- 已登录显示 -->
        <li class="avatar">
          <div class>
            <img src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image" alt="旺崽的头像"
                 class="avatar-img" data-v-248050e4="" data-v-3aafff8a="" data-v-925bf8d6="" loading="lazy">
          </div>
        </li>
      </div>
      <div class="container-2">
        <a href="#" class="nav-item-b active" @click="changeColor('.nav-item-b')">综合</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">关注</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">后端</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">前端</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">Android</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">IOS</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">人工智能</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">开发工具</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">代码人生</a>
        <a href="#" class="nav-item-b" @click="changeColor('.nav-item-b')">阅读</a>
        <a href="#" class="nav-item-b right" @click="changeColor('.nav-item-b')">标签管理</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {IconUser} from '@arco-design/web-vue/es/icon';
import { ref } from 'vue'
import { onMounted, onUnmounted } from "vue";

export default {
  name: 'AppTopNav',
  components: {IconUser},
  data() {
    return {
      // 搜索栏是否获得焦点
      isSearchFocus: false,
      placeholder: '探索稀土掘金',
      // 创作中心展开项
      isCenterUnfold: false
    }
  },
  methods: {
    searchFocusinHandler() {
      this.isSearchFocus = true
      this.placeholder = '搜索文章/小册/标签/用户'
    },
    searchFocusoutHandler() {
      this.isSearchFocus = false
      this.placeholder = '探索稀土掘金'
    },
    unfoldOrFoldList() {
      this.isCenterUnfold = !this.isCenterUnfold
    },
    changeColor(selector) {
      const lists = document.querySelectorAll(selector);
      //console.log(selector,typeof(selector))
      //console.log(lists)
      lists.forEach(list => {
        //console.log(list)
        list.onclick = () => {
          lists.forEach(li => li.style.color = '#71777C');
          //lists.forEach(li => li.style.color = 'red');
          //console.log(list)
          list.style.color = '#1e80ff';
        };
      });
    }
  },
  // 处理导航栏上拉隐藏，下拉出现的效果
  setup() {
    //滚动事件处理函数
  let isVisible = ref(true);
  let oldValue = 0;
  function scrollHandle() {
    // console.log('滚了');
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log( scrollTop - oldValue );
    if( scrollTop - oldValue > 0 ) {
      // 表明下拉，需要隐藏
      isVisible.value = false
    }else {
      // 需要展示
      isVisible.value = true

    }
    oldValue = scrollTop;
  }

  onMounted(() => {
    //组件挂载时，添加scroll监听
    window.addEventListener("scroll", scrollHandle, false);
    // console.log('onMounted');
  });
  onUnmounted(() => {
    //组件卸载时，停止监听
    window.removeEventListener("scroll", scrollHandle, false);
  });
  return {
    isVisible,
  };
},
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.app-top-nav .container.visible {
  transform: translateZ(0);
  background-color: #fff;
}
.app-top-nav .container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .2s;
  transform: translate3d(0,-60px,0);
  background-color: #fff;
}
.app-top-nav .container .container-1 {
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
}

.app-top-nav {
  background-color: #FFFFFF;
  width: 100%;
  position: fixed;
  z-index: 1000;
  transition: top 0.3s;
  top: 0;
  left: 0;

  &.hidden {
    top: -60px;
    transition: top 0.3s;
  }

  .container {
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    justify-content: center;
    border-bottom: 0.5px solid #F1F1F1;
    align-items: center;

    .container-1 {
      height: 60px;
      display: flex;
      align-items: center;

      .logo {
        margin-right: 1rem;
        margin-left: 24px;
        display: inline-block;
        width: auto;
        height: 22px;

        .logo-img {
          display: block;
          width: 107px;
          height: 22px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      ul {
        display: flex;
        margin: 0;
        padding: 0;

        .nav-item {
          width: 60px;
          height: 75px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .active {
            color: #1E80FF;
          }

          a {
            color: #71777C;
          }

          a:hover {
            color: #2c3e50;
          }

        }
      }

      .search-and-creatorcenter {
        width: 500px;
        height: 100%;
        // margin-left: 50px;
        // background-color: lightcoral;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        margin-left: 100px;
        font-size: 12px;

        .search {
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 4px;
          position: relative;
          height: 2.834rem;
          width: 360px;
          border: 1px solid #C2C8D1;
          margin-right: 1rem;

          .input {
            border: none;
            background-color: #FFF;
            margin-left: 10px;
            width: 310px;
            font-size: 14px;

            &:focus {
              outline: none;
            }

            &::placeholder {
              color: #C0C4CB;
            }
          }

          .search-icon {
            background-color: #F1F1F1;
            width: 50px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .creator-center {
          width: 11rem;
          padding-left: 5px;
          //height: 3rem;
          //background-color: #1E80FF;
          display: flex;
          //flex-direction: column;
          overflow: visible;

          color: #FFF;
          text-align: center;

          .title-box {
            width: 115px;
            height: 3rem;
            display: flex;
            //justify-content: space-between;
            align-items: center;
            position: relative;
            cursor: pointer;
            //width: 100%;

            .title {
              //width: 100%;
              height: 100%;
              //line-height: 45px;
              font-size: 1.167rem;
              padding: 0 1rem;
              border-radius: 3px 0 0 3px;
              white-space: nowrap;
              color: #fff;
              background-color: #1E80FF;
            }

            .button {
              //height: 100%;
              //width: 18px;
              //display: flex;
              //justify-content: center;
              //align-items: center;
              //border-left: 1px solid rgba(255, 255, 255, 0.1);
              height: 100%;
              color: #fff;
              background-color: #1E80FF;
              transition: background-color .1s linear .05s;

              flex: 0 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 1.667rem;
              border-left: 1px solid hsla(0, 0%, 100%, .1);
              border-radius: 0 3px 3px 0;
              box-sizing: border-box;

              // .triangle {
              //   //width: 10px;
              //   //height: 10px;
              //   //border: 5px solid #1E80FF;
              //   //border-top-color: #FFF;
              //   //position: relative;
              //   //top: 5px;
              // }
            }
          }

          &:hover {
            cursor: pointer;
          }

          // 展开
          &.unfold {

            .button .triangle {
              transform: rotate(180deg);
              //position: relative;
              //top: 0;
              //border-top-color: #1E80FF;
              //border-bottom-color: #FFF;
            }
          }

          .items-box {
            //height: 120px;
            //width: inherit;
            //position: absolute;
            //top: 60px;
            //color: #71777c;
            //background-color: #FFF;
            //display: block;
            position: absolute;
            top: 60px;
            //left: -7px;
            //right: 0;
            padding: 0.417rem 0;
            font-size: 1.167rem;
            color: #515767;
            background-color: #fff;
            z-index: 1;
            border-radius: 6px;
            width: 10rem;

            .item {
              display: flex;
              margin: 0 8px;
              padding: 6px 5px 5px 0.8rem;
              border-radius: 4px;
              line-height: 24px;
              font-weight: 400;
              //display: flex;
              //height: 40px;
              //align-items: center;
              //justify-content: space-between;
              //padding: 0 20px;

              .icon {
                //display: inline-block;
                position: relative;
                background-size: 18px 18px;
                height: 18px;
                width: 18px;
                top: 4px;
                margin: 0 12px 0 2px;
                //height: 18px;
              }
            }
          }
        }

        &.focus {
          .search {
            border: 1px solid #1E80FF;
            width: 485px;
            transition: width .2s;

            .search-icon {
              background-color: #EAF2FF;
            }
          }

          .creator-center {
            width: 0;
            padding: 0;
            margin: 0;
            transition: width .2s;
            overflow: hidden;
          }
        }
      }

      .member {
        display: flex;
        align-items: center;
        margin: 0 20px;
        color: #86909c;

        .icon {
          height: 24px;
          width: 24px;
        }

        .title {
          margin-left: 4px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .notify {
        margin: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        .notify-icon {
          fill: #8a919f;
          stroke: #8a919f;
        }
      }

      .avatar {
        list-style: none;


        div {
          display: flex;
          align-items: center;
          justify-content: center;

          .avatar-img {
            border-radius: 50%;
            margin-right: 2rem;
            width: 3rem;
            height: 3rem;
          }
        }
      }
    }
  }

  .container-2 {
    max-width: 960px;
    height: 3.833rem;
    margin: auto;
    //clear: both;
    display: flex;
    align-items: center;
    line-height: 1;
    left: 0;
    background-color: #fff;
    //
    //display: flex;
    //flex-direction: row;
    //align-items: center;
    //height: 45px;
    justify-content: center;

    .nav-item-b{
      color: #71777C;
      padding: 0 1rem 0 0;
      font-size: 1.16rem;
      display: flex;
    }

    .active{
      color: #1E80FF;
    }

    .right{
      //float: right;
      margin-left: 250px;
      //position: absolute;
    }

  }
}
</style>