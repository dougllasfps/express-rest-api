const server = require('../src/index')
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use( chaiHttp )
chai.should()

describe('deve testar se a app esta subindo', () => {
    it('deve testar o server', (done) => {
        chai
            .request(server)
            .get('/')
            .end( (err, res) => {
                res.should.have.status(200);
                done();
            })
    })
} )
