import Vue from 'vue'

import { CButton } from '../components/button/index'
import { CIcon } from '../components/icon/index'
import { CInput } from '../components/input/index'
import { CDropdown, CDropdownItem } from '../components/dropdown/index'
import { CCarousel } from '../components/carousel/index'
import { CRadio, CRadioGroup } from '../components/radio/index'
import { CLabel } from '../components/label/index'
import { CBreadcrumb, CBreadcrumbItem } from '../components/breadcrumb/index'
import { CPagination } from '../components/pagination/index'
import { CTooltip } from '../components/tootip/index'
import { CTag } from '../components/tag/index'
import { CSwitch } from '../components/switch/index'
import { CTable } from '../components/table/index'
import { CModal } from '../components/modal/index'
import { CSkeleton } from '../components/skeleton/index'

Vue.component(CButton.name, CButton)
Vue.component(CIcon.name, CIcon)
Vue.component(CInput.name, CInput)
Vue.component(CDropdown.name, CDropdown)
Vue.component(CDropdownItem.name, CDropdownItem)
Vue.component(CCarousel.name, CCarousel)
Vue.component(CRadio.name, CRadio)
Vue.component(CRadioGroup.name, CRadioGroup)
Vue.component(CLabel.name, CLabel)
Vue.component(CBreadcrumb.name, CBreadcrumb)
Vue.component(CBreadcrumbItem.name, CBreadcrumbItem)
Vue.component(CPagination.name, CPagination)
Vue.component(CTooltip.name, CTooltip)
Vue.component(CTag.name, CTag)
Vue.component(CSwitch.name, CSwitch)
Vue.component(CTable.name, CTable)
Vue.component(CModal.name, CModal)
Vue.component(CSkeleton.name, CSkeleton)

export {
    CButton,
    CIcon,
    CInput,
    CDropdown,
    CDropdownItem,
    CCarousel,
    CRadio,
    CRadioGroup,
    CLabel,
    CBreadcrumb,
    CBreadcrumbItem,
    CPagination,
    CTooltip,
    CTag,
    CSwitch,
    CTable,
    CModal,
    CSkeleton,
}