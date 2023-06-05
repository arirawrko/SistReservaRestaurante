//* definir las tablas que van a crear en la base de datos

import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export const ReservaDetalle = sequelize.define(
  "reserva_detalle",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

//* relaciones

// reservadetalle tiene un horario
