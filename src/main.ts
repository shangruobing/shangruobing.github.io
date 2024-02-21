import { createApp } from 'vue'
// import { loadFull } from 'tsparticles'
// import Particles from '@tsparticles/vue3'
import App from './App.vue'

createApp(App)
  // .use(Particles, {
  //   init: async (engine) => {
  //     await loadFull(engine)
  //   }
  // })
  .mount('#app')
