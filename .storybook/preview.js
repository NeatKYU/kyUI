import { addParameters } from '@storybook/vue'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'

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
    page: DocsPage
  }
})

import '../src/plugins/GlobalComponent';
import '../src/plugins/GlobalFont';
import '../src/scss/_main.scss';
import '../src/fontIcon/index';