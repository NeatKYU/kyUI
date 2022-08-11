<template>
    <div class="c-table-wrapper">
        <table class="c-table">
            <thead class="c-table-header">
                <tr>
                    <th v-for="headItem in headerList" :key="headItem">
                        {{ headItem }}
                    </th>
                </tr>
            </thead>
            <tbody class="c-table-body">
                <tr v-for="(data, index) in dataList" :key="index">
                    <td v-for="value in data" :key="value+'-'+index">
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'c-table',
    props: {
        headerList: [],
        dataList: [],
    },
    created() {
        this.dataList.map((data) => {
            for(var index in data){
                console.log(index)
            }
        })
    }
};
</script>