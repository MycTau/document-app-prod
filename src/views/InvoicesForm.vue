<template>
    <div>
        <label>Дата счета</label>
        <input class="form-control" placeholder="" type="text" v-model="date">
        <br>
        <label>Сумма счета</label>
        <input class="form-control" type="text" v-model="sum">
        <br>
        <label>Выберете договор</label>
        <select class="form-control mb-10" v-model="contract_id">
            <option v-for="contract in $store.state.contracts" v-bind:value="contract.id">{{`Договор № ${contract.number} от ${contract.date}`}}</option>
        </select>
        <br>
        <label>Статус оплаты</label>
        <select class="form-control mb-10" v-model="status_id">
            <option v-for="status in $store.state.statuses" v-bind:value="status.id">{{status.full_name}}</option>
        </select>
        <br>

        <button v-on:click="submitFormInvoiceClicked" class="btn btn-danger">Сохранить</button>
        <button v-on:click="$emit('invoice-form-canceled')" class="btn btn-primary">Отменить</button>

    </div>
</template>

<script>
    export default {
        name: "InvoicesForm",
        props: ['id'],
        data: function (){
            return {
                date: null,
                sum: null,
                contract_id: null,
                status_id: null
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
            submitFormInvoiceClicked: function () {
                this.$emit('invoice-form-submited',{id: this.id, date: this.date, sum: this.sum, contract_id: this.contract_id, status_id: this.status_id})
            },
            fillForm: function () {
                var invoice = this.$store.getters.invoice(this.id);
                if (invoice) {
                    this.date = invoice.date;
                    this.sum = invoice.sum;
                    this.contract_id = invoice.contract_id;
                    this.status_id = invoice.status_id;
                }
            },
        }
    }
</script>

<style scoped>

</style>