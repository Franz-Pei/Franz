import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css'


import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const app = createApp(App)
app.use(PrimeVue, {
     theme: { 
        preset: Aura 
    }
});
app.use(store);
app.use(router);
app.mount('#app')


