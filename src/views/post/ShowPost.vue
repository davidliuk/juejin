<template>
  <main class="container mt-5">
    <div class="row page-header justify-content-center align-items-center">
      <h1>文章列表</h1>
    </div>
    <table class="table table-striped mt-3">
      <thead>
      <tr class="text-center">
        <th>编号</th>
        <th>标题</th>
        <th>分类</th>
        <th>正文</th>
        <th>选项</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(val,key) in data.post" class="text-center">
        <td>
          {{ key }}
        </td>
        <td>
          <a href="http://localhost:5173/#/post">{{ val[0] }}</a>
        </td>
        <td>
          {{ val[1] }}
        </td>
        <td>
          {{ val[2].substring(0, 25) + '...' }}
        </td>
        <td>
          <form class="inline" :action="'/api/user/post/'+key.toString()+'/delete'" method="post"
                @submit.prevent="articleDelete(key)">
            <button class="btn btn-danger btn-md" onclick="return confirm('确认删除？')">删除</button>
          </form>
        </td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "ShowPost",
  data() {
    return {
      data: {},
    };
  },
  created() {
    axios
        .post(
            "/api/user/post",
        )
        .then((response) => {
          console.log(response)
          this.data = response.data
        });
  },
  methods: {
    articleDelete(index) {
      axios
          .post('http://127.0.0.1:5000/user/post/'+index.toString()+'/delete')
          .then((response) => {
            console.log(response)
            console.log(response.data.status)
            if (response.data.status === 'failed') {
              alert('');
            } else {
              alert('文章删除成功！')
              //sessionStorage.setItem('userInfo', JSON.stringify(res.data))
              this.$router.go(0)
            }
          })
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/theme.css";
//.container {
//  display: flex;
//  flex-direction: column;
//
//  table {
//    width: 100%;
//    max-width: 100%;
//    margin-bottom: 1rem;
//    background-color: transparent;
//
//    th, td {
//      padding: 0.75rem;
//      vertical-align: top;
//      border-top: 1px solid #dee2e6;
//
//      a {
//        color: #213547;
//      }
//
//      a:hover {
//        color: #fff;
//      }
//    }
//
//    thead th {
//      vertical-align: bottom;
//      border-bottom: 2px solid #dee2e6;
//    }
//  }
//
//  .table-striped {
//    tr:nth-of-type(odd) {
//      background-color: rgba(0, 0, 0, 0.05);
//    }
//  }
//
//}
</style>