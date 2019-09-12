<template>
    <div>
        <div class="added__btn">
            <router-link :to="{name:'new-contract'}">
                <button type="button" class="btn btn-danger">Добавить</button>
            </router-link>
        </div>
        <table class="table  table-hover general-table">
            <thead>
            <tr>
                <th>Номер</th>
                <th>Дата</th>
                <th>Кол-во счетов</th>
                <th>Тип</th>
                <th>Сумма договора</th>
                <th>Оплачено по договору</th>
                <th>Статус оплаты</th>
                <th>Статус договора</th>
                <th>Редактирование</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="contract in $store.state.contracts"><!-- подключаем отображение массива контрактов-->
                <td>{{contract.number}}</td>
                <td>{{contract.date}}</td>
                <td>{{$store.getters.contractInvoices(contract.id).length}}</td>
                <td>{{contractTypeName(contract.type_id)}}</td>
                <td>{{contract.amount}}</td>
                <td>{{$store.getters.payedSum(contract.id)}}</td>
                <td><span class="label label-info label-mini">{{$store.getters.contractStatusPayed(contract.id)}}</span></td>
                <td><span class="label label-info label-mini label-close">{{$store.getters.contractStatus(contract.id)}}</span></td>
                <td>
                    <router-link :to="{name: 'edit-contract', params: {id:contract.id}}">
                        <button class="btn btn-default">Изменить</button>
                    </router-link>
                    <router-link :to="{name: 'delete-contract', params: {id: contract.id}}">
                        <button class="btn btn-primary">Удалить</button>
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ContractsList",
        methods: {
            contractTypeName: function (type_id) {
                var name = this.$store.state.types.find(function (el) {
                    return el.id === type_id;
                });
                if (name){
                    return name.full_name
                } else {
                    return 'Тип договора не указан!'
                }
            }
        }
    }
</script>

<style scoped>
    .added__btn {
        text-align: right;
    }
    .btn {
        margin: 5px;
    }
    .label-close {
        background: lightcoral;
    }
</style>