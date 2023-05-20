//* definir las tablas que van a crear en la base de datos

import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export const Hora = sequelize.define("horario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, //? definir si usar autoIncrement para todos los PK
  },
  horario: {
    type: DataTypes.STRING,
  },
});
