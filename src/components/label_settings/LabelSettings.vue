<script>
import { mapGetters, mapActions } from 'vuex';

import { limitStringLength } from '@/utils/helpers';

import AppInput from '@/layouts/input/Input.vue';
import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';
import Colors from './Colors.vue';

export default {
  components: {
    AppInput,
    AppPlusIcon,
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
      this.modifyLabel({
        id: this.id,
        text: limitStringLength(this.labelText),
        color: this.setColor,
      });
      this.hideModal();
    },
    deleteLabelHide() {
      this.showNotification({
        head: 'Label deleted',
        text: `Label ${
          this.labelText.length
            ? '"' + this.labelText + '"'
            : ''
        } was successfully deleted.`,
        isSuccess: true,
      });

      this.hideModal();
      this.deleteLabel(this.id);
    },
    ...mapActions(['modifyLabel', 'deleteLabel', 'hideModal', 'showNotification']),
  },
  computed: mapGetters({
    colors: 'getColors',
  }),
};
</script>

<template>
  <section
    class="w-full max-w-md p-6 bg-gray-900 shadow-lg rounded modal-wrapper"
    @click.stop
  >
    <header class="w-full flex items-center justify-between">
      <h1 class="h-secondary">Customize label</h1>

      <button @click="hideModal" class="w-8 rounded-full labels-btn-inner">
        <AppPlusIcon rotate />
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
.btn-group button {
  transition: all 100ms ease-in;
}
</style>
