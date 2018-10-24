/**
 * Created by zsq on 18-10-24.
 */
'use strict';

module.exports = agent => {
  if (agent.config.elasticsearch.agent) require('./lib/elasticsearch')(agent);
};
