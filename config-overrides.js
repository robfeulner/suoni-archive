const path = require("path");

module.exports = function override(config) {
  // Change the location of the src folder
  config.resolve.alias.src = path.join(__dirname, "client");

  return config;
};
