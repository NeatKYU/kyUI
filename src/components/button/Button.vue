<template>
    <component
        :is="computedTag"
        class="c-button"
        :class="[ type ]"
        v-on="$listeners"
    >
        <c-icon v-if="leftIcon" :icon="leftIcon" />
        <span v-if="label">{{ label }}</span>
        <span v-else-if="$slots.default">
            <slot />
        </span>
        <c-icon v-if="rightIcon" :icon="rightIcon"/>
    </component>
</template>

<script>
import config from '../../utils/config'

export default {
    name: 'c-button',
    props: {
        type: [String, Object],
        label: String,
        leftIcon: String,
        rightIcon: String,
        tag: {
            type: String,
            default: 'button',
            validator: (value) => {
                return config.defaultLinkTags.indexOf(value) >= 0
            }
        }
    },
    computed: {
        computedTag() {
            if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                return 'button'
            }
            return this.tag
        },
    }
}
</script>