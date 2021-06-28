import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Build from '@/views/Build.vue'
import TemplateVue from '@/views/Template.vue'
import Format from '@/views/Format.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/build',
    name: 'BuildRoot',
    component: Build
  },
  {
    path: '/build/:id',
    name: "Build",
    component: Build
  },
  {
    path: '/format',
    name: "Format",
    component: Format
  },
  {
    path: '/templates',
    name: 'Templates',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "templates" */ '../views/Templates.vue')
  },
  {
    path: '/templates/:id',
    name: 'Template',
    component: TemplateVue
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
