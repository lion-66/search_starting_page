import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
// createApp(App).use(store).use(router).mount('#app')
import getVant from './plugins'
// import { VueJsonp  } from 'vue-jsonp'
import './index.css'

const app = createApp(App)
getVant(app)
// app.use(VueJsonp)
app.use(store).mount('#app')
// app.mount('#app')
// app.use(router)