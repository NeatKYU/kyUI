<template>
    <div
        class="input-wrapper"
        :class="[validateClasses, classes]"
    >
        <c-icon v-if="leftIcon" :icon="leftIcon" class="c-input-icon"/>
        <input 
            v-if="type !== 'textarea'"
            @input="updateInputValue"
            :placeholder="placeholder"
            :type="type"
            :disabled="this.disabled"
            class="c-input"
        >
        <c-icon v-if="rightIcon" :icon="rightIcon" class="c-input-icon"/>

        <textarea
            v-if="type === 'textarea'"
            @input="updateInputValue"
            :placeholder="placeholder"
            :disabled="this.disabled"
            class="c-textarea"
        ></textarea>
    </div>
</template>

<script>
export default {
    name: 'c-input',
    props: {
        value: [Number, String],
        placeholder: String,
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return ['text', 'textarea', 'email', 'phone'].includes(value)
            }
        },
        isValidate: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        leftIcon: {
            type: String,
            default: null,
        },
        rightIcon: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            // newValue: this.pValue,
        }
    },
    computed: {
        validateClasses() {
            return {
                'is-danger': this.value !== '' && this.isValidate && !this.checkValidate(this.type, this.value),
                'is-success': this.value !== '' && this.isValidate && this.checkValidate(this.type, this.value)
            }
        },
        classes() {
            return {
                'is-disabled': this.disabled
            }
        }
    },
    methods: {
        updateInputValue(event) {
            this.$emit('input', event.target.value);
        },
        checkValidate(type, value) {
            let checkReg;
            if(type === 'email') {
                // eslint-disable-next-line
                checkReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
            } else if(type === 'phone') {
                checkReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            } else {
                return this.value.length >= 1;
            }
            return checkReg.test(value);
        }
    }
}
</script>