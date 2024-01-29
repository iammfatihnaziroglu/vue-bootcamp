import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/Register.vue"),
  },
  {
    name: "NewBookmarkPage",
    path: "/newbookmark",
    component: () => import("@/views/NewBookmark.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["HomePage"];
  const _isAuthenticated = store.getters._isAuthenticated;
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({name: "LoginPage"});
  } else {
    next();
  }
});

export default router;
