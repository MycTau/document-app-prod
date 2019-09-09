import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contracts: [
      {id: 1, number: '123к-23', date: '10.12.2017', type_id: 1, amount: '1 200 000'},
      {id: 2, number: 'А-548', date: '10.08.2016', type_id: 2, amount: '1 000 000'},
      {id: 3, number: '845-ЗК', date: '10.01.2019', type_id: 3, amount: '1 290 000'}
    ],
    types: [
      {id: 1, name: 'transport-expedition', full_name: 'Транспортно-экспедиционное обслуживание'},
      {id: 2, name: 'transport', full_name: 'Транспортные услуги'},
      {id: 3, name: 'warehouse', full_name: 'Складские услуги'}
    ],

  },
  mutations: {
    createContract: function (state, contract) {
      var maxId = Math.max.apply(Math, state.contracts.map(c => c.id));
      contract.id = maxId + 1;
      state.contracts.push(contract)
    },
  },
  actions: {

  }
})
