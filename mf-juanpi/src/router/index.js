import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/register/register'
import IndexFooter from '@/components/component/IndexFooter'
import Login from '@/components/login/Login'
import Choiceness from '@/components/index/choiceness'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
 	{
      path: '/Choiceness/:fid',
      name: 'Choiceness',
      component: Choiceness
    },
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
    }
  ]
})
