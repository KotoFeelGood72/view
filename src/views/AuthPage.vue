<template>
  <div>
    <div id="form">
      <ul class="form-tab-link">
        <li v-for="item in tabs" :key="item.id">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SignIN from "@/components/Auth/a-auth.vue";
import SignUP from "@/components/Auth/a-sign.vue";
export default {
  components: {
    SignIN,
    SignUP,
  },
  data() {
    return {
      tabs: [
        {
          link: 'signIN',
          name: 'Login',
          id: 1
        },
        {
          link: 'signUP',
          name: 'Register',
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>