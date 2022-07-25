<template>
  <div id="app">
    <buttonTest/>
  </div>
</template>

<script>
import buttonTest from './test/buttonTest.vue'
import './fontIcon/index'

export default {
  name: 'App',
  components: {
    buttonTest,
  }
}
</script>

<style lang="scss">
@import './scss/_main';

</style>
