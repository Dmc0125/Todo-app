<script>
export default {
  props: {
    isExpanded: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <svg
    :class="['w-full fill-current text-gray-500 show-more', { rotate: isExpanded }]"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="
        M16.96 9.303a.5.5 0 0 0-.707 0L11.657 13.9 7.06 9.303a.5.5 0 0 0-.708.707l4.95 4.95a.5.5
        0 0 0 .707 0l4.95-4.95a.5.5 0 0 0 0-.707z
      "
    />
  </svg>
</template>
