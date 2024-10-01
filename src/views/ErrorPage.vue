<template>
  <div class="md:grid md:grid-cols-3 gap-4 min-h-screen">
    <div>
      <img :src="UfoCursor" alt="robot character" class="w-80 h-80" />
      <img :src="UfoCursor" alt="robot character" class="w-24 h-24" />
    </div>

    <div class="md:mt-24 mt-2">
      <p class="text-6xl font-semibold text-lime-600">Don`t Cry !</p>
      <p class="text-4xl font-semibold">
        We are just lost in space - enjoy it !
      </p>
      <button class="bg-lime-400 rounded-full p-2 mt-4">Go Back</button>
      <img :src="UfoCursor" alt="robot character" class="w-48 h-48" />
      <img :src="UfoCursor" alt="robot character" class="w-16 h-16" />
    </div>

    <div class="md:ml-12 grid content-end">
      <img :src="UfoCursor" alt="robot character" class="w-16 h-16" />
      <img :src="SadRobot" alt="robot character" class="md:w-96 md:h-96" />
    </div>
  </div>
</template>

<script setup>
import SadRobot from "../assets/images/sad-robot.png";
import UfoCursor from "../assets/images/ufo-flight.png";
</script>

<style scoped></style>
