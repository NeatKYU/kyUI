<template>
    <div class="c-radio-group" :class="classes">
        <div v-for="item in radioList" :key="item">
            <c-radio 
                v-model="inputValue"
                :label="item"
                :buttonMode="isButton"
            >{{ item }}</c-radio>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-radio-group',
    props: {
        radioList: [],
        isButton: {
            type: Boolean,
            default: false,
        },
        sort: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].includes(value)
            }
        }
    },
    data() {
        return {
            inputValue: '',
        }
    },
    computed: {
        classes() {
            return {
                'is-row': this.sort === 'horizontal',
                'is-column': this.sort === 'vertical',
            }
        }
    }
};
</script>