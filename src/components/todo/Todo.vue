<script>
import { mapActions } from 'vuex';

import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';
import AppDoneIcon from '@/layouts/icons/DoneIcon.vue';
import AppChevronIcon from '@/layouts/icons/ChevronIcon.vue';
import TodoLabels from './TodoLabels.vue';
import TodoSettings from './TodoSettings.vue';

export default {
  components: {
    AppPlusIcon,
    AppDoneIcon,
    AppChevronIcon,
    TodoLabels,
    TodoSettings,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleTodoExpand() {
      this.isExpanded = !this.isExpanded;
    },
    ...mapActions(['toggleTodoDone', 'deleteTodo']),
  },
};
</script>

<template>
  <li
    :class="['w-full min-h-17 mt-4 p-2 cursor-pointer rounded', { 'bg-gray-900': isExpanded }]"
    @click="toggleTodoExpand"
  >
    <TodoLabels :labels="labels" :todoId="id" />

    <div class="w-full mt-1 flex-center-between">
      <p class="w-full p-primary h-fc">
        {{ text }}
      </p>


      <div class="h-8 pl-2 flex-center">
        <button
          class="w-8 h-full flex-shrink-0 labels-btn labels-btn-outer"
          @click.stop="toggleTodoDone(id)"
        >
          <AppDoneIcon :isDone="isDone" />
        </button>

        <button
          class="w-8 h-full flex-shrink-0 labels-btn labels-btn-outer"
          @click="deleteTodo(id)"
        >
          <AppPlusIcon rotate />
        </button>

        <button class="w-8 h-full flex-shrink-0 labels-btn labels-btn-outer">
          <AppChevronIcon :isExpanded="isExpanded" />
        </button>
      </div>
    </div>

    <transition name="fadeIn">
      <div v-show="isExpanded">
        <TodoSettings />
      </div>
    </transition>
  </li>
</template>

<style scoped>
li {
  transition: all 200ms ease-in-out;
}

.show-more {
  transition: all 200ms ease-in-out;
}

p {
  -ms-word-break: break-all;
  word-break: break-all;
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
</style>
