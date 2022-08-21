import { createRouter, createWebHashHistory } from "vue-router";

// const Layout = () => import('@/views/Layout')
const Layout = () => import("../views/Layout.vue");
// const Home = () => import('@/views/home')
const Home = () => import("../views/home/index.vue");
const Article = () => import("../views/post/Article.vue");
const NewArticle = () => import("../views/post/NewArticle.vue")

const routes = [
  {
    path: "/",
    component: Layout,
    children: [{ path: "/", component: Home }],
  },
  {
    path: "/post", 
    component: Article,
  },
  {
    path: "/post/new",
    component: NewArticle,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
