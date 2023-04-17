/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "../views/CartPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProductsDetailPage from "../views/ProductsDetailPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductsDetailPage,
  },
  {
    path: "/cart/",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/",
    redirect: "/products",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
