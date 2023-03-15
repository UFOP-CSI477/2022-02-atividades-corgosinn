import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
    children:[
      {
        path: '/users/add',
        name: 'CreateUser',
        component: () => import("@/components/user/register/DialogRegisterUser.vue"),
      }
    ]
  },
  {
    path: '/rates/add',
    name: 'AddRate',
    component: () => import("@/views/AddRate.vue")
  },
  {
    path: '/',
    name: 'AddRate',
    component: () => import("@/views/AddRate.vue")
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
