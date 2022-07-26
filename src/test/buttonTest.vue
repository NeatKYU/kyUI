<template>
    <div>
        <c-button @click="toggle" leftIcon="angle-left">
            click me
        </c-button>
        <c-input v-model="inputText" />
        <c-input v-model="inputText" pType="textarea" />
        <div>{{ this.inputText }}</div>

        <c-dropdown :dropdownList="dropdownList"></c-dropdown>

        <c-carousel :pImageList="this.imageList"></c-carousel>
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