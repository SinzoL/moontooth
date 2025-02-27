import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component : () => import('../views/Login.vue')
    },
    {
        path: "/home",
        name: "Home",
        component : () => import('../views/Home.vue')
    },
    {
        path:"/register",
        name:"Register",
        component : () => import('../views/Register.vue')
    },
    {
        path:"/movie",
        name:"Movie",
        component : () => import('../views/Movie.vue')
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router