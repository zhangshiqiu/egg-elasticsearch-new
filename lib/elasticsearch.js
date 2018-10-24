/**
 * Created by zsq on 18-10-24.
 */
'use strict';

const assert = require('assert');
const elasticsearch = require('elasticsearch');

module.exports = app => {
  app.addSingleton('elasticsearch', createClient);
};

function createClient(config, app) {
  let { host, log } = config;
  assert(host, '[egg-elasticsearch] host is required on config');
  if (!log) log = 'error';
  const client = new elasticsearch.Client({ host, log });
  app.beforeStart(async () => {
    app.coreLogger.info('[egg-elasticsearch] status OK');
  });
  return client;

}
