<template>
    <div class="table__form">
        <h1 style="color: darkblue">Действительно удаляем?</h1>
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
    .table__form {
        padding: 35px;
        width: 350px;
        margin: 0 auto;
        text-align: center;
        border: 5px solid yellowgreen;
        border-radius: 25px;
        background: lightgoldenrodyellow;
    }
</style>