import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/login",
        name: "Login",
        component: () => import("./pages/Login.vue"),
      },
      {
        path: "/signup",
        alias: "/signup",
        name: "SignUp",
        component: () => import("./pages/SignUp.vue"),
      },
    {
      path: "/todo",
      alias: "/todo",
      name: "TodoHome",
      component: () => import("./pages/TodoHome.vue") ,
    },
    {
      path: "/update",
      name: "/update",
      component: () => import("./pages/Update.vue"),
    },
    {
      path: "/add",
      name: "Add",
      component: () => import("./pages/Add.vue"),
    },
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const email=localStorage.getItem('email');
    if (to.fullPath === '/todo') {
      if (!email) {
        next('/login');
      }
    }
    if (to.fullPath === '/add') {
      if (!email) {
        next('/login');
      }
    }
    if (to.fullPath === '/update') {
      if (!email) {
        next('/login');
      }
    }
    next();
  });
  export default router;