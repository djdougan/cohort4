/*
    For more information on how customize-cra works check out its official github repo at:
    https://github.com/arackaf/customize-cra
  */

const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(
  /*
    For more information on addBabelPlugins check out its official github repo at:
    https://github.com/arackaf/customize-cra#addbabelpluginsplugins
  */

  ...addBabelPlugins([
    "module-resolver",
    {
      root: ["../../cohort4"],
      alias: {
        account: "../03-objects/src/account/js/Account.js",
        city: "../03-objects/src/city/js/City.js",
        community: "../03-objects/src/city/js/Community.js",
      },
    },
  ])
);