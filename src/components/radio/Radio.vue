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
                //버튼 모드일때만 적용
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

<style lang="scss">
@import '../../scss/common';

.c-radio-label {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    
    position: relative;

    input[type='radio'],
    input[type='radio']:checked {
        width: 20px;
        height: 20px;
        margin: 3px 5px;
        border-radius: 100%;
        border: 2px solid black;
        
        position: relative;

        cursor: pointer;
        
        &:hover {
            border-color: $c-primary-hover-color
        }
    
        &:focus {
            box-shadow: $c-strong-box-shadow;
            border-color: $c-primary-hover-color;
        }
        
        &:after  {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: $c-primary-color;
            border-radius: 100%;
            width: 0;
            height: 0;
            transition: width .2s, height .2s;
        }
    
        &.button {
            position: absolute;
            left: 0;
            opacity: 0;
        }
    }

    input[type='radio']:checked {
        border-color: $c-primary-hover-color;
        &::after {
            width: 60%;
            height: 60%;
        }
    }
}

.c-radio-input {
    // input효과 지우고 새로운걸 다시 넣는다.
    appearance: none;
}

.c-radio-span {
    &.button-mode {
        width: auto;
        height: 30px;
        padding: 5px 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid $c-default-border-color;
    }
}

.is-selected {
    background-color: $c-primary-color;

    &:hover {
        background-color: $c-primary-hover-color;
    }
}
</style>