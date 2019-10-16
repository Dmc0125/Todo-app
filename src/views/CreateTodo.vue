<script>
import { mapGetters, mapActions } from 'vuex';

import { isUsed } from '@/utils/helpers';

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
    toggleLabel(label) {
      if (isUsed(this.newTodo.labels, label.id)) {
        const filtered = this.newTodo.labels.filter(currentLabel => currentLabel.id !== label.id);
        this.newTodo.labels = filtered;
        return;
      }

      this.newTodo.labels.push(label);
    },
    submitTodo() {
      this.createTodo(this.newTodo);

      this.newTodo = {
        text: '',
        labels: [],
      };
    },
    ...mapActions(['createTodo']),
  },
  computed: mapGetters({
    labels: 'getLabels',
  }),
};
</script>

<template>
  <form class="w-full wrapper" @submit.prevent="submitTodo">
    <AppInput :value.sync="newTodo.text" label="Todo name" />

    <CreateTodoLabels :todo="newTodo" @todo:togglelabel="toggleLabel" />

    <button
      type="submit"
      class="h-10 mt-6 px-6 bg-gray-800 text-gray-300 font-semibold rounded hover:bg-gray-900"
    >Add</button>
  </form>
</template>
