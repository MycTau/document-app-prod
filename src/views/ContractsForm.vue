<template>
    <div class="table__form">
        <label>Номер договора</label>
        <input class="form-control" placeholder="Укажите номер договора" type="text" v-model="number">
        <br>
        <label>Дата договора</label>
        <input class="form-control" placeholder="dd.mm.yyyy" type="text" v-model="date">
        <br>
        <label>Тип договора</label>
        <select class="form-control mb-10 select__style" v-model="type_id">
            <option v-for="type in $store.state.types" v-bind:value="type.id">{{type.full_name}}</option>
        </select>
        <br>
        <label>Сумма договора</label>
        <input class="form-control" placeholder="Укажите сумму договора" type="number" v-model="amount">
        <br>

        <button v-on:click="submitFormContractClicked" class="btn btn-danger">Сохранить</button>
        <button v-on:click="$emit('contract-form-canceled')" class="btn btn-primary">Отменить</button>

    </div>
</template>

<script>
    export default {
        name: "ContractsForm",
        props: ['id'],
        data: function (){
            return {
                number: null,
                amount: null,
                date: null,
                type_id: null
            }
        },
        created: function () {
            this.fillForm()
        },
        watch: {
            id: function () {
                this.fillForm()
            }
        },
        methods: {
            submitFormContractClicked: function () {
                this.$emit('contract-form-submited',{id: this.id, number: this.number, date: this.date, type_id: this.type_id, amount: this.amount})
            },
            fillForm: function () {
                var contract = this.$store.getters.contract(this.id);
                if (contract) {
                    this.number = contract.number;
                    this.date = contract.date;
                    this.type_id = contract.type_id;
                    this.amount = contract.amount;
                }
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
    .form-control {
        text-align: center;
    }
    .select__style {
        text-align-last: center;
    }
</style>