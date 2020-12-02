import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Layout from '@/views/layout.vue'
import Content from '@/views/content.vue'
import  Image from '@/views/images.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

return originalPush.call(this, location).catch(err => err)

}

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
          path:"/",
          name:"home",
          component:Home 
        },
        {
          path:"/content",
          name:"content",
          component:Content 
        },
        {
          path:"/images",
          name:"images",
          component:Image 
        },
   ]
 }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  //  console.log('jinlail');
  //路由导航守卫，没有登录进入项目就到login页面
  //思路：如果访问的页面不是/login，校验登录状态
  //如果没有登录，则跳转到登录页面
  //如果登陆了，则允许通过
  const user=JSON.parse(window.localStorage.getItem('user'))
  if(to.path !=='/login'){
        if(user){
          next()
        }else{
          next('/login')
        }
  }else{
      next()
  }
   
   next()
})

export default router
