import Contact from "@/pages/Contact";
import Profile from "@/pages/Profile";
import Top from "@/pages/Top";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Top",
      component: Top
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
