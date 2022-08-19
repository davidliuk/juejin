<template>
  <div class="list-item">
    <li class="item" v-for="item in datas" :key="item.ID">
      <div class="entry" style="margin-bottom: 0px;">
        <div class="meta-container">
          <a :href="`https://juejin.cn/user/${ item.article_info.user_id }`" target="_blank" class="user-message">
            <div class="popover-box user-popover">
              {{item.author_user_info.user_name}}
            </div>
          </a>
          <div class="date">
            {{`${Math.floor(item.article_info.ctime / 1000 /3600 / 24)}天前`}}
          </div>
          <div class="tag_list">
            <a :href="`https://juejin.cn/tag/${ item.category_info.first_category_name }`" target="_blank" class="tag">
              {{item.category_info.first_category_name}}
            </a>
            <a :href="`https://juejin.cn/tag/${ item.category_info.second_category_name }`" target="_blank" class="tag">
              {{item.category_info.second_category_name}}
            </a>
          </div>
        </div>
        <div class="content-wrapper" style="border-bottom: 1px solid rgba(228, 230, 235, 0.5);">
          <div class="content-main">
            <div class="title-row">
              <a :href="`https://juejin.cn/post/${ item.article_id }`" target="_blank" class="title">
                {{ item.article_info.title }}
              </a>
            </div>
            <div class="abstract">
              <a :href="`https://juejin.cn/post/${ item.article_id }`" target="_blank" >
                <div>
                {{ item.article_info.brief_content }}
                </div>
              </a>
            </div>
            <ul class="action-list jh-timeline-action-area">
              <li class="item view">
                <i></i>
                <span>{{ item.article_info.view_count }}</span>
              </li>
              <li class="item like">
                <i></i>
                <span>{{ item.article_info.digg_count }}</span>
              </li>
              <li class="item comment">
                <i></i>
                <span>{{ item.article_info.comment_count }}</span>
              </li>
            </ul>
          </div>
          <a :href="`https://juejin.cn/post/${ item.article_id }`" target="_blank" >
            <img :src="item.article_info.cover_image" alt="HTTP/3，它来了" class="lazy thumb" loading="lazy" style="">
          </a>
        </div>
        <div class="dislike-button">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-close">
            <path d="M1.70538 11.7191C1.52399 11.899 1.22992 11.899 1.04853 11.7191L1.03125 11.7019C0.849866 11.522 0.84987 11.2302 1.03125 11.0502L10.2956 1.85884C10.477 1.67889 10.7711 1.67889 10.9525 1.85885L10.9697 1.876C11.1511 2.05596 11.1511 2.34773 10.9697 2.52769L1.70538 11.7191Z"></path>
            <path d="M1.0828 2.48943C0.903312 2.30758 0.904276 2.01369 1.08495 1.83302L1.10216 1.8158C1.28284 1.63513 1.5748 1.63609 1.75428 1.81794L10.9104 11.0949C11.0898 11.2767 11.0889 11.5706 10.9082 11.7513L10.891 11.7685C10.7103 11.9492 10.4183 11.9482 10.2389 11.7664L1.0828 2.48943Z"></path>
          </svg>
          <div class="dislike-menu">
            <div class="menu-item">
              <span class="menu-icon icon-dislike"></span>
              <span class="menu-text">不感兴趣</span>
            </div>
            <div class="menu-item">
              <span class="menu-icon icon-block-user"></span>
              <span class="tooltip">
                <div class="byte-tooltip byte-tooltip--dark" style="display: none;">屏蔽作者：{{item.author_user_info.user_name}}</div>
                <span class="byte-tooltip__wrapper">
                  <span class="menu-text">屏蔽作者：{{item.author_user_info.user_name}}</span>
                </span>
              </span>
            </div>
            <div class="menu-item">
              <span class="menu-icon icon-block-tag"></span>
              <span class="menu-text">屏蔽标签</span>
              <span class="menu-icon icon-arrow"></span>

            </div>
            <div class="menu-item">
              <span class="menu-icon icon-report"></span>
              <span class="menu-text">举报</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </div>

</template>
    
<script lang='ts'>
import { ref } from '@vue/reactivity'
// import { defineComponent } from 'vue'
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../fake-api'
import { onMounted, onUnmounted } from "vue";

export default {
  name: 'list',
  setup() {
    //滚动事件处理函数
    function scrollHandle() {
      // console.log('滚了');
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.body.clientHeight;

      //距离=总高-滚动距离-可视区高
      let distance = scrollHeight - scrollTop - clientHeight;
      if(distance < 50) {
        loadMore()
        // console.log( distance );
      }
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
    const datas = ref([])
    let readyForLoad = true; //默认允许加载一次
    loadMore()
    // 内容加载函数
    function loadMore() {
      if (readyForLoad) {
        //需要加载才进来，防止重复
        readyForLoad = false; //进来了就"锁上"

        getArticles().then((res) => {
          datas.value = [...datas.value, ...res.data.articles];
          console.log(datas.value);
          readyForLoad = true; //加载完了才"开锁"，允许再次触发
        });
      }
    }

    return {
      datas, //返回出去，以便在template里使用
    };
  },
}
</script>
    
<style scoped>
.list-item {
  height:140px;
  }
.list-item>.item {
  color: rgb(51,51,51);
  font-size:12px;
  line-height: normal;
  list-style: none;
  border: 1px 0 0 0 solid #ccc;
  border-bottom-width: 0px;
  background-color: #fff;
  /*margin-bottom: -1px; /* 上下边框合并一下 */
}
.entry {
  display: flex;
  cursor: pointer;
  padding: 12px 20px 0;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
}
.meta-container, .meta-row {
  display: flex;
  align-items: center;
  color: #86909c;
}
.meta-container .user-message {
    display: flex;
    align-items: center;
    margin-right: 8px;
    max-width: 162px;
    font-size: 13px;
    line-height: 22px;
    color: #4e5969;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}
.popover-box {
    display: inline;
}
.meta-container .date:before {
    left: 0;
}
.meta-container .date:after, 
.meta-container .date:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 14px;
    background: #e5e6eb;
    content: " ";
}
.meta-container .date:after {
    right: 0;
}
.meta-container .date:after, 
.meta-container .date:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 14px;
    background: #e5e6eb;
    content: " ";
}
.meta-container .date {
    position: relative;
    padding: 0 10px;
    line-height: 22px;
    font-size: 13px;
    flex-shrink: 0;
}
.tag_list, .tag_list .tag {
    display: flex;
    align-items: center;
}
.tag_list .tag {
    position: relative;
    flex-shrink: 0;
    font-size: 13px;
    line-height: 22px;
    padding: 0 8px;
    color: #86909c;
}
.tag_list .tag:not(:last-child):after {
    position: absolute;
    right: -1px;
    display: block;
    content: " ";
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #4e5969;
}
a {
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
}
a, button, input {
    margin: initial;
}
.content-wrapper {
    display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e6eb;
    margin-top: 10px;
    width: 100%;
}
.content-wrapper .content-main {
    flex: 1 1 auto;
}

.title-row {
    display: flex;
    margin-bottom: 8px;
}
.title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    /*-webkit-box-orient: vertical;*/
    -webkit-line-clamp: 1;
}
.abstract {
    margin-bottom: 10px;
}
.abstract a {
    color: #86909c;
    font-size: 13px;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.action-list, 
.action-list>.item {
    display: flex;
    align-items: center;
}
ul {
    padding: 0;
    margin: 0;
}
div {
    display: block;
}
.action-list>.item {
    position: relative;
    margin-right: 20px;
    font-size: 13px;
    line-height: 20px;
    color: #4e5969;
    flex-shrink: 0;
}
.action-list>.item.view i {
    background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);
}
.action-list>.item i {
    display: block;
    width: 16px;
    height: 16px;
    background-size: 100%;
}
.action-list>.item span {
    margin-left: 4px;
}
.action-list>.item.like i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
}
.action-list>.item.comment i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
}
.thumb {
    flex: 0 0 auto;
    width: 120px;
    height: 80px;
    margin-left: 24px;
    background-color: #fff;
    border-radius: 2px;
}
.lazy {
    position: relative;
    -o-object-fit: cover;
    object-fit: cover;
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
.entry .dislike-button {
    display: none;
}
.entry .collection-button-wrap, 
.entry .dislike-button {
    position: absolute;
    right: 1.667rem;
    transition: all .15s linear;
}
.entry .dislike-button {
    top: 1.333rem;
}
.entry:hover {
  background-color: rgb(250, 250, 250);
}
.entry:hover .dislike-button {
    display: block;
}
.dislike-button:hover .icon-close path {
  /*悬浮变色*/
  fill: #007fff;
}
.dislike-button {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/29d9ea6….svg) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}

svg:not(:root) {
    overflow: hidden;
}
svg {
    width: 12;
    height: 12;
    fill: none;
}
.dislike-button .icon-close path {
    fill: #c9cdd4;
}
.dislike-button:after {
  display: block;
  content: " ";
  position: absolute;
  padding: 10px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translate(-10px, -10px);
}
.entry .dislike-menu {
  position: absolute;
  top: 100%;
  right: 0;
}
.dislike-menu {
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 17.67rem;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 8px 20px rgb(0, 0, 0 / 10%);
  overflow: hidden;
}
.dislike-button:hover {
  color:rgb(30,128,255);
}
.dislike-button:hover .dislike-menu{
  visibility:visible;
}
.dislike-menu .menu-item:hover {
  background: #f7f8fa;
}
.dislike-menu .menu-item:first-child {
  padding-top: 2px;
}
.dislike-menu .menu-item {
  height: 2.67rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 1rem;
}
.dislike-menu .menu-item .menu-icon {
    width: 1.333rem;
    height: 1.333rem;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
}
.dislike-menu .menu-item .icon-dislike {
    background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/d51cb68873fed0eefbe66dd4323b5590.svg);
}
.dislike-menu .menu-item .menu-text {
    margin-left: 0.667rem;
    font-size: 1.167rem;
    line-height: 2rem;
    color: #252933;
}
.dislike-menu .menu-item {
    height: 2.67rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 1rem;
}
.dislike-menu .menu-item .menu-icon {
    width: 1.333rem;
    height: 1.333rem;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
}
.dislike-menu .menu-item .icon-block-user {
    flex: 0 0 auto;
    background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/bc11676ce6e57f9b6a31638cd903e3f7.svg);
}
.dislike-menu .menu-item .tooltip {
    flex: 0 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}
.dislike-menu .menu-item .menu-text {
    margin-left: 0.667rem;
    font-size: 1.167rem;
    line-height: 2rem;
    color: #252933;
}
.dislike-menu .menu-item .menu-icon {
    width: 1.333rem;
    height: 1.333rem;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
}
.dislike-menu .menu-item .icon-block-tag {
    background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ee8bcf878773b9f4ed2fce9b786c455f.svg);
}
.dislike-menu .menu-item .menu-text {
    margin-left: 0.667rem;
    font-size: 1.167rem;
    line-height: 2rem;
    color: #252933;
}
.dislike-menu .menu-item .icon-arrow {
    margin-left: auto;
    background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/806fb5956ad7e61948539f496097b0b1.svg);
    transform: rotate(180deg);
}
.dislike-menu .menu-item .icon-report {
    background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8039766ff47103b8c50b5cb4becf77d4.svg);
}

</style>