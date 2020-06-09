<script>
import Headermd from './Headermd.vue';
import HeaderMobile from './HeaderMobile.vue';

export default {
  components: {
    Headermd,
    HeaderMobile,
  },
  data() {
    return {
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
        {
          to: 'Create labels',
          href: '/create-labels',
          isActive: false,
        },
        {
          to: 'Settings',
          href: '/settings',
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
  <header>
    <Headermd :links="links" />

    <HeaderMobile :links="links" />
  </header>
</template>
