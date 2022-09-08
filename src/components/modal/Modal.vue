<template>
    <div 
        v-if="isOpen" 
        class="c-modal-wrapper"
        @click="outsideClickClose" 
        ref="modalWrapper"
    >
        <div class="c-modal" :class="modalSizeClasses">
            <div class="modal-header">
                {{ titleText }}
                <slot v-if="!titleText" name="header"/>
            </div>
            <div class="modal-body">
                <slot name="body"/>
            </div>
            <div class="modal-footer">
                <slot name="footer"/>
            </div>
            <div v-if="isCloseButton" class="close-icon" @click="buttonClose">
                <c-icon icon="xmark"/>
            </div>
            <template v-else>
                <slot name="closeIcon"/>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-modal',
    props: {
        titleText: {
            type: String,
            default: ''
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
        isCloseButton: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
            default: 'sm',
            validator(value) {
                return ['sm', 'md', 'lg'].includes(value)
            }
        },
    },
    computed: {
        modalSizeClasses() {
            return {
                'is-medium': this.size === 'md',
                'is-large': this.size === 'lg',
            }
        }
    },
    methods: {
        outsideClickClose(event) {
            if(this.$refs.modalWrapper === event.target) {
                this.$emit('eClose');
            }
        },
        buttonClose() {
            console.log('close click!');
            this.$emit('eClose');
        }
    }
};
</script>

<style lang="scss" scoped>

</style>