// https://github.com/timarney/react-app-rewired
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log(config);
  // config.exports.experiments.topLevelAwait = true;

  return config;
};
