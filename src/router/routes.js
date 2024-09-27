import HomePage from "../views/HomePage.vue"
import BlogDetails from "../views/BlogDetails.vue";
import ContactForm from "../components/ContactForm.vue";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/blog/:id",
    name: "blog-details",
    component: BlogDetails,
  },
  {
    path: "/contact",
    name: "contact-page",
    component: ContactForm,
  },
];

export default routes
