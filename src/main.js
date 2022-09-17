import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import './index.css'

const app = createApp(App)
getVant(app)
app.use(VueClipboard)
app.use(router)
app.use(store).mount('#app')
// app.mount('#app')
