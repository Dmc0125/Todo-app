<script>
import eb from '@/event_bus/event_bus';

import Labels from '@/components/labels/Labels.vue';
import CreateLabel from '@/components/labels/CreateLabel.vue';
import AppModal from '@/layouts/modal/Modal.vue';
import LabelSettings from '@/components/label_settings/LabelSettings.vue';

export default {
  components: {
    Labels,
    CreateLabel,
    AppModal,
    LabelSettings,
  },
  data() {
    return {
      labelSettings: {
        id: '',
        text: '',
        color: '',
      },
    };
  },
  methods: {
    showModal(labelData) {
      this.labelSettings = labelData;
      eb.$emit('modal:show', labelData);
    },
  },
};
</script>

<template>
  <section class="w-full wrapper">
    <header>
      <h1 class="h-secondary">All labels</h1>
    </header>

    <Labels @labelsettings:open="showModal" />
    <CreateLabel showHeader />

    <AppModal>
      <LabelSettings
        :id="labelSettings.id"
        :text="labelSettings.text"
        :labelColor="labelSettings.color"
      />
    </AppModal>
  </section>
</template>
