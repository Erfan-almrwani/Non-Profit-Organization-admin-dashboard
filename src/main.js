import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//جلوبل رجستريشن
import './assets/main.css'
import Modal from './components/Modal.vue'


const app=createApp(App)
app.use(router)//جلوبل رجستريشن
app.mount('#app')
app.use(Modal)
app.component('Modal',Modal)


