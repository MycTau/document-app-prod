import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contracts from './views/Contracts'
import Invoices from './views/Invoices'

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
        },
        {
          path: ':id/edit',
          name: 'edit-contract',
          component: () => import('./views/ContractsForm'),
          props: true
        },
        {
          path: ':id/delete',
          name: 'delete-contract',
          component: () => import('./views/ContractsDelete'),
          props: true
        },
      ],
    },
    {
      path: '/invoices',
      component: Invoices,
      children: [
        {
          path: '',
          name:'invoices-list',
          component: () => import('./views/InvoicesList.vue')
        },
        {
          path: '/new/invoice',
          name: 'new-invoice',
          component: () => import('./views/InvoicesForm')
        },
      ]
    }
  ]
})
