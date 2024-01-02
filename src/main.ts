import { createApp } from "vue";
import "./style.css";
import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./styles/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/NewsRoom",
  routes,
});

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(createPinia()).mount("#app");
