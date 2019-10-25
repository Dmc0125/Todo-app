<script>
export default {
  props: {
    isDone: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <svg
    :class="['w-full fill-current text-gray-500', { 'text-green-500': isDone }]"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="17.607" y="7.536" width="1" height="10" rx=".5" transform="rotate(45 17.607 7.536)"/>
    <rect x="7" y="11.071" width="1" height="6" rx=".5" transform="rotate(-45 7 11.071)"/>
  </svg>
</template>
