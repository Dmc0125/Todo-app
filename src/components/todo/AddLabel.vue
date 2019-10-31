<script>
import { mapGetters, mapActions } from 'vuex';

import { limitStringLength } from '@/utils/helpers';

import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';
import CreateTodoLabels from '@/components/create_todo/CreateTodoLabels.vue';
import CreateLabel from '@/components/labels/CreateLabel.vue';

export default {
  components: {
    AppPlusIcon,
    CreateTodoLabels,
    CreateLabel,
  },
  methods: mapActions(['hideModal', 'modifyTodoLabels']),
  computed: {
    todoLabels() {
      return this.todo(this.todoId).labels;
    },
    todoText() {
      return limitStringLength(this.todo(this.todoId).text, 40);
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
    class="w-full max-w-md p-6 bg-gray-900 shadow-lg rounded modal-wrapper"
    @click.stop
  >
    <header class="flex-center-between">
      <div>
        <h1 class="h-secondary">Add label</h1>
        <p class="p-secondary">{{ todoText }}</p>
      </div>

      <button class="w-8 self-start labels-btn-inner" @click="hideModal">
        <AppPlusIcon rotate />
      </button>
    </header>

    <CreateTodoLabels
      :todoLabels="todoLabels"
      :showHeader="false"
      @todo:togglelabel="modifyTodoLabels({ id: todoId, labelId: $event })"
    />

    <CreateLabel>
      <header class="mt-6">
        <h1 class="h-third">Create label</h1>
      </header>
    </CreateLabel>
  </section>
</template>
