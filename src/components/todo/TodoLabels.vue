<script>
import { mapGetters } from 'vuex';

import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';

export default {
  components: {
    AppPlusIcon,
  },
  props: {
    labels: {
      type: Array,
      required: true,
    },
    todoId: {
      type: String,
      required: true,
    },
  },
  methods: {
    labelsWithText() {
      return this.usedLabels.some(label => label.text.length > 0);
    },
  },
  computed: {
    usedLabels() {
      return this.getLabels.filter(label => this.labels.includes(label.id));
    },
    ...mapGetters(['getLabels']),
  },
};
</script>

<template>
  <section class="flex items-center flex-wrap -mt-2 -ml-1">
    <div
      v-for="({ id, color, text }) in usedLabels"
      :key="id"
      :class="[
        text.length ? 'w-fc px-2' : 'w-10',
        labelsWithText() ? 'h-6' : 'h-4',
        `mt-2 mx-1 bg-${color}-500 rounded flex-center`,
      ]"
    >
      <p class="text-gray-900 font-semibold text-sm">{{ text }}</p>
    </div>

    <button
      :class="[
        labelsWithText() ? 'w-6 h-6' : 'w-4 h-4',
        'mt-2 ml-1 flex-shrink-0 labels-btn labels-btn-outer'
      ]"
      @click.stop
    >
    <!-- TODO: Add label function -->
      <AppPlusIcon />
    </button>
  </section>
</template>
