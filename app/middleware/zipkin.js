'use strict';

const { KoaInstrumentation } = require('zipkin-instrumentation-koa');

module.exports = (options, app) => {
  return KoaInstrumentation.middleware(app.zipkin);
};
