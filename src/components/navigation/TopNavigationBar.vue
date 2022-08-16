<template>
  <div :class="['top-nav', isHidden ? 'hidden' : '']">
    <div class="floor-1">
      <div class="floor-1-container">
        <div class="'logo'"><a href=""><img class="logo-img"
                                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                                            alt="稀土掘金"/></a></div>
        <div class="tabs-lv1">
          <div @click="changeTabLv1(item)" class="item" v-for="item in tabsLv1Info" :key="item.id">
            <div :class="['title', item.isActivate ? 'activate' : '']">{{ item.title }}</div>
            <div class="label"></div>
          </div>
        </div>
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
          <div :class="['creator-center', isCenterUnfold ? 'unfold' : '']">
            <div class="title-box">
              <div class="title">创作者中心</div>
              <div class="button" @click="unfoldOrFoldList">
                <div class="triangle"></div>
              </div>
            </div>
            <div class="items-box" v-show="isCenterUnfold">
              <div class="item">
                <img class="icon"
                     src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0c8073862f04c2925249fd397763fd3.svg" alt=""/>
                <div class="title">写文章</div>
              </div>
              <div class="item">
                <img class="icon"
                     src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e5381c85b5939d984a4b0c0edf102122.svg" alt=""/>
                <div class="title">发沸点</div>
              </div>
              <div class="item">
                <img class="icon"
                     src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/01c75d281edffa91cacfb93189c940b4.svg" alt=""/>
                <div class="title">写代码</div>
              </div>
            </div>
          </div>
        </div>
        <div class="member">
          <img class="icon"
               src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="">
          <div class="title">会员</div>
        </div>
        <svg class="notify" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z"
              stroke-width="1.5" stroke-linecap="round" data-v-925bf8d6=""></path>
          <path d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round" data-v-925bf8d6=""></path>
          <path
              d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z"
              stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <img class="avatar" src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image"
             alt="xxx的头像"
             data-src="https://p6-passport.byteacctimg.com/img/user-avatar/c6869eb6d43442a2ac64ce4e58874273~300x300.image"
             loading="lazy"/>
      </div>
    </div>
    <div class="floor-2" v-if="idActivate !== -1 && tabsLv1Info[idActivate].items !== undefined" :key="idActivate">
      <div class="floor-2-container">
        <div class="tabs-lv2">
          <div class="item" v-for="(item, i) in tabsLv1Info[idActivate].items" :key="i">
            <div :class="['title', item.isActivate ? 'activate' : '']">{{ item.title }}</div>
          </div>
        </div>
        <div class="tabs-manager" v-show="idActivate === 0">标签管理</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 激活项的id, 若为-1则都不激活, 默认为-1
    idActivated: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      tabsLv1Info: [
        {
          id: 0,
          title: '首页',
          isActivate: false,
          items: [
            {
              title: '综合',
              isActivate: true,
            },
            {
              title: '关注',
              isActivate: false,
            },
            {
              title: '后端',
              isActivate: false,
            },
            {
              title: '前端',
              isActivate: false,
            },
            {
              title: 'Android',
              isActivate: false,
            },
            {
              title: 'iOS',
              isActivate: false,
            },
            {
              title: '人工智能',
              isActivate: false,
            },
            {
              title: '开发工具',
              isActivate: false,
            },
            {
              title: '代码人生',
              isActivate: false,
            },
            {
              title: '阅读',
              isActivate: false,
            },
          ]
        },
        {
          id: 1,
          title: '沸点',
          isActivate: false
        },
        {
          id: 2,
          title: '课程',
          isActivate: false
        },
        {
          id: 3,
          title: '直播',
          isActivate: false
        },
        {
          id: 4,
          title: '活动',
          isActivate: false
        },
        {
          id: 5,
          title: '商城',
          isActivate: false
        },
        {
          id: 6,
          title: 'APP',
          isActivate: false
        },
        {
          id: 7,
          title: '插件',
          isActivate: false
        }
      ],
      idActivate: -1,

      // 搜索栏是否获得焦点
      isSearchFocus: false,
      placeholder: '探索稀土掘金',

      // 创造者中心是否展开
      isCenterUnfold: false,

      // 因下滑是否隐藏
      isHidden: false,
      // 下滑距离
      scrollTop: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.setScrollTop)

    if (this.idActivate !== -1) {
      this.idActivate = this.idActivated
      this.tabsLv1Info[this.idActivate].isActivate = true
    }
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.setScrollTop)
  },
  methods: {
    changeTabLv1(item) {
      this.tabsLv1Info.forEach(tab => tab.isActivate = false)
      item.isActivate = true
      this.idActivate = item.id
    },
    searchFocusinHandler() {
      this.isSearchFocus = true
      this.placeholder = '探索文章/小册/标签/用户'
    },
    searchFocusoutHandler() {
      this.isSearchFocus = false
      this.placeholder = '探索稀土掘金'
    },
    unfoldOrFoldList() {
      this.isCenterUnfold = !this.isCenterUnfold
    },
    setScrollTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  watch: {
    scrollTop(scrollTop) {
      // console.log(scrollTop)
      this.isHidden = scrollTop >= 550;
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.top-nav {
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

  .floor-1 {
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid #F1F1F1;

    .floor-1-container {
      height: 60px;
      display: flex;
      align-items: center;

      .logo {
        width: 107px;
        height: 22px;

        .img {
          width: 107px;
          height: 22px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .tabs-lv1 {
        display: flex;
        margin-left: 10px;

        .item {
          width: 60px;
          height: 75px;

          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .label {
            position: absolute;
            top: 60px;
            background-color: #FFF;

            width: 35px;
            height: 1.5px;
          }

          .title {
            color: #71777c;
          }

          .title.activate {
            color: #1E80FF;
          }

          &:hover {
            cursor: pointer;

            .title {
              color: #2c3e50;
            }

            .label {
              background-color: #1E80FF;
            }
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

        .search {
          height: 45px;
          width: 360px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #C2C8D1;
          padding: 1px;

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
          width: 115px;
          height: 45px;
          background-color: #1E80FF;

          display: flex;
          flex-direction: column;
          overflow: visible;

          color: #FFF;
          text-align: center;

          .title-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .title {
              width: 100%;
              height: 45px;
              line-height: 45px;
              font-size: 14px;

            }

            .button {
              height: 100%;
              width: 18px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-left: 1px solid rgba(255, 255, 255, 0.1);

              .triangle {
                width: 10px;
                height: 10px;
                border: 5px solid #1E80FF;
                border-top-color: #FFF;
                position: relative;
                top: 5px;
              }
            }
          }


          &:hover {
            cursor: pointer;
          }

          // 展开
          &.unfold {

            .button .triangle {
              position: relative;
              top: 0;
              border-top-color: #1E80FF;
              border-bottom-color: #FFF;
            }
          }

          .items-box {
            height: 120px;
            width: inherit;
            position: absolute;
            top: 60px;
            color: #71777c;
            background-color: #FFF;

            .item {
              display: flex;
              height: 40px;
              align-items: center;
              justify-content: space-between;
              padding: 0 20px;

              .icon {
                height: 18px;
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

        &:hover {
          cursor: pointer;
        }
      }

      .notify {
        margin: 0 20px;
        display: block;
        fill: #8a919f;
        stroke: #8a919f;
      }

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }


  }

  .floor-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    justify-content: center;;

    .floor-2-container {
      display: flex;
      justify-content: space-between;
      color: #71777C;
      font-size: 14px;

      .tabs-lv2 {
        display: flex;

        .item {
          margin: 0 10px;

          &:hover {
            cursor: pointer;
            color: #1E80FF;
          }

          & .activate {
            color: #1E80FF;
          }
        }
      }

      .tabs-manager {
        margin-left: 250px;

        &:hover {
          cursor: pointer;
          color: #1E80FF;
        }
      }


    }
  }
}
</style>