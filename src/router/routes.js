import HomePage from "../views/HomePage.vue"
import BlogDetails from "../views/BlogDetails.vue";
import ContactForm from "../views/ContactForm.vue";
import ErrorPage from "../views/ErrorPage.vue";

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
  {
    path: "/:notFound", 
    name: "error-page",
    component: ErrorPage, 
  },
];

export default routes
