'use strict';

const mock = require('egg-mock');

describe('test/elasticsearch-new.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/elasticsearch-new-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, elasticsearchNew')
      .expect(200);
  });
});
