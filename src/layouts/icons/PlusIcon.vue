<script>
export default {
  props: {
    rotate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <svg
    v-if="!rotate"
    class="w-full fill-current text-gray-500"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="
        M12 6a.5.5 0 00-.5.5v5h-5a.5.5 0 000 1h5v5a.5.5 0 001 0v-5h5a.5.5 0 000-1h-5v-5A.5.5
        0 0012 6z
      "
    />
  </svg>
  <svg
    v-else
    class="w-full fill-current text-gray-500"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="
        M16.243 8.243a.5.5 0 0 0-.707 0L12 11.778 8.464 8.243a.5.5 0 0 0-.707.707l3.536
        3.535-3.536 3.536a.5.5 0 1 0 .707.707L12 13.192l3.536 3.536a.5.5 0 1 0
        .707-.707l-3.536-3.536 3.536-3.535a.5.5 0 0 0 0-.707z
      "
    />
  </svg>
</template>
