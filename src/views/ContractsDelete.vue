<template>
    <div class="table__form">
        <h1 style="color: darkblue">Действительно удаляем?</h1>
        <br>
        <button v-on:click="deleteFormContractClicked" class="btn btn-danger">Подтверждаю</button>
        <button v-on:click="$emit('contract-form-canceled')" class="btn btn-primary">Отменить</button>
    </div>
</template>

<script>
    export default {
        name: "ContractsDelete",
        props:['id'],
        data: function() {
            return{
                number: null,
                amount: null,
                date: null,
                type: null
            }
        },
        methods: {
            deleteFormContractClicked: function () {
                this.$emit('contract-form-delete',{id: this.id, amount:this.amount, number:this.number,type:this.type})
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