<script>
import AppHeader from '@/components/header/Header.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <main class="w-full min-h-screen bg-gray-700 relative">
    <AppHeader />

    <router-view/>
  </main>
</template>

<style src="./assets/css/tailwind.css"></style>

<style>
* {
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

.center-absolute {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.rotate {
  transform: rotate(180deg);
}
</style>
