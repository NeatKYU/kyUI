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
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-tooltip',
    props: {
        animated: {
            type: Boolean,
            default: true,
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
                'is-animation': this.animated
            }
        }
    },
    methods: {
        visibleTooltip(aBool) {
            this.visible = aBool;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>