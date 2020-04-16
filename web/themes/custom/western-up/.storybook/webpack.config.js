const path = require('path');
const globImporter = require('node-sass-glob-importer');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = async ({ config }) => {

  config.resolve = { symlinks: false }
  config.watchOptions = {
    ignored: [
      /node_modules\/(?!(western-up-scss|western-up-twig)\/)/,
      /\(?!(western-up-scss|western-up-twig)([\\]+|\/)node_modules/
    ]
  }
  // Transpile western-up-twig because it includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(western-up-twig)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // Twig
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          twigOptions: {
            namespaces: {
              atoms: path.resolve(__dirname, '../node_modules/', 'western-up-twig/01-atoms'),
              molecules: path.resolve(
                __dirname,
                '../node_modules/',
                'western-up-twig/02-molecules',
              ),
              organisms: path.resolve(
                __dirname,
                '../node_modules/',
                'western-up-twig/03-organisms',
              ),
              templates: path.resolve(
                __dirname,
                '../node_modules/',
                'western-up-twig/04-templates',
              ),
            },
          },
        },
      },
    ],
  });

  // SCSS
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            importer: globImporter(),
          },
        },
      },
    ],
  });

  config.plugins.push(
    new _StyleLintPlugin({
      configFile: path.resolve(__dirname, '../', 'webpack/.stylelintrc'),
      context: path.resolve(__dirname, '../', 'components'),
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
  );

  // YAML
  config.module.rules.push({
    test: /\.ya?ml$/,
    loader: 'js-yaml-loader',
  });

  // JS
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    include: /node_modules\/western-/,
    loader: 'eslint-loader',
    options: {
      cache: true,
    },
  });

  return config;
};
