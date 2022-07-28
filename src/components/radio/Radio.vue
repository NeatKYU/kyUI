<template>
    <label class="c-radio-label">
        <input type="radio" :name="groupName" @input="updateInputValue" class="c-radio-input"/>
        <span class="c-radio-span"><slot/></span>
    </label>
</template>

<script>
export default {
    name: 'c-radio',
    props: {
        groupName: {
            type: String,
            default: 'radio-group',
        },
        label: {
            type: String,
            default: ''
        }
    },
    methods: {
        updateInputValue() {
            this.$emit('input', this.label);
        }
    }
}
</script>