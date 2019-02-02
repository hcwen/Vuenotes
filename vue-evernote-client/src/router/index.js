import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../views/Login";
import Layout from "../components/Layout"
import Notebooks from '../views/Notebooks'
import Notes from '../views/Notes'
import Trash from '../views/Trash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/notebooks',
      children: [
        {
          path: 'notebooks',
          component: Notebooks
        },
        {
          path: 'notes',
          component: Notes
        },
        {
          path: 'trash',
          component: Trash
        },
        {
          path: 'hello',
          component: HelloWorld
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})