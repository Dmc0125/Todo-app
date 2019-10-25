<script>
import { mapActions } from 'vuex';

import AppInput from '@/layouts/input/Input.vue';
import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';

export default {
  components: {
    AppInput,
    AppPlusIcon,
  },
  props: {
    showHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      customLabel: '',
    };
  },
  methods: {
    submitLabel() {
      this.addLabel(this.customLabel);

      this.customLabel = '';
    },
    ...mapActions(['addLabel']),
  },
};
</script>

<template>
  <section class="w-full">
    <header v-if="showHeader" class="mt-6">
      <h1 class="h-secondary">Create label</h1>
    </header>

    <form @submit.prevent="submitLabel" class="w-full mt-3 flex">
      <AppInput :value.sync="customLabel" placeholder label="Custom label" />

      <button type="submit" class="w-10 h-10 flex-shrink-0 labels-btn-inner">
        <AppPlusIcon />
      </button>
    </form>
  </section>
</template>
