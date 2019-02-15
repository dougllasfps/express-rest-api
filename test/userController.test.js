const server = require('../src/index')
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use( chaiHttp )
chai.should()

describe(' Deve testar o registro de usuarios ', () => {

    it('Deve registrar um usuário', (done) => {

        const user = {
            nome: "Dougllas Sousa",
            email: "dougllasfps@gmail.com",
            senha: "123"
        }

        chai
            .request(server)
            .post('/api/users')
            .send(user)
            .end( (err, resp) => {
                resp.should.have.status(201)
                resp.body.should.have.property('nome')
                resp.body.should.have.property('email')
                done();
            })

    })
})