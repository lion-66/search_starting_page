import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
<<<<<<< HEAD
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
=======
import {VueClipboard} from '@soerenmartius/vue3-clipboard'
// import { VueJsonp  } from 'vue-jsonp'
>>>>>>> 4aa30632db0780377de6e76c4f309b6b2935719e
import './index.css'

const app = createApp(App)
getVant(app)
app.use(VueClipboard)
app.use(router)
app.use(store).mount('#app')
// app.mount('#app')
