import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contracts: [
      {id: 1, number: '123к-23', date: '10.12.2017', type_id: 1, amount: '1200000'},
      {id: 2, number: 'А-548', date: '10.08.2016', type_id: 2, amount: '1000000'},
      {id: 3, number: '845-ЗК', date: '10.01.2019', type_id: 3, amount: '1290000'}
    ],
    types: [
      {id: 1, name: 'transport-expedition', full_name: 'Транспортно-экспедиционное обслуживание'},
      {id: 2, name: 'transport', full_name: 'Транспортные услуги'},
      {id: 3, name: 'warehouse', full_name: 'Складские услуги'}
    ],
    invoices: [
      {id:1, date: '30.03.2018', sum: '565000', contract_id: 1, status_id: 1 },
      {id:2, date: '30.04.2018', sum: '245000', contract_id: 1, status_id: 1 },
      {id:3, date: '30.12.2016', sum: '1000000', contract_id: 2, status_id: 1 },
      {id:4, date: '30.05.2019', sum: '1000000', contract_id: 3, status_id: 2 }
    ],
    statuses: [
      {id:1, name: 'paid', full_name: 'Оплачен' },
      {id:2, name: 'unpaid', full_name: 'Не оплачен' }
    ]

  },
  getters: {
    contract: state => id => {
      return state.contracts.find(c => c.id == id)
    },
    invoice: state => id => {
      return state.invoices.find(c => c.id == id)
    },
  },
  mutations: {
    createContract: function (state, contract) {
      var maxId = Math.max.apply(Math, state.contracts.map(c => c.id));
      contract.id = maxId + 1;
      state.contracts.push(contract)
    },
    updateContract: function (state, contract) {
      var index = state.contracts.findIndex(function (el) {
        return el.id === contract.id
      });
      if (index >= 0) {
        state.contracts.splice(index, 1, contract);
      }
    },
    deleteContract: function (state, contract) {
      var index = state.contracts.findIndex(el => el.id === contract.id);
      if (index >= 0) {
        state.contracts.splice(index, 1);
      }
    },
    createInvoice: function (state, invoice) {
      var maxId = Math.max.apply(Math, state.invoices.map(c => c.id));
      invoice.id = maxId + 1;
      state.invoices.push(invoice)
    },
    updateInvoice: function (state, invoice) {
      var index = state.invoices.findIndex(function (el) {
        return el.id === invoice.id
      });
      if (index >= 0) {
        state.invoices.splice(index, 1, invoice);
      }
    },
  },
  actions: {

  }
})
