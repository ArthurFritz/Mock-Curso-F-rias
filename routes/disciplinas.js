var express = require('express');
var router = express.Router();

var mockInfo = [
    { id: 1, descricao: 'Angular', professores: [1, 2], dataInicio: "2018-01-22", dataTermino: "2018-02-02", segmento: "FRONTEND", urlLogo: null },
    { id: 2, descricao: 'Ionic', professores: [3, 4], dataInicio: "2018-01-22", dataTermino: "2018-02-02", segmento: "MOBILE", urlLogo: null },
    { id: 3, descricao: 'Java', professores: [5, 6], dataInicio: "2018-01-22", dataTermino: "2018-02-02", segmento: "BACKEND", urlLogo: null }
];

router.get('/', function (req, res) {
    //setTimeout((function() {res.send(mockInfo)}), 2000);
    res.send(mockInfo);
});

router.get('/:id', function (req, res) {
    var result = mockInfo.find(item => item.id == req.params.id);
    if (result) {
        res.send(result);
        return;
    }
    res.status(204);
});

router.delete('/:id', function (req, res) {
    var index = mockInfo.findIndex(item => item.id == req.params.id);
    if (index > -1) {
        mockInfo.splice(index, 1);
        res.send(200);
        return;
    }
    res.status(204);
});

router.post('/', function (req, res) {
    req.checkBody("descricao", "Descrição obrigatório").exists().notEmpty();
    req.checkBody("professores", "professores obrigatório").exists().notEmpty();
    req.checkBody("dataInicio", "Data início obrigatório").exists().notEmpty();
    req.checkBody("dataTermino", "Data término obrigatório").exists().notEmpty();
    req.checkBody("segmento", "Segmento tem que ser entre ['FRONTEND', 'MOBILE', 'BACKEND']").isIn(['FRONTEND', 'MOBILE', 'BACKEND']);
    var errors = req.validationErrors();
    if (errors.length > 0) {
        res.status(400).json(errors);
    } else {
        var id = mockInfo.length > 0 ? mockInfo[mockInfo.length - 1].id : 0;
        id++;
        var item = {
            id: id,
            descricao: req.body.descricao,
            professores: req.body.professores,
            dataInicio: req.body.dataInicio,
            dataTermino: req.body.dataTermino,
            segmento: req.body.segmento,
            urlLogo: req.body.urlLogo
        };
        mockInfo.push(item);
        res.status(200).json(item);
    }
});


router.put('/:id', function (req, res) {
    var index = mockInfo.findIndex(item => item.id == req.params.id);
    if (index > -1) {
        req.checkBody("descricao", "Descrição obrigatório").exists().notEmpty();
        req.checkBody("professores", "professores obrigatório").exists().notEmpty();
        req.checkBody("dataInicio", "Data início obrigatório").exists().notEmpty();
        req.checkBody("dataTermino", "Data término obrigatório").exists().notEmpty();
        req.checkBody("segmento", "Segmento tem que ser entre ['FRONTEND', 'MOBILE', 'BACKEND']").isIn(['FRONTEND', 'MOBILE', 'BACKEND']);
        var errors = req.validationErrors();
        if (errors.length > 0) {
            res.status(400).json(errors);
        } else {
            var item = mockInfo[index];
            var newItem = {
                id: item.id,
                descricao: req.body.descricao,
                professores: req.body.professores,
                dataInicio: req.body.dataInicio,
                dataTermino: req.body.dataTermino,
                segmento: req.body.segmento,
                urlLogo: req.body.urlLogo
            };
            mockInfo[index] = newItem;
            res.status(200).json(newItem);
        }
        return;
    }
    res.status(400).json({ message: "Disciplina não localizada" });
});

module.exports = router;