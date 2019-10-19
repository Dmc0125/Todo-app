<script>
import { mapActions } from 'vuex';

export default {
  props: {
    labels: {
      type: Array,
      required: true,
    },
    todoId: {
      type: String,
      required: true,
    },
  },
  methods: {
    labelsWithText() {
      return this.labels.some(label => label.text.length > 0);
    },
    ...mapActions(['deleteTodo']),
  },
};
</script>

<template>
  <section class="flex-center-between">
    <section class="flex flex-wrap">
        <div
        v-for="({ id, color, text }, i) in labels"
        :key="id"
        :class="[
          text.length ? 'w-fc px-2' : 'w-10',
          { 'ml-2': i > 0},
          labelsWithText() ? 'h-6' : 'h-4',
          `bg-${color}-500 rounded flex-center`,
        ]"
      >
        <p class="text-gray-900 font-semibold text-sm">{{ text }}</p>
      </div>
    </section>

    <button @click.stop="deleteTodo(todoId)" class="w-6 rounded-full labels-btn-inner">
      <svg class="w-full fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18 6a.707.707 0 00-1 0l-5 5-5-5a.707.707 0 10-1 1l5 5-5 5a.707.707 0 001 1l5-5 5 5a.707.707 0 101-1l-5-5 5-5a.707.707 0 000-1z"/></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
    </button>
  </section>
</template>
