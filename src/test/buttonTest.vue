<template>
    <div>
        <c-button @click="toggle" leftIcon="angle-left">
            click me
        </c-button>
        <c-input v-model="inputText" />
        <c-input v-model="inputText" pType="textarea" />
        <div>{{ this.inputText }}</div>
    </div>
</template>

<script>

export default {
    name: "button-test",
    data() {
        return {
            inputText: '',
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