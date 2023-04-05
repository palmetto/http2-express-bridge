(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.util = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const isStringArray = arr => {
    if (Array.isArray(arr)) {
      arr.forEach(item => {
        if (typeof item !== 'string') {
          return false;
        }
      });
      return true;
    }
    return false;
  };
  module.exports = {
    isStringArray
  };
});