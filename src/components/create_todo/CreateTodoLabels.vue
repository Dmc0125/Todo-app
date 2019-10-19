<script>
import { mapGetters } from 'vuex';

import { isUsed } from '@/utils/helpers';

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newLabel: '',
    };
  },
  methods: {
    isUsed,
  },
  computed: mapGetters({
    labels: 'getLabels',
  }),
};
</script>

<template>
  <section class="w-full mt-6">
    <header>
      <h2 class="h-secondary">Labels</h2>
    </header>

    <ul class="w-full mt-3">
      <li
        v-for="({ color, text, id }, i) in labels"
        class="mt-2"
        :key="i"
      >
        <!-- TODO: Set label as used on current Todo on click -->
        <button
          type="button"
          :class="`
            btn-def
            w-full
            relative
            bg-${color}-500
            hover:bg-${color}-600
            focus:bg-${color}-600
          `"
          @click="$emit('todo:togglelabel', labels[i])"
        >
          <p class="w-full px-4 text-white text-left font-medium text-shadow">{{ text }}</p>

          <div
            v-if="isUsed(todo.labels, id)"
            class="w-2 h-full absolute bg-white right-0 top-0 is-used"
          ></div>
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.is-used {
  border-radius: 0 0.25rem 0.25rem 0;
}
</style>
