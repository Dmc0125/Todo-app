<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    setColor: {
      type: String,
      required: true,
    },
  },
  computed: mapGetters({
    colors: 'getColors',
  }),
};
</script>

<template>
  <ul class="w-full mt-2 flex items-center flex-wrap">
    <li v-for="(color, i) in colors" :key="color">
      <button
        type="button"
        :class="`
          w-10
          h-10
          ${i > 0 ? 'ml-2' : ''}
          rounded
          ${color === setColor ? 'border-2 border-white' : ''}
          bg-${color}-500
          hover:bg-${color}-600
          focus:outline-none
          focus:bg-${color}-600
        `"
        @click="$emit('colors:set', color)"
      ></button>
    </li>
  </ul>
</template>
