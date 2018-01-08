var express = require('express');
var router = express.Router();


var user = [  
	{id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456},
    {id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456},
    {id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456},
    {id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456},
    {id: 5, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456},
    {id: 6, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456},
    {id: 7, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"ALUNO", urlFoto: null, senha:123456}
];

var mockInfo = [
		{
			usuario : user[0],
			presenca : ["2017-01-22","2017-01-23","2017-01-24","2017-01-25","2017-01-26"],
			frequencia: 50
		},
		{
			usuario : user[1],
			presenca : ["2017-01-22","2017-01-23","2017-01-24"],
			frequencia: 30
		},
		{
			usuario : user[2],
			presenca : ["2017-01-22","2017-01-23","2017-01-24","2017-01-25"],
			frequencia: 40
		},
		{
			usuario : user[3],
			presenca : ["2017-01-22","2017-01-23","2017-01-24","2017-01-25","2017-01-26","2017-01-29",],
			frequencia: 60
		},
		{
			usuario : user[4],
			presenca : ["2017-01-22"],
			frequencia: 10
		},
		{
			usuario : user[5],
			presenca : ["2017-01-22","2017-01-23","2017-01-24","2017-01-25","2017-01-26",,"2017-01-29",,"2017-01-30","2017-01-31"],
			frequencia: 80
		}
];

router.get('/:disciplina', function(req, res) {
    var result = JSON.parse(JSON.stringify(mockInfo));
    if(req.params.disciplina > 1){
		var remover = req.params.disciplina - 1;
		for(var a=0; a< remover && result.length > 0; a++){
			if(result.length > 0 ){
				result.splice(-1,1)
			}
		}
	}
    res.send(result);
});

module.exports = router;
