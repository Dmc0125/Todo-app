<script>
import eb from '@/event_bus/event_bus';

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    close() {
      this.showModal = false;
      this.$emit('modal:close');
    },
  },
  created() {
    eb.$on('modal:show', () => {
      this.showModal = true;
    });
    eb.$on('modal:close', () => {
      this.showModal = false;
    });
  },
};
</script>

<template>
  <section
    class="modal w-full h-screen absolute top-0 left-0"
    v-if="showModal"
    @click="showModal = false"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.1);
}
</style>
