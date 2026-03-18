import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import InfoCard from './components/InfoCard.vue';

const app = createApp(App);

app.component('InfoCard', InfoCard);

app.mount('#app');
