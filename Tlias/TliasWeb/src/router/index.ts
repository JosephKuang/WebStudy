import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue"; 
import ClassManagement from "@/components/ClassManagement.vue";
import studentManagement from "@/components/studentManagement.vue"; 
import layOut from "@/view/layOut.vue";
import login from "@/view/login.vue";

const routes = [
  {
    path: "/",
    component: layOut,
    redirect: "/index",
    children: [
      
      {
        path: "index",  
        component: Home
      },
      {
        path: "class",
        name: "class",
        component: ClassManagement
      },
      {
        path: "student",
        name: "student",
        component: studentManagement
      }
    ]
  },
  {
    path: "/login",
    component: login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
