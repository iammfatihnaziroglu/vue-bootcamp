import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/Home.vue")
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/views/Login.vue")
    },
    {
        name: "RegisterPage",
        path: "/register",
        component: () => import("@/views/Register.vue")
    },
    {
        name: "NewBookmarkPage",
        path: "/newbookmark",
        component: () => import("@/views/NewBookmark.vue")
    },
]

const router = createRouter ({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    console.log("to =>", to)
    console.log("from =>", from)
    next();
})

export default router;