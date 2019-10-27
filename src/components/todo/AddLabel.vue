<script>
import { mapGetters, mapActions } from 'vuex';

import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';
import CreateTodoLabels from '@/components/create_todo/CreateTodoLabels.vue';
import AddLabel from '@/components/labels/CreateLabel.vue';

export default {
  components: {
    AppPlusIcon,
    CreateTodoLabels,
    AddLabel,
  },
  methods: mapActions(['hideModal', 'modifyTodoLabels']),
  computed: {
    todoLabels() {
      return this.todo(this.todoId).labels;
    },
    ...mapGetters({
      todo: 'getTodo',
      todoId: 'getModalData',
    }),
  },
};
</script>

<template>
  <section
    class="w-full p-6 absolute center-absolute bg-gray-900 shadow-lg rounded modal-wrapper"
    @click.stop
  >
    <header class="flex-center-between">
      <h1 class="h-secondary">Add label</h1>

      <button class="w-8 labels-btn-inner" @click="hideModal">
        <AppPlusIcon rotate />
      </button>
    </header>

    <CreateTodoLabels
      :todoLabels="todoLabels"
      :showHeader="false"
      @todo:togglelabel="modifyTodoLabels({ id: todoId, labelId: $event })"
    />

    <AddLabel>
      <header class="mt-6">
        <h1 class="h-third">Create label</h1>
      </header>
    </AddLabel>
  </section>
</template>
