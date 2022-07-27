export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import Vue from 'vue';
import { CButton } from '../src/components/button/index';
import '../src/scss/_main.scss';

Vue.component(CButton.name, CButton);