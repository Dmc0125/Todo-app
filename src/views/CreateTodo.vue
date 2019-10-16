<script>
import { mapGetters, mapActions } from 'vuex';

import AppInput from '@/layouts/input/Input.vue';
import LabelSettings from '@/components/label_settings/LabelSettings.vue';
import AppModal from '@/layouts/modal/Modal.vue';

export default {
  components: {
    AppInput,
    LabelSettings,
    AppModal,
  },
  data() {
    return {
      todo: '',
      customLabel: '',
      customization: {
        show: false,
        text: '',
        id: '',
        color: '',
      },
    };
  },
  methods: {
    addTodo() {

    },
    submitLabel() {
      this.addLabel(this.customLabel);

      this.customLabel = '';
    },
    hideCustomization() {
      this.customization.show = false;
    },
    ...mapActions(['modifyLabel', 'addLabel']),
  },
  computed: mapGetters({
    labels: 'getLabels',
  }),
};
</script>

<template>
  <form class="w-full wrapper" @submit.prevent="addTodo">
    <AppInput :value.sync="todo" label="Todo name" />

    <section class="mt-8">
      <header>
        <h1 class="h-secondary">Labels</h1>
      </header>

      <ul class="w-full mt-3">
        <li
          v-for="({ color, text, id }, i) in labels"
          class="flex mt-2"
          :key="i"
        >
          <!-- TODO: Set label as used on current Todo on click -->
          <button
            :class="`
              w-full
              h-10
              relative
              bg-${color}-500
              rounded
              hover:bg-${color}-600
              focus:outline-none
              focus:bg-${color}-600
            `"
          >
            <p class="w-full px-4 text-white text-left font-medium text-shadow">{{ text }}</p>

            <!-- TODO: Show only if label is used -->
            <div class="w-2 h-full absolute bg-white right-0 top-0 is-used"></div>
          </button>

          <button
            class="w-10 h-10 flex-shrink-0 labels-btn"
            @click="customization.show ? '' : customization = { show: true, id, text, color }"
          >
            <svg class="w-full fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.859 15.967l-1.51-1.51-.002-.003-.004-.003-2.348-2.349 3.862-3.862a.482.482 0 0 0 0-.681l-2.416-2.417a.482.482 0 0 0-.68 0l-2.417 2.416v.001l-1.447 1.446-.84-.839L9.55 6.656l-.004-.004-.004-.004-1.508-1.508a.481.481 0 0 0-.68 0L5.14 7.353a.482.482 0 0 0 0 .68l3.864 3.865-3.864 3.864a.482.482 0 0 0-.141.34v2.416a.481.481 0 0 0 .482.482h2.416c.128 0 .25-.051.34-.141l3.864-3.864 3.864 3.864a.48.48 0 0 0 .681 0l2.212-2.211a.48.48 0 0 0 0-.681zM16.1 9.634l-1.734-1.735L16.1 6.164l1.735 1.735L16.1 9.634zM6.162 7.693l1.53-1.53.832.83-.766.766a.482.482 0 1 0 .681.681l.766-.765.831.831L8.98 9.563a.482.482 0 0 0 .681.681l1.057-1.057.5.5-1.53 1.53-3.524-3.524zm1.536 10.344H5.963v-1.735l7.722-7.722 1.735 1.735-7.722 7.722zm8.609-.2l-3.524-3.523 1.53-1.53.5.498-1.057 1.058a.482.482 0 0 0 .68.68l1.058-1.057.831.832-.765.765a.481.481 0 1 0 .68.68l.766-.764.831.83-1.53 1.531z"/></svg>
          </button>
        </li>

        <li class="mt-2">
          <form @submit.prevent="submitLabel" class="flex">
            <AppInput :value.sync="customLabel" placeholder label="Custom label" />

            <button type="submit" class="w-10 h-10 flex-shrink-0 labels-btn">
              <svg class="w-full fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a.5.5 0 00-.5.5v5h-5a.5.5 0 000 1h5v5a.5.5 0 001 0v-5h5a.5.5 0 000-1h-5v-5A.5.5 0 0012 6z"/></svg>
            </button>
          </form>
        </li>
      </ul>
    </section>

    <AppModal
      v-if="customization.show"
      @click:outside="hideCustomization"
    >
      <LabelSettings
        :id="customization.id"
        :text="customization.text"
        :labelColor="customization.color"
        @customize:close="hideCustomization"
      />
    </AppModal>

    <button
      type="submit"
      class="h-10 mt-8 px-6 bg-gray-800 text-gray-300 font-semibold rounded hover:bg-gray-900"
    >Add</button>
  </form>
</template>
