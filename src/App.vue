<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

import aDefault from '@/layouts/a-default.vue'
import aEmpty from '@/layouts/a-empty.vue'
export default {
  name: 'App',
  components: {
    aEmpty,
    aDefault
  },
  data() {
    return {
      layout: null,
    }
  },
  watch: {
    $route(to) {
      if(to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = 'aDefault'
      }
    }
  },
}
</script>

<style>
</style>
