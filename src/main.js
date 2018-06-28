// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import AppDate from '@/components/AppDate'
import store from '@/store'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCoUtuwValvmeDLzZSjUcRqZwberwPp9os',
  authDomain: 'vue-school-forum-b9afb.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-b9afb.firebaseio.com',
  projectId: 'vue-school-forum-b9afb',
  storageBucket: 'vue-school-forum-b9afb.appspot.com',
  messagingSenderId: '240264745515'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
