<template>
    <router-view
                v-on:act-form-canceled="$router.push({name:'acts-list'})"
                v-on:act-form-submited="actFormSubmited">

    </router-view>
</template>

<script>
    export default {
        name: "Acts",
        methods: {
            actFormSubmited: function (data) {
                if (this.$route.name === 'new-act') {
                    this.$store.commit('createAct', data)
                } else {
                    this.$store.commit('updateAct', data);
                }
                this.$router.push({name: 'acts-list'})
            },
        }
    }
</script>

<style scoped>

</style>