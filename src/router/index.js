import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/home/discovery",
    component: () => import("@/views/home"),
    children: [
      {
        name: "Search",
        path: "search",
        component: () => import("@/views/searchList"),
      },
      {
        name: 'Discovery',
        path: "discovery",
        component: () => import("@/views/discovery"),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
