<template>
  <div class="bg-black py-8 border-t-2 border-lime-400 h-max">
    <div
      class="md:grid grid-cols-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 mx-auto gap-4"
    >
      <div>
        <div class="text-white">
          <p
            class="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none"
          >
            Contact Me
          </p>
          <p class="mt-4 tracking-wide">
            If you're looking to build a website, collaborate on a project, or
            need help bringing your ideas to life, feel free to reach out! I'm
            always excited to take on new challenges and create impactful
            solutions. Let's work together to build something amazing.
          </p>
        </div>
        <div
          class="bg-gradient-to-t from-lime-400 from-20% to-lime-100 md:w-96 mt-6 rounded-3xl"
        >
          <div class="p-4">
            <div>
              <span class="mdi mdi-map-marker text-xl">Skopje-Macedonia</span>
            </div>
            <div>
              <span class="mdi mdi-phone text-xl">+389 78 260 614</span>
            </div>
            <div>
              <span class="mdi mdi-email text-xl">salimemis@gmail.com</span>
            </div>
          </div>
        </div>

        <div
          class="bg-gradient-to-t from-lime-400 from-20% to-lime-100 md:w-96 mt-6 rounded-3xl"
        >
          <div class="p-4">
            <span class="mdi mdi-linkedin text-4xl"></span>
            <span class="mdi mdi-github text-4xl"></span>
          </div>
        </div>
      </div>

      <div
        class="bg-gradient-to-t from-lime-400 from-20% to-lime-100 rounded-3xl"
      >
        <div class="p-8 grid gap-4">
          <div class="w-full">
            <input
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
              placeholder="Name"
            />
          </div>
          <div class="w-full">
            <input
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
              placeholder="Email"
            />
          </div>
          <div class="w-full">
            <textarea
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
              placeholder="Name"
              rows="7"
              cols="50"
            />
          </div>
          <div>
            <button class="bg-black text-white px-4 py-2 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
