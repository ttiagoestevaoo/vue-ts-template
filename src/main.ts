import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Router from "@providers/router";
import Store from "@providers/store";


const app = createApp(App);

app.use(Router);
app.use(Store);
app.use(PrimeVue);

app.mount('#app')
