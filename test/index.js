const obtenerUsuario = require('../index').obtenerDatosUsuario;
const expect = require('chai').expect;


var nock = require('nock');
var cbustamante777duoc = require('./respuestas/cbustamante777duoc');

describe('test de datos para diferentes usuario github',()=>{
    beforeEach(()=> {
        nock('https://api.github.com')
            .log(console.log)
            .get('/users/cbustamante777duoc')
            .reply(200,cbustamante777duoc)
    });

    it('Obtener datos del usuario "cbustamante777duoc"',()=>{
        return obtenerUsuario('cbustamante777duoc').then(
            respuesta =>{
                //probar el tipo de variable. tiene que ser objeto
                expect(typeof respuesta).to.equal('object');

                //comprobar el que usuario sea cbustamante777duoc
                expect(respuesta.login).to.equal('cbustamante777duoc');

                //comprobar el que la id sea un numero
               expect(typeof respuesta.id).to.equal('number');

               //seguido y seguido sean number
               expect(typeof respuesta.followers).to.equal('number');
               expect(typeof respuesta.following).to.equal('number');
               //respuesta.location == 'santiago'
               expect(respuesta.location).to.equal('santiago');

               //url sea string
               expect(typeof respuesta.url).to.equal('string');
               //name: 'Cbustamante777',
               expect(respuesta.name).to.equal('Cbustamante777');

            }
        )

    });
})
