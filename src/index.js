import Vue from 'vue'
import { store } from './store/store'

// import App from './App.vue'

import '../assets/app.scss'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  data: {
    isRed: false,
    color: 'green'
  },
  computed: {
    divClasses () {
      return {
        red: this.isRed,
        blue: !this.isRed
      }
    }
  }
})
