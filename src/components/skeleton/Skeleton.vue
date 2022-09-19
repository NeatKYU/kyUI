<template>
    <div class="skeleton" :class="commonClasses" :width="sWidth" :height="sHeight" />
</template>

<script>
export default {
    name: 'c-skeleton',
    props: {
        sWidth: {
            type: String,
            default: '10rem',
        },
        sHeight: {
            type: String,
            default: '0.5rem',
        },
        isAnimation: {
            type: Boolean,
            default: true,
        },
        isCircle: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        commonClasses() {
            return {
                'is-animation': this.isAnimation,
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../scss/common';

.skeleton {
    width: 10rem;
    height: 1rem;

    border-radius: $c-border-radius;
    background: $c-primary-color;
    
    &.is-animation {
        background: linear-gradient(90deg, $c-primary-color 0%, rgb(212, 212, 212) 15%, $c-primary-color 35%, $c-primary-color 100%);
        background-size: 200% 100%;
        background-position-x: 100%;
        animation: 1.5s skeletonAni ease-in-out infinite;
    }
}

@keyframes skeletonAni {
    to {
        background-position-x: -100%;
    }
}
</style>