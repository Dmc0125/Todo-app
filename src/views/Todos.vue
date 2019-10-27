<script>
import { mapGetters } from 'vuex';

import AppModal from '@/layouts/modal/Modal.vue';
import AddLabel from '@/components/todo/AddLabel.vue';
import Todo from '@/components/todo/Todo.vue';

export default {
  components: {
    AppModal,
    AddLabel,
    Todo,
  },
  computed: mapGetters({
    todos: 'getTodos',
  }),
};
</script>

<template>
  <section class="wrapper">
    <section v-if="!todos.length">
      <h3
        class="text-center font-semibold text-lg p-primary-color"
      >You have not create any todos yet!</h3>

      <router-link
        to="/create-todo"
        class="
          w-fc
          block
          mx-auto
          mt-4
          rounded
          bg-green-500
          hover:bg-green-600
          focus:outline-none
          focus:bg-green-600
        "
      >
        <div class="btn-def text-gray-300 flex-center">Create todo</div>
      </router-link>
    </section>

    <section v-else class="bg-gray-800 wrapper-sm rounded">
      <header>
        <h1 class="h-secondary">All todos</h1>
      </header>

      <ul class="mt-6">
        <Todo
          v-for="{ text, id, labels, isDone } in todos"
          :text="text"
          :labels="labels"
          :isDone="isDone"
          :id="id"
          :key="id"
        />
      </ul>
    </section>

    <AppModal>
      <AddLabel />
    </AppModal>
  </section>
</template>
