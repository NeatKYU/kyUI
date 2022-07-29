<template>
    <div class="flex-col">
        <c-label>
            <h3>Button</h3>
            <c-button @click="toggle" leftIcon="angle-left" primary>
                click me
            </c-button>
        </c-label>
        <c-label>
            <h3>Input</h3>
            <c-input v-model="inputText" />
            <c-input v-model="inputText" pType="textarea" />
            <div>{{ this.inputText }}</div>
        </c-label>

        <c-label>
            <h3>dropdown</h3>
            <c-dropdown :dropdownList="dropdownList"></c-dropdown>
        </c-label>

        <!-- <c-carousel 
            :pList="this.imageList" 
            pListType="img" 
            :pIsArrow="false" 
            pIsIndicator
        /> -->
        <c-label>
            <h3>radio</h3>
            <div>
                <c-radio v-model="inputValue" label="test1" buttonMode>test1</c-radio>
                <c-radio v-model="inputValue" label="test2">test2</c-radio>
                <c-radio v-model="inputValue" label="test3" buttonMode>test3</c-radio>
                <div>{{ this.inputValue }}</div>
            </div>
        </c-label>

        <c-label>
            <h3>breadcrumb</h3>
            <c-breadcrumb>
                <c-breadcrumb-item>one</c-breadcrumb-item>
                <c-breadcrumb-item>two</c-breadcrumb-item>
                <c-breadcrumb-item href="/three" active>three</c-breadcrumb-item>
            </c-breadcrumb>
        </c-label>
    </div>
</template>

<script>

export default {
    name: "button-test",
    data() {
        return {
            inputText: '',
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
            inputValue: '',
        }
    },
    methods: {
        toggle() {
            console.log('toggle!!!')
        },
    }
}
</script>

<style scoped>

</style>