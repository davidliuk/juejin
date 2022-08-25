<template>
  <!--  <h1>欢迎来到"掘金"！</h1>-->
  <!--  <form action="/api/auth/register" target="_blank" method="post">-->
  <!--    <div class="form-group">-->
  <!--      <label>用户名</label>-->
  <!--      <input type="text" name="username">-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <label>密码</label>-->
  <!--      <input type="password" name="password">-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <label>确认密码</label>-->
  <!--      <input type="password" name="confirm-password">-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <button type="submit">提交</button>-->
  <!--    </div>-->
  <!--  </form>-->
  <main class="container mt-5 pt-5">
    <div class="container h-100">
      <div class="row h-100 page-header justify-content-center align-items-center">
        <h1>欢迎来到"掘金"</h1>
      </div>
      <div class="row h-100 justify-content-center align-items-center">
        <form action="api/auth/login" method="post" class="form col-6" role="form" target="_blank"
              @submit.prevent="checkRegister">
          <div class="form-group required"><label class="form-control-label" for="username">用户名</label>
            <input v-model="formRegister.username" class="form-control" id="username" maxlength="20" minlength="0"
                   name="username" required=""
                   type="text">
          </div>
          <div class="form-group required"><label class="form-control-label" for="password">密码</label>
            <input v-model="formRegister.password" class="form-control" id="password" maxlength="128" minlength="1"
                   name="password" required=""
                   type="password">
          </div>
          <div class="form-group required"><label class="form-control-label" for="password">确认密码</label>
            <input v-model="formRegister.confirm" class="form-control" id="password" maxlength="128" minlength="1"
                   name="password" required=""
                   type="password">
          </div>
          <input class="btn btn-light btn-md" id="submit" name="submit" type="submit" value="提交">
        </form>
      </div>
    </div>
  </main>
</template>

<script lang='ts'>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      formRegister: {
        username: '',
        password: '',
        confirm: '',
      }
    }
  },
  methods:{
    checkRegister(){
      axios
          .post('http://127.0.0.1:5000/auth/register',this.formRegister)
          .then((response) => {
            console.log(response)
            console.log(response.data.status)
            if (response.data.status === 'failed') {
              alert('密码不匹配')
            } else {
              alert('注册成功！')
              //sessionStorage.setItem('userInfo', JSON.stringify(res.data))
              this.$router.push({path: '/login'})
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
//  width: 50%;
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