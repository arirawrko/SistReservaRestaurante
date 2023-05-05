import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export const Mesa = sequelize.define(
  "mesa",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    posicion_x: {
      type: DataTypes.INTEGER,
    },
    posicion_y: {
      type: DataTypes.INTEGER,
    },
    planta: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    capacidad: {
      type: DataTypes.INTEGER,
    },
    reservado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);
