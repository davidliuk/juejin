<template>
  <!--  <h1>-->
  <!--    写文章-->
  <!--  </h1>-->
  <!--  <form action="/api/user/post/new" target="_blank" method="post">-->
  <!--    <div class="form-group">-->
  <!--      <label>标题</label>-->
  <!--      <input type="text" name="title">-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <label>分类</label>-->
  <!--      <select name="category">-->
  <!--        <option v-for="category in data.category" name="category">{{ category }}</option>-->
  <!--      </select>-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <label>内容</label>-->
  <!--      <textarea class="text-body" name="body"></textarea>-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <button type="submit">提交</button>-->
  <!--    </div>-->
  <!--  </form>-->
  <main class="container mt-5 pt-5">
    <div class="row page-header justify-content-center align-items-center">
      <h1>写文章</h1>
    </div>
    <div class="mb-3">
      <form action method="post" class="form" role="form" @submit.prevent="articlePost">
        <div class="form-group required">
          <label class="form-control-label" for="title">标题</label>
          <input v-model="article.title" class="form-control" id="title" maxlength="60" minlength="1" name="title" required="" type="text">
        </div>
        <div class="form-group"><label class="form-control-label" for="category">分类</label>
          <select v-model="article.category" class="form-control" id="category" name="category">
            <option v-for="category in categoryList" name="category">{{ category }}</option>
          </select>
        </div>
        <div class="form-group required">
          <label class="form-control-label" for="title">内容</label>
          <textarea v-model="article.body" class="form-control" rows="18">
          </textarea>
        </div>
        <input class="btn btn-light btn-md" id="submit" name="submit" type="submit" value="提交">
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "NewArticle",
  data() {
    return {
      categoryList: {},
      article: {
        title: '',
        category: '',
        body: '',
      },
    };
  },
  created() {
    axios
        .post(
            "/api/user/category",
        )
        .then((response) => {
          console.log(response)
          this.categoryList = response.data.category
          console.log(this.categoryList)
        });
  },
  methods: {
    articlePost() {
      //console.log(this.formInline)
      axios
          .post('http://127.0.0.1:5000/user/post/new', this.article)
          .then((response) => {
            console.log(response)
            console.log(response.data.status)
            if (response.data.status === 'failed') {
              alert('');
            } else {
              alert('文章发布成功！')
              //sessionStorage.setItem('userInfo', JSON.stringify(res.data))
              this.$router.push({path: '/post/show'})
            }
          })
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/theme.css";
//form {
//  display: block;
//  margin: 0 auto;
//  width: 80%;
//
//  .form-group {
//    margin-bottom: 1rem;
//    label {
//      display: block;
//      text-align: left;
//      margin: 0 auto 0.5rem;
//      font-size: 1.2rem;
//      width: 100%;
//      box-sizing: border-box;
//    }
//
//    input {
//      padding: 0.375rem 0.75rem;
//      display: block;
//      width: 100%;
//      font-size: 1.2rem;
//      line-height: 1.5;
//      color: #495057;
//      background-color: #fff;
//      background-clip: padding-box;
//      border: 1px solid #ced4da;
//      border-radius: 0;
//      margin: 0 auto;
//      box-sizing: border-box;
//    }
//
//    select {
//      padding: 0.375rem 0.75rem;
//      width: 100%;
//      font-size: 1.2rem;
//      line-height: 1.5;
//      color: #495057;
//      background-color: #fff;
//      background-clip: padding-box;
//      border: 1px solid #ced4da;
//      border-radius: 0;
//      margin: 0 auto;
//      box-sizing: border-box;
//    }
//
//    .text-body {
//      padding: 0.375rem 0.75rem;
//      font-size: 1.2rem;
//      height: 450px;
//      width: 100%;
//      box-sizing: border-box;
//      border: 1px solid #ced4da;
//      border-radius: 0;
//    }
//
//    button {
//      display: block;
//      font-weight: 400;
//      text-align: center;
//      white-space: nowrap;
//      vertical-align: middle;
//    }
//  }
//}
</style>