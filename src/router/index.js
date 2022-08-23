import { createRouter, createWebHashHistory } from "vue-router";

// const Layout = () => import('@/views/Layout')
const Layout = () => import("../views/Layout.vue");
// const Home = () => import('@/views/home')
const Home = () => import("../views/home/index.vue");
const Article = () => import("../views/post/Article.vue");
const NewArticle = () => import("../views/post/NewArticle.vue")
const Register = () => import("../views/home/Register.vue")
const Login = () => import("../views/home/Login.vue")
const ShowPost = () => import("../views/post/ShowPost.vue")

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
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/post/show",
    component: ShowPost,
  },
];

const router = createRouter({
  history: createWebHashHistory('/juejinweb/'),
  routes,
});

export default router;
