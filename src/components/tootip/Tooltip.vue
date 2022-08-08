<template>
    <div 
        class="c-tooltip"
        @mouseenter="visibleTooltip(true)"
        @mouseleave="visibleTooltip(false)"
    >
        <slot/>
        <div 
            v-if="visible"
            class="c-tooltip-item"
            :class="tooltipItemClass"
        >
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-tooltip',
    props: {
        text: {
            type: String,
            default: '',
        },
        animated: {
            type: Boolean,
            default: true,
        },
        isLeft: {
            type: Boolean,
            default: false,
        },
        isRight: {
            type: Boolean,
            default: false,
        },
        isBottom: {
            type: Boolean,
            default: false,
        },
        isRound: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            visible: false,
        }
    },
    computed: {
        tooltipItemClass() {
            return {
                'is-animation': this.animated,
                'is-left': this.isLeft,
                'is-right': this.isRight,
                'is-bottom': this.isBottom,
                'is-rounded': this.isRound
            }
        },
    },
    methods: {
        visibleTooltip(aBool) {
            this.visible = aBool;
        },
    }
};
</script>

<style lang="scss" scoped>

</style>