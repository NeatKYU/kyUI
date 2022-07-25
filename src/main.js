import Vue from 'vue'
import App from './App.vue'

import { CButton } from './components/button/index'
import { CIcon } from './components/icon/index'
import { CInput } from './components/input/index'

Vue.component(CButton.name, CButton)
Vue.component(CIcon.name, CIcon)
Vue.component(CInput.name, CInput)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('f-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
