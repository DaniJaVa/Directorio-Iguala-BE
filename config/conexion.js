const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'directorio_iguala',
    port: '3307'
});

conexion.connect((err) => {
    if(err){
        console.log('Error en conexión DB: ', err);
        return err;
    }

    console.log('Conexión establecida');
})

module.exports = conexion;