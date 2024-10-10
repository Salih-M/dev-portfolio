<template>
  <div class="bg-gradient-to-t from-black from-40% to-lime-400">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2
          class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group"
        >
          <span class="inline-block mb-1 sm:mb-4">
            What i`ve built<br class="hidden md:block" />
            check my projects
          </span>
          <div
            class="h-1 ml-auto duration-300 origin-left transform bg-black scale-x-30 group-hover:scale-x-100"
          ></div>
        </h2>
        <p class="text-black lg:max-w-md">
          Explore my projects, highlighting my expertise in web development,
          design, and innovative problem-solving across various platforms and
          technologies, demonstrating attention to detail, creativity, and the
          ability to deliver high-quality solutions.
        </p>
      </div>
      <div class="grid gap-6 row-gap-5 mb-8 sm:row-gap-6 sm:grid-cols-2">
        <a
          v-for="project in projects"
          :key="project.name"
          href="/"
          aria-label="View Item"
        >
          <div
            class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl border-4 border-lime-600 custom-style"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              :src="project.image"
              alt="project cover"
            />
            <div
              class="absolute inset-x-0 bottom-0 p-3 bg-lime-300 bg-opacity-40"
            >
              <p class="text-sm font-medium tracking-wide text-lime-950">
                {{ project.projectName }}
              </p>
              <p class="text-sm font-medium tracking-wide text-lime-950 line-clamp-2">
                {{ project.description }}
              </p>
              <div class="flex justify-between text-xs text-lime-950 mt-2">
                <a
                  :href="project.pageLink"
                  target="_blank"
                  class="bg-lime-400 rounded-full p-1"
                >
                  View Page
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { projectsCard } from "../data";

const projects = ref(projectsCard);
</script>

<style scoped>
.custom-style {
  border-top-left-radius: 75px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 75px;
}
</style>
