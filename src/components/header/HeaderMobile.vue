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
  watch: {
    links: {
      deep: true,
      handler(links) {
        const { to } = links.find(link => link.isActive);

        const active = this.$refs.links.find(link => link.innerText === to);
        const { left } = active.getBoundingClientRect();

        this.$refs.navMobile.scroll({
          behavior: 'smooth',
          top: 0,
          left: left + active.clientWidth / 2,
        });
      },
    },
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

    <transition name="slideIn">
      <nav v-show="isNavShown" class="w-full flex items-center" ref="navMobile">
        <router-link
          v-for="{ to, href, isActive } in links"
          class="
            w-2/5 sm:w-1/3 flex-shrink-0 focus:outline-none focus:bg-gray-800 hover:bg-gray-800
          "
          :key="href"
          :to="href"
        >
          <div
            :class="['h-12 flex-center link', { 'active-link': isActive }]"
            ref="links"
          >{{ to }}</div>
        </router-link>
      </nav>
    </transition>
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
}

nav::-webkit-scrollbar {
  display: none;
}

.slideIn-enter-active {
  transition: all 400ms ease-out;
}

.slideIn-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slideIn-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
