module.exports = app => {
    const negocios = require('../controller/NegocioController.js')

    var router = require('express').Router();

    router.post("/add", negocios.create);

    router.get("/", negocios.findAll);

    router.get("/:id", negocios.findById);

    app.use('/api/negocios', router)
}