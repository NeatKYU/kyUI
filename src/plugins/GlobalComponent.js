import Vue from 'vue'

import { CButton } from '../components/button/index'
import { CIcon } from '../components/icon/index'
import { CInput } from '../components/input/index'
import { CDropdown, CDropdownItem } from '../components/dropdown/index'
import { CCarousel } from '../components/carousel/index'
import { CRadio } from '../components/radio/index'
import { CLabel } from '../components/label/index'

Vue.component(CButton.name, CButton)
Vue.component(CIcon.name, CIcon)
Vue.component(CInput.name, CInput)
Vue.component(CDropdown.name, CDropdown)
Vue.component(CDropdownItem.name, CDropdownItem)
Vue.component(CCarousel.name, CCarousel)
Vue.component(CRadio.name, CRadio)
Vue.component(CLabel.name, CLabel)

export {
    CButton,
    CIcon,
    CInput,
    CDropdown,
    CDropdownItem,
    CCarousel,
    CRadio,
    CLabel,
}