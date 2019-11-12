import Vue from 'vue'
import { store } from './store/store'

// import App from './App.vue'

import '../assets/app.scss'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  data: {
    value: 0
  },
  computed: {
    result: function () {
      return this.value > 37 ? 'done' : 'not there yet'
    }
  },
  watch: {
    result: function () {
      setTimeout(() => { this.value = 0 }, 2000)
    }
  }
})
