<!-- 侧边栏 -->
<template>
  <div class="sidebar-box" :style="{height: height}">
    <!-- 个人信息 -->
    <div class="info-box">
      <div class="up-box">
        <img class="avatar" :src="userinfo.avatar"/>
        <div class="right-box">
          <div class="line1">
            <div class="username">{{ userinfo.username }}</div>
            <img class="levelIcon" :src="userinfo.levelIcon"/>
          </div>
          <div class="line2">
            {{ userinfo.breif }}
          </div>
        </div>
      </div>
      <div class="down-box">
        <div class="item">
          <img class="icon"
               src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3552fa95ef404b7585e9d3362d085e6b~tplv-k3u1fbpfcp-zoom-1.image"/>
          <div class="text">2021年度人气作者No.{{ userinfo.rankNumber }}</div>
        </div>
        <div class="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="zan">
            <g fill="none" fill-rule="evenodd" transform="translate(0 .57)" data-v-71f2d09e="">
              <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57"></ellipse>
              <path fill="#7BB9FF"
                    d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"></path>
            </g>
          </svg>
          <div class="text">获得点赞 {{ userinfo.thumbsUpNumber }}</div>
        </div>
        <div class="item">
          <svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon">
            <g fill="none" fill-rule="evenodd">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
              <path fill="#7BB9FF"
                    d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"></path>
            </g>
          </svg>
          <div class="text">文章被阅读 {{ dotNumber(userinfo.viewedNumber) }}</div>
        </div>
      </div>
    </div>
    <!-- 掘金APP 推广 -->
    <div class="appShare-box">
      <img class="qr-img" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"/>
      <div class="text-box">
        <div class="line1">下载掘金APP</div>
        <div class="line2">一个帮助开发者成长的社区</div>
      </div>
    </div>
    <!-- 掘金微信交流群推广 -->
    <img class="wx-share" src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"/>
    <!-- 相关文章 -->
    <div class="relevantArticle-box" v-if="relevantArticles[0] !== undefined">
      <div class="title">
        <div>相关文章</div>
      </div>
      <div class="item" v-for="(item, i) in relevantArticles">
        <div class="item-title">
          {{ item.title }}
        </div>
        <div class="nums">
          {{ item.thumbsUpNumber }}点赞 · {{ item.commentNumber }}评论
        </div>
      </div>
    </div>
    <Catalog2 class="catalog2"></Catalog2>
  </div>
</template>

<script>
import Catalog2 from './Catalog2.vue'

export default {
  name: "Aside",
  props: {},
  data() {
    return {
      relevantArticles: [],
      userinfo: {},
      height: 100
    };
  },
  mounted() {
    this.getRelevantArticles();
    this.getUserInfo();
    this.height = document.querySelector('.left-column').getBoundingClientRect().height + 'px'
  },
  methods: {
    // 将 2141576 转换为 2,141,576
    dotNumber(number) {
      let chars = ("" + number).split("");
      let str = "";
      let len = chars.length;
      for (let i = 0; i < len; i++) {
        str += chars[i];
        if ((len - i + 1) % 3 === 0 && i !== len - 1) {
          str += ",";
        }
      }
      return str;
    },
    getRelevantArticles() {
      this.relevantArticles = [
        {
          title: "TypeScript中interface与type的区别",
          thumbsUpNumber: 32,
          commentNumber: 6,
        },
        {
          title: "IOS Charles抓包",
          thumbsUpNumber: 31,
          commentNumber: 2,
        },
        {
          title: "超详细的网络抓包神器 tcpdump 使用指南",
          thumbsUpNumber: 9031,
          commentNumber: 474,
        },
        {
          title: "前端必会抓包工具",
          thumbsUpNumber: 556,
          commentNumber: 29,
        },
        {
          title: "经典八股文",
          thumbsUpNumber: 9031,
          commentNumber: 474,
        }
      ];
    },
    getUserInfo() {
      this.userinfo = {
        avatar: "https://p26-passport.byteacctimg.com/img/user-avatar/61130727b6e6bf9ed813434aeaed8ac3~300x300.image",
        username: "CUGGZ",
        levelIcon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-7.5da15b8.png",
        breif: "公众号: 前端充电宝",
        rankNumber: 15,
        thumbsUpNumber: 22522,
        viewedNumber: 2141576
      }
    }
  },
  components: {Catalog2}
}
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

.sidebar-box {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #F4F5F5;


  .info-box {
    background-color: #fff;
    padding: 20px;
    padding-bottom: 10px;

    .up-box {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e4e6eb;
      padding-bottom: 10px;

      &:hover {
        cursor: pointer;
      }

      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .right-box {
        margin-left: 10px;

        .line1 {
          display: flex;

          .levelIcon {
            margin-left: 5px;
            height: 18px;
          }
        }

        .line2 {
          margin-top: 3px;
          font-size: 14px;
          color: #515767;
        }
      }
    }

    .down-box {
      margin-top: 20px;

      .item {
        margin: 10px 0;
        display: flex;

        .icon {
          width: 25px;
        }

        .text {
          margin-left: 10px;
        }
      }
    }
  }

  .appShare-box {
    background-color: #FFF;
    margin-top: 20px;
    display: flex;
    align-items: center;
    padding: 20px;

    &:hover {
      cursor: pointer;
    }

    .qr-img {
      margin-right: 16px;
      width: 50px;
    }

    .text-box {
      .line2 {
        margin-top: 5px;
        color: #8a919f;
        font-size: 14px;
      }
    }
  }

  .wx-share {
    margin-top: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .relevantArticle-box {
    margin-top: 20px;
    background-color: #FFF;
    padding: 0 15px;

    .title {
      height: 55px;
      border-bottom: 1px solid #e4e6eb;
      line-height: 55px;
    }

    .item {
      height: 80px;
      display: flex;
      flex-direction: column;
      padding: 10px;

      &:hover {
        cursor: pointer;

        .item-title {
          color: #1E80FF;
        }
      }

      .nums {
        margin-top: 5px;
        font-size: 14px;
        color: #8a919f;
      }
    }
  }
}

.catalog2 {
  position: sticky;
  top: 0;
}
</style>