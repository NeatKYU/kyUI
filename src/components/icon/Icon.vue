<template>
    <span class="icon" :class="[size]">
        <f-icon :icon="icon" />
    </span>
</template>

<script>

export default {
    name: 'c-icon',
    props: {
        pack: String,
        icon: String,
        size: String,
        customSize: String,
        customClass: String,
    },
    computed: {
    },
    methods: {
        /**
        * Equivalent icon name of the MDI.
        */
        getEquivalentIconOf(value) {
            // Only transform the class if the both prop is set to true
            if (!this.both) {
                return value
            }

            if (this.iconConfig &&
                this.iconConfig.internalIcons &&
                this.iconConfig.internalIcons[value]) {
                return this.iconConfig.internalIcons[value]
            }
            return value
        }
    }
}
</script>

<style lang="scss" scoped>
.icon {

}
</style>