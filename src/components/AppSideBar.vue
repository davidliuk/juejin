<!-- 首页侧边栏 -->
<template>
  <div class="sidebar-box" :style="{height: height}">
    <!-- 签到 -->
    <div class="signin-tip">
      <div class="first-line" style="opacity: 1;">
        <div class="icon-text">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"
               data-v-68373e0a="">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20.9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z"
                  fill="#FFCF8B" data-v-68373e0a=""></path>
            <rect x="5" y="12" width="3" height="2" rx="1" fill="#FF7D00"></rect>
            <rect x="10.5" y="12" width="3" height="2" rx="1" fill="#FF7D00"></rect>
            <rect x="5" y="16" width="3" height="2" rx="1" fill="#FF7D00"></rect>
            <rect x="10.5" y="16" width="3" height="2" rx="1" fill="#FF7D00"></rect>
            <rect x="16" y="12" width="3" height="2" rx="1" fill="#FF7D00"></rect>
            <rect x="16" y="16" width="3" height="2" rx="1" fill="#FF7D00"></rect>
          </svg>
          <span class="title">
          <!-- 需要根据时间进行输出 -->
          下午好！晚上好！早上好！
          </span>
        </div>
        <button class="signin-btn"><span class="btn-text" data-v-68373e0a="">去签到</span></button>
      </div>
      <div class="second-line" style="opacity: 1;">点亮你在社区的每一天</div>
    </div>

    <!-- 横幅块 -->
    <div class="banner-block">
      <div class="banner">
        <a href="https://juejin.cn/pin/7129334097113006116?utm_source=slide&amp;utm_medium=banner&amp;utm_campaign=reading"
           target="_blank">
          <img
              src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1342bb1e90e54a4aadceefae35fe5164~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
              width="240" height="200" class="banner-image">
        </a>
        <div class="ctrl-box">
          <i class="close-btn"></i>
          <a class="label" href="https://bd.juejin.cn?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=banner"
             target="_blank">
            <span class="inco">投放</span> <span>广告</span></a>
        </div>
      </div>
    </div>
    <div class="banner-block">
      <div class="banner">
        <a href="https://juejin.cn/book/7126538479051210766?utm_source=web_banner&amp;utm_medium=banner&amp;utm_campaign=Book_SK_0817"
           target="_blank">
          <img
              src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b6c70fab5e446ce9b8be1678065d4e8~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
              width="240" height="200" class="banner-image">
        </a>
        <div class="ctrl-box">
          <i class="ion-close-round close-btn"></i>
          <a class="label" href="https://bd.juejin.cn?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=banner"
             target="_blank">
            <span class="inco">投放</span> <span>广告</span></a>
        </div>
      </div>
    </div>

    <!-- 掘金APP 推广 -->
    <a href="https://juejin.cn/app" target="_blank">
      <div class="appShare-box">
        <div class="app-link">
          <img class="qr-img" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"/>
          <div class="text-box">
            <div class="line1">下载稀土掘金APP</div>
            <div class="line2">一个帮助开发者成长的社区</div>
          </div>
        </div>
      </div>
    </a>

    <!-- 作者榜 -->
    <div class="user-block">
      <div class="recommend-author-block sticky-author-block">
        <header class="user-block-header">
          🎖️作者榜
        </header>
        <div class="user-list">
          <div class="item">
            <a href="/user/624178336634701" target="_blank" rel="" class="link">
              <img
                  src="https://p6-passport.byteacctimg.com/img/user-avatar/d9a1a8067eb6f932b29e6482d62741f7~300x300.image"
                  alt="0o华仔o0的头像" class="lazy avatar avatar" loading="lazy">
              <div class="user-info">
                <a href="/user/624178336634701" target="_blank" rel="" class="username username">
                <span class="name" style="max-width: 128px;">
                  0o华仔o0
                </span>
                  <span blank="true" class="rank">
                  <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" alt="lv-5"
                       title="创作等级">
                </span>
                </a>
                <div data-v-edec7d04="" class="position">
                  前端开发
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="/user/3518877442254759" target="_blank" rel="" class="link">
              <img
                  src="https://p26-passport.byteacctimg.com/img/user-avatar/57119c7e9db623b30c8d9a0d3851f73f~300x300.image"
                  alt="楼仔的头像" class="lazy avatar avatar" loading="lazy">
              <div class="user-info">
                <a href="/user/3518877442254759" target="_blank" rel="" class="username username">
                <span class="name" style="max-width: 128px;">
                  楼仔
                </span>
                  <span blank="true" class="rank">
                  <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" alt="lv-4"
                       title="创作等级"></span>
                </a>
                <div class="position">
                  一枚小小的Go/Java代码搬运工 @ 武汉小米科技
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a data-v-edec7d04="" href="/user/3526889030825928" target="_blank" rel="" class="link"><img
                src="https://p3-passport.byteacctimg.com/img/user-avatar/b8b82e41a702943a5442964c471f02e5~300x300.image"
                alt="大鸡腿同学的头像" class="lazy avatar avatar" loading="lazy">
              <div class="user-info">
                <a href="/user/3526889030825928" target="_blank" rel="" class="username username">
              <span data-v-b06a9b4e="" class="name" style="max-width: 128px;">
                大鸡腿同学
              </span>
                  <span blank="true" class="rank">
                <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" alt="lv-4"
                     title="创作等级">
              </span>
                </a>
                <div class="position">
                  Java架构师
                </div>
              </div>
            </a>
          </div>
          <a href="/recommendation/authors/recommended" class="item" target="_blank">
            <div class="more">
              <span>完整榜单</span>
              <!--              <i class="icon ion-chevron-right"></i>-->
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 侧边栏链接 -->
    <div class="link-block">
      <ul class="link-list">
        <li class="item">
          <a class="link" href="/book/6844733795329900551" target="_blank">
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png" class="icon">
            <span class="title">稀土掘金漫游指南</span>
          </a>
        </li>
        <li class="item">
          <a class="link" href="/extension" target="_blank">
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
                 class="icon">
            <span class="title">安装掘金浏览器插件</span>
          </a>
        </li>
        <li class="item">
          <a class="link" href="https://sourl.co/dQMLD9" rel="nofollow noopener noreferrer"
             target="_blank">
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png" class="icon">
            <span class="title">前往掘金翻译计划</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 侧边栏页脚 -->
    <div class="index-aside-footer">
      <ul class="more-list">
        <li class="item">
          <a href="/terms" target="_blank" rel="nofollow">用户协议</a>
        </li>
        <li class="item">
          <a href="/license" target="_blank" rel="nofollow">营业执照</a>
        </li>
        <li class="item">
          <a href="/privacy" target="_blank" rel="nofollow">隐私政策</a>
        </li>
        <li class="item">
          <a href="/about" target="_blank" rel="nofollow">关于我们</a>
        </li>
      </ul>


      <ul class="more-list">
        <li class="item">
          <a data-v-18d4e3b6="" href="/map-author-A-1" target="_blank">站点地图</a>
        </li>
        <li class="item">
          <a href="/book/5c90640c5188252d7941f5bb" target="_blank">使用指南</a>
        </li>
        <li class="item">
          <a href="/links" target="_blank" rel="">友情链接</a>
        </li>
        <li class="item">
          <a href="/more_posts" target="_blank" rel="">更多文章</a>
        </li>
      </ul>

      <ul class="more-list">
        <li class="item">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow">京ICP备18012699号-3</a>
        </li>
      </ul>

      <ul class="more-list">
        <li class="item">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719" target="_blank"
             rel="nofollow">
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png" alt="police"
                 style="vertical-align:middle;" data-v-18d4e3b6="">
            京公网安备11010802026719号
          </a>
        </li>
        <li class="item"><span>版权所有：北京北比信息技术有限公司</span></li>
        <li class="item"><span>公司地址：北京市海淀区信息路甲28号13层B座13B-5</span></li>
        <li class="item"><span>公司座机：010-83434395</span></li>
        <li class="item">
          <span>
            举报邮箱：
            <a href="mailto:feedback@xitu.io" data-v-18d4e3b6="">feedback@xitu.io</a>
          </span>
        </li>
      </ul>

      <ul class="more-list">
        <li class="item"><a>©2022 稀土掘金</a></li>
      </ul>

      <ul class="more-list account-list">
        <li class="item">
          <a href="http://weibo.com/xitucircle" target="_blank" rel="nofollow noopener noreferrer">
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png" alt="微博" class="icon">
          </a>
        </li>
        <li class="item">
          <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png" alt="微信" class="icon">
          <div class="qr-panel">
            <div class="title">微信扫一扫</div>
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-qr.b247fde.jpeg" class="qr"
                 data-v-18d4e3b6="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: {},
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
}
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

.sidebar-box {
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #F4F5F5;

  .signin-tip {
    height: 96px;
    width: 240px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 16px;
    display: block;

    .first-line {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .icon-text {
        display: flex;

        .icon {
          margin-right: 12px;
          margin-top: 2px;
        }

        .title {
          margin-top: 2px;
          color: #1d2129;
          font-size: 18px;
          font-weight: 500;
        }
      }

      .signin-btn {
        border: 1px solid #1e80ff;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        height: 32px;
        width: 72px;

        .btn-text {
          color: #1e80ff;
          font-size: 14px;
          font-weight: 400;
          white-space: nowrap;
        }
      }
    }

    .second-line {
      margin-bottom: 2px;
      margin-left: 36px;
      color: #4e5969;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
  }

  .banner-block {
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;

    .banner {
      height: 200px;
      position: relative;
      font-size: 0;
      cursor: pointer;
      display: block;

      .banner-image {
        width: 100%;
        height: 100%;
      }

      .ctrl-box {
        position: relative;
        font-size: 0;
        cursor: pointer;
        display: block;

        .close-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1rem;
          color: #909090;
          opacity: .5;
          display: none;
        }

        .label {
          position: absolute;
          right: 10px;
          bottom: 10px;
          line-height: 36px;
          height: 36px;
          font-size: 20px;
          z-index: 1;
          transform: scale(.5);
          transform-origin: right bottom;
          -webkit-transform-origin: right bottom;
          color: #fff;
          background-color: rgba(0, 0, 0, .2);
          border: 1px solid #fff;
          border-radius: 6px;
          padding-left: 15px;
          padding-right: 15px;
          font-weight: 300;

          .inco {
            display: none;
          }
        }

        .label:hover {
          .inco {
            display: inline-block;
          }
        }
      }
    }
  }

  .info-box {
    background-color: #fff;
    padding: 20px 20px 10px;

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

  .user-block {
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;

    .recommend-author-block {
      background-color: #fff;

      .user-block-header {
        text-align: left;
        padding: 1rem 1.3rem;
        border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
      }

      .user-list {
        .item {
          .link {
            display: flex;
            padding: 1rem 1.3rem;
            align-items: center;
            cursor: pointer;

            .avatar {
              flex: 0 0 auto;
              width: 3.8rem;
              height: 3.8rem;
              border-radius: 50%;
              margin-right: 0.5rem;
            }

            .user-info {
              overflow: hidden;

              .username {
                font-size: 1.16rem;
                font-weight: 400;
                color: #333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 3px;
                display: flex;

                .name {
                  display: inline-block;
                  vertical-align: top;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                .rank {
                  display: inline-flex;
                  align-items: center;
                  margin-left: 0.33rem;
                  vertical-align: middle;

                  img {
                    width: 35px;
                    height: 16px;
                  }
                }
              }

              .position {
                color: #909090;
                font-size: 1rem;
                margin-bottom: 3px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }

          .more {
            color: #007fff;
            padding: 1rem 0;
            text-align: center;
            border-top: 1px solid hsla(0, 0%, 59.2%, .1);

            //.icon {
            //  content: "\f125";
            //  margin-left: 5px
            //}
          }
        }
      }
    }
  }


  .appShare-box {
    background-color: #FFF;
    margin-top: 0;
    margin-bottom: 1.5rem;
    display: block;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
    }

    .app-link {
      display: flex;
      align-items: center;
      padding: 1rem;

      .qr-img {
        margin-right: 16px;
        width: 4.167rem;
        height: 4.167rem;
      }

      .text-box {
        .line1 {
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          color: #1d2129;
        }

        .line2 {
          margin-top: 0.5rem;
          font-size: 12px;
          line-height: 20px;
          color: #86909c;
        }
      }
    }
  }

  .link-block {
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;

    ul {
      list-style: none;
    }

    .link-list {
      padding: 0;

      .item {
        position: relative;

        .link {
          display: flex;
          align-items: center;
          padding: 1rem;
          height: 100%;

          .icon {
            width: 3rem;
            margin-right: 0.8rem;
          }

          span {
            position: relative;
            font-size: 1.16rem;
            line-height: 1;
            color: #333;
          }
        }

        //a{
        //  text-decoration: none;
        //  cursor: pointer;
        //  color: #909090;
        //}
      }
    }
  }

  .index-aside-footer {
    background-color: transparent;
    box-shadow: none;


    .more-list {
      font-size: 1rem;
      line-height: 1.6;
      color: #9aa3ab;
      height: 1.6rem;

      .item {
        float: left;
        list-style: none;
        text-align: left;

        .icon {
          width: 24px;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          cursor: pointer;
          color: #909090;
          margin-right: 8px;

          .icon {
            width: 24px;
            cursor: pointer;
          }
        }

        a:hover {
          color: #1E80FF;
        }

        span {
          color: #909090;
          //margin-right: 8px;
        }

        .qr-panel {
          display: none;
        }

        .qr-panel:hover {
          display: block;
        }
      }

      .item:hover {
        .qr-panel {
          display: block;
          //position: absolute;
          background: #fff;
          width: 10rem;
          //height: 10rem;
          top: 100%;
          left: -100%;
          z-index: 2;
          padding: 0.8rem 0 0;
          opacity: 1;
          border: 1px solid #ddd;
          transform: translate(-24px);

          .title {
            text-align: center;
          }

          .qr {
            width: 100%;
          }
        }
      }
    }

    .account-list {
      display: flex;
      justify-content: flex-start;
      margin: 1rem 0;
      padding: 1rem 0;
      width: 100%;
      //height: 2.44rem;
    }

    ul {
      padding: 0;
      margin: 0;
    }
  }

}
</style>