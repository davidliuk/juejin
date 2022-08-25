<template>
  <!--  <h1>登录</h1>-->
  <!--  <form action="api/auth/login" target="_blank" method="post">-->
  <!--    <div class="form-group">-->
  <!--      <label>用户名</label>-->
  <!--      <input type="text" name="username">-->
  <!--    </div>-->
  <!--    <div class="form-group">-->
  <!--      <label>密码</label>-->
  <!--      <input type="password" name="password">-->
  <!--    </div>-->
  <!--    <input type="hidden" value="http://localhost:5173/#/">-->
  <!--    <div class="form-group">-->
  <!--      <button type="submit" class="btn btn-primary">提交</button>-->
  <!--    </div>-->
  <!--  </form>-->
  <main class="container mt-5 pt-5">
    <div class="container h-100">
      <div class="row h-100 page-header justify-content-center align-items-center">
        <h1>登录</h1>
      </div>
      <div class="row h-100 justify-content-center align-items-center">
        <form action="api/auth/login" method="post" class="form col-6" role="form" target="_blank" @submit.prevent="checkLogin">
          <div class="form-group required"><label class="form-control-label" for="username">用户名</label>
            <input v-model="formInline.username" class="form-control" id="username" maxlength="20" minlength="0"
                   name="username" required=""
                   type="text">
          </div>
          <div class="form-group required"><label class="form-control-label" for="password">密码</label>
            <input v-model="formInline.password" class="form-control" id="password" maxlength="128" minlength="1"
                   name="password" required=""
                   type="password">
          </div>
          <div class="form-group form-check"><input class="form-check-input" id="remember" name="remember"
                                                    type="checkbox" value="y">
            <label class="form-check-label" for="remember">记住我</label>
          </div>
          <input class="btn btn-light btn-md" id="submit" name="submit" type="submit" value="提交">
        </form>
      </div>
    </div>
  </main>
</template>

<script lang='ts'>

import {methods} from "@arco-design/web-vue/es/_utils/date";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      formInline: {
        username: '',
        password: ''
      },
      // ruleInline: {
      //   user: [
      //     { required: true, message: 'Please fill in the user name', trigger: 'blur' }
      //   ],
      //   password: [
      //     { required: true, message: 'Please fill in the password.', trigger: 'blur' },
      //     { type: 'string', min: 3, message: 'The password length cannot be less than 3 bits', trigger: 'blur' }
      //   ]
      // }
    }
  },
  // created() {
  //   axios
  //       .post('http://127.0.0.1:5000/auth/login')
  //       .then(
  //           (response) => {
  //             if(response.data.status === 'failed'){
  //               alert('fuck')
  //             }else{
  //               this.$router.push({path: '/'})
  //             }
  //           }
  //       )
  // },
  methods: {
    checkLogin() {
      console.log(this.formInline)
      axios
          .post('http://127.0.0.1:5000/auth/login',this.formInline)
          .then((response) => {
            console.log(response)
            console.log(response.data.status)
            if (response.data.status === 'failed') {
              alert('用户名或密码错误')
            } else {
              //sessionStorage.setItem('userInfo', JSON.stringify(res.data))
              this.$router.push({path: '/'})
            }
          })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/theme.css";
//form {
//  display: block;
//  margin: 0 auto;
//  width: 50%;
//
//  .form-group {
//    margin-bottom: 1rem;
//
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