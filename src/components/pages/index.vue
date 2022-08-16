<template>
  <div class="main-content">
    <div class="left-column">
      <ul class="infinite-list" ref="list">
        <EntryList
            v-for="item in articles"
            :key="item.article.title"
            :article="item.article"
            :author="item.author"
        />
        <div class="loading" v-loading="busy" v-if="busy">
        </div>
      </ul>
    </div>
    <div class="right-column">Waiting</div>
  </div>
</template>

<script>
import EntryList from "./EntryList.vue";

export default {
  components: {
    EntryList,
  },
  data() {
    return {
      busy: false,
      total: 0,
      loading: false,
      articles: [
        {
          author: {
            name: "志准话你受空",
            homepage: "Ut proident incididunt laborum",
          },
          article: {
            time: "1971-06-02 10:00:53",
            tag: "minim dolore",
            tag_link: "culpa",
            title: "打点火内量列",
            link: "labore",
            desc: "qui",
            views: "dolor",
            likes: "quis",
            comments: "voluptate reprehenderit cupidatat",
          },
        },
        {
          author: {
            name: "志准话你受空",
            homepage: "Ut proident incididunt laborum",
          },
          article: {
            time: "1971-06-02 10:00:53",
            tag: "minim dolore",
            tag_link: "culpa",
            title: "打点火内量列",
            link: "labore",
            desc: "qui",
            views: "dolor",
            likes: "quis",
            comments: "voluptate reprehenderit cupidatat",
          },
        },
        {
          author: {
            name: "八成段",
            homepage: "ad amet fugiat veniam deserunt",
          },
          article: {
            time: "1978-12-29 21:57:06",
            tag: "non in magna",
            tag_link: "tempor",
            title: "太政边下见",
            link: "cillum enim nulla nostrud consectetur",
            desc: "dolor proident occaecat velit",
            views: "in deserunt",
            likes: "in ad ut Ut",
            comments: "laboris commodo ullamco elit",
          },
        },
        {
          author: {
            name: "重空今几果查",
            homepage: "ipsum in id consequat",
          },
          article: {
            time: "2002-08-16 07:02:31",
            tag: "amet",
            tag_link: "est cillum laboris amet",
            title: "难定天程处",
            link: "laborum",
            desc: "quis laboris nulla enim nostrud",
            views: "incididunt laboris in cupidatat",
            likes: "velit officia",
            comments: "qui",
          },
        },
        {
          author: {
            name: "家院议发能",
            homepage: "velit tempor",
          },
          article: {
            time: "1989-05-01 05:45:30",
            tag: "eiusmod",
            tag_link: "cillum in mollit laboris fugiat",
            title: "地当类真确",
            link: "sit ea cupidatat",
            desc: "dolore Duis amet labore",
            views: "cillum cupidatat non",
            likes: "et officia nulla",
            comments: "dolore anim esse elit ullamco",
          },
        },
        {
          author: {
            name: "火究报斯热放",
            homepage: "deserunt qui",
          },
          article: {
            time: "1982-06-08 18:03:35",
            tag: "proident laboris consequat",
            tag_link: "ad in ea",
            title: "百变真话干又",
            link: "proident commodo deserunt",
            desc: "et in est nisi do",
            views: "sint",
            likes: "dolor aliqua sunt",
            comments: "ea magna incididunt enim",
          },
        },
        {
          author: {
            name: "火究报斯热放",
            homepage: "deserunt qui",
          },
          article: {
            time: "1982-06-08 18:03:35",
            tag: "proident laboris consequat",
            tag_link: "ad in ea",
            title: "百变真话干又",
            link: "proident commodo deserunt",
            desc: "et in est nisi do",
            views: "sint",
            likes: "dolor aliqua sunt",
            comments: "ea magna incididunt enim",
          },
        },
        {
          author: {
            name: "火究报斯热放",
            homepage: "deserunt qui",
          },
          article: {
            time: "1982-06-08 18:03:35",
            tag: "proident laboris consequat",
            tag_link: "ad in ea",
            title: "百变真话干又",
            link: "proident commodo deserunt",
            desc: "et in est nisi do",
            views: "sint",
            likes: "dolor aliqua sunt",
            comments: "ea magna incididunt enim",
          },
        },
      ],
    };
  },
  methods: {
    getKey() {
      return this.total++;
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.articles = this.articles.concat(this.articles);
        this.loading = false;
      }, 2000);
    },
  },
  mounted() {
    const that = this;
    window.onscroll = function () {
      if (that.busy) {
        return;
      }
      that.busy = true;
      setTimeout(() => {
        const bottom = that.$refs.list.getBoundingClientRect().bottom; //list元素底部到屏幕顶部的距离
        const windowHeight = window.innerHeight; //获取窗口高度
        const distance = 70; //设置阈值为70px，因为设置了一个margin-bottom
        if (Math.abs(bottom - windowHeight) < distance) {
          setTimeout(() => {
            that.articles = that.articles.concat(that.articles);
            that.busy = false;
          }, 2000);

        }else{
          that.busy = false;
        }
      }, 200);
    };
  },
};
</script>

<style lang="less" scoped>
.main-content {
  position: relative;
  width: 960px;
  margin: 60px auto;
  .left-column {
    width: 700px;
  }

  .right-column {
    position: absolute;
    width: 240px;
    top: 0;
    right: 0;
  }
}
</style>