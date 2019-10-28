<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: mapActions(['hideModal']),
  computed: mapGetters({
    showModal: 'getModalState',
  }),
};
</script>

<template>
  <section
    class="w-full h-screen absolute top-0 left-0 flex-center modal-color"
    v-if="showModal"
    @click="hideModal"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
.modal-color {
  background: rgba(0, 0, 0, 0.1);
}
</style>
