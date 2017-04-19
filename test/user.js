let mongoose = require("mongoose");
let user = require("../models/user");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();

chai.use(chaiHttp);

describe ('User', () => {

  describe ('/GET logout', () => {
    it ('logout success', (done) => {
      chai.request(server)
        .get('/account/logout')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.error.should.be.equal(false);
          done();
        })
    })
  })

})
