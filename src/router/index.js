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
        path: '/',
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
        component: () => import('../views/CadastroProduto.vue')
    },
    {
        path: '/quemSomos',
        name: 'QuemSomos',
        component: () => import('../views/QuemSomosView.vue')
    },
    {
        path: '/relatorio',
        name: 'relatorio',
        component: () => import('../views/Itens/grafico.vue')
    },
    {
        path: '/visualizarProdutos',
        name: 'produtos',
        component: () => import('../views/Itens/ShowAllView.vue')
    },
    {
        path: '/showProduto/:id',
        name: 'showProduto',
        component: () => import('../views/Itens/ShowView.vue')
    },
    {
        path:'/chat',
        name:'chat',
        component:()=>import('../views/Itens/chat.vue')
    },
    {
        path:'/indiqueFriend',
        name:'indique',
        component:()=>import('../views/Indique.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (
        to.name !== "login" &&
        to.name !== "register" &&
        !localStorage.getItem("authUser")
    ) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router
