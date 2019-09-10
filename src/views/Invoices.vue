<template>
    <router-view
            v-on:invoice-form-canceled="$router.push({name:'invoices-list'})"
            v-on:invoice-form-submited="invoiceFormSubmited">

    </router-view>
</template>

<script>
    export default {
        name: "Invoices",
        methods: {
            invoiceFormSubmited: function (data) {
                if (this.$route.name === 'new-invoice') {
                    this.$store.commit('createInvoice', data)
                } else {
                    this.$store.commit('updateInvoice', data);
                }
                this.$router.push({name: 'invoices-list'})
            },
        }
    }
</script>

<style scoped>

</style>