import { createApp } from "vue";
import { createPinia } from 'pinia'
import ArcoVue from "@arco-design/web-vue";
import "./style.css";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);
const pinia = createPinia()

app.use(pinia)
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: "arco",
});
app.mount("#app");
