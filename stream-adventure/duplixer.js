var duplexer2 = require("duplexer2");
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  const spw = spawn(cmd, args);
  return duplexer2(spw.stdout, spw.stdin);
};
