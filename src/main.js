import Vue from 'vue'
import App from './App.vue'

import { CButton } from './components/button/index'
import { CIcon } from './components/icon/index'
import { CInput } from './components/input/index'
import { CDropdown, CDropdownItem } from './components/dropdown/index'

Vue.component(CButton.name, CButton)
Vue.component(CIcon.name, CIcon)
Vue.component(CInput.name, CInput)
Vue.component(CDropdown.name, CDropdown)
Vue.component(CDropdownItem.name, CDropdownItem)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('f-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
