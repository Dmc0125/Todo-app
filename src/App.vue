<script>
import { mapActions } from 'vuex';

import { getItems } from './utils/localstorage';

import AppHeader from '@/components/header/Header.vue';
import AppNotifications from '@/components/notifications/Notifications.vue';

export default {
  components: {
    AppHeader,
    AppNotifications,
  },
  methods: mapActions(['setTodos', 'setLabels', 'setTodoGroups']),
  created() {
    const [todos, labels, groups] = getItems(
      process.env.VUE_APP_LS_TODOS_KEY,
      process.env.VUE_APP_LS_LABELS_KEY,
      process.env.VUE_APP_LS_GROUPS_KEY,
    );

    this.setTodos(todos);
    this.setLabels(labels);
    this.setTodoGroups(groups);
  },
};
</script>

<template>
  <main class="w-full min-h-screen bg-gray-700 relative">
    <AppHeader />

    <router-view/>

    <AppNotifications />
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
