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
    global.http2Request = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const Http2ServerRequest = require('http2').Http2ServerRequest;
  const mixin = require('merge-descriptors');
  module.exports = createHttp2Request;
  function createHttp2Request(request) {
    const http2Request = Object.create(Http2ServerRequest.prototype);
    mixin(http2Request, request, false);
    const requestHostName = Object.getOwnPropertyDescriptor(http2Request, 'hostname').get;
    Object.defineProperty(http2Request, 'hostname', {
      get: function () {
        if (!this.headers['host'] && this.authority) {
          this.headers['host'] = this.authority;
        }
        return requestHostName.call(this);
      }
    });
    return http2Request;
  }
});