<script>
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
};
</script>

<template>
  <section class="w-full max-w-md mx-auto wrapper">
    <header>
      <h1 class="h-secondary">All labels</h1>
    </header>

    <Labels @labelsettings:open="labelSettings = $event" />
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
