module.exports = app => {
    const negocios = require('../controller/NegocioController.js')

    var router = require('express').Router();

    router.post("/negocios/add", negocios.create);

    router.get("/negocios", negocios.findAll);

    router.get("/negocios/:id", negocios.findById);

    router.get("/categories", negocios.findAllCategories);

    router.get("/subcategories", negocios.findAllSubCategories);

    router.get("/categories/:id", negocios.findCategoryById);

    router.get("/negociosbycat/:id", negocios.findAllNegociosByCategory);

    app.use('/api/directorio-iguala', router)
}