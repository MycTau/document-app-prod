<template>
    <router-view
            v-on:invoice-form-canceled="$router.push({name:'invoices-list'})"
            v-on:invoice-form-submited="invoiceFormSubmited"
            v-on:invoice-form-delete="invoiceFormDelete">

    </router-view>
</template>

<script>
    export default {
        name: "Invoices",
        data: function () {
            return {
                editing_invoice_id: null,
            }
        },
        computed: {
            editingInvoice: function () {
                if (this.editing_invoice_id === null) return;
                return this.invoices.find(function (el) {
                    return el.id === this.editing_invoice_id
                }.bind(this))
            }
        },
        methods: {
            invoiceFormSubmited: function (data) {
                if (this.$route.name === 'new-invoice') {
                    this.$store.commit('createInvoice', data)
                } else {
                    this.$store.commit('updateInvoice', data);
                }
                this.$router.push({name: 'invoices-list'})
            },
            editInvoice: function (id) {
                this.editing_invoice_id = id
            },
            invoiceFormDelete: function (data) {
                if (this.$route.name === 'delete-invoice') {
                    this.$store.commit('deleteInvoice', data)
                }
                this.$router.push({name: 'invoices-list'})
            }
        }
    }
</script>

<style scoped>

</style>