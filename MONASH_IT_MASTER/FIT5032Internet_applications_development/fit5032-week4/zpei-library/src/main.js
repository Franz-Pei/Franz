import { createApp } from 'vue'
import App from './App.vue'


// Import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// import './style.css'

// PrimeVue styles
import  Primevue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)

app.use(Primevue, { 
    theme: {
        preset:Aura
    } 
});

createApp(App).mount('#app')
