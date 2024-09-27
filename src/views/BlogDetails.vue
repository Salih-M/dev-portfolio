<template>
  <div class="lg:grid lg:grid-cols-3">
    <div class="col-span-2 px-4 py-16">
      <h1 class="md:text-4xl text-xl lg:ml-24 font-bold mb-8">
        {{ blogPost.description }}
      </h1>
      <div class="md:flex justify-center custom-style">
        <img
          :src="EA"
          alt="blog"
          class="rounded-lg md:h-[500px] object-contain md:object-fill md:w-4/5 border-2 border-lime-400 custom-style"
        />
      </div>
      <div class="flex lg:ml-24 mt-8 gap-4">
        <img
          :src="blogPost.author.avatar"
          alt="avatar"
          class="object-cover w-10 h-10 rounded-full shadow-sm"
        />
        <div>
          <p class="text-lg font-semibold text-lime-700">
            {{ blogPost.author.name }}
          </p>
          <p class="text-sm text-lime-500">Frontend Developer</p>
        </div>
      </div>
      <div class="lg:ml-24">
        <p class="text-sm text-lime-500 mb-12">
          Date: {{ blogPost.month }} -
          <span class="text-xl">{{ blogPost.day }}</span>
        </p>
      </div>
      <div class="lg:ml-24 text-gray-800 leading-7 space-y-6 text-justify">
        <!-- Introduction -->
        <p class="indent-8">
          {{ blogPost.content.introduction }}
        </p>
        <ul class="list-disc list-inside ml-8">
          <li
            v-for="principle in blogPost.content.principles"
            :key="principle.title"
          >
            <strong class="text-lime-500">{{ principle.title }}:</strong>
            {{ principle.description }}
          </li>
        </ul>

        <!-- Tech Stack -->
        <h2 class="text-2xl font-semibold mt-8 text-lime-700">1. Tech Stack</h2>
        <p>
          {{ blogPost.content.techStack.introduction }}
        </p>
        <ul class="list-disc list-inside ml-8">
          <li
            v-for="tech in blogPost.content.techStack.technologies"
            :key="tech.title"
          >
            <strong class="text-lime-500">{{ tech.title }}:</strong>
            {{ tech.description }}
          </li>
        </ul>

        <!-- Key Features -->
        <h2 class="text-2xl font-semibold mt-8 text-lime-700">
          2. Key Features
        </h2>
        <ul class="list-disc list-inside ml-8">
          <li
            v-for="features in blogPost.content.keyFeatures"
            :key="features.title"
          >
            <strong class="text-lime-500">{{ features.title }}:</strong>
            {{ features.description }}
          </li>
        </ul>

        <!-- Learning Experience -->
        <h2 class="text-2xl font-semibold mt-8 text-lime-700">
          3. The Learning Experience
        </h2>
        <p>
          {{ blogPost.content.learningExperience }}
        </p>

        <!-- Deployment -->
        <h2 class="text-2xl font-semibold mt-8 text-lime-700">4. Deployment</h2>
        <p>
          {{ blogPost.content.deployment }}
        </p>

        <!-- Call to Action -->
        <p>
          {{ blogPost.content.outro }}
        </p>
        <p class="font-semibold">
          <a
            :href="blogPost.content.webLink"
            target="_blank"
            class="text-lime-700 hover:underline"
            >You can check the website here.</a
          >
        </p>
      </div>
    </div>
    <div
      class="mt-16 rounded-t-3xl bg-gradient-to-b from-lime-100 from-50% to-lime-400 border-2 border-lime-400"
    >
      <BlogComponent layout="block" />
    </div>
  </div>
</template>

<script setup>
import EA from "../assets/images/EA-img.png";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { blogPosts } from "../data";
import BlogComponent from "../components/BlogComponent.vue";

const route = useRoute();
const blogId = Number(route.params.id);
const blogPost = ref(blogPosts.find((post) => post.id === blogId));
</script>

<style scoped>
.custom-style {
  border-top-left-radius: 75px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 75px;
}
</style>
