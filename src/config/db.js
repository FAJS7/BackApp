const mysql = require("mysql2/promise");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log("MariaDB conectado");
    return connection;
  } catch (error) {
    console.error("Error al conectar a MariaDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
