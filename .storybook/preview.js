import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/globals.css';
import '../src/styles/custom.less';

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      largeScreen: {
        name: '7520 x 1680',
        styles: {
          width: '7520px',
          height: '1680px',
        }
      },
    },
    // defaultViewport: 'largeScreen',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

