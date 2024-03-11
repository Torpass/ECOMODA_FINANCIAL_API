import { Sequelize } from "sequelize";

const Connect = process.env['MYSQL_NAME'];
const username = process.env['MYSQL_USER'];
const password  = process.env['MYSQL_PASSWORD'];
const host = process.env['MYSQL_HOST'];

if (!Connect || !username || !password || !host) {
    throw new Error('Environment variables MYSQL_NAME, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_HOST must be defined');
}


const sequelize = new Sequelize(Connect, username, password, {host: host, dialect:'mysql'});

const dbConnectMySql = async () => {
    try{
        await sequelize.authenticate();
        console.log('conexion a mySQL exitosa');
    }catch(e){
        console.log('Error en la conexion a la base de datos:')
        console.log(e);
    }
};

export {sequelize, dbConnectMySql}
