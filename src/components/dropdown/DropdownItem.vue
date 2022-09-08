<template>
    <div class="c-dropdown-item" v-on="$listeners">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'c-dropdown-item' 
}
</script>

<style lang="scss" scoped>
@import '../../scss/common';
.c-dropdown-item {
    width: 100%;
    height: 30px;

    padding: 5px 10px;
    
    cursor: pointer;

    &:hover {
        background-color: $c-common-hover-color;
    }
}
</style>