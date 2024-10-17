import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Tailwind CSS
import './assets/tailwind.css'

// Import and use Syncfusion's SchedulePlugin
import { registerLicense } from '@syncfusion/ej2-base'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule'


// Import Syncfusion styles
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-vue-schedule/styles/material.css'

// Register Syncfusion Schedule license key
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NCaF1cXGdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH9edXRSQmZfU0Z/W0M='
) // Replace this string with your actual license key

// Create the Vue application
const app = createApp(App)

// Use store, router, and Syncfusion Schedule plugin
app.use(store)
app.use(router)
app.use(SchedulePlugin)

// Mount the Vue application to the #app element in your index.html
app.mount('#app')

