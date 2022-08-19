import { createRouter, createWebHashHistory } from 'vue-router'

// const Layout = () => import('@/views/Layout')
const Layout = () => import('../views/Layout.vue')
// const Home = () => import('@/views/home')
const Home = () => import('../views/home/index.vue')

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
                { path: '/', component: Home }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router