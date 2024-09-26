import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import './includes/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './includes/firebase'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'
import GlobalComponents from "./includes/_globals";
import progressBar from "./includes/progress-bar";

import './assets/base.css'
import './assets/main.css'
import "nprogress/nprogress.css";

progressBar(router);


registerSW({ immediate: true })

let app
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(GlobalComponents);
    app.use(i18n)

    app.mount('#app')
  }
})
