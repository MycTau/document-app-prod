<template>
    <router-view v-on:contract-form-submited="contractFormSubmited"
                 v-on:contract-form-canceled="$router.push({name:'contracts-list'})"
                 ></router-view>
</template>

<script>
    export default {
        name: "Contracts",
        methods: {
            contractFormSubmited: function (data) {
                if (this.$route.name === 'new-contract') {
                    this.$store.commit('createContract', data)
                } else {
                    this.$store.commit('updateContract', data);
                }
                this.$router.push({name: 'contracts-list'})
            }
        }
    }
</script>

<style scoped>

</style>