<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isNavShown: true,
    };
  },
};
</script>

<template>
  <section :class="['w-full md:hidden bg-gray-900 shadow-md', isNavShown ? 'h-28' : 'h-16']">
    <section class="w-full h-16 px-4 flex-center-between">
      <div class="w-fc h-16 flex-center">
        <h1 class="h-primary">Todo app</h1>
      </div>

      <button class="menu-btn" @click="isNavShown = !isNavShown">
        <div :class="['btn', { 'active-btn': isNavShown }]"></div>
      </button>
    </section>

    <nav v-show="isNavShown" class="w-full flex items-center">
      <router-link
        v-for="{ to, href, isActive } in links"
        class="w-2/5 sm:w-1/3 flex-shrink-0 focus:outline-none focus:bg-gray-800 hover:bg-gray-800"
        :key="href"
        :to="href"
      >
        <div :class="['h-12 flex-center link', { 'active-link': isActive }]">{{ to }}</div>
      </router-link>
    </nav>
  </section>
</template>

<style scoped>
section {
  transition: all 200ms ease-in-out;
}

.active-btn {
  transform: rotate(45deg);
}

.active-btn::before {
  transform: rotate(-90deg) !important;
}

.active-btn::after {
  transform: rotate(90deg) !important;
  opacity: 0;
}

nav {
  overflow-x: auto;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;

  animation: 400ms ease-in-out 1 slideIn;
}

nav::-webkit-scrollbar {
  display: none;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
