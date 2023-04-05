(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["http2"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("http2"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.http2);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_http) {
  "use strict";

  const createH2ExpressBridge = require('./bridge.js');
  module.exports = exports = createH2ExpressBridge;
  exports.default = createH2ExpressBridge;
});