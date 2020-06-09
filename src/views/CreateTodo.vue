<script>
import { mapGetters, mapActions } from 'vuex';

import AppInput from '@/layouts/input/Input.vue';
import CreateTodoLabels from '@/components/create_todo/CreateTodoLabels.vue';
import CreateTodoGroups from '@/components/create_todo/CreateTodoGroups.vue';

export default {
  components: {
    AppInput,
    CreateTodoLabels,
    CreateTodoGroups,
  },
  data() {
    return {
      newTodo: {
        text: '',
        labels: [],
        groups: [],
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
      if (!this.newTodo.text.trim().length) {
        this.showNotification({
          head: 'Please fill out all fields',
          text: 'You need to set todo text/name and choose group',
          isSuccess: false,
        });
        return;
      }

      this.createTodo(this.newTodo);

      this.showNotification({
        head: 'Todo created',
        text: `Todo "${this.newTodo.text}" was succesfully created...`,
        isSuccess: true,
      });

      this.newTodo = {
        text: '',
        labels: [],
      };

      this.$router.push({ path: '/' });
    },
    ...mapActions(['createTodo', 'showNotification']),
  },
  computed: mapGetters({
    labels: 'getLabels',
  }),
};
</script>

<template>
  <form class="w-full max-w-md mx-auto wrapper" @submit.prevent="submitTodo" data-form-test>
    <AppInput :value.sync="newTodo.text" label="Todo name/text" />

    <CreateTodoLabels :todoLabels="newTodo.labels" @todo:togglelabel="toggleLabel" />

    <CreateTodoGroups />

    <button
      type="submit"
      class="btn-def w-20 mt-6 bg-gray-800 text-gray-300 hover:bg-gray-900 focus:bg-gray-900"
    >Add</button>
  </form>
</template>
