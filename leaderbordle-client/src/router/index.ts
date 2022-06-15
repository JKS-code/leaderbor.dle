import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "@auth0/auth0-vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/secret",
    name: "secret",
    component: () =>
      import(/* webpackChunkName: "secret" */ "../views/Secret.vue"),
    beforeEnter: authGuard,
  },
  {
    path: "/play",
    name: "play",
    component: () => import(/* webpackChunkName: "play" */ "../views/Play.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
