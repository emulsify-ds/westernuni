module.exports = (api) => {
  api.cache(true);

  const presets = [
    'babel-preset-gatsby',
    'minify',
  ];

  const comments = false;

  return { presets, comments };
};
