import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Register from '@/components/register/register'

import IndexFooter from '@/components/component/IndexFooter'
import Brand from '@/components/index/brand'
import Beauty from '@/components/index/beauty'


import Login from '@/components/login/Login'


Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/IndexFooter',
      name: 'IndexFooter',
      component: IndexFooter
	},
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/beauty',
      name: 'Beauty',
      component: Beauty
    }
  ]
})
