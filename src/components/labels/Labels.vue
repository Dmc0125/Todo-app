<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      customLabel: '',
    };
  },
  methods: {
    openLabelSettings(labelData) {
      this.$emit('labelsettings:open', labelData);
    },
    submitLabel() {
      this.createLabel(this.customLabel);

      this.customLabel = '';
    },
    ...mapActions(['createLabel']),
  },
  computed: {
    ...mapGetters({
      labels: 'getLabels',
    }),
  },
};
</script>

<template>
  <ul class="w-full mt-3">
    <li
      v-for="({ color, text, id }, i) in labels"
      class="flex mt-2"
      :key="i"
    >
      <!-- TODO: Set label as used on current Todo on click -->
      <button
        class="w-full h-10 relative rounded"
        :class="`bg-${color}-500 hover:bg-${color}-600 focus:bg-${color}-600`"
        @click="openLabelSettings({ id, text, color })"
      >
        <p class="w-full px-4 text-white text-left font-medium text-shadow">{{ text }}</p>

        <!-- TODO: Show only if label is used -->
        <!-- <div class="w-2 h-full absolute bg-white right-0 top-0 is-used"></div> -->
      </button>

      <button
        class="w-10 h-10 flex-shrink-0 labels-btn-inner"
        @click="openLabelSettings({ id, text, color })"
      >
        <svg class="w-full fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.859 15.967l-1.51-1.51-.002-.003-.004-.003-2.348-2.349 3.862-3.862a.482.482 0 0 0 0-.681l-2.416-2.417a.482.482 0 0 0-.68 0l-2.417 2.416v.001l-1.447 1.446-.84-.839L9.55 6.656l-.004-.004-.004-.004-1.508-1.508a.481.481 0 0 0-.68 0L5.14 7.353a.482.482 0 0 0 0 .68l3.864 3.865-3.864 3.864a.482.482 0 0 0-.141.34v2.416a.481.481 0 0 0 .482.482h2.416c.128 0 .25-.051.34-.141l3.864-3.864 3.864 3.864a.48.48 0 0 0 .681 0l2.212-2.211a.48.48 0 0 0 0-.681zM16.1 9.634l-1.734-1.735L16.1 6.164l1.735 1.735L16.1 9.634zM6.162 7.693l1.53-1.53.832.83-.766.766a.482.482 0 1 0 .681.681l.766-.765.831.831L8.98 9.563a.482.482 0 0 0 .681.681l1.057-1.057.5.5-1.53 1.53-3.524-3.524zm1.536 10.344H5.963v-1.735l7.722-7.722 1.735 1.735-7.722 7.722zm8.609-.2l-3.524-3.523 1.53-1.53.5.498-1.057 1.058a.482.482 0 0 0 .68.68l1.058-1.057.831.832-.765.765a.481.481 0 1 0 .68.68l.766-.764.831.83-1.53 1.531z"/></svg>
      </button>
    </li>
  </ul>
</template>
