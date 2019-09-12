import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contracts: [
      {id: 1, number: '№ 123к-23', date: '10.12.2017', type_id: 1, amount: '1200000'},
      {id: 2, number: '№ А-548', date: '10.08.2016', type_id: 2, amount: '1000000'},
      {id: 3, number: '№ 845-ЗК', date: '10.01.2019', type_id: 3, amount: '1290000'}
    ],
    types: [
      {id: 1, name: 'transport-expedition', full_name: 'Транспортно-экспедиционное обслуживание'},
      {id: 2, name: 'transport', full_name: 'Транспортные услуги'},
      {id: 3, name: 'warehouse', full_name: 'Складские услуги'}
    ],
    invoices: [
      {id:1, date: '30.03.2018', number: '№ 124', sum: '565000', contract_id: 1, status_id: 1 },
      {id:2, date: '30.04.2018', number: '№ 29', sum: '245000', contract_id: 1, status_id: 1 },
      {id:3, date: '30.12.2016', number: '№ 37', sum: '1000000', contract_id: 2, status_id: 1 },
      {id:4, date: '30.05.2019', number: '№ 4', sum: '1000000', contract_id: 3, status_id: 2 }
    ],
    statuses: [
      {id:1, name: 'paid', full_name: 'Оплачен' },
      {id:2, name: 'unpaid', full_name: 'Не оплачен' }
    ],
    acts: [
      {id:1, date: '20.03.2018', number: '№ 1-K', invoice_id: 1, sum: '565000', state_id: 1},
      {id:2, date: '20.04.2018',number: '№ 11-T', invoice_id: 2, sum: '245000', state_id: 1},
      {id:3, date: '10.12.2016',number: '№ 22-12-A', invoice_id: 3, sum: '600000', state_id: 1},
      {id:4, date: '20.12.2016',number: '№ 28-03-B', invoice_id: 3, sum: '400000', state_id: 1},
      {id:5, date: '10.05.2019',number: '№ M-15', invoice_id: 4, sum: '750000', state_id: 2},
      {id:6, date: '20.05.2019',number: '№ H-22', invoice_id: 4, sum: '250000', state_id: 1}
    ],
    states: [
      {id: 1, name: 'signed', full_name: 'Подписан'},
      {id: 2, name: 'unsigned', full_name: 'Не подписан'}
    ]
  },
  getters: {
    contractInvoices: state => contract_id => {
      return state.invoices.filter(c => c.contract_id == contract_id)
    },
    contractInvoicesPayed: state => contract_id => {
      return state.invoices.filter(c => c.contract_id == contract_id && c.status_id === 1)
    },
    payedSum: (state,getters) => contract_id => {
      var result = 0;
      getters.contractInvoicesPayed(contract_id).forEach(el => result += parseInt(el.sum));
      return result
    },
    unpaidContracts: (state, getters) => contract_id =>{
      return state.contracts.filter(c => c.amount > getters.payedSum(c.id))
    },
    contractStatusPayed: (state, getters) => contract_id =>{
      if (getters.payedSum(contract_id) == getters.contract(contract_id).amount) {
        return 'Оплачено полностью'
      } else if (getters.payedSum(contract_id) > getters.contract(contract_id).amount) {
        return 'Переплата'
      } else if (getters.payedSum(contract_id) < getters.contract(contract_id).amount && getters.payedSum(contract_id) !== 0) {
        return 'Частичная оплата'
      } else {
        return 'Не оплачен'
      }
    },
    contractStatus: (state, getters) => contract_id =>{
      if (getters.payedSum(contract_id) == getters.contract(contract_id).amount) {
        return 'Договор закрыт'
      } else {
        return 'Договор не закрыт'
      }
    },
    contract: state => id => {
      return state.contracts.find(c => c.id == id)
    },
    invoice: state => id => {
      return state.invoices.find(c => c.id == id)
    },
    act: state => id => {
      return state.acts.find(c => c.id == id)
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
    deleteInvoice: function (state, invoice) {
      var index = state.invoices.findIndex(el => el.id === invoice.id);
      if (index >= 0) {
        state.invoices.splice(index, 1);
      }
    },
    createAct: function (state, act) {
      var maxId = Math.max.apply(Math, state.acts.map(c => c.id));
      act.id = maxId + 1;
      state.acts.push(act)
    },
    updateAct: function (state, act) {
      var index = state.acts.findIndex(function (el) {
        return el.id === act.id
      });
      if (index >= 0) {
        state.acts.splice(index, 1, act);
      }
    },
    deleteAct: function (state, act) {
      var index = state.acts.findIndex(el => el.id === act.id);
      if (index >= 0) {
        state.acts.splice(index, 1);
      }
    },
  },
  actions: {

  }
})
