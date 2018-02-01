var express = require('express');
var router = express.Router();


var mockInfo = [
    {id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil:"ALUNO", urlFoto: null},
    {id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil:"ALUNO", urlFoto: null},
    {id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil:"ALUNO", urlFoto: null},
    {id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil:"ALUNO", urlFoto: null},
    {id: 5, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"ALUNO", urlFoto: null},
];

router.post('/', function(req, res) {
    req.checkBody("usuario", "Usuário obrigatório").exists().notEmpty();
    req.checkBody("senha", "Perfil obrigatório").exists().notEmpty();
    var errors = req.validationErrors();
    if (errors.length > 0) {
      res.status(400).json(errors);
    } else {     
     var rand = Math.floor((Math.random() * 5) + 1)-1;
     var item = { access_token: "6as51da6s5d1-6a5s1d65as1d-6a5s1d65as1d" , usuario: mockInfo[rand]};
     res.status(200).json(item); 
    }
});

module.exports = router;
