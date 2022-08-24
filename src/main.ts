import { createApp } from "vue";
import { createPinia } from "pinia";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import router from "./router";
import "@arco-design/web-vue/dist/arco.css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; //样式
import "normalize.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: "arco",
});
//创建v-highlight全局指令
app.directive("highlight", function (el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block: HTMLElement) => {
    hljs.highlightBlock(block);
  });
});
app.mount("#app");
