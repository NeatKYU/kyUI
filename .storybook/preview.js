import { addParameters } from '@storybook/vue'
import { DocPage, DocsContainer } from '@storybook/addon-docs'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocPage
  }
})

import '../src/plugins/GlobalComponent';
import '../src/plugins/GlobalFont';
import '../src/fontIcon/index';
import './font.scss';