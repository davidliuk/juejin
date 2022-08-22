<template>
  <h1>文章列表</h1>
  <main class="container">
    <table class="table-striped">
      <thead>
      <tr>
        <th>编号</th>
        <th>标题</th>
        <th>分类</th>
        <th>正文</th>
        <th>选项</th>
      </tr>
      <tr v-for="(val,key) in data.post">
        <td>
          {{ key }}
        </td>
        <td>
          <a href="#">{{ val[0] }}</a>
        </td>
        <td>
          {{ val[1] }}
        </td>
        <td>
          {{ val[2].substring(0, 25)+'...' }}
        </td>
        <td>
          <form class="inline" method="post">
            <button>删除</button>
          </form>
        </td>
      </tr>
      </thead>
    </table>
  </main>
</template>

<script>
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
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;

  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;

    th, td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
      a{
        color: #213547;
      }
      a:hover{
        color: #fff;
      }
    }

    thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }
  }

  .table-striped {
    tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

}
</style>