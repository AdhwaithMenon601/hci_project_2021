import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "@/assets/styles/main.css";
import './assets/tailwind.css';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCKsV1xObtdWxnervywktTYlao19ygVzzw",
  authDomain: "hci-project-feed2.firebaseapp.com",
  projectId: "hci-project-feed2",
  storageBucket: "hci-project-feed2.appspot.com",
  messagingSenderId: "1023154970280",
  appId: "1:1023154970280:web:f69b2829cf5bfd1e0d6c9d",
  measurementId: "G-682JR5RS41"
};
// Initialize Firebase


Vue.use(firebase) 
Vue.config.productionTip = false

new Vue({
  router,
  firebase,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
