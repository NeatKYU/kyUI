<template>
    <label class="c-radio-label">
        <input type="radio" class="c-radio-input"/>
        <span class="c-radio-span"><slot/></span>
    </label>
</template>

<script>
export default {
    name: 'c-radio',
}
</script>