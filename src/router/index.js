import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Authentication/Registration.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Authentication/Login.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/Authentication/ForgotPassword.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/newsletter',
        name: 'newsletter',
        component: () => import('../views/NewsView.vue')
    },
    {
        path: '/cadastroProduto',
        name: 'cadastroProduto',
        component: () => import('../views/cadastroProduto.vue')
    },
    {
        path: '/quemSomos',
        name: 'QuemSomos',
        component: () => import('../views/QuemSomosView.vue')
    },
    {
        path: '/visualizarProdutos',
        name: 'produtos',
        component: () => import('../views/Itens/ShowAllView.vue')
    },
    {
        path: '/showProduto',
        name: 'showProduto',
        component: () => import('../views/Itens/ShowView.vue')
    },
    {
        path:'/chat',
        name:'chat',
        component:()=>import('../views/Itens/chat.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
