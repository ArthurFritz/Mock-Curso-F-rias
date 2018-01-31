var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
    req.checkHeaders("Authorization", "Authorization inválido Basic ").exists().equals("Basic YW5ndWxhcjphbHVub3M=");
    req.checkBody("username", "username obrigatório").exists().notEmpty();
    req.checkBody("password", "password obrigatório").exists().notEmpty();
    req.checkBody("grant_type", "Somente type password").equals("password");
    var errors = req.validationErrors();
    if (errors.length > 0) {
      res.status(400).json(errors);
    } else {     
     var item = { "access_token": "b0f0fc12-210b-4651-b237-a5087b1e1f7a",
                  "token_type": "bearer",
                  "expires_in": 43084,
                  "scope": "read write"
                };
     res.status(200).json(item); 
    }
});

module.exports = router;
