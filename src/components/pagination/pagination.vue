<template>
    <div class="c-pagination">
        <c-button @click="prev" leftIcon="angle-left"/>
        <div class="flex">
            <div 
                v-for="page in sPageList"
                @click="move(page)"
                :key="page" 
                class="c-pagination-item"
                :class="paginationClass(page)"
            >
                {{ page }}
            </div>
        </div>
        <c-button @click="next" rightIcon="angle-right"/>
    </div>
</template>

<script>
export default {
    name: 'c-pagination',
    props: {
        totalCount: {
            type: Number,
            default: 0,
            required: true,
        },
        perPage: {
            type:Number,
            default: 10,
        },
        showPage: {
            type: Number,
            default: 10,
        },
        currentPage: {
            type: Number,
            default: 1,
            required: true,
        }
    },
    data() {
        return {
            sTotalPage: 1,
            sCurrentShowPage: 1,
            sCurrentPage: 1,
            sStartPage: 1,
            sEndPage: this.perPage,
            sPageList: [],
        }
    },
    methods: {
        paginationClass(aPage) {
            return {
                'is-active': this.sCurrentPage === aPage,
            }
        },
        move(aPage) {
            this.sCurrentPage = aPage;
            this.updatePage(aPage);
        },
        setPageList(aStart, aEnd) {
            this.sPageList = [];
            for(let i=aStart; i<=aEnd; i++) {
                this.sPageList.push(i)
            }
        },
        next() {
            if(this.sTotalPage > this.sCurrentPage) {
                this.sCurrentPage += 1;
                this.updatePage(this.sCurrentPage);

                if(this.sEndPage < this.sCurrentPage){
                    this.sStartPage = this.sCurrentPage;
                    this.sEndPage = this.sTotalPage < (this.sStartPage + this.perPage) ? this.sTotalPage : this.sStartPage + this.perPage - 1;
                    this.setPageList(this.sStartPage, this.sEndPage);
                }
            }
        },
        prev() {
            if(this.sCurrentPage > 1){
                this.sCurrentPage -= 1;
                this.updatePage(this.sCurrentPage);

                if(this.sStartPage > this.sCurrentPage){
                    this.sStartPage = this.sCurrentPage - this.perPage + 1;
                    this.sEndPage = this.sCurrentPage;
                    this.setPageList(this.sStartPage, this.sEndPage);
                }
            }
        },
        updatePage(aCurrentPage) {
            this.$emit('changePage', aCurrentPage)
        }
    },
    created() {
        this.sTotalPage = Math.ceil(this.totalCount / this.perPage);
        for(let i=1; i<=this.perPage; i++) {
            this.sPageList.push(i)
        }
    }
};
</script>
