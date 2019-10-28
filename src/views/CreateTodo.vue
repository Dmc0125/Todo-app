<script>
import { mapGetters, mapActions } from 'vuex';

import AppInput from '@/layouts/input/Input.vue';
import CreateTodoLabels from '@/components/create_todo/CreateTodoLabels.vue';

export default {
  components: {
    AppInput,
    CreateTodoLabels,
  },
  data() {
    return {
      newTodo: {
        text: '',
        labels: [],
      },
    };
  },
  methods: {
    toggleLabel(labelId) {
      if (this.newTodo.labels.includes(labelId)) {
        const filtered = this.newTodo.labels.filter(currentLabelId => currentLabelId !== labelId);
        this.newTodo.labels = filtered;
        return;
      }

      this.newTodo.labels.push(labelId);
    },
    submitTodo() {
      this.createTodo(this.newTodo);

      this.newTodo = {
        text: '',
        labels: [],
      };

      this.$router.push({ path: '/' });
    },
    ...mapActions(['createTodo']),
  },
  computed: mapGetters({
    labels: 'getLabels',
  }),
};
</script>

<template>
  <form class="w-full max-w-md mx-auto wrapper" @submit.prevent="submitTodo">
    <AppInput :value.sync="newTodo.text" label="Todo name" />

    <CreateTodoLabels :todoLabels="newTodo.labels" @todo:togglelabel="toggleLabel" />

    <button
      type="submit"
      class="btn-def w-20 mt-6 bg-gray-800 text-gray-300 hover:bg-gray-900 focus:bg-gray-900"
    >Add</button>
  </form>
</template>
