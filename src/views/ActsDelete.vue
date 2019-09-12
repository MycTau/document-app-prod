<template>
    <div>
        <h2>Действительно удаляем?</h2>
        <br>
        <button v-on:click="deleteFormActClicked" class="btn btn-danger">Подтверждаю</button>
        <button v-on:click="$emit('act-form-canceled')" class="btn btn-primary">Отменить</button>
    </div>
</template>

<script>
    export default {
        name: "ActsDelete",
        props: ['id'],
        data: function (){
            return {
                date: null,
                sum: null,
                invoice: null,
                state: null
            }
        },
        methods: {
            deleteFormActClicked: function () {
                this.$emit('act-form-delete',{id: this.id, date:this.date, sum:this.sum,invoice:this.invoice, state:this.state})
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin: 5px;
    }
</style>