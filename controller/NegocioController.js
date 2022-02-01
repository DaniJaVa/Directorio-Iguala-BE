const Negocio = require('../model/NegocioModel.js');

exports.create = ((req, res) => {
// Validate request
if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  res.json({
      code: 270,
      message: "Probando probando 1234",
      function: "create"
  })
})

exports.findAll = ((req, res) => {
  Negocio.getAll((err, data) => {
      if(err){
          res.status(500).send({
              message: err.message || "Error en la base"
          })
      } else res.send(data);
  })
})

exports.findById = ((req, res) => {
  Negocio.getNegocioById(req.params.id, (err, data) => {
    if(!req.body) {
      res.status(500).send({
        message: err.message || "no sirve pues"
      })
    } else res.send(data)
  })
})

exports.findAllCategories = ((req, res) => {
  Negocio.getAllCategories((err, data) => {
    if(err){
      res.status(500).send({
          message: err.message || "Error en la base"
      })
  } else res.send(data);
  })
})

exports.findAllSubCategories = ((req, res) => {
  Negocio.getAllSubCategories((err, data) => {
    if(err){
      res.status(500).send({
        message: err.message || "Erro en la base"
      })
    } else res.send(data)
  })
})
