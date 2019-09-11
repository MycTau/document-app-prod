<template>
<div>
    <h2>Действительно удаляем?</h2>
    <br>
    <button v-on:click="deleteFormInvoiceClicked" class="btn btn-danger">Подтверждаю</button>
    <button v-on:click="$emit('invoice-form-canceled')" class="btn btn-primary">Отменить</button>
</div>
</template>

<script>
    export default {
        name: "InvoicesDelete",
        props: ['id'],
        data: function (){
            return {
                date: null,
                sum: null,
                contract: null,
                status: null
            }
        },
        methods: {
            deleteFormInvoiceClicked: function () {
                this.$emit('invoice-form-delete',{id: this.id, date:this.date, sum:this.sum,contract:this.contract, status:this.status})
            }
        }

    }
</script>

<style scoped>
    .btn {
        margin: 5px;
    }
</style>