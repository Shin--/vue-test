import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/projects',
      name: 'login',
      component: () => import('@/views/ProjectList.vue')
    // },
    // {
    //   path: '/projects/@:project-slug',
    //   name: 'register',
    //   component: () => import('@/views/Register.vue'),
    }
  ]
})
