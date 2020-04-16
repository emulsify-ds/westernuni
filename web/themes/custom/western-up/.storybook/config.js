import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Theming
import emulsifyTheme from './emulsifyTheme';

addParameters({
  options: {
    theme: emulsifyTheme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// GLOBAL CSS
import '../components/style.scss';

addDecorator(withA11y);

const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');
const twigBEM = require('bem-twig-extension');
const twigAddAttributes = require('add-attributes-twig-extension');

Twig.cache();

twigDrupal(Twig);
twigBEM(Twig);
twigAddAttributes(Twig);

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

// automatically import all files ending in *.stories.js
configure(require.context('western-up-twig', true, /\.stories\.js$/), module);
