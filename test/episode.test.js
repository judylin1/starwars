const unirest = require('unirest');
const should = require('should');

describe('GET request', () => {
  it('should retrieve episode and parse data', done => {
    unirest.get('https://swapi.co/api/films/1/').set('Accept', 'application/json').end(response => {
      should(response.status).equal(200);
      should(response.body).have.type('object');
      should(response.body).have.property('title', 'A New Hope');
      done();
    });
  });
});
