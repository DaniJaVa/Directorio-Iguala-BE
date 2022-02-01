const mysql = require('mysql');
require('dotenv').config()

/*const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'directorio_iguala',
    port: '33066'
});*/

const conexion = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
})

conexion.connect((err) => {
    if(err){
        console.log('Error en conexión DB: ', err);
        return err;
    }

    console.log('Conexión establecida');
})

module.exports = conexion;