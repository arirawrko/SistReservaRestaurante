//conexión a la base de datos

import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "bd_SistReservaRestaurante",
  "postgres",
  "4nt1Postgres",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
