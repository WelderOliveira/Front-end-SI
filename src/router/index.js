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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
