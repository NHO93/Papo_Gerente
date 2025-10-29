// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Verifique se esta linha está correta!
    plugins: ['react-native-reanimated/plugin'],
  };
};