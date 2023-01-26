import { App } from 'vue';

import { CButton } from './components/button/index'
import { CIcon } from './components/icon/index'
import { CInput } from './components/input/index'
import { CDropdown, CDropdownItem } from './components/dropdown/index'
import { CCarousel } from './components/carousel/index'
import { CRadio, CRadioGroup } from './components/radio/index'
import { CLabel } from './components/label/index'
import { CBreadcrumb, CBreadcrumbItem } from './components/breadcrumb/index'
import { CPagination } from './components/pagination/index'
import { CTooltip } from './components/tootip/index'
import { CTag } from './components/tag/index'
import { CSwitch } from './components/switch/index'
import { CTable } from './components/table/index'
import { CModal} from './components/modal/index'

const components = [
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
]

const kyui = {
    install(Vue: any) {
        components.map(component => {
            Vue.component(component.name, component)
        })
    }
};

export const kyui3 = {
    install(app: App) {
        components.map(component => {
            app.component(component.name, component)
        })
    }
}

export default kyui;