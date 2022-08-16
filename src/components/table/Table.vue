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
                <tr v-for="(data, index) in changeDataList" :key="index">
                    <td v-for="value in data" :key="value+'-'+index">
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </table>
        <c-pagination
            v-if="isPagination"
            @changePage="changePage" 
            :totalCount="this.dataTotalCount"
            :perPage="this.perPage"
            :showPage="this.showPage"
            :currentPage="this.currentPage"
        />
    </div>
</template>

<script>

export default {
    name: 'c-table',
    props: {
        headerList: [],
        dataList: [],
        dataTotalCount: {
            type: Number,
            default: 0,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        changePage: {
            type: Function,
            default: () => {},
        },
        isPagination: {
            type: Boolean,
            default: false,
        },
        perPage: {
            type: Number,
            default: 10,
        },
        showPage: {
            type: Number,
            default: 10,
        }
    },
    computed: {
        changeDataList() {
            return this.dataList.filter((item, idx) => {
                const endIndex = this.perPage * this.currentPage;
                const startIndex = endIndex - (this.perPage - 1);
                return startIndex <= idx+1 && idx+1 <= endIndex;
            })
        },
    },
};
</script>