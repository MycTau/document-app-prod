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

  },
  getters: {
    contract: state => id => {
      return state.contracts.find(c => c.id == id)
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
  },
  actions: {

  }
})
