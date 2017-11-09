const unirest = require('unirest');
const should = require('should');

describe('GET request', () => {
  it('should retrieve films and parse data', done => {
    unirest.get('https://swapi.co/api/films').set('Accept', 'application/json').end(response => {
      should(response.status).equal(200);
      should(response.body).have.type('object');
      should(response.body).have.property('results').with.lengthOf(7);
      done();
    });
  });
});
