import Vue from "vue";
import VueRouter from "vue-router";
const Main = () => import("../views/Main");
const GoodList = () => import("../views/good/GoodList");
const GoodEdit = () => import("../views/good/GoodEdit");
const CategoryList = () => import("../views/category/CategoryList");
const CategoryEdit = () => import("../views/category/CategoryEdit");
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
        path: "goods-create",
        component: GoodEdit
      },
      {
        path: "goods-edit/:id",
        component: GoodEdit,
        props: true
      },

      {
        path: "categories/list",
        component: CategoryList
      },
      {
        path: "categories-create",
        component: CategoryEdit
      },
      {
        path: "categories-edit/:id",
        component: CategoryEdit,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
