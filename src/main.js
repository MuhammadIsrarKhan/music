import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import './includes/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './includes/firebase'
import i18n from './includes/i18n'

let app
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(i18n)

    app.mount('#app')
  }
})
