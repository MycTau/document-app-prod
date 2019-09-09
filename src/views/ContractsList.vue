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
                <th>Статус</th>
                <th>Редактирование</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="contract in $store.state.contracts"><!-- подключаем отображение массива контрактов-->
                <td>{{contract.number}}</td>
                <td>{{contract.date}}</td>
                <td></td>
                <td></td>
                <td>{{contract.amount}}</td>
                <td></td>
                <td><span class="label label-info label-mini"></span></td>
                <td>
                    <router-link to="#">
                        <button class="btn btn-default">Изменить</button>
                    </router-link>
                    <router-link to="#">
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
        name: "ContractsList"
    }
</script>

<style scoped>
    .added__btn {
        text-align: right;
    }
    .btn {
        margin: 5px;
    }
</style>