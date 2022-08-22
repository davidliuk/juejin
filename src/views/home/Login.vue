<template>
  <h1>登录</h1>
  <form action="api/auth/login" target="_blank" method="post">
    <div class="form-group">
      <label>用户名</label>
      <input type="text" name="username">
    </div>
    <div class="form-group">
      <label>密码</label>
      <input type="password" name="password">
    </div>
    <input type="hidden" value="http://localhost:5173/#/">
    <div class="form-group">
      <button type="submit">提交</button>
    </div>
  </form>
</template>

<script lang='ts'>
export default {
  name: "Login"
}
</script>

<style scoped lang="less">
form {
  display: block;
  margin: 0 auto;
  width: 50%;

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