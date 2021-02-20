/* App navigation */
import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetails from '../views/EventDetails.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: "/", // url
    name: "EventList", // name of the route
    component: EventList // component to display
  },
  {
    path: "/event/:id", // dynamic route
    name: "EventDetails",
    props: true, // for using params
    component: EventDetails
  },
  {
    path: "/about",
    name: "About",
    component: About
    /* route level code-splitting
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     */
    //component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
