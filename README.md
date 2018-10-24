# egg-elasticsearch-new

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-elasticsearch-new.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-elasticsearch-new
[travis-image]: https://img.shields.io/travis/eggjs/egg-elasticsearch-new.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-elasticsearch-new
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-elasticsearch-new.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-elasticsearch-new?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-elasticsearch-new.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-elasticsearch-new
[snyk-image]: https://snyk.io/test/npm/egg-elasticsearch-new/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-elasticsearch-new
[download-image]: https://img.shields.io/npm/dm/egg-elasticsearch-new.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-elasticsearch-new

<!--
Description here.
-->

## Install

```bash
$ npm i egg-elasticsearch-new --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.elasticsearch = {
  enable: true,
  package: 'egg-elasticsearch-new',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.elasticsearch = {
  client: {
    host: "127.0.0.1:9200",
    log: "error"
  }
 // clients: {
  //  test: {
  //    host: "127.0.0.1:9200",
  //    log: "error"
  //  }
  }

};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
