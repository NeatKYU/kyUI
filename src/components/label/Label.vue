<template>
    <div class="c-label">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'c-label',
}
</script>

<style lang="scss" scoped>
.c-label {
    display: inline-flex;
    flex-direction: column;

    width: fit-content;
}
</style>