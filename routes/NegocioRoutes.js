module.exports = app => {
    const negocios = require('../controller/NegocioController.js')

    var router = require('express').Router();

    router.post("/negocios/add", negocios.create);

    router.get("/negocios", negocios.findAll);

    router.get("/negocios/:id", negocios.findById);

    router.get("/categories", negocios.findAllCategories);

    router.get("/subcategories", negocios.findAllSubCategories);

    router.get("/category/:id", negocios.findCategoryById);

    router.get("/negocios/category/:id", negocios.findAllNegociosByCategory);

    app.use('/api/', router)
}