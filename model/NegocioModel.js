const res = require('express/lib/response');
const sql = require('../config/conexion')
const query_helpers = require ('../utils/query-helpers')
const NegocioModel = function(Negocio) {
    this.nombre = negocio.nombre;
    this.descripcion = negocio.descripcion;
    this.direccion = negocio.direccion;
    this.telefono = negocio.telefono;
    this.id_categoria = negocio.id_categoria;
    this.id_subcategoria = negocio.id_subcategoria;
    this.latitud = negocio.latitud;
    this.longitud = negocio.longitud;
    this.contacto = negocio.contacto;

  };

  NegocioModel.create = (newNegocio, result) => {
      const values = Object.values(newNegocio.body)
      sql.query("INSERT INTO negocio (nombre, descripcion, direccion, telefono, id_categoria, id_subcategoria, latitud, longitud, contacto)" +
                " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", values, (error, res) => {
                    if(error){
                        console.log(error)
                        return error
                    }

                    result(null, { id: res.insertId, ...newNegocio })
                })
  }

  NegocioModel.getAll = (result) => {
      sql.query(query_helpers.get_all_negocios, (error, res) => {
          if(error){
              console.log(error)
              return error
          }
          result(null, res)
      })
  }

  NegocioModel.getNegocioById = (id, result) => {
    sql.query(query_helpers.get_negocio_by_id, id, (error, res) => {
        if(error){
            console.log(error)
            return error
        }
        result(null, res)
    })
  }

  NegocioModel.getAllCategories = (result) => {
      sql.query("SELECT * FROM categoria", (error, res) => {
        if(error){
            console.log(error)
            return error
        }
        result(null, res)
      })
  }

  NegocioModel.getAllSubCategories = (result) => {
    sql.query("SELECT * FROM subcategoria", (error, res) => {
      if(error){
          console.log(error)
          return error
      }
      result(null, res)
    })
}

  module.exports = NegocioModel