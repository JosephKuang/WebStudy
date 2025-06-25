import { createRouter,createWebHistory } from "vue-router";

//创建路由器并暴露出去

import home from "@/components/home.vue"
import news from "@/components/news.vue"
import details from"@/components/details.vue"
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:home
        },
        {
            path:'/news',
            component:news,
            children:[
                {
                    name:'details',
                    path:'details/:id/:title',
                    component:details,
                    props:true
                }
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }
        
    ]
})


export default router;