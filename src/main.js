import { createApp } from "vue";
import App from "./App.vue";
import chatwoot from "../chatwoot";
import "./assets/main.css";

const app = createApp(App);
app.use(chatwoot);
app.mount("#app");
