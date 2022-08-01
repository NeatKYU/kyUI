<template>
    <div
        class="input-wrapper"
    >
        <input 
            v-if="pType !== 'textarea'"
            :placeholder="pPlaceholder"
            :type="pType"
            @input="updateInputValue"
            class="c-input"
        />

        <textarea
            v-else
            @input="updateInputValue"
            :placeholder="pPlaceholder"
            class="c-textarea"
        ></textarea>
    </div>
</template>

<script>
export default {
    name: 'c-input',
    props: {
        pValue: [Number, String],
        pPlaceholder: String,
        pType: {
            type: String,
            default: 'text',
        }
    },
    data() {
        return {
            // newValue: this.pValue,
        }
    },
    computed: {
        // cValue: {
        //     get() {
        //         return this.newValue;
        //     },
        //     set(aValue){
        //         this.newValue = aValue;
        //         this.$emit('input', aValue);
        //     }
        // }
    },
    methods: {
        updateInputValue(event) {
            this.$emit('input', event.target.value);
        }
        // updateValue(aValue) {
        //     this.computed
        // }
    }
}
</script>