import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import './assets/base.scss'
import router from './router'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
