import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../components/pages/index.vue'
import Index from '../components/pages/index'
import Article from '../components/page/Article'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: index },
];


export default new VueRouter({
    routes
})