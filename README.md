# KyUI for Vue2.x
ui 라이브러리를 만들어보고 싶어서 만드는 중입니다.

## Install
```
npm install vue-kyui
```

### Useage
```
import Vue from 'vue'
import kyui from 'vue-kyui'

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
https://master--62f34ed2f44bd94b7764438f.chromatic.com/