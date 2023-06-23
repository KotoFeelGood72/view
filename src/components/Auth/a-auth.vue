<template>
  <div>
    <div class="mb-3">
      <input type="text" placeholder="Email" class="bg-gray-600 px-3 py-2 rounded-[4px] shadow-sm w-full" v-model.trim="form.email" :class="$v.form.email.$error ? 'is-invalid' : ''">
    </div>
    <div class="relative">
      <input type="password" placeholder="Password" class="bg-gray-600 px-3 py-2 rounded-[4px] shadow-sm w-full" :type="showPassword ? 'text' : 'password'" v-model.trim="form.pass" :class="$v.form.password.$error ? 'is-invalid' : ''">

      <global-icon 
       class=" absolute right-4 top-[50%] -translate-y-[50%] cursor-pointer" 
       width="20"
       :icon="showPass ? 'eye-slash-fill' : 'eye-fill'"
        @click="showPass = !showPass"
        :class="$v.form.pass.$error ? 'is-hidden' : ''"
       />
    </div>
    <div>
      <button type="submit">Request</button>
    </div>
    <div>
      <!-- <input type="checkbox" name="remember me" id="remember"> -->
      <label for="remember">Remember Me</label>
    </div>
  </div>
</template>

<script>
import { validationMixin } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
  name: 'AAuth',
  mixins: [validationMixin],
  methods: {
    changeTypeInput() {
    }
  },
  data() {
    return {
      showPass: false,
      showIconPass: true,
      form: {
        email: '',
        pass: '',
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      pass: {
        required,
        minLength: minLength(3)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>