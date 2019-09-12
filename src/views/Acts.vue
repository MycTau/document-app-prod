<template>
    <router-view
                v-on:act-form-canceled="$router.push({name:'acts-list'})"
                v-on:act-form-submited="actFormSubmited"
                v-on:act-form-delete="actFormDelete">

    </router-view>
</template>

<script>
    export default {
        name: "Acts",
        data: function () {
            return {
                editing_act_id: null,
            }
        },
        computed: {
            editingAct: function () {
                if (this.editing_act_id === null) return;
                return this.acts.find(function (el) {
                    return el.id === this.editing_act_id
                }.bind(this))
            }
        },
        methods: {
            actFormSubmited: function (data) {
                if (this.$route.name === 'new-act') {
                    this.$store.commit('createAct', data)
                } else {
                    this.$store.commit('updateAct', data);
                }
                this.$router.push({name: 'acts-list'})
            },
            editAct: function (id) {
                this.editing_act_id = id
            },
            actFormDelete: function (data) {
                if (this.$route.name === 'delete-act') {
                    this.$store.commit('deleteAct', data)
                }
                this.$router.push({name: 'acts-list'})
            }
        }
    }
</script>

<style scoped>

</style>