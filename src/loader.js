'use strict';

const { HttpLogger } = require('zipkin-transport-http');
const { Tracer, BatchRecorder, jsonEncoder: { JSON_V2 } } = require('zipkin');
const CLSContext = require('zipkin-context-cls');

module.exports = app => {
  const defaultConfig = {
    urlOfZipkin: 'http://localhost:9411',
    nameOfCurrentService: 'baseService',
  };
  const config = Object.assign(defaultConfig, app.config.zipkin);
  const recorder = new BatchRecorder({
    logger: new HttpLogger({
      endpoint: `${config.baseUrl}/api/v2/spans`,
      jsonEncoder: JSON_V2,
    }),
  });

  const ctxImpl = new CLSContext('zipkin');
  const tracer = new Tracer({ ctxImpl, recorder, localServiceName: config.serviceName }); // configure your tracer properly here

  app.zipkin = { tracer, serviceName: config.serviceName };
};
