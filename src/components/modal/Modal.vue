<template>
    <div 
        v-if="isOpen"
        class="c-modal-wrapper"
        @click="outsideClickClose" 
        ref="modalWrapper"
    >
        <div class="c-modal" :class="[commonClasses]">
            <div class="modal-header">
                {{ titleText }}
                <slot v-if="!titleText" name="header"/>
            </div>
            <div class="modal-body">
                <slot name="body"/>
            </div>
            <div class="modal-footer" :class="footerClasses">
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
        isAnimation: {
            type: Boolean,
            default: false,
        },
        isDivider: {
            type: Boolean,
            default: false,
        },
        footerRight: {
            type: Boolean,
            default: false,
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
        commonClasses() {
            return {
                'is-small': this.size === 'sm',
                'is-medium': this.size === 'md',
                'is-large': this.size === 'lg',
                'is-animation': this.isAnimation,
                'is-divider': this.isDivider,
            }
        },
        footerClasses() {
            return {
                'is-footer-right': this.footerRight,
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
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 999;

}

.c-modal {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: $c-border-radius;
    background-color: $c-white-color;

    &.is-animation {
        animation: scaleUp 0.3s;
    }

    &.is-divider {
        .modal-header {
            border-bottom: 2px solid lightgray;
        }
        .modal-footer {
            border-top: 2px solid lightgray;
        }
    }

    &.is-small {
        width: 20rem;
        height: 20rem;
    }

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

        &.is-footer-right {
            justify-content: end;
        }
    }

    .close-icon {
        position: absolute;
        top: .5rem;
        right: 1rem;

        cursor: pointer;
    }

}

.divider {
    width: 100%;
    height: 2px;

    background-color: lightgray;
}

@keyframes scaleUp {
    0% {
        width: 0;
        height: 0;
        opacity: 0;
        transform: translate(-50%, -50%);
    }
    100% {
        opacity: 1;
        &.is-medium {
            width: 25rem;
            height: 30rem;
        }
        
        &.is-large {
            width: 30rem;
            height: 40rem;
        }
        transform: translate(-50%, -50%);
    }
}
</style>