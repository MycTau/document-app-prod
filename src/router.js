import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contracts from './views/Contracts'
import Invoices from './views/Invoices'
import Acts from './views/Acts'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
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
          path: 'new',
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
          path: 'new',
          name: 'new-invoice',
          component: () => import('./views/InvoicesForm')
        },
        {
          path: ':id/edit',
          name: 'edit-invoice',
          component: () => import('./views/InvoicesForm'),
          props: true
        },
        {
          path: ':id/delete',
          name: 'delete-invoice',
          component: () => import('./views/InvoicesDelete'),
          props: true
        }
      ],
    },
    {
      path: '/acts',
      component: Acts,
      children: [
        {
          path: '',
          name: 'acts-list',
          component: () => import('./views/ActsList.vue')
        },
        {
          path: '',
          name: 'new-act',
          component: () => import('./views/ActsForm')
        },
        {
          path: ':id/delete',
          name: 'delete-act',
          component: () => import('./views/ActsDelete'),
          props: true
        },
        {
          path: ':id/edit',
          name: 'edit-act',
          component: () => import('./views/ActsForm'),
          props: true
        },
      ],
    }
  ]
})
