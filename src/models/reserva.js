//* definir las tablas que van a crear en la base de datos

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Reserva = sequelize.define(
  "reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    hora: {
      type: DataTypes.DATE,
    },
    cantidadPersonas: {
      type: DataTypes.INTEGER,
      field: "cantidad_personas",
    },
  },
  {
    freezeTableName: true,
  },
  {
    timestamps: false,
  }
);
