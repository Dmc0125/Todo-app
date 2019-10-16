<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    syncedVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('update:value', val);
      },
    },
  },
};
</script>

<template>
  <div class="input">
    <input
      type="text"
      v-model="syncedVal"
      :placeholder="placeholder ? label : ''"
    >
    <label v-if="!placeholder" :class="{ 'active-input': syncedVal.length }">{{ label }}</label>
  </div>
</template>
