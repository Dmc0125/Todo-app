<script>
import { mapActions } from 'vuex';
import AppInput from '@/layouts/input/Input.vue';

export default {
  components: {
    AppInput,
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
        <svg class="w-full fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a.5.5 0 00-.5.5v5h-5a.5.5 0 000 1h5v5a.5.5 0 001 0v-5h5a.5.5 0 000-1h-5v-5A.5.5 0 0012 6z"/></svg>
      </button>
    </form>
  </section>
</template>
