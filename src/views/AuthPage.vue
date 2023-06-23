<template>
  <div class="w-full max-w-[500px] max-h-[600px] bg-gray-800 px-10 py-10 rounded-lg shadow-md">
    <div class="tabs -mt-5 -mr-5 flex justify-center mb-10">
      <div class="pt-5 pr-5 w-full" v-for="tab in tabs" :key="tab.id">
        <button
            :class="{ 'tab': true, 'active bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-sm': tab.id === currentTab }"
            @click="currentTab = tab.id"
            class="text-sm font-medium bg-gray-600 px-10 py-2 rounded-md w-full"
            >
          {{ tab.name }}
        </button>
      </div>
    </div>
    <component :is="currentTabComponent" />
  </div>
</template>

<script>
import AAuth from "@/components/Auth/a-auth.vue";
import ASign from "@/components/Auth/a-sign.vue";

export default {
  components: {
    AAuth,
    ASign,
  },
  data() {
    return {
      currentTab: 1,
      tabs: [
        { id: 1, name: 'Auth', component: 'AAuth' },
        { id: 2, name: 'Sign', component: 'ASign' },
      ]
    };
  },
  computed: {
    currentTabComponent() {
      const currentTab = this.tabs.find(tab => tab.id === this.currentTab);
      return currentTab ? currentTab.component : null;
    }
  }
};
</script>