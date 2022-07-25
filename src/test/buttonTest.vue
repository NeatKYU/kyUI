<template>
    <div>
        <c-button @click="toggle" leftIcon="angle-left">
            click me
        </c-button>
        <c-input v-model="inputText" />
        <c-input v-model="inputText" pType="textarea" />
        <div>{{ this.inputText }}</div>

        <c-dropdown :dropdownList="dropdownList"></c-dropdown>
    </div>
</template>

<script>

export default {
    name: "button-test",
    data() {
        return {
            inputText: '',
            dropdownList: ['dropdown test','korea','USA'],
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