<template>
  <div class="lg:grid lg:grid-cols-3">
    <div class="col-span-2 px-4 py-16">
      <h1 class="md:text-4xl text-xl lg:ml-24 font-bold mb-8">
        {{ blogPost.description }}
      </h1>
      <div class="md:flex justify-center custom-style">
        <img
          :src="blogPost.coverImg"
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
          Date: {{ blogPost.month }} - <span class="text-xl">{{ blogPost.day }}</span>
        </p>
      </div>

      <div class="lg:ml-24 text-gray-800 leading-7 space-y-6 text-justify">
        <!-- Render dynamic content -->
        <template v-for="(block, index) in blogPost.content" :key="index">
          <p v-if="block.type === 'paragraph'" class="indent-8">
            {{ block.text }}
          </p>
          <p v-if="block.type ==='introduction'" class="text-2xl font-semibold mt-8 text-lime-700"> {{ block.title }}</p>
           <p v-if="block.type === 'introduction'" class="indent-8">
            {{ block.description }}
          </p>

          <h2 v-if="block.type === 'section'" class="text-2xl font-semibold mt-8 text-lime-700">
            {{ block.title }}
          </h2>
          <p v-if="block.type === 'section'">{{ block.text }}</p>
          <ul v-if="block.type === 'section'" class="list-disc list-inside ml-8">
            <li v-for="(item, idx) in block.items" :key="idx">
              <strong class="text-lime-500">{{ item.title }}:</strong> {{ item.description }}
            </li>
          </ul>

          <h3 v-if="block.type === 'list'" class="text-2xl font-semibold mt-8 text-lime-700">
            {{ block.title }}
          </h3>
          <ul v-if="block.type === 'list'" class="list-disc list-inside ml-8">
            <li v-for="(item, idx) in block.items" :key="idx">{{ item }}</li>
          </ul>

          <p v-if="block.type === 'link'" class="font-semibold">
            <a :href="block.url" target="_blank" class="text-lime-700 hover:underline">
              {{ block.text }}
            </a>
          </p>
        </template>
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
