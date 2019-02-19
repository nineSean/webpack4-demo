import Vue from 'vue'
import './style.css'

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Sean!'
  },
  template: `
    <h1>{{message}}</h1>
  `
})
