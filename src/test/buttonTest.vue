<template>
    <div class="flex-col">
        <c-label>
            <h3>Button</h3>
            <div>
                <c-button @click="toggle" leftIcon="angle-left" primary>
                    click me
                </c-button>
                <c-button @click="toggle" disabled>
                    disabled
                </c-button>
            </div>
        </c-label>
        <c-label>
            <h3>Input</h3>
            <c-input v-model="inputText" placeholder="disabled" />
            <c-input v-model="inputText" type="textarea" />
            <c-input v-model="inputText" type="email" isValidate leftIcon="align-justify"/>
            <div>{{ this.inputText }}</div>
        </c-label>

        <c-label>
            <h3>dropdown</h3>
            
            <!-- 기본 dropdown형식 -->
            <c-dropdown :dropdownList="dropdownList"></c-dropdown>

            <!-- item custom 방식 -->
            <c-dropdown hovered>
                <c-dropdown-item 
                    v-for="(item,index) in dropdownList" 
                    :key="item+'-'+index"
                    @click="toggle"
                >
                    {{ item }}
                </c-dropdown-item>
            </c-dropdown>
        </c-label>

        <!-- <c-label>
            <h3>carousel</h3>
            <c-carousel 
                :pList="this.imageList" 
                pListType="img" 
                :pIsArrow="false" 
                pIsIndicator
            />
        </c-label> -->
        <c-label>
            <h3>radio</h3>
            <div>
                <c-radio-group :radioList="radioList" sort="vertical"/>
            </div>
            <div>
                <c-radio v-model="inputValue" label="test4" buttonMode>test4</c-radio>
                <c-radio v-model="inputValue" label="test5" buttonMode>test5</c-radio>
                <c-radio v-model="inputValue" label="test6" buttonMode>test6</c-radio>
            </div>
            <div>{{ this.inputValue }}</div>
        </c-label>

        <c-label>
            <h3>breadcrumb</h3>
            <c-breadcrumb>
                <c-breadcrumb-item>one</c-breadcrumb-item>
                <c-breadcrumb-item>two</c-breadcrumb-item>
                <c-breadcrumb-item href="/three" active>three</c-breadcrumb-item>
            </c-breadcrumb>
        </c-label>

        <c-label>
            <h3>Pagination</h3>
            <c-pagination 
                @changePage="changePage" 
                :totalCount=1032
                :perPage=10
                :showPage=5
                :currentPage="this.currentPage"
            />
        </c-label>

        <c-label>
            <h3>Tooltip</h3>
            <div>
                <c-tooltip text="왼쪽 툴팁입니다!" isLeft rounded>
                    <span>left</span>
                </c-tooltip>
                <c-tooltip text="아래 툴팁입니다!" isBottom rounded>
                    <span>bottom</span>
                </c-tooltip>
                <c-tooltip text="아래 툴팁입니다!" isBottom rounded>
                    <c-button>bottom</c-button>
                </c-tooltip>
                <c-tooltip text="기본 툴팁입니다!">
                    <c-button>tooltip</c-button>
                </c-tooltip>
                <c-tooltip text="오른쪽 툴팁입니다!" isRight rounded>
                    <c-button>right</c-button>
                </c-tooltip>
                <c-tooltip text="왼쪽 툴팁입니다!" isLeft rounded>
                    <c-button>left</c-button>
                </c-tooltip>
            </div>
        </c-label>

        <c-label>
            <h3>Tag</h3>
            <c-tag textValue="primary"></c-tag>
            <c-tag textValue="success" isSuccess size="small"/>
        </c-label>

        <c-label>
            <h3>Switch</h3>
            <c-switch @change="changeValue" size="large"/>
            <c-switch />
            <c-switch size="small"/>
            <div>{{ onoff }}</div>
        </c-label>

        <c-label>
            <h3>Skeleton</h3>
            <c-skeleton sWidth="20rem"/>
        </c-label>

        <h3>Table</h3>
        <!-- dataTotalCount는 10개씩 뿌릴거면 api에서 넘겨줘야함 -->
        <c-table 
            :headerList="headerList" 
            :dataList="dataList" 
            :dataTotalCount="this.dataList.length"
            :currentPage="this.currentPage" 
            :changePage="changePage"
            :perPage=5
            :showPage=5
            isPagination
        />

        <h3>Modal</h3>
        <c-button @click="openModal">open modal</c-button>
        <c-modal :isOpen="isOpen" @eClose="closeModal" size="md" isAnimation isDivider footerRight>
            <template v-slot:header>
                <span>this is modal title</span>
            </template>
            <template v-slot:footer>
                <c-button @click="closeModal">ok</c-button>
                <c-button @click="closeModal">cancel</c-button>
            </template>
        </c-modal>

        <div :style="{height: '200px'}"></div>
    </div>
</template>

<script>

export default {
    name: "button-test",
    data() {
        return {
            inputText: '',
            isOpen: false,
            dropdownList: ['dropdown test','korea','USA'],
            imageList: [
                'https://cdn.pixabay.com/photo/2022/07/12/07/06/lake-7316684_960_720.jpg',
                'https://cdn.pixabay.com/photo/2019/09/24/06/57/antarctica-4500447_960_720.jpg',
                'https://cdn.pixabay.com/photo/2022/04/28/04/07/snake-7161713_960_720.jpg'
            ],
            justList: [
                'slide1',
                'slide2',
                'slide3',
                'slide4'
            ],
            radioList: [
                'radio1',
                'radio2',
                'radio3',
            ],
            inputValue: '',
            currentPage: 1,
            onoff: false,
            headerList: [
                'ID', 'firstName', 'lastName'
            ],
            dataList: [
                {
                    id: 1,
                    firstName: 'seung',
                    lastName: 'kyu'
                },{
                    id: 2,
                    firstName: 'seung2',
                    lastName: 'kyu2'
                },{
                    id: 3,
                    firstName: 'seung3',
                    lastName: 'kyu3'
                },{
                    id: 4,
                    firstName: 'seunzzsdfsdg4',
                    lastName: 'eet'
                },{
                    id: 5,
                    firstName: 'aaa',
                    lastName: 'aaaasd'
                },{
                    id: 6,
                    firstName: 'qwrqr',
                    lastName: 'sdfsfds'
                },{
                    id: 7,
                    firstName: 'tttttttt',
                    lastName: 'aaaaa'
                },
            ]
        }
    },
    methods: {
        toggle() {
            console.log('toggle!!!')
        },
        changePage(aPage) {
            this.currentPage = aPage;
            console.log('this page = ', this.currentPage)
        },
        changeValue(aOnOff){
            this.onoff = aOnOff;
        },
        openModal() {
            this.isOpen = true;
        },
        closeModal() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>

</style>