<script>
import { mapActions, mapGetters } from 'vuex';

import AppCustomizeIcon from '@/layouts/icons/CustomizeIcon.vue';

export default {
  components: {
    AppCustomizeIcon,
  },
  data() {
    return {
      customLabel: '',
    };
  },
  methods: {
    openLabelSettings(labelData) {
      if (this.modalShowState) return;

      this.$emit('labelsettings:open', labelData);
      this.showModal();
    },
    submitLabel() {
      this.addLabel(this.customLabel);

      this.customLabel = '';
    },
    ...mapActions(['addLabel', 'showModal']),
  },
  computed: mapGetters({
    labels: 'getLabels',
    modalShowState: 'getModalState',
  }),
};
</script>

<template>
  <ul class="w-full mt-3">
    <li
      v-for="({ color, text, id }, i) in labels"
      class="flex-center mt-2"
      :key="i"
    >
      <!-- TODO: Set label as used on current Todo on click -->
      <button
        class="w-full min-h-10 relative rounded"
        :class="`bg-${color}-500 hover:bg-${color}-600 focus:bg-${color}-600`"
        @click="openLabelSettings({ id, text, color })"
      >
        <p class="w-full px-4 py-1 text-white text-left font-medium text-shadow">{{ text }}</p>

        <!-- TODO: Show only if label is used -->
        <!-- <div class="w-2 h-full absolute bg-white right-0 top-0 is-used"></div> -->
      </button>

      <button
        class="w-10 h-10 flex-shrink-0 labels-btn-inner"
        @click="openLabelSettings({ id, text, color })"
      >
        <AppCustomizeIcon />
      </button>
    </li>
  </ul>
</template>

<style scoped>
p {
  -ms-word-break: break-all;
  word-break: break-all;
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
</style>
