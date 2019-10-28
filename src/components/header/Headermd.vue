<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <section class="w-full hidden md:block bg-gray-900 shadow-md">
    <div class="w-full h-16 px-12 flex-center-between">
      <div class="w-fc h-16 flex-center">
        <h1 class="h-primary">Todo app</h1>
      </div>

      <nav class="flex-center">
        <router-link
          v-for="{ to, href, isActive } in links"
          class="w-36 flex-shrink-0 focus:outline-none focus:bg-gray-800 hover:bg-gray-800"
          :key="href"
          :to="href"
        >
          <div :class="['h-16 flex-center link', { 'active-link': isActive }]">{{ to }}</div>
        </router-link>
      </nav>
    </div>
  </section>
</template>
