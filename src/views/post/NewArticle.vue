<template>
  <h1>
    写文章
  </h1>
  <form action="/api/user/post/new" method="post">
    <div class="form-group">
      <label>标题</label>
      <input type="text" name="title">
    </div>
    <div class="form-group">
      <label>分类</label>
      <input type="text" name="category">
    </div>
    <div class="form-group">
      <label>内容</label>
      <input type="text" class="text-body" name="body">
    </div>
    <div class="form-group">
      <button type="submit">提交</button>
    </div>
  </form>
</template>

<script>
// import axios from "axios";
//
// export default {
//   name: "NewArticle",
//   data() {
//     return {
//       post: "",
//     };
//   },
//   created() {
//     axios
//         .post(
//             "/api/user/post",
//             {'aa': 123},
//         )
//         .then((response) => {
//           console.log(response)
//           this.post = response.data
//         });
//   },
// }
</script>

<style scoped lang="less">
form {
  display: block;
  .form-group {
    margin-bottom: 1rem;
    label {
      display: block;
      text-align: left;
      margin-bottom: 0.5rem;
    }
    input{
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 0.9375rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0;
    }
    .text-body{
      height: 300px;
    }
    button{
      float: left;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
}
</style>