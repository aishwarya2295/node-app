var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('should respond with hello aishwarya', function(done) {
    //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('hello aishwarya', done);
    });
});