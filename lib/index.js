const vm = require("vm");
const { deepMerge } = require("hexo-util");
const validateConfig = require("hexo/lib/hexo/validate_config");

hexo.extend.filter.register("after_init", function () {
  require("dotenv").config();
  const evalConfig = JSON.stringify(this.config, (key, value) => {
    if (typeof value === "string") {
      const correctValue = value.replace(/`/g, "\\`");
      return vm.runInNewContext(`\`${correctValue}\``, {
        hexo: this,
        env: process.env,
      });
    }
    return value;
  });
  this.config = deepMerge(this.config, JSON.parse(evalConfig));
  validateConfig(this);
});
