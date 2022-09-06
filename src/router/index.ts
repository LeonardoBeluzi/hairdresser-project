import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue";
import ClientRegister from "../views/ClientRegister.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ClientRegister",
    name: "ClientRegister",
    component: ClientRegister,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
