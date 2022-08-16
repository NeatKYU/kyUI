<template>
    <div class="c-pagination">
        <c-button 
            @click="prev" 
            leftIcon="angle-left" 
            :disabled="cIsStartDisable" 
            :rounded="this.rounded"
        />
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
        <c-button 
            @click="next" 
            rightIcon="angle-right" 
            :disabled="cIsEndDisable" 
            :rounded="this.rounded"
        />
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
        },
        rounded: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            sTotalPage: 1,
            sCurrentShowPage: 1,
            sCurrentPage: 1,
            sStartPage: 1,
            sEndPage: this.showPage,
            sPageList: [],
        }
    },
    computed: {
        cIsEndDisable() {
            return this.sTotalPage === this.sCurrentPage //next disable
        },
        cIsStartDisable() {
            return this.sCurrentPage === 1
        }
    },
    methods: {
        paginationClass(aPage) {
            return {
                'is-active': this.sCurrentPage === aPage,
                'is-rounded': this.rounded,
            }
        },
        move(aPage) {
            console.log('page move!')
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
            console.log('next!')
            if(this.sTotalPage > this.sCurrentPage) {
                this.sCurrentPage += 1;
                this.updatePage(this.sCurrentPage);

                if(this.sEndPage < this.sCurrentPage){
                    this.sStartPage = this.sCurrentPage;
                    this.sEndPage = this.sTotalPage < (this.sStartPage + this.showPage) ? this.sTotalPage : this.sStartPage + this.showPage - 1;
                    this.setPageList(this.sStartPage, this.sEndPage);
                }
            }
        },
        prev() {
            console.log('prev!')
            if(this.sCurrentPage > 1){
                this.sCurrentPage -= 1;
                this.updatePage(this.sCurrentPage);

                if(this.sStartPage > this.sCurrentPage){
                    this.sStartPage = this.sCurrentPage - this.showPage + 1;
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
        this.sTotalPage = Math.ceil(this.totalCount / this.perPage) === 0 ? 1 : Math.ceil(this.totalCount / this.perPage);
        if(this.sTotalPage < this.showPage){
            for(let i=1; i<=this.sTotalPage; i++) {
                this.sPageList.push(i)
            }
        } else {
            for(let i=1; i<=this.showPage; i++) {
                this.sPageList.push(i)
            }
        }
    }
};
</script>
