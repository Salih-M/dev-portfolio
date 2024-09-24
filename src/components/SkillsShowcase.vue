<template>
  <div class="bg-black">
    <div class="grid text-center text-lime-400 py-20">
      <p
        class="text-3xl font-sans font-bold tracking-tight sm:text-4xl sm:leading-none"
      >
        Skills
      </p>
      <p
        class="text-lime-400 text-xl font-sans font-bold tracking-tight sm:text-2xl sm:leading-none mt-2"
      >
        Technologies I Work With
      </p>
    </div>

    <!-- Slider Wrapper -->
    <div class="slider-container overflow-hidden">
      <div class="slider-track flex">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="icon-wrapper flex flex-col items-center justify-center"
        >
          <span :class="`${skill.icon} text-5xl text-lime-400 mb-2`"></span>
          <p class="text-lime-400">{{ skill.skillName }}</p>
        </div>
        <!-- Repeat the same set of skills to create a continuous loop -->
        <div
          v-for="(skill, index) in skills"
          :key="`duplicate-${index}`"
          class="icon-wrapper flex flex-col items-center justify-center"
        >
          <span :class="`${skill.icon} text-5xl text-lime-400 mb-2`"></span>
          <p class="text-lime-400">{{ skill.skillName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { skills as skillsItems } from "../data";

const skills = ref(skillsItems);
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  width: calc(200%);
  animation: scroll 20s linear infinite;
}

.icon-wrapper {
  flex: 0 0 auto;
  width: 200px;
  padding: 10px;
}

/* Keyframe for infinite scroll */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
