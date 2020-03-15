/* eslint no-console: 0 */

// https://medium.com/swlh/how-to-integrate-vue-js-with-rails-6-5bd4c6263b18

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#hello',
    data: () => {
      return {
        message: "Can you say hello?"
      }
    },
    components: { App }
  })
})
