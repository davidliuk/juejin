<template>
  <header class="list-header" style="display:;">
    <nav role="navigation" class="list-nav">
        <ul class="nav-list left">
          <li class="nav-item active">
            <a href="/">推荐</a>
          </li>
          <li class="nav-item">
            <a href="/?sort=newest">最新</a>
          </li>
          <li class="nav-item">
            <a href="/?sort=three_days_hottest">热榜</a>
          </li>
        </ul>
        <div class="dorp-down-area">
        <!---->
        </div>
    </nav>
  </header>
</template>
    
<script lang='ts'>
import { defineComponent } from 'vue'
    
export default defineComponent({
  setup() {
    // todo
    return {}
  }
})
</script>
    
<style lang='stylus' scoped></style>
    