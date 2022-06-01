import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { createAuth0 } from '@auth0/auth0-vue';


const app = createApp(App);

app.use(store);

app.use(router);

app.use(
  createAuth0({
    domain: "dev-jsmxl4tb.us.auth0.com",
    client_id: "2nvrte5JDeuI0GKLfg8Z47YfkcCoHpmf",
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
