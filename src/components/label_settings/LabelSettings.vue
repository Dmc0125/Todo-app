<script>
import { mapGetters, mapActions } from 'vuex';

import eb from '@/event_bus/event_bus';

import AppInput from '@/layouts/input/Input.vue';
import Colors from './Colors.vue';

export default {
  components: {
    AppInput,
    Colors,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    labelColor: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      labelText: this.text,
      setColor: this.labelColor,
    };
  },
  methods: {
    submitLabelHide() {
      this.modifyLabel({ id: this.id, text: this.labelText, color: this.setColor });
      this.close();
    },
    deleteLabelHide() {
      this.deleteLabel(this.id);
      this.close();
    },
    close() {
      eb.$emit('modal:close');
    },
    ...mapActions(['modifyLabel', 'deleteLabel']),
  },
  computed: mapGetters({
    colors: 'getColors',
  }),
};
</script>

<template>
  <section
    class="w-full p-6 absolute center-absolute bg-gray-900 shadow-lg rounded customize-wrapper"
    @click.stop
  >
    <header class="w-full flex items-center justify-between">
      <h1 class="h-secondary">Customize label</h1>

      <button @click="close" class="w-6 rounded-full labels-btn">
        <svg class="w-full fill-current text-gray-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18 6a.707.707 0 00-1 0l-5 5-5-5a.707.707 0 10-1 1l5 5-5 5a.707.707 0 001 1l5-5 5 5a.707.707 0 101-1l-5-5 5-5a.707.707 0 000-1z"/></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
      </button>
    </header>

    <form @submit.prevent="submitLabelHide" class="w-full mt-4">
      <AppInput :value.sync="labelText" :placeholder="true" label="Label text..." />

      <section class="w-full mt-4">
        <header>
          <h1 class="h-third">Color</h1>
        </header>

        <Colors @colors:set="setColor = $event" :setColor="setColor" />
      </section>

      <div class="mt-6 btn-group">
        <button
          type="submit"
          class="
            btn-def
            bg-transparent
            border-2
            border-green-600
            text-green-600
            hover:bg-green-600
            hover:text-gray-900
            focus:outline-none
            focus:bg-green-600
            focus:text-gray-900
          "
        >Save</button>
        <button
          type="button"
          class="
            ml-4
            btn-def
            bg-gray-800
            text-gray-500
            hover:bg-red-500
            hover:text-gray-900
            focus:outline-none
            focus:bg-red-500
            focus:text-gray-900
          "
          @click="deleteLabelHide"
        >Delete</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.customize-wrapper {
  width: calc(100% - 3rem);
}

.btn-group button {
  transition: all 100ms ease-in;
}
</style>