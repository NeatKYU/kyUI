<template>
    <div 
        class="c-tooltip"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <slot/>
        <div 
            ref="tooltipItem"
            class="c-tooltip-item"
            :class="tooltipItemClass"
        >
            {{ text }}
        </div>
        <div 
            ref="tooltipArrow" 
            class="c-tooltip-arrow" 
            :class="tooltipItemClass"
        />
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
        rounded: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            visible: false,
            sLeft: this.isLeft,
            sRight: this.isRight,
            sBottom: this.isBottom,
        }
    },
    computed: {
        tooltipItemClass() {
            return {
                'is-animation': this.animated,
                'is-left': this.sLeft,
                'is-right': this.sRight,
                'is-bottom': this.sBottom,
                'is-rounded': this.rounded,
                'is-visible': this.visible,
            }
        },
    },
    methods: {
        visibleTooltip(aBool) {
            this.visible = aBool;
        },
        mouseEnter() {
            this.visibleTooltip(true);
            let tooltipItem = this.$refs.tooltipItem;
            this.$refs.tooltipArrow.style.visibility = 'visible';
            const rect = tooltipItem.getBoundingClientRect();
            if(rect.x < 0) {
                // 왼쪽으로 나갔을 때
                if(this.sLeft) {
                    this.sLeft = false;
                    this.sBottom = true;
                } else {
                    tooltipItem.style.left = `calc(50% + ${-rect.x + 5}px)`
                }
            } else if(rect.right > window.innerWidth) {
                // 오른쪽으로 나갔을 때
                if(this.sRight) {
                    this.sRight = false;
                    this.sLeft = true;
                } else {
                    const changeX = window.innerWidth - rect.right;
                    tooltipItem.style.left = `calc(50% + ${changeX - 10}px)`
                }
            }
        },
        mouseLeave() {
            this.visibleTooltip(false);
            this.$refs.tooltipArrow.style.visibility = 'hidden';
        }
    },
};
</script>

<style lang="scss" scoped>

</style>