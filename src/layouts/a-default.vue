<template>
  <div>
    <Nav/>
    <slot/>
  </div>
</template>

<script>
import Nav from '@/components/Header/a-nav.vue'
export default {
  components: {
    Nav,
  }
}
</script>

<style lang="scss" scoped>

</style>