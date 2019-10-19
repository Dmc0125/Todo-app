<script>
import { mapActions } from 'vuex';

import eb from '@/event_bus/event_bus';

import TodoLabels from './TodoLabels.vue';

export default {
  components: {
    TodoLabels,
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

      eb.$emit(`todo-${this.id}:toggle`);
    },
    ...mapActions(['toggleTodoDone']),
  },
};
</script>

<template>
  <li class="w-full mt-4 cursor-pointer" @click="toggleTodoExpand">
    <TodoLabels v-if="labels.length" :labels="labels" :todoId="id" />

    <div class="w-full mt-1 flex-center-between">
      <p class="w-full p-primary h-fc">
        {{ text }}
      </p>


      <div class="h-8 flex-center">
        <button
          class="w-8 h-full flex-shrink-0 labels-btn labels-btn-outer"
          @click.stop="toggleTodoDone(id)"
        >
          <svg :class="['w-full fill-current text-gray-500', { 'text-green-500': isDone }]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="17.607" y="7.536" width="1" height="10" rx=".5" transform="rotate(45 17.607 7.536)"/><rect x="7" y="11.071" width="1" height="6" rx=".5" transform="rotate(-45 7 11.071)"/></svg>
        </button>

        <button
          v-if="labels.length"
          class="w-8 h-full flex-shrink-0 labels-btn labels-btn-outer"
        >
          <svg :class="['w-full fill-current text-gray-500 show-more', { rotate: isExpanded }]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.96 9.303a.5.5 0 0 0-.707 0L11.657 13.9 7.06 9.303a.5.5 0 0 0-.708.707l4.95 4.95a.5.5 0 0 0 .707 0l4.95-4.95a.5.5 0 0 0 0-.707z" /></svg>
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>
.show-more {
  transition: all 200ms ease-in-out;
}

p {
  -ms-word-break: break-all;
  word-break: break-all;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

}
</style>
