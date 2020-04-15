## About this Repo

This is the Drupal theme for the fictitious Western University of Pennsylvania. It actually contains no component markup or styles, but instead uses the _organization's_ [components](https://github.com/emulsify-ds/western-up-twig) and [styles](https://github.com/emulsify-ds/western-up-scss) out of the box, which are hosted in their own repositories so that any property under the Western University of Pennsylvania organization can use them.

## Development Requirements

This project utilizes Yarn Workspaces in order to facilitate active development across three repositories at once. So, in order to actively develop, you'll need to have [Yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

## Quick setup

- `cd web/themes/custom/western-up`<br >
  (Moves into the theme directory.)
- `yarn setup`<br >
  (Clones the twig and styles repos, installs all dependencies, and sets up yarn workspaces to enable easy local development.)
- `yarn develop`<br >
  (Starts the watch process, as well as Storybook where you can see your changes live in the browser.)

## View the Live Component Library

The Component Library (Storybook instance) for the fictitious Western University of Pennsylvania is published to GitHub pages at the following URL:<br >
https://emulsify-ds.github.io/western-up/?path=/story/pages-landing-pages--home
