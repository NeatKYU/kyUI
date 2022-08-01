<template>
    <div class="flex">
        <div v-for="item in pRadioList" :key="item">
            <c-radio :label="item">{{ item }}</c-radio>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-radio-group',
    props: {
        pRadioList: [],
    }
};
</script>