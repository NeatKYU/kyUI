<template>
    <label 
        class="c-radio-label"
        :class="[labelClass]"
    >
        <input 
            type="radio" 
            @input="updateInputValue"
            :name="groupName" 
            class="c-radio-input"
            :class="buttonMode ? 'button' : ''"
        />
        <!-- <span v-if="!buttonMode" class="c-radio-span"><slot/></span> -->
        <span class="c-radio-span" :class="buttonMode ? 'button-mode' : ''"><slot/></span>
    </label>
</template>

<script>
export default {
    name: 'c-radio',
    props: {
        value: {
            type: String,
            default: ''
        },
        groupName: {
            type: String,
            default: 'radio-group',
        },
        label: {
            type: String,
            default: '',
            required: true,
        },
        buttonMode: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isChecked() {
            return this.value === this.label;
        },
        labelClass() {
            return {
                'is-selected': this.isChecked && this.buttonMode
            }
        },
    },
    methods: {
        updateInputValue() {
            this.$emit('input', this.label);
        },
    }
}
</script>