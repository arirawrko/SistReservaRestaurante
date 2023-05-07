//* conexión a la base de datos con sequelize

import Sequelize from "sequelize";

// parámetros de la BD a la que se va a conectar la aplicación
export const sequelize = new Sequelize(
  "bd_SistReservaRestaurante",
  "postgres",
  "4nt1Postgres",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
