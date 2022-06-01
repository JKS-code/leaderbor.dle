import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(store);

app.use(router);

app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENTID,
    redirect_uri: window.location.origin,
  })
);

app.mount("#app");
