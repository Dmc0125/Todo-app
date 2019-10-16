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
</style>
