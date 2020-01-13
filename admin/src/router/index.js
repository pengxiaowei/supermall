import Vue from "vue";
import VueRouter from "vue-router";
const Main = () => import("../views/Main");
const GoodList = () => import("../views/good/GoodList");
const GoodEdit = () => import("../views/good/GoodEdit");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "goods/list",
        component: GoodList
      },
      {
        path: "goods/create",
        component: GoodEdit
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
