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
                    this.sRight = true;
                    this.sLeft = false;
                    this.sBottom = false;
                } else {
                    tooltipItem.style.left = `calc(50% + ${-rect.x + 5}px)`
                }
            } else if(rect.right > window.innerWidth) {
                // 오른쪽으로 나갔을 때
                if(this.sRight) {
                    this.sLeft = true;
                    this.sRight = false;
                    this.sBottom = false;
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
@import '../../scss/common';

.c-tooltip {
    position: relative;
    display: inline-block;

    .c-tooltip-arrow {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        border: 9px solid transparent;
        border-bottom-width: 0;
        border-top-color: $c-primary-color;
        bottom: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        
        z-index: 99;

        &.is-visible {
            visibility: visible;
            opacity: 1;
        }

        &.is-animation {
            transition: opacity .5s;
        }

        &.is-left {
            top: 50%;
            left: unset;
            right: calc(100% + 8px);
            border-right-width: 0;
            border-right-color: $c-primary-color;
            transform: translateY(-50%) rotate(45deg);
        }

        &.is-right {
            top: 50%;
            left: calc(100% + 10px);
            border-left-width: 0;
            border-left-color: $c-primary-color;
            transform: rotate(-45deg) translateY(-50%);
        }

        &.is-bottom {
            top: calc(100% + 5px);
            border-top-width: 0;
            border-bottom-width: 10px;
            border-bottom-color: $c-primary-color;
        }
    }

    .c-tooltip-item {
        visibility: hidden;
        opacity: 0;
        background-color: $c-primary-color;
        
        white-space: nowrap;
        text-align: center;
        
        position: absolute;
        // top: -35px;
        bottom: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        
        width: auto;
        height: auto;
        padding: 3px 10px;

        z-index: 999;

        &.is-visible {
            visibility: visible;
            opacity: 1;
        }

        &.is-animation {
            transition: opacity .5s;
        }

        &.is-left {
            top: 50%;
            transform: translateY(-50%);
            right: calc(100% + 10px);
            left: unset;
            bottom: unset;
        }

        &.is-right {
            top: 50%;
            left: calc(100% + 10px);
            transform: translateY(-50%);
            bottom: unset;
        }

        &.is-bottom {
            top: calc(100% + 10px);
            bottom: unset;
        }

        &.is-rounded {
            border-radius: $c-border-radius;
        }
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>