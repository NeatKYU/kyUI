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