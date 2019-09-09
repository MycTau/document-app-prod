import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contracts from './views/Contracts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contracts',
      component: Contracts,
      children: [
        {
          path: '',
          name: 'contracts-list',
          component: () => import('./views/ContractsList.vue')
        },
        {
          path: '/new/contract',
          name: 'new-contract',
          component: () => import('./views/ContractsForm')
        }
      ],
    }
  ]
})
