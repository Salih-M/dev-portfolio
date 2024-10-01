<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "../src/components/NavBar.vue";
</script>

<style>
.Vue-Toastification__toast--success {
  color: #A3E635 !important;
  background-color: black !important;
}
</style>
