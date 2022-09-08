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
            this.$emit('eClose');
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../../scss/common';

    .c-modal-wrapper {
        width: 100vw;
        height: 100vh;

        background-color: rgba($color: black, $alpha: 0.3);

        position: fixed;
        top: 0;
        left: 0;

        z-index: 10;
    }

    .c-modal {
        width: 20rem;
        height: 20rem;
        
        // opacity: 1;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: $c-border-radius;
        background-color: $c-white-color;

        z-index: 99;

        &.is-medium {
            width: 25rem;
            height: 30rem;

            .modal-header {
                height: 15%;
                padding: 1rem;
            }
            .modal-body {
                height: 70%;
                padding: 1rem;
            }
            .modal-footer {
                height: 15%;
                padding: 1rem;
            }
        }

        &.is-large {
            width: 30rem;
            height: 40rem;

            .modal-header {
                height: 13%;
                padding: 1rem;
            }
            .modal-body {
                height: 72%;
                padding: 1rem;
            }
            .modal-footer {
                height: 15%;
                padding: 1rem;
            }
        }
        
        .modal-header {
            width: 100%;
            height: 20%;

            padding: .5rem;

            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: bold;
            font-size: 16px;
        }

        .modal-body {
            width: 100%;
            height: 60%;

            padding: .5rem;
        }

        .modal-footer {
            width: 100%;
            height: 20%;

            padding: .5rem;

            display: flex;
            align-items: center;
            gap: 3px;
        }

        .close-icon {
            position: absolute;
            top: .5rem;
            right: 1rem;

            cursor: pointer;
        }
    }
</style>