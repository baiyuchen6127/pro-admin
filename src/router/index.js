import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Layout from '@/views/layout.vue'

Vue.use(VueRouter)

const routes = [
 {
   path:"/login",
   name:"login",
   component:Login
 },
 {
   path:"/",
  //  name:"layout",
   component:Layout,
   children:[
        {
          path:"",
          name:"home",
          component:Home 
        },
   ]
 }

]

const router = new VueRouter({
  routes
})

export default router
