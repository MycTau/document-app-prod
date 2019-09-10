<template>
    <router-view v-on:contract-form-submited="contractFormSubmited"
                 v-on:contract-form-canceled="$router.push({name:'contracts-list'})"
                 v-on:contract-form-delete="contractFormDelete"
                 ></router-view>
</template>

<script>
    export default {
        name: "Contracts",
        data: function () {
            return {
                editing_contract_id: null,
            }
        },
        computed: {
            editingContract: function () {
                if (this.editing_contract_id === null) return;
                return this.contracts.find(function (el) {
                    return el.id === this.editing_contract_id
                }.bind(this))
            }
        },
        methods: {
            contractFormSubmited: function (data) {
                if (this.$route.name === 'new-contract') {
                    this.$store.commit('createContract', data)
                } else {
                    this.$store.commit('updateContract', data);
                }
                this.$router.push({name: 'contracts-list'})
            },
            editContract: function (id) {
                this.editing_contract_id = id
            },
            contractFormDelete: function (data) {
                if (this.$route.name === 'delete-contract') {
                    this.$store.commit('deleteContract', data)
                }
                this.$router.push({name: 'contracts-list'})
            }
        }
    }
</script>

<style scoped>

</style>