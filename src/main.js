import { createApp } from "vue";
import Toast, { POSITION } from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "vue-toastification/dist/index.css";

createApp(App)
  .use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  })
  .use(router)
  .mount("#app");
