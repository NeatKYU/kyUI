<template>
    <div class="flex">
        <div v-for="item in pRadioList" :key="item">
            <c-radio 
                v-model="inputValue" 
                :label="item"
                :buttonMode="pIsButton"
            >{{ item }}</c-radio>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-radio-group',
    props: {
        pRadioList: [],
        pIsButton: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            inputValue: '',
        }
    }
};
</script>