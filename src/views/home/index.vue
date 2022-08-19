<script lang="ts" >
import { defineComponent } from 'vue';
import ListNav from './ListNav.vue'
import List from './List.vue'
export default defineComponent ({
  name: 'home-page-list',
  components:{ List, ListNav },
  
})

</script>

<template>
<div class='entry-list-container'>
  <nav class="list-nav">
    <!-- <ul class="nav-list left">
      <li class="nav-item">
      推荐
      最新
      热榜
      </li>
    </ul> -->
    <ListNav/>
  </nav>
  <div class="entry-list-wrap">
    <div class="entry-list list">
      <!-- <li class="item">一个列表项</li> -->
      <List />
    </div>
  </div>
</div>
</template>


<style scoped>
.entry-list-container {
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.entry-list-wrap{
  width: 700px;
  background: #fff;
  text-align: center;

  color: #333;
  font-size: 20px;
}

</style>