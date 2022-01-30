const res = require('express/lib/response');
const sql = require('../config/conexion')

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
      sql.query("SELECT negocio.id, negocio.nombre, negocio.descripcion, negocio.direccion, negocio.telefono, categoria.nombre AS categoria, subcategoria.nombre AS subcategoria, negocio.latitud, negocio.longitud, negocio.contacto FROM negocio, categoria, subcategoria WHERE negocio.id_categoria = categoria.id AND negocio.id_subcategoria = subcategoria.id", (error, res) => {
          if(error){
              console.log(error)
              return error
          }
          result(null, res)
      })
  }

  NegocioModel.getNegocioById = (id, result) => {
    sql.query("SELECT * FROM negocio WHERE id = ?", id, (error, res) => {
        if(error){
            console.log(error)
            return error
        }
        result(null, res)
    })
  }

  module.exports = NegocioModel