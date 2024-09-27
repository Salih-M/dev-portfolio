<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "../src/components/NavBar.vue";
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
