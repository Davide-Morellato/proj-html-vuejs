import { createApp } from 'vue'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faPhone, faAngleDown, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import {faInstagram, faFacebookF, faXTwitter, faYoutube, faLinkedinIn, faTiktok} from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faAngleDown, faArrowRight, faInstagram, faFacebookF, faXTwitter, faYoutube, faLinkedinIn, faTiktok)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')