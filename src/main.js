import Vue from 'vue'
import App from './App.vue'
import './plugins/GlobalComponent'
import './plugins/GlobalFont'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.component('f-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
