<template>
    <div>
        <h2>Действительно удаляем?</h2>
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
</style>