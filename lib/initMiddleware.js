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
    global.initMiddleware = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const setPrototypeOf = require('setprototypeof');
  module.exports = initMiddleware;
  function initMiddleware(app) {
    return function expressInit(req, res, next) {
      var _req$stream, _req$stream$session;
      if (app.enabled('x-powered-by')) res.setHeader('X-Powered-By', 'Express with http2-express-bridge');
      req.res = res;
      res.req = req;
      req.next = next;
      const alpnProtocol = req === null || req === void 0 ? void 0 : (_req$stream = req.stream) === null || _req$stream === void 0 ? void 0 : (_req$stream$session = _req$stream.session) === null || _req$stream$session === void 0 ? void 0 : _req$stream$session.alpnProtocol;

      //Checking alpnProtocol for http2
      if (alpnProtocol === 'h2' || alpnProtocol === 'h2c') {
        setPrototypeOf(req, app.http2Request);
        setPrototypeOf(res, app.http2Response);
      } else {
        setPrototypeOf(req, app.request);
        setPrototypeOf(res, app.response);
      }
      res.locals = res.locals || Object.create(null);
      next();
    };
  }
});