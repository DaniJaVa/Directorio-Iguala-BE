const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
const PORT = process.env.PORT || 3050

app.use(cors());
app.get('/', (req, res) => {
        res.json({
            code: 200,
            message: "wenas tardes",
        })
    })

require("./routes/NegocioRoutes")(app);

app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto " + PORT);
}) 

/**
 *  app.post('/negocios/add', (req, res) => {
    sql = "INSERT INTO negocio (nombre, descripcion, direccion, telefono, id_categoria, id_subcategoria, latitud, longitud, contacto)" 
    sql += "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    const values = Object.values(req.body)
    db.query(sql, values, (error, data) => {
        if (error) {
            console.log(error)
            return error
        }
        res.json({
            code: 200,
            message: "success",
            data
        })
    })
})

app.put('/negocios/edit/:id', (req, res) => {
    const id = Object.values(req.params.id)
    const values = Object.values(req.body)
    sql = "UPDATE negocio SET nombre = ?, descripcion = ?, direccion = ?, telefono = ?, id_categoria = ?, id_subcategoria = ?, latitud = ?, longitud = ?, contacto = ? WHERE id = " + id

    db.query(sql, values, (error, data) => {
        if (error) {
            console.log(error)
            return error
        }
        res.json({
            code: 200,
            message: "success",
            data
        })
    })
})

app.delete('/negocios/delete/:id', (req, res) => {
    const id = Object.values(req.params.id)
    sql = "DELETE FROM negocio WHERE id = " + id

    db.query(sql, (error, data) => {
        if (error) {
            console.log(error)
            return error
        }
        res.json({
            code: 200,
            message: "success",
            data
        })
    })
})
 */
