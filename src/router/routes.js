import HomePage from "../views/HomePage.vue"
import BlogDetails from "../views/BlogDetails.vue";

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
];

export default routes
