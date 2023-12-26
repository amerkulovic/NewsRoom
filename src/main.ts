import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./styles/main.css";

createApp(App).use(createPinia()).mount("#app");
