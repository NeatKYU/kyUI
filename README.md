# KyUI

## Install
```
npm install vue-kyui
```

### Useage
```
import Vue from 'vue'
import kyui from 'vue-kyui'
import 'vue-kyui/dist/kyui.scss';

Vue.use(kyui)
```

### Use Icon
```
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
```
##### and make file
```
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default library.add(
    fas, far, fab
)
```
##### and add app.vue
```
<script>
    import './fontIcon/index'
</script>
```

## 스토리북 데모 페이지
https://62f34ed2f44bd94b7764438f-aivydkxbio.chromatic.com/?path=/docs/button--docs