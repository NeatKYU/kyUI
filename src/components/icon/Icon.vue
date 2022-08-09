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
}
</script>
