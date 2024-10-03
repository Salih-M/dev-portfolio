<template>
  <div class="bg-gradient-to-b from-black from-40% to-lime-400">
    <div
      class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-white"
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div class="max-w-xl my-6 typewriter">
            <h2
              class="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight sm:text-4xl sm:leading-none"
            >
              Hi there,<br class="md:block" />I am <span class="text-lime-400 font-serif ml-2">Sali</span
              ><br class="md:block" />
              Front End<span class="text-lime-400 font-serif ml-2"
                >Developer
              </span>
            </h2>
          </div>
          <div>
            <a
              href="/contact"
              aria-label=""
              class="inline-flex items-center font-semibold text-lime-400"
            >
              Contact me
              <svg
                class="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center -mx-4 lg:pl-8 md:pt-14">
          <div class="px-3 bg-white rounded-full">
            <img
              class="object-cover w-40 h-40 rounded sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              :src="RobotCharacter"
              alt="robot character"
            />
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex gap-4 mt-11">
            <a
              href="https://www.linkedin.com/in/sali-memish-5320701ba/"
              target="_blank"
            >
              <span class="mdi mdi-linkedin text-4xl text-black"></span
            ></a>

            <a href="https://github.com/Salih-M" target="_blank"
              ><span class="mdi mdi-github text-4xl text-black"></span
            ></a>
          </div>

          <div>
            <span class="text-2xl text-lime-400 typewriter font-serif"
              >lets connect . . .
            </span>
            <img :src="Arrow" alt="arrow" class="w-16 mb-12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RobotCharacter from "../assets/images/robot-character-transparent.png";
import Arrow from "../assets/images/arrow-black.png";
</script>

<style scoped>
.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 4s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
</style>
