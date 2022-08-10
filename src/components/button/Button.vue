<template>
    <component
        :is="computedTag"
        class="c-button"
        :class="[ type, classes ]"
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
        size: {
            type: String,
            default: 'medium'
        },
        tag: {
            type: String,
            default: 'button',
            validator: (value) => {
                return config.defaultLinkTags.indexOf(value) >= 0
            }
        },
        primary: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        leftIcon: String,
        rightIcon: String,
    },
    computed: {
        computedTag() {
            if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                return 'button'
            }
            return this.tag
        },
        classes() {
            return {
                'is-primary': this.primary,
                'small': this.size === 'small',
                'medium': this.size === 'medium',
                'large': this.size === 'large',
                'is-rounded': this.rounded,
                'is-disabled': this.disabled,
            }
        }
    }
}
</script>