import { createRouter, createWebHistory } from 'vue-router'

import Auth from "@/views/AuthPage.vue";

const routes =  [
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
        meta:{
            layout: "a-empty"
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router