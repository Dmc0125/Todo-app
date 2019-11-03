<script>
import { mapActions } from 'vuex';

import { limitStringLength } from '@/utils/helpers';

import AppInput from '@/layouts/input/Input.vue';
import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';

export default {
  components: {
    AppInput,
    AppPlusIcon,
  },
  data() {
    return {
      customLabel: '',
    };
  },
  methods: {
    submitLabel() {
      this.createLabel(limitStringLength(this.customLabel));

      this.showNotification({
        head: 'Label created',
        text: `New label ${
          this.customLabel.length
            ? '"' + this.customLabel + '"'
            : ''
        } was succesfully created`,
        isSuccess: true,
      });

      this.customLabel = '';
    },
    ...mapActions(['createLabel', 'showNotification']),
  },
};
</script>

<template>
  <section class="w-full">
    <slot>
      <header class="mt-6">
        <h1 class="h-secondary">Create label</h1>
      </header>
    </slot>

    <form @submit.prevent="submitLabel" class="w-full mt-3 flex">
      <AppInput :value.sync="customLabel" placeholder label="Custom label" />

      <button type="submit" class="w-10 h-10 flex-shrink-0 labels-btn-inner">
        <AppPlusIcon />
      </button>
    </form>
  </section>
</template>
