<template>
  <div
    class="bg-black border-t-2 border-lime-400 min-h-screen flex items-center justify-center py-4"
  >
    <div
      class="lg:grid grid-cols-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 mx-auto gap-4 content-center"
    >
      <div class="mb-4">
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
        </div>
      </div>

      <form
        ref="form"
        @submit.prevent="sendEmail"
        class="bg-gradient-to-t from-lime-400 from-20% to-lime-100 rounded-3xl"
      >
        <div class="p-8 grid gap-4">
          <div class="w-full">
            <Field
              name="user_name"
              type="text"
              placeholder="Name"
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
            />
            <ErrorMessage name="user_name" class="text-red-600 text-sm" />
          </div>
          <div class="w-full">
            <Field
              name="user_phone"
              placeholder="Phone number"
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
            />
            <ErrorMessage name="user_phone" class="text-red-600 text-sm" />
          </div>
          <div class="w-full">
            <Field
              name="user_email"
              type="email"
              placeholder="Email"
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
            />
            <ErrorMessage name="user_email" class="text-red-600 text-sm" />
          </div>
          <div class="w-full">
            <Field
              name="message"
              as="textarea"
              placeholder="Message"
              rows="7"
              class="w-full bg-lime-300 placeholder:text-black border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-lime-700 shadow-sm focus:shadow"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-black text-white px-4 py-2 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage, useForm } from "vee-validate";
import { formValidation } from "../libs/veeValidate.js";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import emailjs from "emailjs-com";

const form = ref(null);
const toast = useToast();

const { handleSubmit } = useForm({
  validationSchema: formValidation,
});

const sendEmail = handleSubmit((values) => {
  emailjs
    .send(
      process.env.VUE_APP_EMAILJS_SERVICE_ID,
      process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
      values,
      process.env.VUE_APP_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success("Email was sent successufuly", {
          timeout: 3000,
        });
      },
      (error) => {
        console.log(error.text);
        toast.error("Failed to send email.Please try again", {
          timeout: 3000,
        });
      }
    );
});
</script>
