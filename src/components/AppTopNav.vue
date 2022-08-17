<template>
    <nav class="app-top-nav">
        <div class="container">
            <div class="'logo'">
                <a href="">
                <img class="logo-img" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金"/>
                </a>
            </div>
            <ul class="item">
              <li><a href="javascript:;">首页</a></li>
              <li><a href="javascript:;">沸点</a></li>
              <li><a href="javascript:;">课程</a></li>
              <li><a href="javascript:;">直播</a></li>
              <li><a href="javascript:;">活动</a></li>
              <li><a href="javascript:;">商城</a></li>
              <li><a href="javascript:;">APP</a></li>
              <li><a href="javascript:;">插件</a></li>
            </ul>
            <!-- 搜索框部分 -->
            <div :class="['search-and-creatorcenter', isSearchFocus ? 'focus' : '']">
                    <div class="search">
                        <input @focusout="searchFocusoutHandler" @focusin="searchFocusinHandler" :placeholder="placeholder" type="text" class="input"/>
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
                                <img class="icon" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0c8073862f04c2925249fd397763fd3.svg"/>
                                <div class="title">写文章</div>
                            </div>
                            <div class="item">
                                <img class="icon" src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e5381c85b5939d984a4b0c0edf102122.svg"/>
                                <div class="title">发沸点</div>
                            </div>
                            <div class="item">
                                <img class="icon" src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/01c75d281edffa91cacfb93189c940b4.svg"/>
                                <div class="title">写代码</div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- 右侧部分 -->
            <div class="member">
                <img class="icon" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
                <div class="title">会员</div>
            </div>
            <svg class="notify" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z" stroke-width="1.5" stroke-linecap="round" data-v-925bf8d6=""></path><path d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round" data-v-925bf8d6=""></path><path d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <!-- 头像 -->
            <!-- Todo 根据是否登录显示不同 -->
            <a-space size="large">
                <a-avatar :size="40" :style="{ backgroundColor: '#3370ff' }">juejin</a-avatar>
                  <!-- <IconUser /> -->
            </a-space>
        </div>
    </nav>
</template>

<script>
import { IconUser } from '@arco-design/web-vue/es/icon';

export default {
  name: 'AppTopNav',
  components: { IconUser },
};
</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
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
        justify-content: center;
        border-bottom: 0.5px solid #F1F1F1;
        
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

            ul {
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
                            top: 0px;
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
                    width: 0px;
                    padding: 0px;
                    margin: 0px;
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
    }

    .floor-2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 45px;
        justify-content: center;;

        .floor-2-container {
            display: flex;
            justify-content: bewteen;
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