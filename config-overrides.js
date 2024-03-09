const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = function override(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@": resolve("src"),
    "@components": resolve("src/components"),
    "@lib": resolve("src/lib"),
  });
  return config;
};
