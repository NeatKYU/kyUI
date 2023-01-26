import Vue from 'vue'
import App from './App.vue'
import './plugins/GlobalComponent'
import './plugins/GlobalFont'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
