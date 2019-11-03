<script>
import { mapActions } from 'vuex';

import { getItems } from './utils/localstorage';

import AppHeader from '@/components/header/Header.vue';
import AppNotification from '@/components/notification/Notification.vue';

export default {
  components: {
    AppHeader,
    AppNotification,
  },
  methods: {
    ...mapActions(['setTodos', 'setLabels']),
  },
  created() {
    const [todos, labels] = getItems(
      process.env.VUE_APP_LS_TODOS_KEY,
      process.env.VUE_APP_LS_LABELS_KEY,
    );

    this.setTodos(todos);
    this.setLabels(labels);
  },
};
</script>

<template>
  <main class="w-full min-h-screen bg-gray-700 relative">
    <AppHeader />

    <router-view/>

    <AppNotification />
  </main>
</template>

<style src="./assets/css/tailwind.css"></style>

<style>
* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

.center-absolute {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.rotate {
  transform: rotate(180deg);
}

/* ---- MODAL GLOBAL ---- */

.modal-wrapper {
  width: calc(100% - 3rem);
}

/* ---- TRANSITIONS ---- */

.fadeIn-enter-active {
  transition: opacity 200ms ease-in-out;
  transition-delay: 200ms;
}

.fadeIn-leave-active {
  transition: 0;
}

.fadeIn-enter {
  opacity: 0;
}

.fadeIn-enter-to {
  opacity: 1;
}
</style>
