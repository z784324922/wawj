
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)

// 单文件组件
import Guide from "./guide.vue"
import Layout from "./layout.vue"
import Home from "./home.vue"
import My from "./my.vue"
import Find from "./find.vue"
import Detail from "./detail.vue"
import Login from "./login.vue"
import Register from "./register.vue"
import Password from "./password.vue"
import Hlayout from "./hlayout.vue"
import Ershou from "./ershou.vue"
import Tenement from "./tenement.vue"
import Village from "./house/village.vue"
import Store from "./house/store.vue"
import Agent from "./house/agent.vue"
import Mapsearch from "./house/mapsearch.vue"
import Entrust from "./house/entrust.vue"
import Contract from "./house/contract.vue"


var routes = [
    {
        path:"/",
        component:Guide,
    },
    {
        path:"/login",
        component:Login,
    },
    {
        path:"/register",
        component:Register,
    },
    {
        path:"/password",
        component:Password,
    },
    {
        path:"/index",
        component:Layout,
        children:[
            {path:"home",name:"home",component:Home},
            {path:"my",name:"my",component:My},
            {path:"find",name:"find",component:Find},
            {path:"*",redirect:"/index/home"}
        ]
    },
    {
        path:"/house",
        component:Layout,
        children:[
            {path:"ershou",name:"ershou",component:Ershou},
            {path:"tenement",name:"tenement",component:Tenement},
            {path:"village",name:"village",component:Village},
            {path:"store",name:"store",component:Store},
            {path:"agent",name:"agent",component:Agent},
            {path:"mapsearch",name:"mapsearch",component:Mapsearch},
            {path:"entrust",name:"entrust",component:Entrust},
            {path:"contract",name:"contract",component:Contract},
        ]
    },
    {
        path:"/detail",
        component:Detail,
    }
]

const router = new VueRouter({
    mode:"hash",
    routes
});

export default router;