/**
 * Created by zsq on 18-10-24.
 */
'use strict';

module.exports = app => {
  if (app.config.elasticsearch.app) require('./lib/elasticsearch')(app);
};
