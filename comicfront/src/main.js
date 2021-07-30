import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as Vue2Leaflet from 'vue2-leaflet'; // VALID
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import VueSplide from '@splidejs/vue-splide';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vue2Leaflet )
Vue.use( axios)
Vue.use(VueSweetalert2);
Vue.use( VueSplide );
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
