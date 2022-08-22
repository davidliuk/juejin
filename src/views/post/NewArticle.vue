<template>
  <h1>
    写文章
  </h1>
  <form action="/api/user/post/new" target="_blank" method="post">
    <div class="form-group">
      <label>标题</label>
      <input type="text" name="title">
    </div>
    <div class="form-group">
      <label>分类</label>
      <select name="category">
        <option v-for="category in data.category" name="category">{{ category }}</option>
      </select>
    </div>
    <div class="form-group">
      <label>内容</label>
      <textarea class="text-body" name="body"></textarea>
    </div>
    <div class="form-group">
      <button type="submit">提交</button>
    </div>
  </form>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "NewArticle",
  data() {
    return {
      data: {},
    };
  },
  created() {
    axios
        .post(
            "/api/user/category",
        )
        .then((response) => {
          console.log(response)
          this.data = response.data
        });
  },
}
</script>

<style scoped lang="less">
form {
  display: block;
  margin: 0 auto;
  width: 80%;

  .form-group {
    margin-bottom: 1rem;
    label {
      display: block;
      text-align: left;
      margin: 0 auto 0.5rem;
      font-size: 1.2rem;
      width: 100%;
      box-sizing: border-box;
    }

    input {
      padding: 0.375rem 0.75rem;
      display: block;
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0;
      margin: 0 auto;
      box-sizing: border-box;
    }

    select {
      padding: 0.375rem 0.75rem;
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .text-body {
      padding: 0.375rem 0.75rem;
      font-size: 1.2rem;
      height: 450px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ced4da;
      border-radius: 0;
    }

    button {
      display: block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
}
</style>