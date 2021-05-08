import {createRouter,createWebHistory} from "vue-router";
import type {RouteRecordRaw} from 'vue-router';

const routes:RouteRecordRaw[]=[
  {
    path:'/',
    name:'首页',
    component:()=>import('../views/main/v-main.vue'),
    children:[
      {
        path:'world',
        name:'世界观',
        component:()=>import('../views/world/world.vue'),
      },
      {
        path:'character',
        name:'角色',
        component:()=>import('../views/character/character.vue'),
      },
      {
        path:'sd',
        name:'设定集',
        component:()=>import('../views/sd/sd.vue'),
      },
      {
        path:'login',
        name:'登录',
        component:()=>import('../views/login/login.vue'),
      },
      {
        path:'register',
        name:'注册',
        component:()=>import('../views/register/register.vue'),
      }
    ]
  },
];

const router=createRouter({
  history:createWebHistory(),
  routes,
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
});

router.beforeEach((to, from, next) => {
  document.title=to.name as string;
  next();
});

export default router;