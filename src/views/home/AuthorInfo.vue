<template>
  <div class="popover-content" style="top: 158.143px; left: 188.878px;">
    <div class="info-row">
      <a :href="`https://juejin.cn/user/${ authorObj.user_id }`" target="_blank" rel="">
        <img :src="authorObj.avatar_large" :alt="authorObj.user_name + '的头像'" class="lazy avatar avatar" loading="lazy"
             onerror="this.src='https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image'">
      </a>
      <div class="user-info">
        <a :href="`https://juejin.cn/user/${ authorObj.user_id }`" target="_blank" rel="" class="username">
          <span class="name" style="max-width: 128px;">{{ authorObj.user_name }}</span>
          <span blank="true" class="rank">
            <img v-if="authorObj.level===4" :src="`//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png`"
                 :alt="`lv-${authorObj.level}`" title="创作等级">
            <img v-else-if="authorObj.level===5" :src="`//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png`"
                 :alt="`lv-${authorObj.level}`" title="创作等级">
            <img v-else-if="authorObj.level===6" :src="`//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png`"
                 :alt="`lv-${authorObj.level}`" title="创作等级">
          </span>
          <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8c6985e2aa4c06f307ae3734da4b43ac.svg"
               alt="掘友等级" title="掘友等级" class="jueyou-level">
          <div class="vip-level">
            <span class="tooltip">
              <div class="byte-tooltip byte-tooltip--dark" style="display: none;">VIP.{{ authorObj.level }} 渐入佳境</div>
              <span class="byte-tooltip__wrapper">
                <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg"
                     alt="">
              </span>
            </span>
          </div>
        </a>
        <div class="position">{{ authorObj.company }}</div>
      </div>
    </div>
    <a href="#">
      <button class="ui-btn follow-btn primary large default attention" name="followBtn">
        关注
      </button>
    </a>
    <div class="meta-row">
      <ul class="meta-list">
        <li class="item">
          <div class="count">{{ authorObj.followee_count }}</div>
          <div class="title">关注</div>
        </li>
        <li class="divider"></li>
        <li class="item">
          <div class="count">{{ authorObj.follower_count }}</div>
          <div class="title">粉丝</div>
        </li>
      </ul>
    </div>
    <span class="container triangle-bottom isTop">
    <em class="triangle"></em>
  </span>
  </div>
</template>

<script lang='ts'>
//列表左上方作者名有鼠标悬停时，展示该组件
//接收参数-作者的详细信息对象
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AuthorInfo',
  props: {
    authorObj: Object,
  },
  setup() {
    // todo
    return {}
  }
})
</script>

<style scoped>
.popover-box .popover-content {
  padding: 1.667rem;
  box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
  border-radius: 4px;
  border: none;
}

.user-popover .popover-content {
  width: 300px;
}

.popover-content {
  position: fixed;
  top: 20rem;
  left: 2rem;
  padding: 1.333rem 1.333rem 1.833rem;
  width: 267px;
  font-weight: 400;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
  border-radius: 2px;
  cursor: default;
  z-index: 250;
}

.info-row {
  display: flex;
}

.info-row .avatar {
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.lazy:not(.immediate):before {
  transition: opacity .2s;
}

.lazy:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: inherit;
  border-radius: inherit;
}

.info-row .user-info {
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-row .user-info .username {
  display: flex;
  align-items: center;
  font-size: 1.33rem;
  line-height: 2rem;
  font-weight: 500;
  color: #252933;
}

.username {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e3135;
  display: flex;
  align-items: center;
}

.username .name {
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
}

.rank img {
  width: 35px;
  height: 16px;
}

img {
  border-style: none;
}

.jueyou-level {
  margin-left: 4px;
}

.jueyou-level {
  margin-left: 0.33rem;
}

.jueyou-level {
  width: 3.75rem;
  height: 1.3333rem;
  -o-object-fit: contain;
  object-fit: contain;
}

.username .vip-level {
  transform: translateY(-2px);
}

.vip-level {
  width: 16px;
  height: 16px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin-left: 4px;
}

.vip-level .tooltip {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}

div.byte-tooltip--dark {
  background: #000;
  opacity: .8;
  box-shadow: 0 4px 8px rgb(0 0 0 / 16%);
}

div.byte-tooltip {
  padding: 12px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 20px;
}

.byte-tooltip--dark {
  color: #fff;
  background-color: #1d252f;
}

.byte-tooltip {
  padding: 8px 12px;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 8px 0 rgb(0 0 0 / 15%);
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 15%);
  font-size: 14px;
  font-weight: 400;
}

.vip-level .tooltip {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}

.vip-level img {
  width: 16px;
  height: 16px;
}

.info-row .user-info .position {
  margin: 0.333rem 0 0;
  font-size: 1rem;
  line-height: 1.67rem;
  max-width: 165px;
  color: #8f969c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ui-btn.large {
  padding: 7px 20px;
}

.ui-btn.attention {
  display: flex;
  align-items: center;
}

.ui-btn.primary {
  background-color: #1d7dfa;
}

.follow-btn {
  border-radius: 4px;
  margin-top: 1.334rem;
  width: 100%;
  justify-content: center;
}

.ui-btn {
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  padding: 5px 16px;
  color: #fff;
  border: none;
  white-space: nowrap;
}

.meta-row {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.user-popover .meta-row .meta-list {
  position: relative;
}

.meta-row .meta-list {
  flex: 1 1 auto;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
}

.meta-row .meta-list .item {
  flex: 1 1 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.meta-row .meta-list .item .count {
  font-size: 1.333rem;
  font-weight: 500;
  color: #252933;
  line-height: 2.333rem;
}

.meta-row .meta-list .item .title {
  font-size: 1.167rem;
  line-height: 2rem;
  color: #8a919f;
}

.user-popover .meta-row .meta-list .divider {
  width: 260px;
  height: 1px;
  top: -9px;
  position: absolute;
}

.meta-row .meta-list .divider {
  width: 1px;
  height: 32px;
  background-color: #e4e6eb;
}

span.triangle-bottom.isTop.container {
  transform: rotate(180deg);
}

span.triangle-bottom.isTop {
  bottom: auto;
  top: -15px;
}

span.triangle-bottom.container {
  transform: rotate(0deg);
}

span.triangle-bottom {
  position: absolute;
  bottom: -15px;
  left: 50%;
  margin-left: -5px;
}

.container {
  width: 14px;
  height: 14px;
  position: relative;
  border-top: 1px solid #fff;
  transform: rotate(180deg);
  display: inline-block;
}

.container .triangle {
  position: absolute;
  margin: auto;
  top: -6px;
  left: 0;
  right: 0;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  background: #fff;
}

.container:after {
  display: table;
  content: "";
  clear: both;
}
</style>