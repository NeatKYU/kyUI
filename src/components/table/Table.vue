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

<style lang="scss" scoped>
@import '../../scss/common';

.c-table-wrapper {
    .c-pagination {
        justify-content: center;
        margin: 1em;
    }
}

.c-table {
    width: 100%;
    min-height: 100px;

    border-collapse: collapse;
}

.c-table-header {
text-align: left;
    tr {
        border-bottom: 4px solid $c-default-border-color;
    }

    th {
        padding: .7em 1em;
    }
}

.c-table-body {
    tr {
        border-bottom: 1px solid $c-default-border-color;
    }
    tr:last-child {
        border-bottom: none;
    }
    tr:hover {
        background-color: $c-common-hover-color;
    }
    td {
        padding: .7em 1em;
        border-width: 0 0 1px;
    }
}
</style>