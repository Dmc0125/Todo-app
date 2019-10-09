<script>
export default {
  data() {
    return {
      isNavShown: true,
      links: [
        {
          to: 'All todos',
          href: '/',
          isActive: true,
        },
        {
          to: 'Create todo',
          href: '/create-todo',
          isActive: false,
        },
      ],
    };
  },
  methods: {
    setActive(path) {
      this.links = this.links.map(link => ({
        ...link,
        isActive: path === link.href,
      }));
    },
  },
  watch: {
    $route(val) {
      this.setActive(val.path);
    },
  },
};
</script>

<template>
  <header class="w-full bg-gray-900" :class="[ isNavShown ? 'h-28' : 'h-16' ]">
    <section class="w-full h-16 px-4 flex items-center justify-between">
      <div class="w-fc h-16 flex items-center">
        <h1 class="text-2xl text-white font-medium">Todo app</h1>
      </div>

      <button class="menu-btn" @click="isNavShown = !isNavShown">
        <div
          class="btn"
          :class="{ 'active-btn': isNavShown }"
        ></div>
      </button>
    </section>

    <nav v-show="isNavShown" class="w-full h-12 flex items-center">
      <router-link
        v-for="{ to, href, isActive } in links"
        class="flex-1 focus:outline-none focus:bg-gray-800 hover:bg-gray-800"
        :key="href"
        :to="href"
      >
        <div
          class="h-12 flex-center text-lg text-gray-500 font-regular"
          :class="{ 'active-link': isActive }"
        >{{ to }}</div>
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
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
  animation: 400ms ease-in-out 1 slideIn;
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
