import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Register from '@/components/register/register'
import IndexFooter from '@/components/component/IndexFooter'


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
    }
  ]
})
