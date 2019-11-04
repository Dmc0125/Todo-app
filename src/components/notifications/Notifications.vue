<script>
import { mapGetters, mapActions } from 'vuex';

import PlusIcon from '@/layouts/icons/PlusIcon.vue';

export default {
  components: {
    PlusIcon,
  },
  methods: mapActions(['hideNotification']),
  computed: mapGetters({
    notifications: 'getNotifications',
  }),
};
</script>

<template>
  <transition-group
    name="slideIn"
    tag="aside"
    class="absolute w-80 top-4 right-4 md:top-20"
  >
      <section
        v-for="({ text, head, id, isSuccess }, i) in notifications"
        :class="`
          w-full flex items-center ${ i === notifications.length - 1 ? '' : 'mb-4' }
          pr-2 py-2 shadow-lg rounded bg-gray-900 border border-gray-800 notification
        `"
        :key="id"
      >
        <div class="w-12 h-12 mx-2 flex-shrink-0">
          <svg v-if="isSuccess" class="w-full text-green-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><rect x="16.457" y="9.028" width=".768" height="7.678" rx=".384" transform="rotate(45 16.457 9.028)"/><rect x="8.314" y="11.743" width=".768" height="4.607" rx=".384" transform="rotate(-45 8.314 11.743)"/></svg>
          <svg v-else class="w-full text-red-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M15.657 8.485a.423.423 0 0 0-.598 0l-2.988 2.989-2.988-2.989a.423.423 0 1 0-.598.598l2.989 2.988-2.989 2.988a.423.423 0 0 0 .598.598l2.988-2.988 2.988 2.988a.423.423 0 0 0 .598-.598l-2.988-2.988 2.988-2.988a.423.423 0 0 0 0-.598z"/></svg>
        </div>

        <main class="w-full">
          <header class="flex-center-between">
            <h1 class="text-gray-200 font-medium">{{ head }}</h1>

            <button class="w-6 h-6 labels-btn-inner" @click="hideNotification(id)">
              <PlusIcon rotate />
            </button>
          </header>

          <div class="mr-4">
            <p class="p-secondary">{{ text }}</p>
          </div>
        </main>
      </section>
  </transition-group>
</template>

<style scoped>
.notification {
  transition: all 300ms ease-out;
}

.slideIn-leave-active {
  position: absolute;
}

.slideIn-enter,
.slideIn-leave-to {
  transform: translateX(200%);
  opacity: 0;
}

.slideIn-enter-to,
.slideIn-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>
