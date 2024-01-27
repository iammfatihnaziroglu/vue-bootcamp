import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
// import Home from '@/views/Home'
// import About from '@/views/About'

const routes = [
    {
        name: "HomePage",
        path: "/",
    //  components: Home
        component: () => import ("@/views/Home")
    },
    {
        name: "AboutPage",
        path: "/about-us",
    //  components: About
    component: () => import ("@/views/About")
    },
    {
        name: "DetailPage",
        path: "/details/:id",
    //  components: About
    component: () => import ("@/views/Details")
    },
];

const router =  createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;