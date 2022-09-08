<template>
    <div v-if="isOpen" class="c-modal-wrapper" @click="outsideClickClose">
        <div class="c-modal" ref="modal">
            {{ titleText }}
            <div v-if="isCloseButton" class="close-icon" @click="buttonClose">
                <c-icon icon="xmark"/>
            </div>
            <template v-else>
                <v-slot name="closeIcon"/>
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
        }
    },
    methods: {
        outsideClickClose(event) {
            if(this.$refs.modal !== event.target) {
                this.$emit('eClose');
            }
        },
        buttonClose() {
            this.$emit('eClose');
        }
    }
};
</script>

<style lang="scss" scoped>

</style>