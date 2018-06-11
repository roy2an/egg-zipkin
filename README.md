# egg-zipkin
## 依赖说明

### 依赖的插件
```bash
$ npm i zipkin --save
$ npm i zipkin-instrumentation-koa --save

tracer.recordAnnotation(new zipkin.Annotation.LocalAddr({ port }));
change to
tracer.recordLocalAddr({ port });

$ npm i zipkin-transport-http --save
$ npm i zipkin-context-cls --save

docker run -d -p 9411:9411 openzipkin/zipkin
```

## 开启插件

```js
// config/plugin.js
exports.zipkin = {
  enable: true,
  package: 'egg-zipkin',
};
```

## 详细配置

```js
// {app_root}/config/config.default.js
exports.zipkin = {
  urlOfZipkin: 'http://localhost:9411',
  nameOfCurrentService: 'service1',
};
```
