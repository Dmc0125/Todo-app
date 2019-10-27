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
    class="modal w-full h-screen absolute top-0 left-0"
    v-if="showModal"
    @click="hideModal"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.1);
}
</style>
