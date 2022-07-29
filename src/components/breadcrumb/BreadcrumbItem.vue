<template>
    <li :class="{ 'is-active': this.active }">
        <component
            :is="'a'"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot/>
        </component>
    </li>
</template>

<script>
export default {
    name: 'c-breadcrumb-item',
    inheritAttrs: false,
    props: {
        active: {
            type: Boolean,
            default: false,
        }
    }
}
</script>