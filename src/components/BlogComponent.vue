<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <p class="text-black text-4xl font-semibold text-center my-8 text-lime-700">
      Blogs
    </p>
    <div
      :class="
        props.layout === 'grid'
          ? 'grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'
          : 'block'
      "
    >
      <div v-for="blog in blogsData" :key="blog.id"  :class="props.layout === 'grid' ? 'flex' : 'block mb-8'">
        <div class="pt-1 mr-6 text-center " :class="props.layout === 'block' ? 'mb-4' : ''">
          <div class="px-2 pb-1 mb-1 border-b border-gray-400">
            <p class="text-sm text-lime-700">{{ blog.month }}</p>
          </div>
          <div class="px-2">
            <p class="text-lg font-bold text-lime-700">{{ blog.day }}</p>
          </div>
        </div>
        <div>
          <div class="mb-2">
            <router-link
              v-if="blog.content"
              :to="{ name: 'blog-details', params: { id: blog.id } }"
              class="text-xs font-semibold tracking-wide uppercase text-lime-700"
              aria-label="Category"
              title="Development"
              >{{ blog.category }}</router-link
            >
          </div>
          <div class="mb-2">
            <router-link
              v-if="blog.content"
              :to="{ name: 'blog-details', params: { id: blog.id } }"
              aria-label="Article"
              class="inline-block text-2xl font-bold leading-5 text-lime-500"
              >{{ blog.title }}</router-link
            >
            <p v-else>Comming soon</p>
          </div>
          <p class="mb-5">
            {{ blog.description }}
          </p>
          <div class="flex items-center">
            <router-link
              v-if="blog.content"
              :to="{ name: 'blog-details', params: { id: blog.id } }"
              aria-label="Author"
              title="Author"
              class="mr-3"
            >
              <img
                :src="blog.author.avatar"
                alt="avatar"
                class="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </router-link>
            <div>
              <router-link
                v-if="blog.content"
                :to="{ name: 'blog-details', params: { id: blog.id } }"
                aria-label="Author"
                title="Author"
                class="font-semibold text-lime-500"
                >{{ blog.author.name }}</router-link
              >
              <p v-else>Comming soon</p>
              <p class="text-sm font-medium leading-4 text-lime-700">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { blogPosts } from "../data";
import { defineProps } from 'vue'

const props = defineProps({
  layout: {
    type: String,
    default: 'grid',
  },
});

const blogsData = ref(blogPosts);
</script>
