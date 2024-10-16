import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css'


import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// src/firebase/firebase.js
// import { initializeApp } from "firebase/app";


const app = createApp(App)
app.use(PrimeVue, {
     theme: { 
        preset: Aura 
    }
});
// const firebaseConfig = {
//     apiKey: "AIzaSyD-Zhl0wK5s6SZtdH7IaSlNdlKwzaq_0tQ",
//     authDomain: "week7-ziqipei.firebaseapp.com",
//     projectId: "week7-ziqipei",
//     storageBucket: "week7-ziqipei.appspot.com",
//     messagingSenderId: "477632597998",
//     appId: "1:477632597998:web:6d5684d3d95ff74dd648ff"
//   };
  
// initializeApp(firebaseConfig);
  
  
app.use(store);
app.use(router);
app.mount('#app')


